import fs from "fs/promises";
import path from "path";

const routes = ["/", "/services", "/realisations", "/pourquoi-nous", "/a-propos", "/faq", "/contact", "/blog"];
const distDir = path.resolve("./dist");
const indexPath = path.join(distDir, "index.html");

const renderRouteFiles = async () => {
  const html = await fs.readFile(indexPath, "utf8");

  for (const route of routes) {
    if (route === "/") continue;
    const routeDir = path.join(distDir, route);
    await fs.mkdir(routeDir, { recursive: true });
    await fs.writeFile(path.join(routeDir, "index.html"), html, "utf8");
  }

  console.log(`Prerendered static HTML for routes: ${routes.join(", ")}`);
};

renderRouteFiles().catch((error) => {
  console.error(error);
  process.exit(1);
});