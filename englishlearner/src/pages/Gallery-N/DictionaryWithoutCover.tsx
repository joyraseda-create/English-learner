import DictDetail from './DictDetail'
import { useDictStats } from './hooks/useDictStats'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import { currentDictIdAtom } from '@/store'
import type { Dictionary } from '@/typings'
import { calcChapterCount } from '@/utils'
import * as Progress from '@radix-ui/react-progress'
import { useAtomValue } from 'jotai'
import { useMemo, useRef } from 'react'

interface Props {
  dictionary: Dictionary
}

export default function DictionaryComponent({ dictionary }: Props) {
  const currentDictID = useAtomValue(currentDictIdAtom)

  const divRef = useRef<HTMLDivElement>(null)
  const entry = useIntersectionObserver(divRef, {})
  const isVisible = !!entry?.isIntersecting
  const dictStats = useDictStats(dictionary.id, isVisible)
  const chapterCount = useMemo(() => calcChapterCount(dictionary.length), [dictionary.length])
  const isSelected = currentDictID === dictionary.id
  const progress = useMemo(
    () => (dictStats ? Math.ceil((dictStats.exercisedChapterCount / chapterCount) * 100) : 0),
    [dictStats, chapterCount],
  )

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          ref={divRef}
          className={`group relative flex h-36 w-80 cursor-pointer items-center justify-center overflow-hidden rounded-2xl p-5 text-left transition-all duration-300 focus:outline-none ${
            isSelected
              ? 'bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/30'
              : 'bg-white/70 backdrop-blur-md shadow-md hover:shadow-xl hover:-translate-y-1 dark:bg-gray-800/70 dark:hover:bg-gray-800/90'
          }`}
          role="button"
        >
          <div className="relative flex h-full w-full flex-col items-start justify-between">
            <div className="flex w-full items-start justify-between">
              <div className="flex-1 overflow-hidden">
                <h1
                  className={`mb-1 text-lg font-semibold transition-colors ${
                    isSelected
                      ? 'text-white'
                      : 'text-gray-800 group-hover:text-indigo-500 dark:text-gray-100'
                  }`}
                >
                  {dictionary.name}
                </h1>
                <TooltipProvider>
                  <Tooltip delayDuration={400}>
                    <TooltipTrigger asChild>
                      <p
                        className={`mb-1 max-w-full truncate text-sm whitespace-nowrap ${
                          isSelected ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'
                        }`}
                      >
                        {dictionary.description}
                      </p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{`${dictionary.description}`}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div
                className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${
                  isSelected
                    ? 'bg-white/20'
                    : 'bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-500/20 dark:to-purple-500/20'
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={isSelected ? 'text-white' : 'text-indigo-500'}>
                  <path
                    d="M12 6.25C12 6.25 10 5 6.75 5.25L6.75 18.75C10 18.5 12 19.75 12 19.75M12 6.25C12 6.25 14 5 17.25 5.25L17.25 18.75C14 18.5 12 19.75 12 19.75M12 6.25L12 19.75"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="flex w-full items-end justify-between">
              <div>
                <p
                  className={`text-sm font-bold ${
                    isSelected ? 'text-white' : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {dictionary.length} 词
                </p>
                {progress > 0 && (
                  <Progress.Root
                    value={progress}
                    max={100}
                    className={`mt-1.5 h-1.5 w-32 rounded-full overflow-hidden ${
                      isSelected ? 'bg-white/30' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  >
                    <Progress.Indicator
                      className={`h-full rounded-full ${
                        isSelected ? 'bg-white' : 'bg-gradient-to-r from-indigo-400 to-purple-400'
                      }`}
                      style={{ width: `calc(${progress}%)` }}
                    />
                  </Progress.Root>
                )}
              </div>
              {progress > 0 && (
                <span
                  className={`text-xs font-medium ${
                    isSelected ? 'text-white/80' : 'text-indigo-500 dark:text-indigo-400'
                  }`}
                >
                  {progress}%
                </span>
              )}
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="w-[60rem] max-w-none !rounded-[20px]">
        <DictDetail dictionary={dictionary} />
      </DialogContent>
    </Dialog>
  )
}
