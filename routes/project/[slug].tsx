import { PageLayout } from "../../components/PageLayout.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Project } from "../../types.ts";
import { getProject } from "../../utils/projects.ts";
import { Button } from "../../components/Button.tsx";

export const handler: Handlers<Project | null> = {
  async GET(_, ctx) {
    const { slug } = ctx.params;
    const project = await getProject(slug);
    return ctx.render(project);
  },
};

export default function ProjectPage(props: PageProps<Project | null>) {
  const url = new URL(props.url);
  const { data } = props;

  if (!data) {
    return (
      <PageLayout
        currentPage="projects"
        url={url}
        description="The project you were looking for doesn't exist."
      >
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Project Not Found</h1>
          <p className="text-xl">
            Sorry, the requested project could not be found.
          </p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      currentPage="projects"
      url={url}
      title={data.name}
      description={data.description}
    >
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">{data.name}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {data.description}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Completed: {new Date(data.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span
            className={`text-sm px-2 py-1 rounded-full ${
              data.status === "Actively used"
                ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                : data.status === "Used occasionally"
                ? "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
                : data.status === "Inactive"
                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100"
                : "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100"
            }`}
          >
            {data.status}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {data.tags &&
            data.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md text-sm"
              >
                {tag}
              </span>
            ))}
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
          {data.deploymentUrl && (
            <Button
              as="a"
              href={data.deploymentUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Site
            </Button>
          )}
          {data.url && (
            <Button
              as="a"
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source
            </Button>
          )}
        </div>
        {data.image && (
          <img
            src={data.image}
            alt={data.name}
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        )}
        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
    </PageLayout>
  );
}
