import { useEffect, useState } from 'react'
import { navItems } from '../data.js'

export default function Navbar() {
  const [active, setActive] = useState('home')

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

  return (
    <header className="header">
      <nav className="navgrid" aria-label="Main">
        <a href="#home" className="logo">
          <span className="logo-mark">M</span>
          MRT
        </a>
        <div className="pill">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? 'navlink on' : 'navlink'}
              onClick={() => setActive(item.id)}
            >
              <span className="num">{item.num}</span>
              {item.label}
            </a>
          ))}
        </div>
        <div aria-hidden="true" />
      </nav>
      <div className="progress" />
    </header>
  )
}
