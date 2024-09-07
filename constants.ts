import type { MenuItem, WorkExperience } from "./types.ts";
import { ResumeSchema } from "./schemas.ts";

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

export const DEFAULT_DESCRIPTION =
  "Audrow Nash is a software engineer with a passion for robotics, web development, and podcasting.";
export const DEFAULT_SHARE_IMAGE = "/share.png";
export const DEFAULT_SHARE_IMAGE_X = "/share-x.png";

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

export const RESUME_DATA = ResumeSchema.parse({
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
      description: "Host of a podcast discussing robotics and AI technologies",
      duration: "Present",
      role: "Host",
      url: "https://www.audrownashpodcast.com/",
    },
    {
      name: "Sense Think Act Podcast",
      description: "Host of a podcast discussing robotics and AI technologies",
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
