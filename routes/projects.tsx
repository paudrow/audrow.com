import { PageLayout } from "../components/PageLayout.tsx";
import { getProjects } from "../utils/projects.ts";
import { Project } from "../types.ts";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <PageLayout currentPage="projects">
      <div className="space-y-8">
        <h2 className="text-2xl font-bold">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project: Project) => (
            <a
              key={project.slug}
              href={`/project/${project.slug}`}
              className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md flex flex-col hover:shadow-lg transition-shadow duration-300 relative"
            >
              <h3 className="text-2xl font-semibold mb-4 text-accent-light dark:text-accent-dark">
                {project.name}
              </h3>
              <p className="text-lightmode-text dark:text-darkmode-text mb-6 flex-grow">
                {project.description}
              </p>
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-md text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex justify-between items-center">
                <span className="text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-md">
                  {project.status}
                </span>
                {project.version && (
                  <span className="text-sm font-semibold text-accent-light dark:text-accent-dark bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md">
                    v{project.version}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
