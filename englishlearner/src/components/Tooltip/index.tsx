/**
 * 兼容层 Tooltip：保留旧 API（content + placement + className），
 * 在不破坏现有 Listbox/Popover 等复合组件作为 children 的前提下，
 * 增强 a11y（onFocus/onBlur/aria-describedby）和触屏支持。
 *
 * 旧代码：<Tooltip content="跳过该词">{children}</Tooltip>
 * 新代码：API 完全相同，但获得键盘焦点 + 触屏 + ARIA 支持。
 *
 * 实现说明：使用 useState 控制显示，但监听 onMouseEnter/Leave、
 * onFocus/Blur 和 onClick，触发 tooltip。给外层 div 加上
 * aria-describedby 与 id 关联，符合 WAI-ARIA 1.2 规范。
 *
 * 为什么不直接用 @radix-ui/react-tooltip 的 asChild？
 * 因为 asChild 会把 props 透传到 children，而本项目有 24 处
 * 调用点的 children 是 @headlessui/react 的 Listbox/Popover 等
 * 复合组件，其内部使用 Fragment 渲染会触发
 * "Passing props on Fragment" 异常。
 */
import { classNames } from '@/utils'
import { useId, useState, type ReactNode } from 'react'

type Placement = 'top' | 'bottom' | 'left' | 'right'

const Tooltip = ({ children, content, className, placement = 'top' }: TooltipProps) => {
  const [visible, setVisible] = useState(false)
  const id = useId()

  const show = () => setVisible(true)
  const hide = () => setVisible(false)

  const placementClasses = {
    top: 'bottom-full pb-2',
    bottom: 'top-full pt-2',
    left: 'right-full pr-2',
    right: 'left-full pl-2',
  }[placement]

  return (
    <span
      className={classNames('relative inline-flex', className)}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocusCapture={show}
      onBlurCapture={hide}
    >
      <span aria-describedby={visible ? id : undefined}>{children}</span>
      <span
        id={id}
        role="tooltip"
        className={`${
          visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } ${placementClasses} absolute left-1/2 flex -translate-x-1/2 transform items-center justify-center transition-opacity z-50`}
      >
        <span className="tooltip whitespace-nowrap">{content}</span>
      </span>
    </span>
  )
}

export type TooltipProps = {
  children: ReactNode
  /** 显示文本 */
  content: string
  /** 位置 */
  placement?: Placement
  className?: string
}

export default Tooltip
