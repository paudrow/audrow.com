import { DarkModeToggle } from "../islands/ToggleDarkMode.tsx";
import { MenuBar } from "../islands/MenuBar.tsx";
import { Pages } from "../types.ts";

interface HeaderProps {
  currentPage: Pages;
}

export function Header({ currentPage }: HeaderProps) {
  return (
    <header class="py-6 sm:py-8">
      <div class="hidden sm:flex justify-between items-center">
        <div class="w-1/3">
          {currentPage !== "home" && (
            <a href="/" aria-label="Home" class="pointer-events-auto">
              <div class="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
                <img
                  alt=""
                  width="512"
                  height="512"
                  decoding="async"
                  class="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
                  sizes="2.25rem"
                  srcset="/profile-square.jpeg 640w, /profile-square.jpeg 750w, /profile-square.jpeg 828w, /profile-square.jpeg 1080w, /profile-square.jpeg 1200w, /profile-square.jpeg 1920w, /profile-square.jpeg 2048w, /profile-square.jpeg 3840w"
                  src="/profile-square.jpeg"
                />
              </div>
            </a>
          )}
        </div>
        <div class="w-1/3 flex justify-center">
          <MenuBar currentPage={currentPage} />
        </div>
        <div class="w-1/3 flex justify-end">
          <DarkModeToggle />
        </div>
      </div>
      <div class="sm:hidden flex justify-between items-center">
        {currentPage !== "home" && (
          <div class="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
            <a aria-label="Home" class="pointer-events-auto" href="/">
              <img
                alt=""
                width="512"
                height="512"
                decoding="async"
                class="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
                sizes="2.25rem"
                srcset="/profile-square.jpeg 640w, /profile-square.jpeg 750w, /profile-square.jpeg 828w, /profile-square.jpeg 1080w, /profile-square.jpeg 1200w, /profile-square.jpeg 1920w, /profile-square.jpeg 2048w, /profile-square.jpeg 3840w"
                src="/profile-square.jpeg"
              />
            </a>
          </div>
        )}
        <MenuBar currentPage={currentPage} />
        <DarkModeToggle />
      </div>
    </header>
  );
}
