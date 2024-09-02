import { launch } from "@astral/astral";

const resumeUrl = 'http://localhost:8000/resume';
const savePath = 'static/Audrow Nash Resume.pdf';


(async () => {
  const browser = await launch();
  const page = await browser.newPage();
  await page.goto(resumeUrl, { waitUntil: 'networkidle2' });
  const pdf = await page.pdf();
  await browser.close();
  Deno.writeFileSync(savePath, pdf);
})();
