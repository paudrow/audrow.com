import { assert, assertEquals } from "@std/assert";
import { pdfText } from "jsr:@pdf/pdftext";
import {
  pageToPdf,
  RESUME_PAGE_URL,
  SAVE_PATH,
} from "../scripts/save-resume.ts";
import { isServerRunning } from "../scripts/wait-for-server.ts";

async function getTextFromPdf(
  pdf: Uint8Array,
  withoutSpaces: boolean = true,
): Promise<string> {
  const pagesWithText = await pdfText(pdf);
  let out = "";
  Object.values(pagesWithText).forEach((page) => {
    out += withoutSpaces ? page.replaceAll(" ", "").replaceAll("\n", "") : page;
  });
  return out;
}

Deno.test("Server is running", async () => {
  assert(await isServerRunning());
});

Deno.test("Resume is up-to-date", async () => {
  try {
    const pdf = await pageToPdf(RESUME_PAGE_URL);
    const newResumeText = await getTextFromPdf(pdf);
    const savedResumeBuffer = await Deno.readFile(SAVE_PATH);
    const savedResumeText = await getTextFromPdf(savedResumeBuffer);
    assertEquals(
      savedResumeText,
      newResumeText,
      "The saved resume text is not up-to-date with the current version",
    );
  } catch (e) {
    console.error(e);
    throw e;
  }
});
