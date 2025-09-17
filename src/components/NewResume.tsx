function NewResume() {
  // You can add these SVGs as separate components or use a library like react-icons
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );

  return (
    <div className="max-w-4xl mx-auto my-10 p-10 bg-white text-slate-800 font-sans shadow-xl">
      {/* --- HEADER --- */}
      <header className="flex flex-col items-center text-center mb-8 border-b pb-6">
        <h1 className="text-5xl font-bold text-slate-900">Manmohan Dwivedi</h1>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 text-sm text-slate-600">
          <a href="#" className="flex items-center hover:text-blue-600">
            <GithubIcon />
            <span>Github</span>
          </a>
          <a href="#" className="flex items-center hover:text-blue-600">
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
        {/* --- EDUCATION --- */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2 mb-4">
            Education
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold text-lg">MCA</h3>
                <p className="text-slate-600">
                  KIET Group of Institutions Ghaziabad
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold">2022-2024</p>
                <p className="text-slate-600">70%</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold text-lg">BCA</h3>
                <p className="text-slate-600">M.J.P.R.U Bareilly</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">2018-2021</p>
                <p className="text-slate-600">68%</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold text-lg">Intermediate</h3>
                <p className="text-slate-600">UP Board</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">2017-2018</p>
                <p className="text-slate-600">75%</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold text-lg">High-school</h3>
                <p className="text-slate-600">UP Board</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">2015-2016</p>
                <p className="text-slate-600">77%</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SKILLS --- */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2 mb-4">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="font-semibold">Languages:</span> Java,
              JavaScript, Python
            </div>
            <div>
              <span className="font-semibold">Database:</span> MongoDB, SQL
            </div>
            <div className="md:col-span-2">
              <span className="font-semibold">Frameworks & Libraries:</span>{" "}
              Node.js, Express.js, React.js, Spring Boot, Hibernate, Tailwind,
              Bootstrap
            </div>
            <div className="md:col-span-2">
              <span className="font-semibold">Tools & IDs:</span> Git, Github,
              Cloudinary, Eraser.io, Postman, sonarqube, Redux-Toolkit (RTK),
              IntelliJ idea, vs code
            </div>
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
                  Trained as an Integration Developer, focusing on mastering
                  integration tools such as Dell Boomi.
                </li>
                <li>
                  Worked on real-time integration projects involving Solace
                  Queue, Salesforce, Slack, and MySQL.
                </li>
                <li>
                  Developed and optimized over 10 Groovy scripts, increasing
                  process efficiency by 25% for seamless workflows.
                </li>
                <li>
                  Gained expertise in designing, deploying, and troubleshooting
                  integration processes across diverse platforms.
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
                  Collaborated on real-world projects focused on video and image
                  processing.
                </li>
                <li>
                  Prepared and fine-tuned datasets for machine learning models
                  to enhance performance.
                </li>
                <li>
                  Designed and implemented Python scripts for automating video
                  and image processing tasks.
                </li>
                <li>
                  Gained hands-on experience with data preprocessing, debugging,
                  and performance optimization.
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
                <h3 className="text-lg font-bold">Devfolio</h3>
                <p className="text-sm text-slate-600 font-semibold">
                  December 2024 - Present
                </p>
              </div>
              <p className="text-sm">
                <span className="font-semibold">Technologies Used:</span> MERN
                (Node.js, Express.js, MongoDB, React), JWT, Cloudinary, Git &
                Github, Postman, RTK
              </p>
              <ul className="list-disc list-inside text-slate-700">
                <li>
                  Developed Devfolio, a platform for developers to showcase
                  projects, skill sets, and experiences.
                </li>
                <li>
                  Designed a user-centric dashboard to integrate and display
                  social profiles (LinkedIn, Twitter, etc.) and activity.
                </li>
                <li>
                  Implemented scalable backend architecture with secure APIs,
                  ensuring seamless portfolio management and social engagement.
                </li>
              </ul>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">Journal-X</h3>
                <p className="text-sm text-slate-600 font-semibold">
                  October 2024 - November 2024
                </p>
              </div>
              <p className="text-sm">
                <span className="font-semibold">Technologies Used:</span> Java,
                Spring Boot, Hibernate, MongoDB, Postman, Git & Github
              </p>
              <ul className="list-disc list-inside text-slate-700">
                <li>
                  Built a secure blogging backend with Spring Boot, MongoDB, and
                  JWT for authentication.
                </li>
                <li>
                  Added input validation, secure endpoints, and comprehensive
                  error handling, ensuring reliable API functionality and
                  scalability.
                </li>
              </ul>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">StreamNest</h3>
                <p className="text-sm text-slate-600 font-semibold">
                  September 2024 - September 2024
                </p>
              </div>
              <p className="text-sm">
                <span className="font-semibold">Technologies Used:</span>{" "}
                Node.js, Express.js, MongoDB, JWT, Cloudinary, Postman, Git &
                Github
              </p>
              <ul className="list-disc list-inside text-slate-700">
                <li>
                  Developed StreamNest, a backend system enabling video-based
                  tweets and social interactions.
                </li>
                <li>
                  Built secure APIs with JWT authentication, MongoDB
                  integration, and file management for scalable, user-engaged
                  functionality.
                </li>
              </ul>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">Notice-X</h3>

                <p className="text-sm text-slate-600 font-semibold">
                  June 2024 - July 2024
                </p>
              </div>
              <p className="text-sm">
                <span className="font-semibold">Technologies Used:</span> Spring
                Boot, Hibernate, JPA, Postgresql, Postman, Git & bitbucket
              </p>
              <ul className="list-disc list-inside text-slate-700">
                <li>
                  Contributed to the Notice-X freelance project by developing
                  the user interests feature, creating secure and scalable APIs
                  to enable personalized functionality and enhance user
                  experience.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- CERTIFICATES --- */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2 mb-4">
            Certificates
          </h2>
          <ul className="list-disc list-inside space-y-1">
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
            <li>
              <span className="font-semibold">GitHub Basics Guide</span> - Udemy
              (2023)
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default NewResume;
