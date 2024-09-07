import type { MenuItem, WorkExperience } from "./types.ts";
export const RESUME_FILE_URL = "/Audrow Nash Resume.pdf";

export const SOCIAL_LINKS = {
  X: "https://x.com/audrow",
  YOUTUBE: "https://youtube.com/@audrow",
  GITHUB: "https://github.com/audrow",
  LINKEDIN: "https://linkedin.com/in/audrow",
};

export const CONTACT_INFO = {
  NAME: "Audrow Nash",
  TITLE: "Software Engineer",
  EMAIL: "audrow@hey.com",
  PHONE: "+1 (650) 963-6642",
  LOCATION: "San Antonio, TX",
  WEBSITE: "https://audrow.com",
};

export const PROJECTS_URL = "/projects";
export const RESUME_URL = "/resume";
export const CONTACT_URL = "/contact";
export const PODCAST_URL = "https://audrownashpodcast.com";

export const MENU_ITEMS: MenuItem[] = [
  { display: "Resume", slug: "resume", path: RESUME_URL },
  { display: "Projects", slug: "projects", path: PROJECTS_URL },
  { display: "Contact", slug: "contact", path: CONTACT_URL },
  {
    display: "Podcast",
    slug: undefined,
    path: PODCAST_URL,
    external: true,
  },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "Intrinsic AI",
    role: "Software Engineer",
    startDate: "2023",
    endDate: "Present",
    logo: "/job-logos/intrinsic.jpeg",
  },
  {
    company: "Open Robotics (acquired by Intrinsic AI)",
    role: "Software Engineer",
    startDate: "2021",
    endDate: "2023",
    logo: "/job-logos/open-robotics.jpeg",
  },
];
