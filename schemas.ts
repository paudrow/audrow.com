import { z } from "npm:zod";

export const ProjectFrontmatterSchema = z.object({
  name: z.string(),
  description: z.string(),
  url: z.string().optional(),
  deploymentUrl: z.string().optional(),
  image: z.string().optional(),
  status: z.enum([
    "Actively used",
    "Used occasionally",
    "Inactive",
    "Deprecated",
  ]),
  version: z.string().optional(),
  pastVersionSlugs: z.array(z.string()).optional(),
  date: z.date(),
  isPinned: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
});

export const ProjectSchema = ProjectFrontmatterSchema.extend({
  slug: z.string(),
  content: z.string(),
});

export const ResumeSchema = z.object({
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
