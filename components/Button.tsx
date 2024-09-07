import { JSX } from "preact";

interface ButtonProps
  extends JSX.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children: JSX.Element | string;
  variant?: "primary" | "secondary";
  as?: "button" | "a";
  href?: string;
}

export function Button(
  { children, variant = "primary", as = "button", href, ...props }: ButtonProps,
) {
  const baseClasses =
    "px-4 py-2 rounded-md font-semibold transition-colors duration-200 ease-in-out";
  const variantClasses = variant === "primary"
    ? "bg-lightmode-accent-500 text-white hover:bg-lightmode-accent-800 dark:bg-darkmode-accent-500 dark:text-zinc-800 dark:hover:bg-zinc-300"
    : "bg-zinc-200 text-zinc-800 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600";

  const classes = `${baseClasses} ${variantClasses} ${props.className || ""}`;

  if (as === "a") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props as JSX.HTMLAttributes<HTMLAnchorElement>}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      {...props as JSX.HTMLAttributes<HTMLButtonElement>}
      className={classes}
    >
      {children}
    </button>
  );
}
