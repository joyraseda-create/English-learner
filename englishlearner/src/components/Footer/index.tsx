import type React from 'react'

const Footer: React.FC = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="mb-1 mt-4 flex w-full items-center justify-center gap-2 text-sm">
      <span className="select-none text-gray-400 dark:text-gray-500">
        English Learner &copy; {year}
      </span>
    </footer>
  )
}

export default Footer
