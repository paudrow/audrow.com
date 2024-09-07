import { PageLayout } from "../components/PageLayout.tsx";
import * as z from "npm:zod";
import { CONTACT_INFO, RESUME_FILE_URL, SOCIAL_LINKS } from "../constants.ts";
import { Button } from "../components/Button.tsx";

const ResumeSchema = z.object({
  name: z.string(),
  title: z.string(),
  contact: z.object({
    email: z.string(),
    location: z.string(),
    phone: z.string(),
    website: z.string(),
    github: z.string(),
    linkedin: z.string(),
    x: z.string(),
  }),
  summary: z.string(),
  experience: z.array(z.object({
    organization: z.string(),
    url: z.string().optional(),
    position: z.string(),
    duration: z.string(),
    responsibilities: z.array(z.string()),
    hide: z.boolean().optional(),
  })),
  education: z.array(z.object({
    degree: z.string(),
    institution: z.string(),
    url: z.string(),
    year: z.string(),
    details: z.string(),
  })),
  skills: z.array(z.object({
    category: z.string(),
    strongest: z.array(z.string()),
    familiar: z.array(z.string()),
  })),
  projects: z.array(z.object({
    name: z.string(),
    description: z.string(),
    duration: z.string(),
    role: z.string(),
    url: z.string().optional(),
    hide: z.boolean().optional(),
  })),
  awards: z.array(z.object({
    name: z.string(),
    organization: z.string(),
    url: z.string(),
    year: z.string(),
  })),
  interests: z.object({
    professional: z.array(z.string()),
    personal: z.array(z.string()),
  }),
});

const DownloadResumeButton = () => {
  return (
    <Button
      as="a"
      href={RESUME_FILE_URL}
      download
    >
      Download Resume (PDF)
    </Button>
  );
};

