import { useCallback, useMemo } from 'react'
import useSpeech from '@/hooks/useSpeech'
import IconVolume from '~icons/tabler/volume'
import IconVolumeOff from '~icons/tabler/volume-off'

type SpeakerButtonProps = {
  text: string
  /** 朗读语速；默认 1.0 */
  rate?: number
  /** 是否使用英式发音；默认 false（美式） */
  isBritish?: boolean
  className?: string
  /** 激活时的图标颜色；默认 indigo-500 */
  activeColor?: string
}

/**
 * 通用朗读按钮：基于浏览器 SpeechSynthesis API，支持语速控制。
 * 同一时刻只播放一个朗读任务，再次点击取消。
 */
export default function SpeakerButton({
  text,
  rate = 1.0,
  isBritish = false,
  className = '',
  activeColor = 'text-indigo-500',
}: SpeakerButtonProps) {
  const option = useMemo(
    () => ({ lang: isBritish ? 'en-GB' : 'en-US', rate }),
    [isBritish, rate],
  )
  const { speak, cancel, speaking, supported } = useSpeech(text, option)

  const handleClick = useCallback(() => {
    if (!supported) {
      window.alert('当前浏览器不支持语音合成功能')
      return
    }
    if (speaking) {
      cancel()
    } else {
      speak(true)
    }
  }, [supported, speaking, speak, cancel])

  if (!supported) {
    return (
      <button
        disabled
        className={`flex cursor-not-allowed items-center justify-center rounded p-1 text-gray-300 opacity-50 ${className}`}
        title="当前浏览器不支持语音合成"
      >
        <IconVolumeOff className="text-sm" />
      </button>
    )
  }

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center rounded p-1 transition-colors ${activeColor} hover:bg-indigo-100 dark:hover:bg-indigo-900/30 ${className}`}
      title={speaking ? '点击停止' : '点击朗读'}
      aria-label={speaking ? '停止朗读' : '朗读'}
    >
      <IconVolume className={`text-sm ${speaking ? 'animate-pulse' : ''}`} />
    </button>
  )
}