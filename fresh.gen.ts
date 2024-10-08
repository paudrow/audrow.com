// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $contact from "./routes/contact.tsx";
import * as $index from "./routes/index.tsx";
import * as $project_slug_ from "./routes/project/[slug].tsx";
import * as $projects from "./routes/projects.tsx";
import * as $resume from "./routes/resume.tsx";
import * as $MenuBar from "./islands/MenuBar.tsx";
import * as $ProjectList from "./islands/ProjectList.tsx";
import * as $ToggleDarkMode from "./islands/ToggleDarkMode.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/contact.tsx": $contact,
    "./routes/index.tsx": $index,
    "./routes/project/[slug].tsx": $project_slug_,
    "./routes/projects.tsx": $projects,
    "./routes/resume.tsx": $resume,
  },
  islands: {
    "./islands/MenuBar.tsx": $MenuBar,
    "./islands/ProjectList.tsx": $ProjectList,
    "./islands/ToggleDarkMode.tsx": $ToggleDarkMode,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
