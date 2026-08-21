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
import IconLanguage from '~icons/tabler/language'
import IconLanguageOff from '~icons/tabler/language-off'
import IconGrammar from '~icons/tabler/book-2'
import IconMessages from '~icons/tabler/messages'
import IconPencil from '~icons/tabler/pencil'
import IconTranslate from '~icons/tabler/writing'
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

      <Tooltip className="h-7 w-7" content="设置单个单词循环">
        <LoopWordSwitcher />
      </Tooltip>

      <Tooltip className="h-7 w-7" content={`开关默写模式（${CTRL} + V）`}>
        <WordDictationSwitcher />
      </Tooltip>
      <Tooltip className="h-7 w-7" content={`开关释义显示（${CTRL} + Shift + V）`}>
        <button
          className={`p-[2px] ${state?.isTransVisible ? 'text-indigo-500' : 'text-gray-500'} text-lg focus:outline-none`}
          type="button"
          onClick={(e) => {
            changeTransVisibleState()
            e.currentTarget.blur()
          }}
          aria-label={`开关释义显示（${CTRL} + Shift + V）`}
        >
          {state?.isTransVisible ? <IconLanguage /> : <IconLanguageOff />}
        </button>
      </Tooltip>

      <Tooltip content="错题本">
        <ErrorBookButton />
      </Tooltip>

      <Tooltip className="h-7 w-7" content="语法学习">
        <button
          className="flex items-center justify-center rounded p-[2px] text-lg text-indigo-500 outline-none transition-colors duration-300 ease-in-out hover:bg-indigo-400 hover:text-white"
          type="button"
          onClick={() => navigate('/grammar')}
        >
          <IconGrammar className="icon" />
        </button>
      </Tooltip>

      <Tooltip className="h-7 w-7" content="场景对话">
        <button
          className="flex items-center justify-center rounded p-[2px] text-lg text-indigo-500 outline-none transition-colors duration-300 ease-in-out hover:bg-indigo-400 hover:text-white"
          type="button"
          onClick={() => navigate('/conversation')}
        >
          <IconMessages className="icon" />
        </button>
      </Tooltip>

      <Tooltip className="h-7 w-7" content="句型学习">
        <button
          className="flex items-center justify-center rounded p-[2px] text-lg text-indigo-500 outline-none transition-colors duration-300 ease-in-out hover:bg-indigo-400 hover:text-white"
          type="button"
          onClick={() => navigate('/sentence-patterns')}
        >
          <IconPencil className="icon" />
        </button>
      </Tooltip>

      <Tooltip className="h-7 w-7" content="句子练习">
        <button
          className="flex items-center justify-center rounded p-[2px] text-lg text-indigo-500 outline-none transition-colors duration-300 ease-in-out hover:bg-indigo-400 hover:text-white"
          type="button"
          onClick={() => navigate('/chinese-to-english')}
        >
          <IconTranslate className="icon" />
        </button>
      </Tooltip>

      <Tooltip className="h-7 w-7" content="查看数据统计">
        <AnalysisButton />
      </Tooltip>

      <Tooltip className="h-7 w-7" content="指法图示">
        <HandPositionIllustration></HandPositionIllustration>
      </Tooltip>
      <Tooltip content="设置">
        <Setting />
      </Tooltip>
    </div>
  )
}
