import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { MoonIcon, SunIcon } from "../components/Icons.tsx";

export function DarkModeToggle() {
  const isDark = useSignal(false);
  const wasDark = useSignal(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    isDark.value = isDarkMode;
    document.documentElement.classList.toggle("dark", isDarkMode);

    const handleBeforePrint = () => {
      wasDark.value = isDark.value;
      document.documentElement.classList.remove("dark");
    };

    const handleAfterPrint = () => {
      if (wasDark.value) {
        document.documentElement.classList.toggle("dark", true);
      }
    };

    globalThis.addEventListener("beforeprint", handleBeforePrint);
    globalThis.addEventListener("afterprint", handleAfterPrint);

    return () => {
      globalThis.removeEventListener("beforeprint", handleBeforePrint);
      globalThis.removeEventListener("afterprint", handleAfterPrint);
    };
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark.value;
    isDark.value = newDarkMode;
    localStorage.setItem("darkMode", newDarkMode.toString());
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  return (
    <div class="flex justify-end md:flex-1">
      <div class="pointer-events-auto">
        <button
          type="button"
          onClick={toggleDarkMode}
          aria-label={isDark.value
            ? "Switch to light theme"
            : "Switch to dark theme"}
          class="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20 h-12"
        >
          <SunIcon class="h-5 w-5 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-lightmode-accent-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-lightmode-accent-800" />
          <MoonIcon class="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500" />
        </button>
      </div>
    </div>
  );
}
