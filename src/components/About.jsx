const stats = [
  { value: "2+", label: "Years\nExperience" },
  { value: "15+", label: "Projects\nCompleted" },
  { value: "100%", label: "Client\nSatisfaction" },
];

const AboutPage = () => {
  return (
    <section
      id="about"
      className="about-section min-h-[min(760px,100svh)] px-8 sm:px-12 lg:px-20 py-24 flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* LEFT SIDE */}
        <div className="flex-1">
          <p className="section-kicker">About me <span /></p>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6 mt-4 leading-tight tracking-[-0.04em]">
            Why Hire Me For Your
            <span className="about-accent-text"> Next Project?</span>
          </h2>

          <p className="text-gray-600 leading-8 max-w-2xl">
            I am a passionate Full Stack Developer focused on building
            responsive and modern web applications. I specialize in React.js,
            Tailwind CSS, Redux Toolkit, and backend technologies like Node.js
            and MongoDB to create clean, scalable, and user-friendly digital
            experiences.
          </p>

          {/* Stats row */}
          <div className="about-stats mt-10">
            {stats.map((stat) => (
              <div className="about-stat" key={stat.value}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
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
