import { PageLayout } from "../components/PageLayout.tsx";
import { PageProps } from "$fresh/server.ts";

export default function Error404(props: PageProps) {
  const url = new URL(props.url);
  return (
    <PageLayout
      currentPage={undefined}
      title="404 - Page not found"
      url={url}
      description="The page you were looking for doesn't exist."
    >
      <div class="px-4 py-8 mx-auto bg-accent-light dark:bg-accent-dark">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold text-lightmode-heading dark:text-darkmode-heading">
            404 - Page not found
          </h1>
          <p class="my-4 text-lightmode-text dark:text-darkmode-text">
            The page you were looking for doesn't exist.
          </p>
          <a
            href="/"
            class="underline text-lightmode-text dark:text-darkmode-text hover:text-lightmode-text-hover dark:hover:text-darkmode-text-hover"
          >
            Go back home
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
