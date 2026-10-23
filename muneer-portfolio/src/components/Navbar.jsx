import { useEffect, useState } from 'react'
import { navItems } from '../data.js'
import { SunIcon, MoonIcon } from './icons.jsx'

// Dark is the default. A choice made with the toggle is remembered in the browser.
function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch (e) {}
  return 'dark'
}

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)

  // Apply the theme to the whole page and remember it.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch (e) {}
  }, [theme])

  // Highlight the link of the section that is in the middle of the screen.
  useEffect(() => {
    const sections = navItems.map((n) => document.getElementById(n.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const isDark = theme === 'dark'

  return (
    <header className="header">
      <nav className="navgrid" aria-label="Main">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">M</span>
          Muneer
        </a>

        <div className={open ? 'pill open' : 'pill'} id="site-menu">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? 'navlink on' : 'navlink'}
              onClick={() => {
                setActive(item.id)
                setOpen(false)
              }}
            >
              <span className="num">{item.num}</span>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="iconbtn"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            type="button"
            className={open ? 'iconbtn burger is-open' : 'iconbtn burger'}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span className="bars" aria-hidden="true">
              <i /><i /><i />
            </span>
          </button>
        </div>
      </nav>
      <div className="progress" />
    </header>
  )
}
