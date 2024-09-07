import { ComponentChildren } from "preact";
import { Pages } from "../types.ts";
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";
import { Head } from "$fresh/runtime.ts";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_SHARE_IMAGE,
  DEFAULT_SHARE_IMAGE_X,
} from "../constants.ts";

interface PageLayoutProps {
  children: ComponentChildren;
  currentPage: Pages;
  title?: string;
  description?: string;
  image?: string;
  url: URL;
}

export function PageLayout(
  { children, currentPage, title, url, description, image }: PageLayoutProps,
) {
  const pageTitle = title ? `${title} | Audrow Nash` : "Audrow Nash";
  const pageDescription = description || DEFAULT_DESCRIPTION;
  const shareImage = url.origin + (image || DEFAULT_SHARE_IMAGE);
  const shareXImage = url.origin + (image || DEFAULT_SHARE_IMAGE_X);
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta property="twitter:title" content={pageTitle} />

        <meta name="description" content={pageDescription} />
        <meta property="og:description" content={pageDescription} />
        <meta property="twitter:description" content={pageDescription} />

        <meta property="og:image" content={shareImage} />
        <meta property="twitter:image" content={shareXImage} />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:url" content={url.href} />
        <meta property="twitter:url" content={url.href} />
      </Head>
      <div class="min-h-screen flex flex-col bg-lightmode-bg-background dark:bg-darkmode-bg-background">
        <div class="flex-grow flex flex-col max-w-6xl sm:mx-8 lg:mx-14 xl:mx-auto bg-lightmode-bg-foreground dark:bg-darkmode-bg-foreground ring-1 ring-lightmode-bg-ring dark:ring-darkmode-bg-ring">
          <div class="px-4 sm:px-16 lg:px-24 flex-grow print-no-margin-or-padding">
            <Header currentPage={currentPage} />
            <main class="flex-grow py-8 sm:py-12">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
