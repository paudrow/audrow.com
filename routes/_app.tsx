import { type PageProps } from "$fresh/server.ts";
import { CONTACT_INFO } from "../constants.ts";

export default function App({ Component }: PageProps) {
  return (
    <html class="h-full antialiased" lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="software engineering, robotics, podcast, technology, Audrow Nash"
        />
        <meta name="author" content={CONTACT_INFO.NAME} />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="/print.css" media="print" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            if (localStorage.getItem('darkMode') === 'true' ||
                (!('darkMode' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark');
            }
          `,
          }}
        />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
