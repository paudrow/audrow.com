import { PageLayout } from "../components/PageLayout.tsx";
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "../components/Icons.tsx";
import { PROJECTS_URL, RESUME_FILE_URL, SOCIAL_LINKS } from "../constants.ts";
import { getProjects } from "../utils/projects.ts";
import { Project } from "../types.ts";
import { WORK_EXPERIENCE } from "../constants.ts";
import { WorkExperience } from "../types.ts";

function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="flex gap-4">
      <a
        href={`/project/${project.slug}`}
        className="w-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition duration-150 ease-in-out rounded-lg p-2"
      >
        <dl className="flex flex-auto flex-wrap gap-x-2">
          <dt className="sr-only">Project</dt>
          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {project.name}
          </dd>
          <dt className="sr-only">Description</dt>
          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
            {project.description}
          </dd>
          <dt className="sr-only">Date</dt>
          <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
            <time dateTime={project.date.toISOString()}>
              {project.date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </dd>
        </dl>
      </a>
    </li>
  );
}

function WorkExperienceCard({ experience }: { experience: WorkExperience }) {
  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 overflow-hidden">
        <img
          alt=""
          src={experience.logo}
          className="h-full w-full object-cover"
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {experience.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {experience.role}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
          <time dateTime={experience.startDate}>{experience.startDate}</time>
          <span aria-hidden="true">—</span>
          <time dateTime={experience.endDate}>{experience.endDate}</time>
        </dd>
      </dl>
    </li>
  );
}

function ProfileSection() {
  return (
    <div className="max-w-2xl">
      <img
        src="/profile-square.jpeg"
        alt="Profile Picture"
        className="w-16 h-16 sm:w-24 sm:h-24 rounded-full mb-8"
      />
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Software engineer, roboticist, and podcaster.
      </h1>
      <p className="mt-6 text-base">
        I'm Audrow Nash, a software designer and developer based in San Antonio,
        TX. I'm passionate about robotics, web development, and open-source
        contributions.
      </p>
      <SocialLinks />
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="mt-6 flex gap-6">
      <SocialLink href={SOCIAL_LINKS.X} icon={XIcon} label="Follow on X" />
      <SocialLink
        href={SOCIAL_LINKS.YOUTUBE}
        icon={YouTubeIcon}
        label="Follow on YouTube"
      />
      <SocialLink
        href={SOCIAL_LINKS.GITHUB}
        icon={GitHubIcon}
        label="Follow on GitHub"
      />
      <SocialLink
        href={SOCIAL_LINKS.LINKEDIN}
        icon={LinkedInIcon}
        label="Follow on LinkedIn"
      />
    </div>
  );
}

function SocialLink(
  { href, icon: Icon, label }: {
    href: string;
    icon: typeof XIcon;
    label: string;
  },
) {
  return (
    <a
      className="group -m-1 p-1 transition duration-150 ease-in-out"
      aria-label={label}
      href={href}
    >
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </a>
  );
}

function SeeMoreButton({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
    >
      {text}
      <svg
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
      >
        <path
          d="M6.75 5.75 9.25 8l-2.5 2.25"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
        </path>
      </svg>
    </a>
  );
}

function RecentProjects({ projects }: { projects: Project[] }) {
  return (
    <div className="rounded-2xl border border-zinc-100 dark:border-zinc-700/40 p-6 flex flex-col">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-6 w-6 flex-none"
        >
          <path
            d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
          >
          </path>
        </svg>
        <span className="ml-3">Recent Projects</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </ol>
      <SeeMoreButton href={PROJECTS_URL} text="See More Projects" />
    </div>
  );
}

function WorkExperienceSection() {
  return (
    <div className="rounded-2xl border border-zinc-100 dark:border-zinc-700/40 p-6 flex flex-col">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-6 w-6 flex-none"
        >
          <path
            d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
          >
          </path>
          <path
            d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
            className="stroke-zinc-400 dark:stroke-zinc-500"
          >
          </path>
        </svg>
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {WORK_EXPERIENCE.map((experience) => (
          <WorkExperienceCard
            key={experience.company}
            experience={experience}
          />
        ))}
      </ol>
      <ResumeButtons />
    </div>
  );
}

function ResumeButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-6">
      <a
        href={RESUME_FILE_URL}
        download
        className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group w-full"
      >
        Download Resume
        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
        >
          <path
            d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
          </path>
        </svg>
      </a>
      <a
        href="/resume"
        className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group w-full"
      >
        View Full Resume
        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
        >
          <path
            d="M6.75 5.75 9.25 8l-2.5 2.25"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
          </path>
        </svg>
      </a>
    </div>
  );
}

export default async function Home() {
  const allProjects = await getProjects();
  const recentProjects = allProjects
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, 3);

  return (
    <PageLayout currentPage="home">
      <ProfileSection />

      <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <RecentProjects projects={recentProjects} />
        <div className="flex flex-col">
          <WorkExperienceSection />
        </div>
      </div>
    </PageLayout>
  );
}
