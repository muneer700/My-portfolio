import { projects } from '../data.js'
import { projectArt, ArrowIcon } from './icons.jsx'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="eyebrow">Projects</p>
        <h2 className="h2 reveal" style={{ marginBottom: 16 }}>Things I've built</h2>
        <p className="body reveal" style={{ marginBottom: 48, maxWidth: 560 }}>
          A few pieces of work from my studies and side projects.
        </p>

        <div className="hscroll" tabIndex={0} role="region" aria-label="Projects, scroll horizontally">
          {projects.map((p) => {
            const Art = projectArt[p.art]
            return (
              <article className="proj" key={p.title}>
                <div className="pimg"><Art /></div>
                <div className="proj-body">
                  <div className="proj-meta mono">
                    <span>{p.num}</span>
                    <span>{p.kind}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <div className="tags">
                    {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                  </div>
                  <a className="plink" href={p.link} target="_blank" rel="noreferrer">
                    View project <ArrowIcon />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
