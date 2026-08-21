import { RadioGroup } from '@headlessui/react'
import { useCallback } from 'react'

type Props = {
  tagList: string[]
  currentTag: string
  onChangeCurrentTag: (tag: string) => void
}

export default function DictTagSwitcher({ tagList, currentTag, onChangeCurrentTag }: Props) {
  const onChangeTag = useCallback(
    (tag: string) => {
      onChangeCurrentTag(tag)
    },
    [onChangeCurrentTag],
  )

  return (
    <RadioGroup value={currentTag} onChange={onChangeTag}>
      <div className="flex items-center space-x-4">
        {tagList.map((option) => (
          <RadioGroup.Option
            key={option}
            value={option}
            className={({ checked }) =>
              `cursor-pointer whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                checked
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-white/60 text-gray-600 backdrop-blur-md hover:bg-indigo-50 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:bg-gray-700'
              }`
            }
          >
            <p className={`font-normal `}>{option}</p>
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}
