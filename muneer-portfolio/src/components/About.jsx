const lines = [
  [['k', 'const'], ['n', ' muneer'], ['p', ' = {']],
  [['n', '  studying'], ['p', ': '], ['s', '"Computer Science"'], ['p', ',']],
  [['n', '  university'], ['p', ': '], ['s', '"Modibbo Adama University, Yola"'], ['p', ',']],
  [['n', '  buildingWith'], ['p', ': ['], ['s', '"HTML"'], ['p', ', '], ['s', '"JavaScript"'], ['p', ',']],
  [['n', '                 '], ['s', '"React"'], ['p', ', '], ['s', '"Node.js"'], ['p', '],']],
  [['n', '  finalYearProject'], ['p', ': '], ['s', '"Phishing URL detection"'], ['p', ',']],
  [['n', '  curiousAbout'], ['p', ': '], ['s', '"machine learning"'], ['p', ',']],
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container grid2 about-grid">
        <div className="about-text">
          <p className="eyebrow" style={{ margin: 0 }}>About me</p>
          <h2 className="h2 reveal">
            A student who likes making things <span className="accent-text">work.</span>
          </h2>
          <p className="body reveal">
            I'm a Computer Science student at Modibbo Adama University, Yola. I learn by building: I
            start with the structure in HTML, add behavior with JavaScript, then grow it into full
            applications with React and Node.js.
          </p>
          <p className="body reveal">
            Beyond the web, I'm interested in machine learning. My final-year project applies a
            Random Forest classifier to detect phishing URLs.
          </p>
        </div>

        <div className="code reveal">
          <div className="code-bar">
            <span className="dotc" /><span className="dotc" /><span className="dotc" />
            <span className="code-name mono">about.js</span>
          </div>
          <div className="code-body mono">
            {lines.map((parts, i) => (
              <div className="ln" key={i}>
                {parts.map(([cls, text], j) => (
                  <span className={`t-${cls}`} key={j}>{text}</span>
                ))}
              </div>
            ))}
            <div className="ln">
              <span className="t-p">{'};'}</span> <span className="cursor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
