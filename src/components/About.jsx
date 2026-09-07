const AboutPage = () => {
  return (
    <section
      id="about"
      className="min-h-[min(760px,100svh)] px-8 sm:px-12 lg:px-20 py-24 flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* LEFT SIDE */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">About Me</h3>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Why Hire Me For Your
            <span className="text-[#FD6F00]"> Next Project?</span>
          </h1>

          <p className="text-gray-600 leading-8 max-w-2xl">
            I am a passionate Full Stack Developer focused on building
            responsive and modern web applications. I specialize in React.js,
            Tailwind CSS, Redux Toolkit, and backend technologies like Node.js
            and MongoDB to create clean, scalable, and user-friendly digital
            experiences.
          </p>
        </div>

        <div className="about-highlight">
          <span className="about-highlight-mark">✦</span>
          <p>From first idea to final detail, I focus on experiences that are clear, useful and memorable.</p>
          <div><strong>01</strong><span>Thoughtful design<br />meets solid code</span></div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
