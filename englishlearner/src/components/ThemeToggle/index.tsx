import { isOpenDarkModeAtom } from '@/store'
import { useAtom } from 'jotai'
import { useCallback } from 'react'
import IconMoon from '~icons/heroicons/moon-solid'
import IconSun from '~icons/heroicons/sun-solid'

export default function ThemeToggle() {
  const [isOpenDarkMode, setIsOpenDarkMode] = useAtom(isOpenDarkModeAtom)

  const toggle = useCallback(() => {
    setIsOpenDarkMode((old) => !old)
  }, [setIsOpenDarkMode])

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="切换深色/浅色模式"
      title={isOpenDarkMode ? '切换到浅色模式' : '切换到深色模式'}
      className="fixed right-6 top-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/70 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-xl dark:bg-gray-800/70"
    >
      <div className="relative h-5 w-5">
        <IconSun
          className={`absolute inset-0 h-5 w-5 text-amber-500 transition-all duration-300 ${
            isOpenDarkMode ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
          }`}
        />
        <IconMoon
          className={`absolute inset-0 h-5 w-5 text-indigo-400 transition-all duration-300 ${
            isOpenDarkMode ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
          }`}
        />
      </div>
    </button>
  )
}
