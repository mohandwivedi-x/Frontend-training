function Resume() {
  const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 mr-1.5"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 mr-1.5"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 mr-1.5"
  >
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 mr-1.5"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);
  return (
    <div className="max-w-4xl mx-auto my-10 p-10 bg-white text-slate-800 font-sans shadow-xl">
      {/* --- HEADER --- */}
      <header className="flex flex-col items-center text-center mb-8 border-b pb-6">
        <h1 className="text-5xl font-bold text-slate-900">Manmohan Dwivedi</h1>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 text-sm text-slate-600">
          <a
            href="https://github.com/yourusername"
            className="flex items-center hover:text-blue-600"
          >
            <GithubIcon />
            <span>Github</span>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            className="flex items-center hover:text-blue-600"
          >
            <LinkedinIcon />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:mohan.dwivedi@outlook.com"
            className="flex items-center hover:text-blue-600"
          >
            <MailIcon />
            <span>mohan.dwivedi@outlook.com</span>
          </a>
          <span className="flex items-center">
            <PhoneIcon />
            <span>+91 7897692905</span>
          </span>
        </div>
      </header>

      <main className="space-y-10">
        {/* --- SUMMARY --- */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2 mb-4">
            Summary
          </h2>
          <p className="text-slate-700">
            Highly motivated Backend Developer with over a year of hands-on
            experience in designing, developing, and maintaining scalable
            backend systems and RESTful APIs. Proficient in Node.js, Express.js,
            and Java (Spring Boot) with a strong foundation in database design
            and optimization using both MongoDB and SQL. Collaborative team
            player with experience integrating backend services with React
            applications and a keen interest in contributing to AI/ML-driven
            projects.
          </p>
        </section>

        {/* --- SKILLS --- */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2 mb-4">
            Technical Skills
          </h2>
          <div className="space-y-2 text-slate-700">
            <p>
              <span className="font-semibold">Backend:</span> Node.js,
              Express.js, Java, Spring Boot, Hibernate, RESTful API Design,
              Microservices Architecture
            </p>
            <p>
              <span className="font-semibold">Frontend:</span> React.js,
              Redux-Toolkit (RTK), JavaScript, Tailwind CSS, Bootstrap
            </p>
            <p>
              <span className="font-semibold">Databases:</span> MongoDB (NoSQL),
              SQL (PostgreSQL, MySQL)
            </p>
            <p>
              <span className="font-semibold">Tools & Platforms:</span> Git,
              GitHub, Postman, Docker, SonarQube, Cloudinary, VS Code, IntelliJ
              IDEA
            </p>
            <p>
              <span className="font-semibold">Languages:</span> JavaScript,
              Java, Python
            </p>
          </div>
        </section>

        {/* --- EXPERIENCE --- */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2 mb-4">
            Experience
          </h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold">TGH Software Solutions</h3>
                  <p className="font-semibold text-slate-700">
                    Software Engineer
                  </p>
                </div>
                <div className="text-right text-sm text-slate-600">
                  <p>July 2024 - October 2024</p>
                  <p>Remote</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>
                  Developed and maintained backend integration processes
                  connecting disparate systems like Salesforce, Slack, and
                  MySQL.
                </li>
                <li>
                  Engineered real-time data flow solutions, ensuring high
                  performance and reliability across integrated platforms.
                </li>
                <li>
                  Authored and optimized over 10 Groovy scripts to automate data
                  transformation, boosting process efficiency by 25%.
                </li>
                <li>
                  Actively participated in designing, deploying, and
                  troubleshooting complex integration workflows to enhance
                  system stability.
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold">Digicane Systems</h3>
                  <p className="font-semibold text-slate-700">
                    Software Developer Intern
                  </p>
                </div>
                <div className="text-right text-sm text-slate-600">
                  <p>April 2023 - June 2023</p>
                  <p>On Site, Noida</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>
                  Collaborated in a cross-functional team on AI/ML projects
                  focused on advanced video and image processing.
                </li>
                <li>
                  Contributed to data preprocessing and dataset refinement for
                  machine learning models, improving model accuracy.
                </li>
                <li>
                  Developed Python scripts to automate complex video and image
                  processing tasks, reducing manual effort.
                </li>
                <li>
                  Gained hands-on experience in debugging systems, optimizing
                  code performance, and working with large-scale datasets.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- PROJECTS --- */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2 mb-4">
            Projects
          </h2>
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">
                  Devfolio - Full-Stack Portfolio Platform
                </h3>
                <p className="text-sm text-slate-600 font-semibold">
                  Jan 2024 - May 2024
                </p>
              </div>
              <p className="text-sm">
                <span className="font-semibold">Technologies Used:</span> MERN
                (Node.js, Express.js, MongoDB, React.js), JWT, RTK, Cloudinary,
                Git
              </p>
              <ul className="list-disc list-inside text-slate-700">
                <li>
                  Designed and developed a scalable backend system for a MERN
                  application where developers can manage professional
                  portfolios.
                </li>
                <li>
                  Built and optimized RESTful APIs for seamless integration with
                  the React frontend, enabling dynamic content and social
                  profile aggregation.
                </li>
                <li>
                  Implemented secure JWT-based authentication and authorization
                  to protect user data and manage access to API endpoints.
                </li>
              </ul>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">
                  Journal-X - Backend API for Blogging
                </h3>
                <p className="text-sm text-slate-600 font-semibold">
                  Nov 2023 - Dec 2023
                </p>
              </div>
              <p className="text-sm">
                <span className="font-semibold">Technologies Used:</span> Java,
                Spring Boot, Hibernate, MongoDB, JWT, Git
              </p>
              <ul className="list-disc list-inside text-slate-700">
                <li>
                  Engineered a robust and secure backend for a blogging platform
                  using Java and Spring Boot, adhering to RESTful API design
                  principles.
                </li>
                <li>
                  Implemented secure endpoints with JWT authentication,
                  comprehensive input validation, and robust error handling to
                  ensure high reliability and scalability.
                </li>
              </ul>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">
                  StreamNest - Video Platform Backend
                </h3>
                <p className="text-sm text-slate-600 font-semibold">
                  Sep 2023 - Oct 2023
                </p>
              </div>
              <p className="text-sm">
                <span className="font-semibold">Technologies Used:</span>{" "}
                Node.js, Express.js, MongoDB, JWT, Cloudinary, Git
              </p>
              <ul className="list-disc list-inside text-slate-700">
                <li>
                  Architected a high-performance backend system using Node.js
                  for a video-sharing social media application.
                </li>
                <li>
                  Designed and implemented RESTful APIs for core functionalities
                  including video uploads, user interactions, and content
                  delivery, ensuring a scalable architecture.
                </li>
              </ul>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">
                  Notice-X - API Feature Development
                </h3>
                <p className="text-sm text-slate-600 font-semibold">
                  July 2023 - Aug 2023
                </p>
              </div>
              <p className="text-sm">
                <span className="font-semibold">Technologies Used:</span> Spring
                Boot, Hibernate, JPA, PostgreSQL, Git
              </p>
              <ul className="list-disc list-inside text-slate-700">
                <li>
                  Contributed to a freelance project by developing a key
                  user-interest feature, creating secure and scalable REST APIs
                  with Spring Boot and JPA to deliver personalized content.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- EDUCATION --- */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2 mb-4">
            Education
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold text-lg">
                  Master of Computer Applications (MCA)
                </h3>
                <p className="text-slate-600">
                  KIET Group of Institutions, Ghaziabad
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold">2022-2024</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold text-lg">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="text-slate-600">M.J.P.R.U, Bareilly</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">2018-2021</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- CERTIFICATES --- */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2 mb-4">
            Certifications
          </h2>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>
              <span className="font-semibold">
                Associate Integration Developer
              </span>{" "}
              - Boomi (2024)
            </li>
            <li>
              <span className="font-semibold">
                Machine Learning Foundations
              </span>{" "}
              - AWS Academy (2024)
            </li>
            <li>
              <span className="font-semibold">
                Java Programming Certification
              </span>{" "}
              - Udemy (2023)
            </li>
            <li>
              <span className="font-semibold">Python Programming</span> - Great
              Learning (2023)
            </li>
            <li>
              <span className="font-semibold">
                JavaScript Essentials 1 (JSE)
              </span>{" "}
              - Cisco Networking Academy (2023)
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Resume;