import { NavLink } from 'react-router-dom'
import './horizontal-nav.css'

export default function HorizontalNav() {
  const items: { to: string; label: string; exact?: boolean }[] = [
    { to: '/', label: '首页', exact: true },
    { to: '/grammar', label: '语法' },
    { to: '/conversation', label: '对话' },
    { to: '/sentence-patterns', label: '句型' },
    { to: '/chinese-to-english', label: '句子练习' },
    { to: '/analysis', label: '统计' },
    { to: '/error-book', label: '错题本' },
  ]

  return (
    <nav className="horizontal-nav" aria-label="主导航">
      <div className="horizontal-nav-inner">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.exact}
            className={({ isActive }) => `horizontal-nav-link${isActive ? ' is-active' : ''}`}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
