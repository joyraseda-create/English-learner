import DictionaryGroup from './CategoryDicts'
import DictRequest from './DictRequest'
import Layout from '@/components/Layout'
import { dictionaries } from '@/resources/dictionary'
import { currentDictInfoAtom } from '@/store'
import type { Dictionary, LanguageCategoryType } from '@/typings'
import { exportAllDictionaries } from '@/utils/dictExport'
import groupBy, { groupByDictTags } from '@/utils/groupBy'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { useAtomValue } from 'jotai'
import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { useNavigate } from 'react-router-dom'
import type { Updater } from 'use-immer'
import { useImmer } from 'use-immer'
import IconX from '~icons/tabler/x'

export type GalleryState = {
  currentLanguageTab: LanguageCategoryType
}

const initialGalleryState: GalleryState = {
  currentLanguageTab: 'en',
}

export const GalleryContext = createContext<{
  state: GalleryState
  setState: Updater<GalleryState>
} | null>(null)

export default function GalleryPage() {
  const [galleryState, setGalleryState] = useImmer<GalleryState>(initialGalleryState)
  const navigate = useNavigate()
  const currentDictInfo = useAtomValue(currentDictInfoAtom)
  const [exporting, setExporting] = useState(false)
  const [exportProgress, setExportProgress] = useState('')

  const handleExportAll = useCallback(async () => {
    setExporting(true)
    try {
      await exportAllDictionaries(dictionaries, (current, total, name) => {
        setExportProgress(`正在导出 (${current}/${total}): ${name}`)
      })
    } catch {
      // ignore export errors
    } finally {
      setExporting(false)
      setExportProgress('')
    }
  }, [])

  const { groupedByCategoryAndTag } = useMemo(() => {
    const currentLanguageCategoryDicts = dictionaries.filter((dict) => dict.languageCategory === galleryState.currentLanguageTab)
    const groupedByCategory = Object.entries(groupBy(currentLanguageCategoryDicts, (dict) => dict.category))
    const groupedByCategoryAndTag = groupedByCategory.map(
      ([category, dicts]) => [category, groupByDictTags(dicts)] as [string, Record<string, Dictionary[]>],
    )

    return {
      groupedByCategoryAndTag,
    }
  }, [galleryState.currentLanguageTab])

  const onBack = useCallback(() => {
    navigate('/')
  }, [navigate])

  useHotkeys('esc', onBack, { preventDefault: true })

  useEffect(() => {
    if (currentDictInfo) {
      setGalleryState((state) => {
        state.currentLanguageTab = currentDictInfo.languageCategory
      })
    }
  }, [currentDictInfo, setGalleryState])

  return (
    <Layout>
      <GalleryContext.Provider value={{ state: galleryState, setState: setGalleryState }}>
        <div className="relative mb-auto mt-auto flex w-full flex-1 flex-col overflow-y-auto px-6 pl-20">
          <button
            onClick={onBack}
            aria-label="返回"
            className="fixed right-20 top-6 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-gray-500 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-110 hover:text-indigo-500 hover:shadow-lg dark:bg-gray-800/70 dark:text-gray-400 dark:hover:text-indigo-400"
          >
            <IconX className="h-5 w-5" />
          </button>

          <div className="mt-20 flex w-full flex-1 flex-col items-center justify-center overflow-y-auto">
            <div className="flex h-full w-full max-w-7xl flex-col overflow-y-auto">
              <div className="mb-2 flex flex-col items-start gap-2 pb-6">
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col gap-2">
                    <h1 className="gradient-text text-4xl font-bold">选择词库</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">挑选适合你的英语词库，开始练习</p>
                  </div>
                  <button
                    onClick={handleExportAll}
                    disabled={exporting}
                    className="my-btn-primary h-10 px-6 text-sm shadow transition hover:bg-indigo-600 disabled:opacity-50"
                  >
                    {exporting ? exportProgress || '正在导出...' : '导出全部词库'}
                  </button>
                </div>
              </div>
              <div className="flex h-16 w-full items-center justify-between pb-6">
                <DictRequest />
              </div>
              <ScrollArea.Root className="flex-1 overflow-y-auto">
                <ScrollArea.Viewport className="h-full w-full customized-scrollbar">
                  <div className="mr-4 flex flex-1 flex-col items-start justify-start gap-14 overflow-y-auto pb-10">
                    {groupedByCategoryAndTag.map(([category, groupeByTag]) => (
                      <DictionaryGroup key={category} groupedDictsByTag={groupeByTag} />
                    ))}
                  </div>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar className="flex touch-none select-none bg-transparent " orientation="vertical"></ScrollArea.Scrollbar>
              </ScrollArea.Root>
            </div>
          </div>
        </div>
      </GalleryContext.Provider>
    </Layout>
  )
}
