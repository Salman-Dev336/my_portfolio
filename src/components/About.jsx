import React from "react";

const AboutPage = () => {
  const skills = [
    { name: "React JS", percentage: "100%" },
    { name: "Tailwind CSS", percentage: "100%" },
    { name: "Redux Toolkit", percentage: "100%" },
    { name: "JavaScript", percentage: "90%" },
    { name: "Node JS", percentage: "50%" },
    { name: "MongoDB", percentage: "50%" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen px-8 sm:px-12 lg:px-20 py-16 flex items-center"
    >
      <div className="w-full flex flex-col lg:flex-row gap-16">
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

        {/* RIGHT SIDE SKILLS */}
        <div className="flex-1 flex flex-col gap-6">
          {skills.map((skill, index) => (
            <div key={index}>
              {/* Skill Name + Percentage */}
              <div className="flex justify-between mb-2">
                <h2 className="font-semibold text-sm sm:text-base">
                  {skill.name}
                </h2>

                <span className="text-[#FD6F00] font-medium">
                  {skill.percentage}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#FD6F00] rounded-full"
                  style={{ width: skill.percentage }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
