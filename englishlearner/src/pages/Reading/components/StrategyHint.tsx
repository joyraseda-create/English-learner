import { useState } from 'react'
import IconBulb from '~icons/tabler/bulb'
import IconChevronDown from '~icons/tabler/chevron-down'
import type { QuestionType } from '../readingData'
import { getColorClasses, strategyData } from '../strategyData'

type Props = {
  type: QuestionType
  /** 答错时本篇文章内首次自动展开 */
  autoOpen?: boolean
}

const StrategyHint = ({ type, autoOpen = false }: Props) => {
  const [open, setOpen] = useState(autoOpen)
  const strategy = strategyData[type]
  const colors = getColorClasses(type)

  return (
    <div className="mt-2">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
          open
            ? `${colors.badge} ring-1 ${colors.ring}`
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
        }`}
      >
        <IconBulb className="text-sm" />
        <span>查看做题策略</span>
        <IconChevronDown
          className={`text-sm transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className={`mt-2 rounded-xl border border-amber-200/60 px-4 py-3 text-sm ${colors.panel} dark:border-amber-800/40`}>
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-300">
            <IconBulb className="text-sm" />
            <span>{strategy.label} · 做题策略</span>
          </div>
          <div className="mb-2 text-xs leading-relaxed text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-700 dark:text-gray-200">识别线索：</span>
            {strategy.clue}
          </div>
          <ol className="mb-2 flex list-decimal flex-col gap-1 pl-5 text-xs leading-relaxed text-gray-700 dark:text-gray-300 marker:text-amber-500">
            {strategy.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
          <div className="text-xs italic text-rose-600 dark:text-rose-400">
            ⚠ {strategy.pitfall}
          </div>
        </div>
      )}
    </div>
  )
}

export default StrategyHint
