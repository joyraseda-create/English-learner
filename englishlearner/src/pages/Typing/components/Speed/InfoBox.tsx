import React from 'react'

const InfoBox: React.FC<InfoBoxProps> = ({ info, description }) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <span className="w-4/5 border-b border-indigo-200/50 pb-2 text-center text-xl font-bold text-indigo-500 transition-colors duration-300 dark:text-indigo-400 dark:border-indigo-700/50">
        {info}
      </span>
      <span className="pt-2 text-xs text-gray-500 transition-colors duration-300 dark:text-gray-400">{description}</span>
    </div>
  )
}

export default React.memo(InfoBox)

export type InfoBoxProps = {
  info: string
  description: string
}
