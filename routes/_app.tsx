import { type PageProps } from "$fresh/server.ts";
import { Project } from "../types.ts";
import {
  CONTACT_INFO,
  DEFAULT_DESCRIPTION,
  DEFAULT_SHARE_IMAGE,
  DEFAULT_SHARE_IMAGE_X,
} from "../constants.ts";

export default function App({ Component, url, data }: PageProps) {
  const domain = url.origin;
  const project = (data as { project?: Project })?.project;
  const shareImage = project?.image
    ? `${domain}${project.image}`
    : `${domain}${DEFAULT_SHARE_IMAGE}`;
  const shareXImage = project?.image
    ? `${domain}${project.image}`
    : `${domain}${DEFAULT_SHARE_IMAGE_X}`;
  const title = project?.name
    ? `${project.name} - ${CONTACT_INFO.NAME}`
    : CONTACT_INFO.NAME;
  const description = project?.description || DEFAULT_DESCRIPTION;

  return (
    <html class="h-full antialiased" lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="software engineering, robotics, podcast, technology, Audrow Nash"
        />
        <meta name="author" content={CONTACT_INFO.NAME} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url.href} />
        <meta property="og:image" content={shareImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={shareXImage} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={domain} />
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
