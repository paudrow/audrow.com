import { ComponentChildren } from "preact";
import { Pages } from "../types.ts";
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";

interface PageLayoutProps {
  children: ComponentChildren;
  currentPage: Pages;
}

export function PageLayout({ children, currentPage }: PageLayoutProps) {
  return (
    <div class="min-h-screen flex flex-col bg-lightmode-bg-background dark:bg-darkmode-bg-background">
      <div class="flex-grow flex flex-col max-w-6xl sm:mx-8 lg:mx-14 xl:mx-auto bg-lightmode-bg-foreground dark:bg-darkmode-bg-foreground ring-1 ring-lightmode-bg-ring dark:ring-darkmode-bg-ring">
        <div class="px-4 sm:px-16 lg:px-24 flex-grow">
          <Header currentPage={currentPage} />
          {/* Disclaimer section */}
          <div class="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-md my-4">
            <p class="text-yellow-800 dark:text-yellow-200">
              <strong>Disclaimer:</strong>{" "}
              This site is currently under development. I'm using an AI language
              model to assist with the content, and some information may not be
              accurate or up-to-date. Please check back later for the final
              version.
            </p>
          </div>
          <main class="flex-grow py-8 sm:py-12">
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
