import { PageLayout } from "../components/PageLayout.tsx";
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "../components/Icons.tsx";
import { SOCIAL_LINKS } from "../constants.ts";

export default function Home() {
  return (
    <PageLayout currentPage="home">
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
          I'm Audrow Nash, a software designer and developer based in San
          Antonio, TX. I'm passionate about robotics, web development, and
          open-source contributions.
        </p>
        <div className="mt-6 flex gap-6">
          <a
            className="group -m-1 p-1"
            aria-label="Follow on X"
            href={SOCIAL_LINKS.X}
          >
            <XIcon className="h-6 w-6 fill-lightmode-text transition group-hover:fill-lightmode-text-hover dark:fill-darkmode-text dark:group-hover:fill-darkmode-text-hover" />
          </a>
          <a
            className="group -m-1 p-1"
            aria-label="Follow on YouTube"
            href={SOCIAL_LINKS.YOUTUBE}
          >
            <YouTubeIcon className="h-6 w-6 fill-lightmode-text transition group-hover:fill-lightmode-text-hover dark:fill-darkmode-text dark:group-hover:fill-darkmode-text-hover" />
          </a>
          <a
            className="group -m-1 p-1"
            aria-label="Follow on GitHub"
            href={SOCIAL_LINKS.GITHUB}
          >
            <GitHubIcon className="h-6 w-6 fill-lightmode-text transition group-hover:fill-lightmode-text-hover dark:fill-darkmode-text dark:group-hover:fill-darkmode-text-hover" />
          </a>
          <a
            className="group -m-1 p-1"
            aria-label="Follow on LinkedIn"
            href={SOCIAL_LINKS.LINKEDIN}
          >
            <LinkedInIcon className="h-6 w-6 fill-lightmode-text transition group-hover:fill-lightmode-text-hover dark:fill-darkmode-text dark:group-hover:fill-darkmode-text-hover" />
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
