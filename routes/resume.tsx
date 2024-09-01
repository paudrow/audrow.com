import { PageLayout } from "../components/PageLayout.tsx";

export default function Resume() {
  const resumeData = {
    name: "Audrow Nash",
    title: "Software Engineer & Robotics Enthusiast",
    contact: {
      email: "audrow@hey.com",
      location: "San Antonio, TX",
    },
    summary:
      "Passionate software engineer with expertise in robotics, web development, and open-source contributions. Experienced in creating educational content and fostering community engagement in the robotics field.",
    experience: [
      {
        company: "Open Robotics",
        position: "Software Engineer",
        duration: "2020 - Present",
        responsibilities: [
          "Develop and maintain core ROS 2 packages",
          "Create educational content for the robotics community",
          "Engage with the open-source robotics community",
        ],
      },
      {
        company: "Robotic Materials",
        position: "Robotics Software Engineer",
        duration: "2019 - 2020",
        responsibilities: [
          "Developed software for robotic manipulation tasks",
          "Implemented computer vision algorithms for object detection",
          "Contributed to the company's ROS-based software stack",
        ],
      },
    ],
    education: {
      degree: "Ph.D. in Mechanical Engineering",
      institution: "University of California, San Diego",
      year: "2020",
    },
    skills: [
      "Python",
      "C++",
      "ROS/ROS 2",
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Git",
      "Docker",
    ],
    projects: [
      {
        name: "ROS 2 Podcast",
        description:
          "Host of a podcast discussing Robot Operating System (ROS) 2 and its ecosystem",
        url: "https://www.ros2podcast.com/",
      },
      {
        name: "Open Robotics Contributions",
        description:
          "Significant contributions to various ROS 2 packages and documentation",
        url: "https://github.com/ros2",
      },
    ],
  };

  return (
    <PageLayout currentPage="resume">
      <div className="space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-lightmode-accent-500 dark:text-darkmode-accent-500">
            {resumeData.name}
          </h1>
          <p className="text-xl">
            {resumeData.title}
          </p>
          <div className="mt-2 text-sm">
            <p>{resumeData.contact.email}</p>
            <p>{resumeData.contact.location}</p>
          </div>
        </header>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-lightmode-accent-500 dark:text-darkmode-accent-500">
            Summary
          </h2>
          <p>
            {resumeData.summary}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-lightmode-accent-500 dark:text-darkmode-accent-500">
            Experience
          </h2>
          {resumeData.experience.map((job, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{job.position}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {job.company} | {job.duration}
              </p>
              <ul className="list-disc list-inside mt-2">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-lightmode-accent-500 dark:text-darkmode-accent-500">
            Education
          </h2>
          <p className="font-semibold">{resumeData.education.degree}</p>
          <p className="text-gray-600 dark:text-gray-400">
            {resumeData.education.institution}, {resumeData.education.year}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-lightmode-accent-500 dark:text-darkmode-accent-500">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-lightmode-accent-500 dark:text-darkmode-accent-500">
            Projects
          </h2>
          {resumeData.projects.map((project, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-lightmode-text dark:text-darkmode-text">
                {project.description}
              </p>
              <a
                href={project.url}
                className="text-lightmode-accent-500 dark:text-darkmode-accent-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more
              </a>
            </div>
          ))}
        </section>
      </div>
    </PageLayout>
  );
}
