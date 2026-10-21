import { useState } from 'react'
import { UserIcon } from './icons.jsx'

// Put your picture at public/photo.jpg and it will show here automatically.
const PHOTO = '/photo.jpg'

export default function Hero() {
  const [noPhoto, setNoPhoto] = useState(false)

  return (
    <section id="home" className="hero container">
      <div className="grid2">
        <div className="hero-text">
          <p className="eyebrow rise d1" style={{ margin: 0 }}>Computer Science student</p>
          <h1 className="rise d2">
            Hi, I'm Murtala. I build things{' '}
            <span className="underlined">
              for the web.
              <svg className="squig" viewBox="0 0 300 14" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2 9C30 2 60 14 90 7S150 2 180 8S240 14 298 5" pathLength="1" />
              </svg>
            </span>
          </h1>
          <p className="lead rise d3">
            I study Computer Science at Modibbo Adama University, Yola, and turn ideas into working
            interfaces and servers with HTML, JavaScript, React and Node.js.
          </p>
          <div className="actions rise d4">
            <a className="cta" href="#projects">See my projects</a>
            <a className="textlink" href="#contact">Get in touch</a>
          </div>
        </div>

        <div className="photo-wrap rise d3">
          <div className="float photo-box">
            <svg className="spin ring" viewBox="0 0 100 100" aria-hidden="true">
              <circle cx="50" cy="50" r="49" />
            </svg>
            <div className="photo-offset" />
            <div className="photo">
              {noPhoto ? (
                <div className="photo-empty">
                  <UserIcon />
                  <span className="mono">[YOUR PHOTO]</span>
                </div>
              ) : (
                <img src={PHOTO} alt="Portrait of Muneer" onError={() => setNoPhoto(true)} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
