import { assert, assertEquals } from "@std/assert";
import { launch } from "@astral/astral";
import { BASE_URL } from "../scripts/wait-for-server.ts";
import { MENU_ITEMS } from "../constants.ts";
import { getProjects } from "../utils/projects.ts";

Deno.test("Integration tests - Page loading and titles", async (t) => {
  const browser = await launch();
  const page = await browser.newPage();

  // Test home page
  await t.step("Home page loads with correct title", async () => {
    await page.goto(BASE_URL);
    const title = await page.evaluate(() => document.title);
    assertEquals(title, "Home | Audrow Nash", "Home page title is incorrect");
  });

  // Test menu items
  for (const item of MENU_ITEMS) {
    if (!item.external) {
      await t.step(
        `${item.display} page loads with correct title`,
        async () => {
          await page.goto(BASE_URL + item.path);
          const title = await page.evaluate(() => document.title);
          assertEquals(
            title,
            `${item.display} | Audrow Nash`,
            `${item.display} page title is incorrect`,
          );
        },
      );
    }
  }

  // Test project pages
  await t.step("Project pages load with correct titles", async () => {
    const projects = await getProjects();
    for (const project of projects) {
      await page.goto(BASE_URL + "/project/" + project.slug);
      const title = await page.evaluate(() => document.title);
      assertEquals(
        title,
        `${project.name} | Audrow Nash`,
        `Project page for ${project.name} title is incorrect: ${title}`,
      );

      // Check if the project name is present on the page
      const content = await page.content();
      assert(
        content.includes(project.name),
        `Project page for ${project.name} does not contain the project name`,
      );
    }
  });

  // Test 404 page
  await t.step("404 page loads with correct title", async () => {
    await page.goto(BASE_URL + "/non-existent-page");
    const title = await page.evaluate(() => document.title);
    assertEquals(
      title,
      "404 - Page not found | Audrow Nash",
      "404 page title is incorrect",
    );
  });

  await browser.close();
});
