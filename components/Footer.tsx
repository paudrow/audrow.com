import { CONTACT_INFO } from "../constants.ts";
import { PODCAST_URL } from "../constants.ts";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const menuItems = [
    { display: "About", slug: "about", path: "/about" },
    { display: "Resume", slug: "resume", path: "/resume" },
    { display: "Projects", slug: "projects", path: "/projects" },
    { display: "Contact", slug: "contact", path: "/contact" },
    {
      display: "Podcast",
      slug: undefined,
      path: PODCAST_URL,
      external: true,
    },
  ];

  return (
    <footer class="mt-32 flex-none bg-zinc-50 dark:bg-zinc-900">
      <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center space-y-8">
          {/* Navigation Section */}
          <nav>
            <ul class="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {menuItems.map((item) => (
                <li key={item.display}>
                  <a
                    href={item.path}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    class="text-sm text-zinc-600 hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400"
                  >
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright Section */}
          <div>
            <p class="text-sm text-center text-zinc-600 dark:text-zinc-400">
              © {currentYear} {CONTACT_INFO.NAME}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
