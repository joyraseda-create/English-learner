import { GalleryContext } from '.'
import type { LanguageCategoryType } from '@/typings'
import { RadioGroup } from '@headlessui/react'
import { useCallback, useContext } from 'react'

export type LanguageTabOption = {
  id: LanguageCategoryType
  name: string
}

const options: LanguageTabOption[] = [
  { id: 'en', name: '英语' },
]

export function LanguageTabSwitcher() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { state, setState } = useContext(GalleryContext)!

  const onChangeTab = useCallback(
    (tab: string) => {
      setState((draft) => {
        draft.currentLanguageTab = tab as LanguageCategoryType
      })
    },
    [setState],
  )

  return (
    <RadioGroup value={state.currentLanguageTab} onChange={onChangeTab}>
      <div className="flex items-center space-x-4">
        {options.map((option) => (
          <RadioGroup.Option key={option.id} value={option.id} className="cursor-pointer">
            {({ checked }) => (
              <div className={`flex items-center rounded-xl px-3 py-1.5 transition-all duration-200 ${checked ? 'bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md shadow-indigo-500/20' : 'bg-white/60 backdrop-blur-md dark:bg-gray-800/60'}`}>
                <p className={`text-base font-medium ${checked ? 'text-white' : 'text-gray-700 dark:text-gray-200'}`}>{option.name}</p>
              </div>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}
