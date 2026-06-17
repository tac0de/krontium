import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const dist = "dist";
const base = "/krontium/";
const htmlFiles = [];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) {
      walk(path);
    } else if (path.endsWith(".html")) {
      htmlFiles.push(path);
    }
  }
}

function existsForHref(href) {
  if (!href.startsWith(base)) return true;

  const withoutBase = href.slice(base.length).replace(/[#?].*$/, "");
  if (withoutBase === "") return existsSync(join(dist, "index.html"));

  const filePath = join(dist, withoutBase);
  return existsSync(filePath) || existsSync(join(filePath, "index.html"));
}

walk(dist);

const failures = [];
for (const file of htmlFiles) {
  const source = readFileSync(file, "utf8");
  const hrefs = source.matchAll(/\s(?:href|src)="([^"]+)"/g);
  for (const [, href] of hrefs) {
    if (!existsForHref(href)) {
      failures.push(`${file}: ${href}`);
    }
  }
}

if (failures.length > 0) {
  console.error("Broken static links:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML files; no broken project links.`);
