import { PageLayout } from "../components/PageLayout.tsx";
import { getProjectsAndTags } from "../utils/projects.ts";
import { ProjectList } from "../islands/ProjectList.tsx";

export default async function Projects() {
  const { projects, tags } = await getProjectsAndTags();

  return (
    <PageLayout currentPage="projects">
      <div className="space-y-8">
        <h2 className="text-2xl font-bold">
          My Projects
        </h2>
        <ProjectList projects={projects} tags={tags} />
      </div>
    </PageLayout>
  );
}
