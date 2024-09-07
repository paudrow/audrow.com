import type { MenuItem } from "./types.ts";
export const RESUME_URL = "/Audrow Nash Resume.pdf";

export const SOCIAL_LINKS = {
  X: "https://x.com/audrow",
  YOUTUBE: "https://youtube.com/@audrow",
  GITHUB: "https://github.com/audrow",
  LINKEDIN: "https://linkedin.com/in/audrow",
};

export const PODCAST_URL = "https://audrownashpodcast.com";

export const CONTACT_INFO = {
  NAME: "Audrow Nash",
  TITLE: "Software Engineer",
  EMAIL: "audrow@hey.com",
  PHONE: "+1 (650) 963-6642",
  LOCATION: "San Antonio, TX",
  WEBSITE: "https://audrow.com",
};

export const MENU_ITEMS: MenuItem[] = [
  { display: "Resume", slug: "resume", path: "/resume" },
  { display: "Projects", slug: "projects", path: "/projects" },
  { display: "Contact", slug: "contact", path: "/contact" },
  {
    display: "Podcast",
    slug: undefined,
    path: PODCAST_URL,
    external: true,
  },
];
