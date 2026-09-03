import { useCallback, useMemo } from 'react'
import useSpeech from '@/hooks/useSpeech'
import IconVolume from '~icons/tabler/volume'

type SpeakerButtonProps = {
  text: string
  className?: string
}

export default function SpeakerButton({ text, className = '' }: SpeakerButtonProps) {
  const option = useMemo(() => ({ lang: 'en-US', rate: 0.9 }), [])
  const { speak, cancel, speaking, supported } = useSpeech(text, option)

  const handleClick = useCallback(() => {
    if (!supported) {
      // 浏览器不支持 Web Speech API 时给出明确反馈
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
        <IconVolume className="text-sm" />
      </button>
    )
  }

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center rounded p-1 text-indigo-500 transition-colors hover:bg-indigo-100 dark:hover:bg-indigo-900/30 ${className}`}
      title="点击播放发音"
    >
      <IconVolume className={`text-sm ${speaking ? 'animate-pulse text-indigo-600' : ''}`} />
    </button>
  )
}
