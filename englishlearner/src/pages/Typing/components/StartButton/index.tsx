import { TypingContext, TypingStateActionType } from '../../store'
import Tooltip from '@/components/Tooltip'
import { randomConfigAtom } from '@/store'
import { useAtomValue } from 'jotai'
import { useCallback, useContext, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'

export default function StartButton({ isLoading }: { isLoading: boolean }) {
  // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
  const { state, dispatch } = useContext(TypingContext)!
  const randomConfig = useAtomValue(randomConfigAtom)
  const [showRestart, setShowRestart] = useState(false)

  const onToggleIsTyping = useCallback(() => {
    !isLoading && dispatch({ type: TypingStateActionType.TOGGLE_IS_TYPING })
  }, [isLoading, dispatch])

  const onClickRestart = useCallback(() => {
    dispatch({ type: TypingStateActionType.REPEAT_CHAPTER, shouldShuffle: randomConfig.isOpen })
  }, [dispatch, randomConfig.isOpen])

  useHotkeys('enter', onToggleIsTyping, { enableOnFormTags: true, preventDefault: true }, [onToggleIsTyping])

  return (
    <div className="relative flex items-center gap-1">
      <Tooltip content={`${state.isTyping ? '暂停' : '开始'} （Enter）`}>
        <button
          className={`rounded px-2.5 py-0.5 text-sm font-medium transition-colors duration-200 ${
            state.isTyping
              ? 'bg-gray-400 text-white hover:bg-gray-500'
              : 'text-indigo-500'
          }`}
          type="button"
          onClick={onToggleIsTyping}
          onMouseEnter={() => setShowRestart(true)}
          onMouseLeave={() => setShowRestart(false)}
          aria-label={state.isTyping ? '暂停' : '开始'}
        >
          {state.isTyping ? 'Pause' : 'Start'}
        </button>
      </Tooltip>
      {showRestart && (
        <button
          className="rounded bg-gray-500 px-2 py-0.5 text-xs text-white hover:bg-gray-600"
          type="button"
          onClick={onClickRestart}
          aria-label="重新开始"
        >
          Restart
        </button>
      )}
    </div>
  )
}
