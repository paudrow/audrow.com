import { CONTACT_INFO } from "../constants.ts";
import { MENU_ITEMS } from "../constants.ts";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="mt-32 pb-16">
      <div class="flex flex-col items-center space-y-8 lg:flex-row lg:justify-between lg:space-y-0">
        <nav>
          <ul class="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {MENU_ITEMS.map((item) => (
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
        <div>
          <p class="text-sm text-center sm:text-right text-zinc-600 dark:text-zinc-400">
            © {currentYear} {CONTACT_INFO.NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
