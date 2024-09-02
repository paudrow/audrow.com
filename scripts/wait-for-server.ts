const MAX_RETRIES = 30;
const RETRY_INTERVAL = 1000; // 1 second
export const BASE_URL = "http://localhost:8000";

export async function isServerRunning(baseUrl: string = BASE_URL) {
  try {
    const response = await fetch(baseUrl);
    await response.text(); // Consume the response body
    return response.status === 200;
  } catch {
    return false;
  }
}

export async function waitForServer() {
  for (let i = 0; i < MAX_RETRIES; i++) {
    if (await isServerRunning()) {
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, RETRY_INTERVAL));
  }
  throw new Error("Server did not become ready in time");
}

if (import.meta.main) {
  try {
    await waitForServer();
    console.log("Server is running!");
  } catch (error) {
    console.error(error);
    Deno.exit(1);
  }
}
