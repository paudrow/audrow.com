import { extractYaml as extract } from "@std/front-matter";
import { marked } from "marked";
import { ProjectFrontmatterSchema } from "../schemas.ts";
import type { Project } from "../types.ts";

async function processProject(
  slug: string,
  content: string,
): Promise<Project> {
  const { attrs, body } = extract(content);

  try {
    const validatedAttrs = ProjectFrontmatterSchema.parse(attrs);

    const html = await marked(body);

    return {
      ...validatedAttrs,
      slug,
      content: html,
    };
  } catch (error) {
    throw new Error(`Error parsing frontmatter for ${slug}: ${error}`);
  }
}

export async function getProjects(): Promise<Project[]> {
  const files = Deno.readDir("./projects");
  const projects: Project[] = [];

  for await (const file of files) {
    if (file.isFile && file.name.endsWith(".md")) {
      const content = await Deno.readTextFile(`./projects/${file.name}`);
      const slug = file.name.replace(".md", "");
      const project = await processProject(slug, content);
      projects.push(project);
    }
  }

  return projects.sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return b.date.getTime() - a.date.getTime();
  });
}

export async function getProject(slug: string): Promise<Project | null> {
  try {
    const content = await Deno.readTextFile(`./projects/${slug}.md`);
    return await processProject(slug, content);
  } catch {
    return null;
  }
}
