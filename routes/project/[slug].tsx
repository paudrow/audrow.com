import { PageLayout } from "../../components/PageLayout.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<Project | null> = {
  GET(_, ctx) {
    const { slug } = ctx.params;
    // Here you would typically fetch the project data from a database or API
    // For this example, we'll just return a mock project
    const project = {
      slug,
      title: slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
      description: `This is the project page for ${slug}.`
    };
    return ctx.render(project);
  }
};

interface Project {
  slug: string;
  title: string;
  description: string;
}

export default function ProjectPage({ data }: PageProps<Project | null>) {
  if (!data) {
    return (
      <PageLayout currentPage="projects">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Project Not Found</h1>
          <p className="text-xl">Sorry, the requested project could not be found.</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout currentPage="projects">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{data.title}</h1>
        <p className="text-xl">
          Project slug: <span className="font-semibold">{data.slug}</span>
        </p>
        <p className="text-gray-600 dark:text-gray-400">{data.description}</p>
      </div>
    </PageLayout>
  );
}
