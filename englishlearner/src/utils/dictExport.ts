import type { Dictionary } from '@/typings'
import { saveAs } from 'file-saver'
import * as XLSX from 'xlsx'
import { wordListFetcher } from './wordListFetcher'

function formatTimestamp(): string {
  const d = new Date()
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}_${pad(d.getHours())}-${pad(d.getMinutes())}-${pad(d.getSeconds())}`
}

function wordsToRows(words: Array<{ name: string; trans: string[]; usphone: string; ukphone: string }>) {
  return words.map((w, i) => ({
    序号: i + 1,
    单词: w.name,
    释义: w.trans.join('；'),
    美音音标: w.usphone || '',
    英音音标: w.ukphone || '',
  }))
}

function sanitizeSheetName(name: string): string {
  // Excel sheet names: max 31 chars, no special chars
  let s = name.replace(/[\\/?*[\]:]/g, '').slice(0, 31)
  if (!s) s = 'Sheet'
  return s
}

function ensureUniqueSheetName(name: string, existing: Set<string>): string {
  let s = sanitizeSheetName(name)
  if (!existing.has(s)) {
    existing.add(s)
    return s
  }
  for (let i = 2; ; i++) {
    const candidate = sanitizeSheetName(`${name}_${i}`)
    if (!existing.has(candidate)) {
      existing.add(candidate)
      return candidate
    }
  }
}

/**
 * 导出单个词库为 Excel 文件
 */
export async function exportDictionary(dict: Dictionary): Promise<void> {
  const words = await wordListFetcher(dict.url)
  const rows = wordsToRows(words)
  const worksheet = XLSX.utils.json_to_sheet(rows)
  worksheet['!cols'] = [{ wch: 6 }, { wch: 30 }, { wch: 50 }, { wch: 12 }, { wch: 12 }]
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, sanitizeSheetName(dict.name))
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })
  const blob = new Blob([excelBuffer], { type: 'application/octet-stream' })
  saveAs(blob, `${dict.name}_${formatTimestamp()}.xlsx`)
}

/**
 * 导出所有词库为单个 Excel 文件（多 sheet）
 */
export async function exportAllDictionaries(
  dicts: Dictionary[],
  onProgress?: (current: number, total: number, name: string) => void,
): Promise<void> {
  const workbook = XLSX.utils.book_new()
  const usedNames = new Set<string>()

  for (let i = 0; i < dicts.length; i++) {
    const dict = dicts[i]
    onProgress?.(i + 1, dicts.length, dict.name)
    try {
      const words = await wordListFetcher(dict.url)
      const rows = wordsToRows(words)
      const worksheet = XLSX.utils.json_to_sheet(rows)
      worksheet['!cols'] = [{ wch: 6 }, { wch: 30 }, { wch: 50 }, { wch: 12 }, { wch: 12 }]
      const sheetName = ensureUniqueSheetName(dict.name, usedNames)
      XLSX.utils.book_append_sheet(workbook, worksheet, sheetName)
    } catch {
      // skip failed dictionary
    }
  }

  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })
  const blob = new Blob([excelBuffer], { type: 'application/octet-stream' })
  saveAs(blob, `English-Learner-All-Dictionaries_${formatTimestamp()}.xlsx`)
}
