const skills = [
  { name: 'React', short: 'R', level: 95, color: 'orange', description: 'Interfaces that feel fast, fluid and intentional.' },
  { name: 'JavaScript', short: 'JS', level: 90, color: 'gold', description: 'Clean logic that keeps complex experiences simple.' },
  { name: 'Tailwind CSS', short: 'TW', level: 95, color: 'sky', description: 'Detailed visual systems, built with speed and care.' },
  { name: 'Node.js', short: 'N', level: 72, color: 'green', description: 'Reliable APIs and the foundations behind the screen.' },
  { name: 'MongoDB', short: 'M', level: 70, color: 'mint', description: 'Flexible data structures that scale with the product.' },
  { name: 'Redux Toolkit', short: 'RT', level: 88, color: 'violet', description: 'Predictable state for polished app experiences.' },
]

const Skills = () => (
  <section id="skills" className="skills-section px-8 py-24 sm:px-12 lg:px-20 lg:py-32">
    <div className="mx-auto max-w-7xl">
      <div className="skills-header">
        <div>
          <p className="section-kicker">My toolkit <span /></p>
          <h2 className="mt-4 max-w-xl text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">Tools for making<br />the web feel better.</h2>
        </div>
        <div className="skills-note"><span className="pulse-dot" />Always learning, always building</div>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <article className={`skill-card skill-card--${skill.color}`} style={{ '--delay': `${index * 75}ms` }} key={skill.name}>
            <div className="skill-card-top">
              <div className="skill-mark">{skill.short}</div>
              <span className="skill-number">0{index + 1}</span>
            </div>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
            <div className="skill-meter" aria-label={`${skill.name}: ${skill.level}%`}>
              <span style={{ '--level': `${skill.level}%` }} />
              <b>{skill.level}%</b>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
