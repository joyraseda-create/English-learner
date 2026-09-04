import { TypingContext, TypingStateActionType } from '../../store'
import AnalysisButton from '../AnalysisButton'
import ErrorBookButton from '../ErrorBookButton'
import HandPositionIllustration from '../HandPositionIllustration'
import LoopWordSwitcher from '../LoopWordSwitcher'
import Setting from '../Setting'
import SoundSwitcher from '../SoundSwitcher'
import WordDictationSwitcher from '../WordDictationSwitcher'
import Tooltip from '@/components/Tooltip'
import { CTRL } from '@/utils'
import { useContext } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { useNavigate } from 'react-router-dom'

export default function Switcher() {
  const { state, dispatch } = useContext(TypingContext) ?? {}
  const navigate = useNavigate()

  const changeTransVisibleState = () => {
    if (dispatch) {
      dispatch({ type: TypingStateActionType.TOGGLE_TRANS_VISIBLE })
    }
  }

  useHotkeys(
    'ctrl+shift+v',
    () => {
      changeTransVisibleState()
    },
    { enableOnFormTags: true, preventDefault: true },
    [],
  )

  return (
    <div className="flex items-center justify-center gap-2">
      <Tooltip content="音效设置">
        <SoundSwitcher />
      </Tooltip>

      <Tooltip content="设置单个单词循环">
        <LoopWordSwitcher />
      </Tooltip>

      <Tooltip content={`开关默写模式（${CTRL} + V）`}>
        <WordDictationSwitcher />
      </Tooltip>
      <Tooltip content={`开关释义显示（${CTRL} + Shift + V）`}>
        <button
          className={`rounded px-2 py-0.5 text-sm ${state?.isTransVisible ? 'text-indigo-500' : 'text-gray-500'} focus:outline-none hover:bg-indigo-400 hover:text-white`}
          type="button"
          onClick={(e) => {
            changeTransVisibleState()
            e.currentTarget.blur()
          }}
          aria-label={`开关释义显示（${CTRL} + Shift + V）`}
        >
          <span>{state?.isTransVisible ? '释义(开)' : '释义(关)'}</span>
        </button>
      </Tooltip>

      <Tooltip content="错题本">
        <ErrorBookButton />
      </Tooltip>

      <Tooltip content="语法学习">
        <button
          className="flex items-center justify-center rounded px-2 py-0.5 text-sm text-indigo-500 outline-none transition-colors duration-300 ease-in-out hover:bg-indigo-400 hover:text-white"
          type="button"
          onClick={() => navigate('/grammar')}
        >
          <span>语法</span>
        </button>
      </Tooltip>

      <Tooltip content="场景对话">
        <button
          className="flex items-center justify-center rounded px-2 py-0.5 text-sm text-indigo-500 outline-none transition-colors duration-300 ease-in-out hover:bg-indigo-400 hover:text-white"
          type="button"
          onClick={() => navigate('/conversation')}
        >
          <span>对话</span>
        </button>
      </Tooltip>

      <Tooltip content="句型学习">
        <button
          className="flex items-center justify-center rounded px-2 py-0.5 text-sm text-indigo-500 outline-none transition-colors duration-300 ease-in-out hover:bg-indigo-400 hover:text-white"
          type="button"
          onClick={() => navigate('/sentence-patterns')}
        >
          <span>句型</span>
        </button>
      </Tooltip>

      <Tooltip content="句子练习">
        <button
          className="flex items-center justify-center rounded px-2 py-0.5 text-sm text-indigo-500 outline-none transition-colors duration-300 ease-in-out hover:bg-indigo-400 hover:text-white"
          type="button"
          onClick={() => navigate('/chinese-to-english')}
        >
          <span>句子练习</span>
        </button>
      </Tooltip>

      <Tooltip content="查看数据统计">
        <AnalysisButton />
      </Tooltip>

      <Tooltip content="指法图示">
        <HandPositionIllustration></HandPositionIllustration>
      </Tooltip>
      <Tooltip content="设置">
        <Setting />
      </Tooltip>
    </div>
  )
}