const formatUrl = (url: string, maxLength: number = 30) => {
  const formatted = url.replace(/https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  if (formatted.length > maxLength) {
    return new URL(url).hostname.replace(/^www\./, "");
  }
  return formatted;
};

export default function Resume() {
  const resumeData = ResumeSchema.parse({
    name: CONTACT_INFO.NAME,
    title: CONTACT_INFO.TITLE,
    contact: {
      email: CONTACT_INFO.EMAIL,
      location: CONTACT_INFO.LOCATION,
      phone: CONTACT_INFO.PHONE,
      website: CONTACT_INFO.WEBSITE,
      github: SOCIAL_LINKS.GITHUB,
      linkedin: SOCIAL_LINKS.LINKEDIN,
      x: SOCIAL_LINKS.X,
    },
    summary:
      "Software engineer at Intrinsic AI and host of the Audrow Nash Podcast. Experienced in robotics and middleware development, with a strong background in research and open-source contributions.",
    experience: [
      {
        organization: "Intrinsic",
        url: "https://intrinsic.ai",
        position: "Software Engineer",
        duration: "01/2023 - Present",
        responsibilities: [
          "Working on cutting-edge robotics and AI technologies",
          "Continued work on ROS 2 following the acquisition of Open Robotics",
        ],
      },
      {
        organization: "Open Robotics (acquired by Intrinsic)",
        url: "https://www.openrobotics.org",
        position: "Software Engineer",
        duration: "01/2021 - 12/2022",
        responsibilities: [
          "Made core changes to ROS 2's C++ client library, including redesigning fundamental components to use C++17 features",
          "Solved several race conditions in ROS 2's C++ client library's multi-threaded executor",
          "Managed community contributions to various public repositories",
        ],
      },
      {
        organization: "University of Southern California",
        url: "https://www.usc.edu",
        position: "Research Assistant",
        duration: "05/2018 - 12/2020",
        responsibilities: [
          "Designed and implemented an 8-week in-home interaction using ROS 1 and Python",
          "Mentored five undergraduate and three master's students",
        ],
      },
      {
        organization: "1X Robotics (formerly Halodi Robotics)",
        url: "https://1x.ai",
        position: "Intern",
        duration: "06/2019 - 08/2019",
        responsibilities: [
          "Implemented a way for their humanoid robot to mirror arm motions",
        ],
        hide: true,
      },
      {
        organization: "University of Michigan",
        url: "https://umich.edu",
        position: "Research Assistant",
        duration: "08/2015 - 05/2018",
        responsibilities: [
          "Implemented a fast 2D rigid body simulator in C++",
          "Used the simulator to tune control parameters for a bipedal robot",
        ],
      },
    ],
    education: [
      {
        degree: "MS in Computer Science",
        institution: "University of Southern California",
        url: "https://www.usc.edu",
        year: "2020",
        details: "Advisor: Maja Matarić",
      },
      {
        degree: "MS in Electrical Engineering",
        institution: "University of Michigan",
        url: "https://umich.edu",
        year: "2018",
        details: "Advisors: David Remy and Edwin Olson",
      },
      {
        degree: "BS in Electrical Engineering",
        institution: "University of North Carolina at Charlotte",
        url: "https://www.uncc.edu",
        year: "2014",
        details: "Advisor: James Conrad",
      },
    ],
    skills: [
      {
        category: "Programming",
        strongest: ["Python", "C/C++", "JavaScript/TypeScript"],
        familiar: ["Rust", "Go", "Bash", "Lua"],
      },
      {
        category: "Robotics & Systems",
        strongest: ["ROS 2", "Ubuntu/Debian"],
        familiar: ["ROS 1", "Gazebo"],
      },
      {
        category: "Web & DevOps",
        strongest: ["Deno", "Git", "Docker"],
        familiar: ["Node.js", "Angular", "React", "PostgreSQL"],
      },
    ],
    projects: [
      {
        name: "Audrow Nash Podcast",
        description:
          "Host of a podcast discussing robotics and AI technologies",
        duration: "Present",
        role: "Host",
        url: "https://www.audrownashpodcast.com/",
      },
      {
        name: "Sense Think Act Podcast",
        description:
          "Host of a podcast discussing robotics and AI technologies",
        duration: "03/2019 - 05/2023",
        role: "Host",
        url: "https://www.sensethinkact.com/",
        hide: true,
      },
      {
        name: "Robohub Podcast",
        description:
          "Led an international team of 15 people in publishing 160 podcast episodes and raised donations of around 20k USD",
        duration: "03/2014 - 05/2020",
        role: "Podcast Director",
        url: "https://robohub.org/podcast/",
        hide: true,
      },
    ],
    awards: [
      {
        name: "Graduate Research Fellowship",
        organization: "National Science Foundation",
        url:
          "https://ece.engin.umich.edu/stories/audrow-nash-earns-nsf-fellowship-for-unmanned-aerial-vehicle-research",
        year: "2016",
      },
    ],
    interests: {
      professional: [
        "Robot middleware",
        "Manufacturing",
        "Simulation",
        "Web development",
      ],
      personal: ["Improv", "Podcasting", "Rock climbing"],
    },
  });

  return (
    <PageLayout currentPage="resume" title="Resume">
      <div className="space-y-6 print:space-y-4">
        <section className="text-center mb-6 print:mb-4 print:break-inside-avoid">
          <h1 className="text-4xl font-bold text-lightmode-accent-500 dark:text-darkmode-accent-500 mb-2 print:text-3xl">
            {resumeData.name}
          </h1>
          <p className="text-xl mb-4 print:text-lg print:mb-2">
            {resumeData.title}
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm print:text-xs">
            <a
              href={`mailto:${resumeData.contact.email}`}
              className="hover:underline"
            >
              {resumeData.contact.email}
            </a>
            <span>{resumeData.contact.location}</span>
            <a
              href={resumeData.contact.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {formatUrl(resumeData.contact.website)}
            </a>
            <a
              href={resumeData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {formatUrl(resumeData.contact.github)}
            </a>
            <a
              href={resumeData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {formatUrl(resumeData.contact.linkedin)}
            </a>
          </div>
        </section>

        <section className="text-center mb-6 print:hidden">
          <DownloadResumeButton />
        </section>

        <section className="print:text-sm print:break-inside-avoid">
          <h2 className="text-2xl font-semibold mb-2 text-lightmode-accent-500 dark:text-darkmode-accent-500 print:text-xl">
            Summary
          </h2>
          <p>{resumeData.summary}</p>
        </section>

        <section className="print:text-sm print:break-inside-avoid">
          <h2 className="text-2xl font-semibold mb-3 text-lightmode-accent-500 dark:text-darkmode-accent-500 print:text-xl">
            Experience
          </h2>
          {resumeData.experience
            .filter((job) => !job.hide)
            .map((job, index) => (
              <div key={index} className="mb-4 print:mb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold print:text-lg">
                      {job.position}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {job.url
                        ? (
                          <a
                            href={job.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {job.organization}
                          </a>
                        )
                        : (
                          job.organization
                        )}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {job.duration}
                  </p>
                </div>
                <ul className="list-disc list-inside mt-2 print:mt-1">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
        </section>

        <section className="print:text-sm print:break-inside-avoid">
          <h2 className="text-2xl font-semibold mb-3 text-lightmode-accent-500 dark:text-darkmode-accent-500 print:text-xl">
            Skills
          </h2>
          {resumeData.skills.map((skill, index) => (
            <div key={index} className="mb-3 print:mb-2">
              <h3 className="text-xl font-semibold print:text-lg">
                {skill.category}
              </h3>
              <p>
                <strong>Strongest:</strong> {skill.strongest.join(", ")}
                {skill.familiar.length > 0 && (
                  <>
                    <span className="mx-2">|</span>
                    <strong>Familiar:</strong> {skill.familiar.join(", ")}
                  </>
                )}
              </p>
            </div>
          ))}
        </section>

        <section className="print:text-sm print:break-inside-avoid">
          <h2 className="text-2xl font-semibold mb-3 text-lightmode-accent-500 dark:text-darkmode-accent-500 print:text-xl">
            Projects
          </h2>
          {resumeData.projects
            .filter((project) => !project.hide)
            .map((project, index) => (
              <div key={index} className="mb-3 print:mb-2">
                <h3 className="text-xl font-semibold print:text-lg">
                  {project.name}
                </h3>
                <p className="text-lightmode-text dark:text-darkmode-text">
                  {project.description}
                </p>
                <p className="text-lightmode-text dark:text-darkmode-text">
                  {project.duration} | {project.role}
                  {project.url && (
                    <>
                      {" | "}
                      <a
                        href={project.url}
                        className="text-lightmode-accent-500 dark:text-darkmode-accent-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {formatUrl(project.url)}
                      </a>
                    </>
                  )}
                </p>
              </div>
            ))}
        </section>

        <section className="print:text-sm print:break-inside-avoid">
          <h2 className="text-2xl font-semibold mb-3 text-lightmode-accent-500 dark:text-darkmode-accent-500 print:text-xl">
            Education
          </h2>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-3 print:mb-2">
              <p className="font-semibold">{edu.degree}</p>
              <p className="text-gray-600 dark:text-gray-400">
                <a
                  href={edu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {edu.institution}
                </a>, {edu.year} | {edu.details}
              </p>
            </div>
          ))}
        </section>

        <section className="print:text-sm print:break-inside-avoid">
          <h2 className="text-2xl font-semibold mb-3 text-lightmode-accent-500 dark:text-darkmode-accent-500 print:text-xl">
            Awards
          </h2>
          {resumeData.awards.map((award, index) => (
            <div key={index} className="mb-3 print:mb-2">
              <h3 className="text-xl font-semibold print:text-lg">
                {award.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {award.organization} | {award.year}
                {award.url && (
                  <>
                    {" | "}
                    <a
                      href={award.url}
                      className="text-lightmode-accent-500 dark:text-darkmode-accent-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {formatUrl(award.url)}
                    </a>
                  </>
                )}
              </p>
            </div>
          ))}
        </section>

        <section className="print:text-sm print:break-inside-avoid">
          <h2 className="text-2xl font-semibold mb-3 text-lightmode-accent-500 dark:text-darkmode-accent-500 print:text-xl">
            Interests
          </h2>
          <div>
            <p>
              <strong>Professional:</strong>{" "}
              {resumeData.interests.professional.join(", ")}
            </p>
            <p>
              <strong>Personal:</strong>{" "}
              {resumeData.interests.personal.join(", ")}
            </p>
          </div>
        </section>

        <section className="text-center pt-16 print:hidden">
          <DownloadResumeButton />
        </section>
      </div>
    </PageLayout>
  );
}
