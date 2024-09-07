import { ComponentChildren } from "preact";
import { Pages } from "../types.ts";
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";
import { Head } from "$fresh/runtime.ts";

interface PageLayoutProps {
  children: ComponentChildren;
  currentPage: Pages;
  title?: string;
}

export function PageLayout({ children, currentPage, title }: PageLayoutProps) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | Audrow Nash` : "Audrow Nash"}</title>
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
