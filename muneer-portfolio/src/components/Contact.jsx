import { contacts } from '../data.js'
import { contactIcons } from './icons.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section alt">
      <div className="container grid2 contact-grid">
        <div className="about-text">
          <p className="eyebrow" style={{ margin: 0 }}>Contact</p>
          <h2 className="h2 reveal">Let's build something together.</h2>
          <p className="body" style={{ maxWidth: 440 }}>
            Have a project, an internship opening or a question? Send me a message and I'll get back
            to you.
          </p>
        </div>

        <div className="rows">
          {contacts.map((c) => {
            const Icon = contactIcons[c.icon]
            return (
              <a className="row" href={c.href} key={c.label}>
                <Icon size={24} className="accent" />
                <span className="row-text">
                  <span className="row-label mono">{c.label}</span>
                  <span className="row-value">{c.value}</span>
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
