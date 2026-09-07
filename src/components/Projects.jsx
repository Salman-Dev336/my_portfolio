const projects = [
  {
    number: '01',
    type: 'Full-stack platform',
    title: 'Taskflow',
    description: 'A calm, focused workspace that turns ambitious plans into clear daily action.',
    tags: ['React', 'Node.js', 'MongoDB'],
    accent: 'orange',
  },
  {
    number: '02',
    type: 'E-commerce experience',
    title: 'Nook & Co.',
    description: 'A considered storefront with a smooth path from discovery to checkout.',
    tags: ['React', 'Redux', 'Tailwind'],
    accent: 'dark',
  },
  {
    number: '03',
    type: 'Analytics dashboard',
    title: 'Metricly',
    description: 'An at-a-glance dashboard that makes product performance easy to understand.',
    tags: ['JavaScript', 'Charts', 'API'],
    accent: 'cream',
  },
]

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M5 19 19 5M8 5h11v11" />
  </svg>
)

const Preview = ({ accent }) => (
  <div className={`project-preview project-preview--${accent}`} aria-hidden="true">
    <span className="preview-orb" />
    <div className="preview-window">
      <div className="preview-top"><i /><i /><i /></div>
      <div className="preview-content">
        <span className="preview-label" />
        <span className="preview-heading" />
        <div className="preview-columns"><span /><span /><span /></div>
      </div>
    </div>
  </div>
)

const Projects = () => (
  <section id="projects" className="projects-section px-8 py-24 sm:px-12 lg:px-20 lg:py-32">
    <div className="mx-auto max-w-7xl">
      <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="section-kicker">Selected work <span /></p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">A few things I’ve<br className="hidden sm:block" /> brought to life.</h2>
        </div>
        <p className="max-w-xs text-sm leading-6 text-zinc-500 sm:text-base">Thoughtful interfaces and reliable experiences, made for people first.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article className="project-card group" style={{ '--delay': `${index * 110}ms` }} key={project.title}>
            <Preview accent={project.accent} />
            <div className="p-6 sm:p-7">
              <div className="mb-7 flex items-center justify-between text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
                <span>{project.number}</span><span>{project.type}</span>
              </div>
              <h3 className="text-2xl font-bold tracking-[-0.03em]">{project.title}</h3>
              <p className="mt-3 min-h-12 text-sm leading-6 text-zinc-500">{project.description}</p>
              <div className="mt-6 flex items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="project-tag">{tag}</span>)}</div>
                <a href="#contact" aria-label={`Discuss a project like ${project.title}`} className="project-link"><Arrow /></a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <a href="#contact" className="all-projects-link">Have a project in mind? <span>Let’s talk <Arrow /></span></a>
    </div>
  </section>
)

export default Projects
