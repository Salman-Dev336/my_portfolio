const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M5 19 19 5M8 5h11v11" />
  </svg>
)

const Contact = () => (
  <section id="contact" className="contact-section px-8 py-24 sm:px-12 lg:px-20 lg:py-32">
    <div className="contact-inner mx-auto max-w-7xl">
      <div className="contact-intro">
        <p className="section-kicker">Get in touch <span /></p>
        <h2>Let’s make something<br /><em>great</em> together.</h2>
        <p className="contact-copy">Have a project, an idea, or simply want to say hello? My inbox is always open.</p>
        <a className="contact-email" href="mailto:hello@salmankhan.dev">hello@salmankhan.dev <Arrow /></a>
        <div className="contact-socials">
          <a href="#contact">LinkedIn</a><a href="#contact">GitHub</a><a href="#contact">Instagram</a>
        </div>
      </div>

      <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
        <div className="form-field"><label htmlFor="name">Your name</label><input id="name" name="name" type="text" placeholder="What should I call you?" /></div>
        <div className="form-field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" placeholder="you@company.com" /></div>
        <div className="form-field"><label htmlFor="message">Tell me a little about it</label><textarea id="message" name="message" rows="4" placeholder="What are we creating?" /></div>
        <button type="submit" className="send-button">Send message <Arrow /></button>
        <p className="form-note">Usually replies within 1–2 business days.</p>
      </form>
    </div>
    <footer className="site-footer"><span>© {new Date().getFullYear()} Salman Khan</span><span>Designed &amp; built with care.</span></footer>
  </section>
)

export default Contact
