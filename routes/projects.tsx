import { PageLayout } from "../components/PageLayout.tsx";
import { getProjectsAndTags } from "../utils/projects.ts";
import { ProjectList } from "../islands/ProjectList.tsx";
import { PageProps } from "$fresh/server.ts";

export default async function Projects(props: PageProps) {
  const { projects, tags } = await getProjectsAndTags();
  const { url } = props;

  return (
    <PageLayout currentPage="projects" title="Projects" url={url}>
      <div className="space-y-8">
        <h2 className="text-2xl font-bold">
          My Projects
        </h2>
        <ProjectList projects={projects} tags={tags} />
      </div>
    </PageLayout>
  );
}
