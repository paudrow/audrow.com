import { launch } from "@astral/astral";
import { BASE_URL } from "./wait-for-server.ts";

export const RESUME_URL = BASE_URL + "/resume";
export const SAVE_PATH = "static/Audrow Nash Resume.pdf";

export async function pageToPdf(resumeUrl: string) {
  const browser = await launch();
  const page = await browser.newPage();
  await page.goto(resumeUrl, { waitUntil: "networkidle2" });
  const pdf = await page.pdf();
  await browser.close();
  return pdf;
}

if (import.meta.main) {
  const pdf = await pageToPdf(RESUME_URL);
  Deno.writeFileSync(SAVE_PATH, pdf);
  console.log(`Saved resume to ${SAVE_PATH}`);
}
