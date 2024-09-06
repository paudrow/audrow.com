import { z } from "npm:zod";
import { ProjectFrontmatterSchema, ProjectSchema } from "./schemas.ts";

export type Project = z.infer<typeof ProjectSchema>;
export type ProjectFrontmatter = z.infer<typeof ProjectFrontmatterSchema>;

export type Pages =
  | "home"
  | "about"
  | "projects"
  | "resume"
  | "contact"
  | undefined;
