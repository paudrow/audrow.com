import { PageLayout } from "../components/PageLayout.tsx";
import { RESUME_DATA, RESUME_FILE_URL } from "../constants.ts";
import { Button } from "../components/Button.tsx";
import { PageProps } from "$fresh/server.ts";

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

export default function Resume(props: PageProps) {
  const { url } = props;
  const resumeData = RESUME_DATA;

  return (
    <PageLayout
      currentPage="resume"
      title="Resume"
      url={url}
      description="Audrow Nash's resume"
    >
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
                <ul className="list-disc list-outside pl-5 mt-2 print:mt-1">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="relative pl-1.5 pb-1">
                      <span className="inline-block align-top">{resp}</span>
                    </li>
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
