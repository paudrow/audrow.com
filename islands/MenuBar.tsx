import { useEffect, useState } from "preact/hooks";
import { Pages } from "../types.ts";
import { JSX } from "preact";

// SVG components
const MenuIcon = () => (
  <svg
    viewBox="0 0 8 6"
    aria-hidden="true"
    className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
  >
    <path
      d="M1.75 1.75 4 4.25l2.25-2.5"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
  >
    <path
      d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// New components
const LargeScreenMenu = ({ menuItems, isCurrentPage }: MenuProps) => (
  <nav className="pointer-events-auto hidden md:block">
    <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
      {menuItems.map((item) => (
        <li key={item.display}>
          <a
            href={item.path}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className={`relative block px-3 py-2 transition ${
              isCurrentPage(item)
                ? "text-accent-light dark:text-accent-dark"
                : "hover:text-accent-light dark:hover:text-accent-dark"
            }`}
          >
            {item.display}
            {isCurrentPage(item) && (
              <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-accent-light/0 via-accent-light/40 to-accent-light/0 dark:from-accent-dark/0 dark:via-accent-dark/40 dark:to-accent-dark/0">
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

const SmallScreenMenu = (
  { menuItems, isOpen, setIsOpen }: SmallScreenMenuProps,
) => (
  <div
    className={`fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 transition duration-150 ease-in-out ${
      isOpen
        ? "scale-100 opacity-100"
        : "scale-95 opacity-0 pointer-events-none"
    }`}
    style={{ "--button-width": "88.671875px" } as JSX.CSSProperties}
  >
    <div className="flex flex-row-reverse items-center justify-between">
      <button
        onClick={() => setIsOpen(false)}
        aria-label="Close menu"
        className="-m-1 p-1"
        type="button"
      >
        <CloseIcon />
      </button>
      <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
        Navigation
      </h2>
    </div>
    <nav className="mt-6">
      <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
        {menuItems.map((item) => (
          <li key={item.display}>
            <a
              href={item.path}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="block py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.display}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

// Add currentPage prop to the Menu component
export function MenuBar({ currentPage }: { currentPage: Pages }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { display: "About", slug: "about", path: "/about" },
    { display: "Resume", slug: "resume", path: "/resume" },
    { display: "Projects", slug: "projects", path: "/projects" },
    { display: "Contact", slug: "contact", path: "/contact" },
    {
      display: "Podcast",
      slug: undefined,
      path: "https://audrownashpodcast.com",
      external: true,
    },
  ];

  // Helper function to determine if an item is the current page
  const isCurrentPage = (item: MenuItem): boolean =>
    currentPage === item.slug || (currentPage === "home" && item.path === "/");

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div className="flex flex-1 justify-end md:justify-center">
        <div className="pointer-events-auto md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
            type="button"
            aria-expanded={isOpen}
          >
            Menu
            <MenuIcon />
          </button>
        </div>
        <LargeScreenMenu menuItems={menuItems} isCurrentPage={isCurrentPage} />
      </div>
      <Backdrop isOpen={isOpen} />
      <SmallScreenMenu
        menuItems={menuItems}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isCurrentPage={isCurrentPage}
      />
    </>
  );
}

interface MenuItem {
  display: string;
  slug: Pages | undefined;
  path: string;
  external?: boolean;
}

interface MenuProps {
  menuItems: MenuItem[];
  isCurrentPage: (item: MenuItem) => boolean;
}

interface SmallScreenMenuProps extends MenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Backdrop = ({ isOpen }: { isOpen: boolean }) => (
  <div
    className={`fixed inset-0 z-40 bg-zinc-800/40 backdrop-blur-sm transition-opacity duration-150 ease-in-out ${
      isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
    aria-hidden="true"
  />
);
