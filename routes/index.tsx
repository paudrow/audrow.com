import { PageLayout } from "../components/PageLayout.tsx";
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "../components/Icons.tsx";

export default function Home() {
  return (
    <PageLayout currentPage="home">
      <div className="max-w-2xl">
        <img
          src="/profile-square.jpeg"
          alt="Profile Picture"
          className="w-16 h-16 sm:w-24 sm:h-24 rounded-full mb-8"
        />
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Software engineer, roboticist, and podcaster.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I'm Audrow Nash, a software designer and developer based in San
          Antonio, TX. I'm passionate about robotics, web development, and
          open-source contributions.
        </p>
        <div className="mt-6 flex gap-6">
          <a className="group -m-1 p-1" aria-label="Follow on X" href="#">
            <XIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          </a>
          <a className="group -m-1 p-1" aria-label="Follow on YouTube" href="#">
            <YouTubeIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          </a>
          <a className="group -m-1 p-1" aria-label="Follow on GitHub" href="#">
            <GitHubIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          </a>
          <a
            className="group -m-1 p-1"
            aria-label="Follow on LinkedIn"
            href="#"
          >
            <LinkedInIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
