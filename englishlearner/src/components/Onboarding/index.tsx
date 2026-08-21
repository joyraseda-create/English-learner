import { useCallback, useState } from 'react'
import logo from '@/assets/logo.svg'
import IconArrowRight from '~icons/tabler/arrow-right'
import IconArrowLeft from '~icons/tabler/arrow-left'
import IconCheck from '~icons/tabler/check'
import IconKeyboard from '~icons/tabler/keyboard'
import IconBook2 from '~icons/tabler/book-2'
import IconMessages from '~icons/tabler/messages'
import IconWriting from '~icons/tabler/writing'

const STORAGE_KEY = 'el-onboarding-seen'

const steps = [
  {
    icon: IconKeyboard,
    title: '打字记单词',
    desc: '通过键盘输入记忆单词，肌肉记忆比单纯浏览更高效。支持 CET-4、CET-6 等多词库，打字同时学习音标和释义。',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: IconBook2,
    title: '短语与语法',
    desc: '5 大短语库（1300+ 条目）+ 系统化语法参考书。从短语积累到语法规则，构建完整的语言基础。',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: IconWriting,
    title: '句型与中译英',
    desc: '3 级 60 个句型模式 + 300 道中译英练习题，每题附句子成分标注（主谓宾定状补），帮你理解句子结构。',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: IconMessages,
    title: '日常对话练习',
    desc: '覆盖生活场景的对话练习，配合语音合成发音，练习听力和口语表达，学以致用。',
    color: 'from-cyan-500 to-blue-500',
  },
]

export default function Onboarding() {
  const [visible, setVisible] = useState(() => {
    try {
      return !localStorage.getItem(STORAGE_KEY)
    } catch {
      return false
    }
  })
  const [step, setStep] = useState(0)

  const dismiss = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      // ignore
    }
    setVisible(false)
  }, [])

  const handleNext = useCallback(() => {
    if (step < steps.length - 1) {
      setStep(step + 1)
    } else {
      dismiss()
    }
  }, [step, dismiss])

  const handlePrev = useCallback(() => {
    if (step > 0) setStep(step - 1)
  }, [step])

  if (!visible) return null

  const CurrentIcon = steps[step].icon
  const isLast = step === steps.length - 1

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative mx-4 w-full max-w-lg overflow-hidden rounded-3xl border border-white/20 bg-white/80 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-gray-900/80">
        {/* Top gradient bar */}
        <div className={`h-2 w-full bg-gradient-to-r ${steps[step].color}`} />

        {/* Content */}
        <div className="px-8 pb-6 pt-8">
          {/* Logo */}
          <div className="mb-6 flex flex-col items-center">
            <img src={logo} className="mb-3 h-16 w-16 drop-shadow-lg" alt="English Learner Logo" />
            <h1 className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-2xl font-bold text-transparent">
              English Learner
            </h1>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">英语综合学习工具</p>
          </div>

          {/* Step content */}
          <div className="flex flex-col items-center text-center">
            <div className={`mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${steps[step].color} shadow-lg`}>
              <CurrentIcon className="h-10 w-10 text-white" />
            </div>
            <h2 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-100">
              {steps[step].title}
            </h2>
            <p className="min-h-[60px] text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {steps[step].desc}
            </p>
          </div>

          {/* Step indicators */}
          <div className="my-5 flex justify-center gap-2">
            {steps.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setStep(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === step
                    ? 'w-6 bg-indigo-500'
                    : 'w-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600'
                }`}
                aria-label={`第 ${i + 1} 步`}
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between">
            {step > 0 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="flex items-center gap-1 rounded-xl px-4 py-2 text-sm text-gray-500 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
              >
                <IconArrowLeft className="text-base" />
                上一步
              </button>
            ) : (
              <button
                type="button"
                onClick={dismiss}
                className="rounded-xl px-4 py-2 text-sm text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-200"
              >
                跳过
              </button>
            )}

            <button
              type="button"
              onClick={handleNext}
              className={`flex items-center gap-1 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-2 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg ${steps[step].color}`}
            >
              {isLast ? (
                <>
                  <IconCheck className="text-base" />
                  开始学习
                </>
              ) : (
                <>
                  下一步
                  <IconArrowRight className="text-base" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
