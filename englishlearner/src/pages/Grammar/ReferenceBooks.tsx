import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import IconUpload from '~icons/tabler/upload'
import IconTrash from '~icons/tabler/trash'
import IconFile from '~icons/tabler/file-text'
import IconBook from '~icons/tabler/book'
import IconZoomIn from '~icons/tabler/zoom-in'
import IconZoomOut from '~icons/tabler/zoom-out'
import IconZoomReset from '~icons/tabler/zoom-reset'
import IconMaximize from '~icons/tabler/maximize'
import IconAlertCircle from '~icons/tabler/alert-circle'
import { type PdfFile, addPdf, deletePdf, getAllPdfs } from './pdfStore'
import { levelColors } from './grammarData'
import { getPdfProgress, savePdfProgress } from './grammarProgress'

type BookInfo = {
  name: string
  description: string
  level: string
}

const builtInBooks: BookInfo[] = [
  { name: '剑桥初级英语语法.pdf', description: 'Essential Grammar in Use — 墨菲著', level: '初级' },
  { name: '剑桥中级英语语法.pdf', description: 'English Grammar in Use 第4版中文版 — Raymond Murphy 著', level: '中级' },
  { name: '剑桥高级英语语法.pdf', description: 'Advanced Grammar in Use — Martin Hewings 著', level: '高级' },
  { name: '薄冰英语语法金版.pdf', description: '薄冰 何政安 编著 — 综合语法参考', level: '综合' },
  { name: '薄冰高级英语语法.pdf', description: '薄冰主编 楼光庆 何政安编著 — 2010年新版', level: '高级' },
  { name: '新东方英语语法新思维.pdf', description: '张满胜著 — 初级+中级+高级教程套装', level: '全套' },
]

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function getPdfUrl(name: string): string {
  const prefix = REACT_APP_DEPLOY_ENV === 'pages' ? '/english-learner' : ''
  return `${prefix}/pdfs/${encodeURIComponent(name)}`
}

const STORAGE_KEY = 'grammar-sidebar-width'
const ZOOM_KEY = 'grammar-pdf-zoom'
const DEFAULT_WIDTH = 224
const MIN_WIDTH = 180
const MAX_WIDTH = 500
const MIN_ZOOM = 25
const MAX_ZOOM = 400
const ZOOM_STEP = 25
const MAX_UPLOAD_SIZE = 100 * 1024 * 1024

