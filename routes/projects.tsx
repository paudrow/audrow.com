import { PageLayout } from "../components/PageLayout.tsx";

export default function Projects() {
  const projects = [
    { id: 1, title: "Project 1", description: "Description of Project 1" },
    { id: 2, title: "Project 2", description: "Description of Project 2" },
    { id: 3, title: "Project 3", description: "Description of Project 3" },
  ];

  return (
    <PageLayout currentPage="projects">
      <div className="space-y-8">
        <h2 className="text-2xl font-bold">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2 text-accent-light dark:text-accent-dark">
                {project.title}
              </h3>
              <p className="text-lightmode-text dark:text-darkmode-text">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
