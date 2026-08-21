import { useCallback, useMemo } from 'react'
import useSpeech from '@/hooks/useSpeech'
import IconVolume from '~icons/tabler/volume'

type SpeakerButtonProps = {
  text: string
  className?: string
}

export default function SpeakerButton({ text, className = '' }: SpeakerButtonProps) {
  const option = useMemo(() => ({ lang: 'en-US', rate: 0.9 }), [])
  const { speak, cancel, speaking } = useSpeech(text, option)

  const handleClick = useCallback(() => {
    if (speaking) {
      cancel()
    } else {
      speak(true)
    }
  }, [speaking, speak, cancel])

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
