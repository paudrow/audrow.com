import { ComponentChildren } from "preact";
import { Pages } from "../types.ts";
import { Header } from "./Header.tsx";

interface PageLayoutProps {
  children: ComponentChildren;
  currentPage: Pages;
}

export function PageLayout({ children, currentPage }: PageLayoutProps) {
  return (
    <div class="min-h-screen flex flex-col bg-zinc-100 dark:bg-black text-zinc-800 dark:text-zinc-200">
      <div class="flex-grow flex flex-col max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-800 ring-1 ring-zinc-100 dark:ring-zinc-300/20">
        <Header currentPage={currentPage} />
        <main class="flex-grow py-8 sm:py-12">
          {children}
        </main>
        <footer class="py-6 sm:py-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Company Name</p>
        </footer>
      </div>
    </div>
  );
}
