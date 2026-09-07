import profileImage from "../assets/images/image.png";

const Arrow = () => <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 19 19 5M8 5h11v11" /></svg>

const Hero = () => (
  <section id="home" className="hero-section px-8 pt-20 sm:px-12 lg:px-20">
    <span className="hero-sun" aria-hidden="true" />
    <div className="hero-layout mx-auto flex min-h-[min(760px,100svh)] max-w-7xl flex-col items-center gap-12 py-16 lg:flex-row lg:gap-20">
      <div className="hero-copy max-w-3xl text-start">
        <p className="hero-eyebrow"><span className="pulse-dot" />Available for new projects</p>
        <p className="mt-7 text-sm font-semibold uppercase tracking-[.2em] text-zinc-500">Hi, I’m <span className="text-[#FD6F00]">Salman Khan</span></p>
        <h1 className="hero-title mt-3">I build digital<br /><span>experiences</span> that<br />people enjoy.</h1>
        <p className="hero-description">Full Stack Developer with a focus on creating thoughtful, responsive web applications that look as good as they work.</p>
        <div className="hero-actions"><a href="#contact" className="hero-primary">Let’s work together <Arrow /></a><a href="#projects" className="hero-secondary">View my work <span>↓</span></a></div>
        <div className="hero-trust"><span>React</span><i /><span>Node.js</span><i /><span>MongoDB</span></div>
      </div>
      <div className="hero-portrait flex items-center justify-center lg:ml-auto">
        <div className="portrait-shape" /><div className="portrait-ring" />
        <div className="portrait-image"><img src={profileImage} alt="Salman Khan" /></div>
        <div className="portrait-tag portrait-tag--top"><span>✦</span><div><strong>Creative</strong><small>developer</small></div></div>
        <div className="portrait-tag portrait-tag--bottom"><span className="tag-code">&lt;/&gt;</span><div><strong>2+ years</strong><small>of building</small></div></div>
      </div>
    </div>
  </section>
);

export default Hero;
