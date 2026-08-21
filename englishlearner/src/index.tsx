import Loading from './components/Loading'
import Onboarding from './components/Onboarding'
import ThemeToggle from './components/ThemeToggle'
import { ErrorBoundary } from './components/ErrorBoundary'
import './index.css'
import { ErrorBook } from './pages/ErrorBook'
import { FriendLinks } from './pages/FriendLinks'
import MobilePage from './pages/Mobile'
import TypingPage from './pages/Typing'
import { isOpenDarkModeAtom } from '@/store'
import 'animate.css'
import { useAtomValue } from 'jotai'
import React, { Suspense, lazy, useEffect, useState } from 'react'
import 'react-app-polyfill/stable'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const AnalysisPage = lazy(() => import('./pages/Analysis'))
const GalleryPage = lazy(() => import('./pages/Gallery-N'))
const GrammarPage = lazy(() => import('./pages/Grammar'))
const ConversationPage = lazy(() => import('./pages/Conversation'))
const SentencePatternsPage = lazy(() => import('./pages/SentencePatterns'))
const ChineseToEnglishPage = lazy(() => import('./pages/ChineseToEnglish'))

function Root() {
  const darkMode = useAtomValue(isOpenDarkModeAtom)
  useEffect(() => {
    darkMode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
  }, [darkMode])

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 600
      if (!mobile && isMobile) {
        window.location.href = '/'
      }
      setIsMobile(mobile)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMobile])

  return (
    <React.StrictMode>
      <BrowserRouter basename={REACT_APP_DEPLOY_ENV === 'pages' ? '/english-learner' : ''}>
        <ThemeToggle />
        <Onboarding />
        <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Routes>
            {isMobile ? (
              <Route path="/*" element={<Navigate to="/mobile" />} />
            ) : (
              <>
                <Route index element={<TypingPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/grammar" element={<GrammarPage />} />
                <Route path="/conversation" element={<ConversationPage />} />
                <Route path="/sentence-patterns" element={<SentencePatternsPage />} />
                <Route path="/chinese-to-english" element={<ChineseToEnglishPage />} />
                <Route path="/analysis" element={<AnalysisPage />} />
                <Route path="/error-book" element={<ErrorBook />} />
                <Route path="/friend-links" element={<FriendLinks />} />
                <Route path="/*" element={<Navigate to="/" />} />
              </>
            )}
            <Route path="/mobile" element={<MobilePage />} />
          </Routes>
        </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </React.StrictMode>
  )
}

const container = document.getElementById('root')

container && createRoot(container).render(<Root />)
