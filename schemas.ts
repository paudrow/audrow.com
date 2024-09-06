import { z } from "npm:zod";

export const ProjectFrontmatterSchema = z.object({
  name: z.string(),
  description: z.string(),
  url: z.string().optional(),
  image: z.string().optional(),
  status: z.string(),
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