export default function ReferenceBooks() {
  const [uploadedPdfs, setUploadedPdfs] = useState<PdfFile[]>([])
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null)
  const [selectedName, setSelectedName] = useState<string>('')
  const [pdfError, setPdfError] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageInput, setPageInput] = useState<string>('')
  const [sidebarWidth, setSidebarWidth] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      const n = stored ? Number(stored) : DEFAULT_WIDTH
      return Number.isFinite(n) ? n : DEFAULT_WIDTH
    } catch { return DEFAULT_WIDTH }
  })
  const [zoom, setZoom] = useState(() => {
    try {
      const stored = localStorage.getItem(ZOOM_KEY)
      const n = stored ? Number(stored) : 100
      return Number.isFinite(n) ? n : 100
    } catch { return 100 }
  })

  const containerRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)
  const blobUrlRef = useRef<string | null>(null)
  const sidebarWidthRef = useRef(sidebarWidth)

  const displayUrl = useMemo(() => {
    if (!selectedUrl) return null
    const params: string[] = []
    if (zoom === 0) {
      params.push('view=FitH')
    } else {
      params.push(`zoom=${zoom}`)
    }
    if (currentPage > 0) {
      params.push(`page=${currentPage}`)
    }
    return `${selectedUrl}#${params.join('&')}`
  }, [selectedUrl, zoom, currentPage])

  const loadPdfs = useCallback(async () => {
    const all = await getAllPdfs()
    all.sort((a, b) => b.addedAt - a.addedAt)
    setUploadedPdfs(all)
  }, [])

  const revokeBlob = useCallback(() => {
    if (blobUrlRef.current) {
      URL.revokeObjectURL(blobUrlRef.current)
      blobUrlRef.current = null
    }
  }, [])

  useEffect(() => {
    loadPdfs()
    return () => revokeBlob()
  }, [loadPdfs, revokeBlob])

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    setUploadError(null)
    const errors: string[] = []
    for (const file of Array.from(files)) {
      if (file.type !== 'application/pdf') {
        errors.push(`${file.name} 不是 PDF 文件`)
        continue
      }
      if (file.size > MAX_UPLOAD_SIZE) {
        errors.push(`${file.name} 超过 100MB 大小限制`)
        continue
      }
      try {
        await addPdf(file)
      } catch (err) {
        errors.push(`${file.name} 上传失败：${err instanceof Error ? err.message : String(err)}`)
      }
    }
    if (errors.length > 0) {
      setUploadError(errors.join('\n'))
    }
    await loadPdfs()
    e.target.value = ''
  }

  const selectBuiltIn = (book: BookInfo) => {
    revokeBlob()
    setPdfError(false)
    const saved = getPdfProgress(book.name)
    setCurrentPage(saved?.page || 1)
    setPageInput(String(saved?.page || 1))
    setSelectedUrl(getPdfUrl(book.name))
    setSelectedName(book.name)
  }

  const selectUploaded = (pdf: PdfFile) => {
    revokeBlob()
    setPdfError(false)
    const url = URL.createObjectURL(pdf.blob)
    blobUrlRef.current = url
    const saved = getPdfProgress(pdf.name)
    setCurrentPage(saved?.page || 1)
    setPageInput(String(saved?.page || 1))
    setSelectedUrl(url)
    setSelectedName(pdf.name)
  }

  const handleDelete = async (id: string, name: string) => {
    if (!window.confirm(`确定要删除 "${name}" 吗？`)) return
    await deletePdf(id)
    await loadPdfs()
    if (selectedName === name) {
      revokeBlob()
      setSelectedUrl(null)
      setSelectedName('')
      setCurrentPage(1)
      setPageInput('')
      setPdfError(false)
    }
  }

  const zoomIn = () => setZoom((z) => Math.min(MAX_ZOOM, z + ZOOM_STEP))
  const zoomOut = () => setZoom((z) => Math.max(MIN_ZOOM, z - ZOOM_STEP))
  const zoomReset = () => setZoom(100)
  const zoomFitWidth = () => setZoom(0)

  useEffect(() => {
    try { localStorage.setItem(ZOOM_KEY, String(zoom)) } catch { /* ignore */ }
  }, [zoom])

  useEffect(() => {
    sidebarWidthRef.current = sidebarWidth
  }, [sidebarWidth])

  const startDrag = (e: React.MouseEvent) => {
    e.preventDefault()
    draggingRef.current = true
    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none'
  }

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!draggingRef.current || !containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const newWidth = e.clientX - rect.left
      const clamped = Math.max(MIN_WIDTH, Math.min(MAX_WIDTH, newWidth))
      setSidebarWidth(clamped)
    }
    const onMouseUp = () => {
      if (draggingRef.current) {
        draggingRef.current = false
        document.body.style.cursor = ''
        document.body.style.userSelect = ''
        try { localStorage.setItem(STORAGE_KEY, String(sidebarWidthRef.current)) } catch { /* ignore */ }
      }
    }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  const zoomLabel = zoom === 0 ? '适合宽度' : `${zoom}%`

  return (
    <div ref={containerRef} className="flex h-full min-h-0">
      {/* Book List */}
      <div className="customized-scrollbar flex flex-shrink-0 flex-col overflow-y-auto" style={{ width: sidebarWidth }}>
        {/* Built-in Books */}
        <div className="mb-2 flex items-center gap-2 px-2">
          <IconBook className="text-lg text-indigo-500" />
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">内置参考书</span>
        </div>
        <div className="space-y-1">
          {builtInBooks.map((book) => (
            <div
              key={book.name}
              className={`group cursor-pointer rounded-lg px-3 py-2 transition-colors ${
                selectedName === book.name
                  ? 'bg-indigo-500 text-white'
                  : 'text-gray-600 hover:bg-indigo-100 dark:text-gray-300 dark:hover:bg-indigo-900/30'
              }`}
              onClick={() => selectBuiltIn(book)}
            >
              <div className="flex items-center gap-1.5">
                <IconFile className="flex-shrink-0 text-sm" />
                <span className="truncate text-sm">{book.name.replace('.pdf', '')}</span>
              </div>
              <div className="mt-0.5 flex items-center gap-1.5 pl-5">
                <span className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${selectedName === book.name ? 'bg-white/20 text-white' : levelColors[book.level]}`}>
                  {book.level}
                </span>
              </div>
              <div className={`mt-0.5 truncate pl-5 text-[11px] ${selectedName === book.name ? 'text-indigo-100' : 'text-gray-400'}`}>
                {book.description}
              </div>
            </div>
          ))}
        </div>

        {/* Uploaded Books */}
        <div className="mb-2 mt-4 flex items-center gap-2 px-2">
          <IconUpload className="text-lg text-indigo-500" />
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">我的上传</span>
        </div>
        <label className="my-card mb-2 flex cursor-pointer items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs text-indigo-500 transition-colors hover:bg-indigo-500 hover:text-white">
          <IconUpload className="text-sm" />
          上传 PDF
          <input type="file" accept="application/pdf" multiple className="hidden" onChange={handleUpload} />
        </label>
        {uploadError && (
          <p className="mb-2 px-2 text-[11px] text-rose-500">{uploadError}</p>
        )}

        <div className="flex-1 space-y-1 overflow-y-auto">
          {uploadedPdfs.length === 0 ? (
            <p className="py-4 text-center text-xs text-gray-400">暂无上传文件</p>
          ) : (
            uploadedPdfs.map((pdf) => (
              <div
                key={pdf.id}
                className={`group flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-2 transition-colors ${
                  selectedName === pdf.name
                    ? 'bg-indigo-500 text-white'
                    : 'text-gray-600 hover:bg-indigo-100 dark:text-gray-300 dark:hover:bg-indigo-900/30'
                }`}
                onClick={() => selectUploaded(pdf)}
              >
                <IconFile className="flex-shrink-0 text-sm" />
                <div className="flex-1 overflow-hidden">
                  <div className="truncate text-sm">{pdf.name}</div>
                  <div className={`text-[10px] ${selectedName === pdf.name ? 'text-indigo-100' : 'text-gray-400'}`}>
                    {formatSize(pdf.size)}
                  </div>
                </div>
                <button
                  className="flex-shrink-0 rounded p-0.5 text-xs opacity-0 transition-opacity hover:text-rose-400 group-hover:opacity-100"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleDelete(pdf.id, pdf.name)
                  }}
                >
                  <IconTrash />
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Drag Handle */}
      <div
        className="group relative w-1 flex-shrink-0 cursor-col-resize"
        onMouseDown={startDrag}
      >
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-center">
          <div className="h-full w-px bg-gray-200 transition-colors group-hover:bg-indigo-400 group-active:bg-indigo-500 dark:bg-gray-700 dark:group-hover:bg-indigo-500" />
        </div>
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-0.5 rounded-full bg-white px-1 py-2 shadow-sm transition-colors group-hover:bg-indigo-50 dark:bg-gray-800 dark:group-hover:bg-indigo-900/30">
          <div className="h-3 w-0.5 rounded-full bg-gray-300 group-hover:bg-indigo-400 dark:bg-gray-600 dark:group-hover:bg-indigo-400" />
          <div className="h-3 w-0.5 rounded-full bg-gray-300 group-hover:bg-indigo-400 dark:bg-gray-600 dark:group-hover:bg-indigo-400" />
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="relative flex min-w-0 flex-1 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
        {displayUrl ? (
          <>
            <iframe
              src={displayUrl}
              className="h-full w-full"
              title={selectedName}
              onError={() => setPdfError(true)}
            />
            {pdfError && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/90 dark:bg-gray-900/90">
                <div className="text-center">
                  <IconAlertCircle className="mx-auto text-6xl text-rose-400" />
                  <p className="mt-4 text-sm text-gray-500">PDF 加载失败</p>
                  <p className="mt-1 text-xs text-gray-400">{selectedName}</p>
                  <button
                    className="mt-3 rounded-lg bg-indigo-500 px-4 py-1 text-xs text-white hover:bg-indigo-600"
                    onClick={() => {
                      setPdfError(false)
                      setSelectedUrl(null)
                      setSelectedName('')
                    }}
                  >
                    返回
                  </button>
                </div>
              </div>
            )}
            {/* Zoom Toolbar */}
            <div className="my-card absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-xl px-1.5 py-1 shadow-lg">
              {/* Page Navigation */}
              <div className="flex items-center gap-1">
                <button
                  className="flex items-center justify-center rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-indigo-100 hover:text-indigo-500 dark:text-gray-400 dark:hover:bg-indigo-900/30"
                  onClick={() => {
                    const p = Math.max(1, currentPage - 1)
                    setCurrentPage(p)
                    setPageInput(String(p))
                    savePdfProgress(selectedName, p)
                  }}
                  title="上一页"
                  disabled={currentPage <= 1}
                >
                  <span className="text-sm font-bold">‹</span>
                </button>
                <input
                  type="text"
                  value={pageInput}
                  onChange={(e) => setPageInput(e.target.value)}
                  onBlur={() => {
                    const p = parseInt(pageInput, 10)
                    if (p && p > 0) {
                      setCurrentPage(p)
                      savePdfProgress(selectedName, p)
                    } else {
                      setPageInput(String(currentPage))
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const p = parseInt(pageInput, 10)
                      if (p && p > 0) {
                        setCurrentPage(p)
                        savePdfProgress(selectedName, p)
                        ;(e.target as HTMLInputElement).blur()
                      }
                    }
                  }}
                  className="w-10 rounded-md border border-gray-200 bg-transparent text-center text-xs text-gray-600 outline-none focus:border-indigo-400 dark:border-gray-600 dark:text-gray-300"
                />
                <button
                  className="flex items-center justify-center rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-indigo-100 hover:text-indigo-500 dark:text-gray-400 dark:hover:bg-indigo-900/30"
                  onClick={() => {
                    const p = currentPage + 1
                    setCurrentPage(p)
                    setPageInput(String(p))
                    savePdfProgress(selectedName, p)
                  }}
                  title="下一页"
                >
                  <span className="text-sm font-bold">›</span>
                </button>
              </div>
              <div className="mx-0.5 h-4 w-px bg-gray-200 dark:bg-gray-600" />
              <button
                className="flex items-center justify-center rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-indigo-100 hover:text-indigo-500 dark:text-gray-400 dark:hover:bg-indigo-900/30"
                onClick={zoomOut}
                title="缩小"
                disabled={zoom <= MIN_ZOOM || zoom === 0}
              >
                <IconZoomOut className="text-base" />
              </button>
              <span className="min-w-[64px] text-center text-xs font-medium text-gray-600 dark:text-gray-300">
                {zoomLabel}
              </span>
              <button
                className="flex items-center justify-center rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-indigo-100 hover:text-indigo-500 dark:text-gray-400 dark:hover:bg-indigo-900/30"
                onClick={zoomIn}
                title="放大"
                disabled={zoom >= MAX_ZOOM || zoom === 0}
              >
                <IconZoomIn className="text-base" />
              </button>
              <div className="mx-0.5 h-4 w-px bg-gray-200 dark:bg-gray-600" />
              <button
                className="flex items-center justify-center rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-indigo-100 hover:text-indigo-500 dark:text-gray-400 dark:hover:bg-indigo-900/30"
                onClick={zoomReset}
                title="恢复 100%"
              >
                <IconZoomReset className="text-base" />
              </button>
              <button
                className={`flex items-center justify-center rounded-lg p-1.5 transition-colors ${
                  zoom === 0
                    ? 'bg-indigo-100 text-indigo-500 dark:bg-indigo-900/30'
                    : 'text-gray-500 hover:bg-indigo-100 hover:text-indigo-500 dark:text-gray-400 dark:hover:bg-indigo-900/30'
                }`}
                onClick={zoomFitWidth}
                title="适合宽度"
              >
                <IconMaximize className="text-base" />
              </button>
            </div>
          </>
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <IconBook className="mx-auto text-6xl text-gray-300 dark:text-gray-600" />
              <p className="mt-4 text-sm text-gray-400">从左侧选择一本书开始阅读</p>
              <p className="mt-1 text-xs text-gray-400">共 {builtInBooks.length} 本内置参考书</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
