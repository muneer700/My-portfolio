import { skills } from '../data.js'
import { skillIcons } from './icons.jsx'

function MarqueeGroup() {
  const words = [...skills, ...skills]
  return (
    <div className="grp">
      {words.map((s, i) => (
        <span className="grp-item" key={i}>
          <span className="word">{s.name}</span>
          <span className="sep" />
        </span>
      ))}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section alt">
      <div className="container">
        <p className="eyebrow">Skills</p>
        <h2 className="h2 reveal" style={{ marginBottom: 48 }}>What I work with</h2>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="track">
          <MarqueeGroup />
          <MarqueeGroup />
        </div>
      </div>

      <div className="container">
        <div className="cards">
          {skills.map((s) => {
            const Icon = skillIcons[s.icon]
            return (
              <article className="card" key={s.name}>
                <div className="cardbar" />
                <div className="card-top">
                  <Icon size={44} className="accent icon" />
                  <span className="tag">{s.tag}</span>
                </div>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
