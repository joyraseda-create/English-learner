import Flow from './flow'
import logo from '@/assets/logo.svg'
import type React from 'react'
import { useNavigate } from 'react-router-dom'

const features = [
  {
    title: '打字记单词',
    description: '将单词记忆与键盘输入相结合，在练习中自然掌握词汇',
  },
  {
    title: '音标与发音',
    description: '美式音标显示与真人发音，听读同步提升',
  },
  {
    title: '默写模式',
    description: '章节结束后可进行默写，巩固所学单词',
  },
  {
    title: '语法与句型',
    description: '系统语法学习与实用句型练习，夯实基础',
  },
  {
    title: '对话练习',
    description: '场景化对话练习，提升实际应用能力',
  },
  {
    title: '错题本与统计',
    description: '自动收录错题，学习进度可视化',
  },
]

const MobilePage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="flex w-screen flex-col">
      <section className="flex items-center justify-center py-2 shadow-md">
        <img src={logo} className="mr-3 h-16 w-16" alt="English Learner Logo" />
        <h1 className="text-2xl font-bold text-indigo-500">English Learner</h1>
      </section>

      <section className="relative">
        <Flow />
        <div className="absolute top-10 flex w-full flex-col items-center justify-center">
          <h1 className="animate__animated animate__zoomIn bg-gradient-to-b from-white to-[#dee0ff] bg-clip-text text-3xl font-bold text-transparent">
            为键盘工作者设计的英语学习工具
          </h1>
          <h2
            className="animate__animated animate__zoomIn mt-5 text-sm font-bold text-white"
            style={{ textShadow: '1px 1px 2px #9c9ea3' }}
          >
            在键盘练习中同步记忆单词，快速建立正确的肌肉记忆
          </h2>
          <h2
            className="typewriter !mt-3 text-xs font-bold text-white"
            style={{
              textShadow: '1px 1px 2px #9c9ea3',
              overflow: 'hidden',
              borderRight: '0.15em solid #f0f0f0',
              whiteSpace: 'nowrap',
              display: 'inline-block',
              animation: 'typing 3s steps(50), blink-caret 0.75s step-end 4, hideCaret 0s 3s forwards',
            }}
          >
            音标发音、默写模式、语法学习、对话练习 — 全方位提升英语能力
          </h2>
        </div>
      </section>

      <section className="mt-10 px-5">
        <h1 className="text-center text-3xl font-bold text-indigo-500">项目特点</h1>

        <div className="mt-8 grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-sm font-bold text-indigo-500 dark:bg-indigo-900/30">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-800 dark:text-gray-100">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="mt-10 flex h-[20rem] w-full flex-col items-center"
        style={{
          background: 'linear-gradient(-45deg, #6366f1, #818cf8, #6366f1, #4f46e5)',
          backgroundSize: '600% 600%',
          animation: 'gradientBG 4s ease-in-out infinite',
        }}
      >
        <h1 className="mt-10 text-3xl font-bold text-white">轻松上手，简单好用</h1>
        <h2 className="mt-10 px-10 text-center text-white">
          为键盘工作者设计的单词与肌肉记忆锻炼软件
        </h2>
        <button
          onClick={() => navigate('/')}
          className="mt-10 rounded-2xl bg-white px-8 py-3 text-lg font-bold text-indigo-600 shadow-lg transition-all hover:shadow-xl hover:brightness-95"
        >
          开始学习
        </button>
      </section>
    </div>
  )
}

export default MobilePage