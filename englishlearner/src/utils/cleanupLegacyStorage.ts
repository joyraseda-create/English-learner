/**
 * 清理已删除功能在 localStorage 中残留的数据
 *
 * 在 App 启动时调用一次，幂等可重入。
 * 每次删除某个旧功能时，往 LEGACY_KEYS 数组里加一项即可。
 */

const LEGACY_KEYS: string[] = [
  // 参考书籍（PDF 阅读进度）：功能已在 2026-09 删除
  'el-grammar-pdf-progress',
]

/**
 * 返回本次清理掉的键数量，方便调试。
 */
export function cleanupLegacyStorage(): number {
  if (typeof window === 'undefined' || !window.localStorage) return 0

  let removed = 0
  for (const key of LEGACY_KEYS) {
    try {
      if (window.localStorage.getItem(key) !== null) {
        window.localStorage.removeItem(key)
        removed++
      }
    } catch {
      // 隐私模式 / quota 异常时静默忽略
    }
  }
  return removed
}