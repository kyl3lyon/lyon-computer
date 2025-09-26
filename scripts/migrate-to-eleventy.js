const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const POSTS_DIR = path.join(ROOT, "posts");
const DATA_DIR = path.join(ROOT, "assets", "data");
const SRC_DIR = path.join(ROOT, "src");

function loadJsonMap() {
  const map = {};
  for (const type of ["notes","projects","studies","media"]) {
    const p = path.join(DATA_DIR, `${type}.json`);
    if (fs.existsSync(p)) {
      const json = JSON.parse(fs.readFileSync(p, "utf8"));
      const m = {};
      for (const item of (json.items || [])) {
        let slug = "";
        if (item.href && item.href.includes("slug=")) {
          slug = item.href.split("slug=")[1];
        } else if (item.href) {
          slug = item.href.split("/").pop().replace(/\.html?$/i, "");
        }
        if (!slug) continue;
        m[slug] = { date: item.date, title: item.title || null };
      }
      map[type] = m;
    } else {
      map[type] = {};
    }
  }
  return map;
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function deriveTitleFromMarkdown(md) {
  const m = md.match(/^\s{0,3}#{1,6}\s+(.+?)\s*$/m);
  return m ? m[1].trim() : null;
}

function deriveDescription(md) {
  const stripped = md.replace(/\r/g,"").replace(/<[^>]+>/g,"");
  const parts = stripped.split("\n\n").map(s=>s.trim()).filter(Boolean);
  if (!parts.length) return null;
  let i = 0;
  if (/^#{1,6}\s+/.test(parts[0])) i = 1;
  const para = parts[i] || parts[0] || "";
  return para.replace(/^#{1,6}\s+/, "").slice(0, 300);
}

function stripLeadingHeading(md) {
  const lines = md.split(/\r?\n/);
  if (lines.length && /^#{1,6}\s+/.test(lines[0])) {
    return lines.slice(1).join("\n").replace(/^\s*\n/, "");
  }
  return md;
}

function migrate() {
  const metaMap = loadJsonMap();
  ensureDir(SRC_DIR);

  for (const type of ["notes","projects","studies","media"]) {
    const typeDir = path.join(POSTS_DIR, type);
    if (!fs.existsSync(typeDir)) continue;

    const outDir = path.join(SRC_DIR, type);
    ensureDir(outDir);

    const mdFiles = fs.readdirSync(typeDir).filter(f => f.endsWith(".md"));
    for (const file of mdFiles) {
      const slug = file.replace(/\.md$/i, "");
      const absIn = path.join(typeDir, file);
      const raw = fs.readFileSync(absIn, "utf8");

      const j = (metaMap[type] && metaMap[type][slug]) || {};
      const title = j.title || deriveTitleFromMarkdown(raw) || slug.replace(/[-_]/g, " ");
      const description = deriveDescription(raw) || "";
      const date = j.date || "2025-01-01";

      const body = stripLeadingHeading(raw).replace(/src="assets\//g, 'src="/assets/');

      const fm = [
        "---",
        `title: "${title.replace(/"/g,'\\"')}"`,
        `description: "${description.replace(/"/g,'\\"')}` + `"`,
        `date: ${date}`,
        `type: ${type}`,
        `layout: layouts/post.njk`,
        `permalink: "/${type}/${slug}/index.html"`,
        "---",
        ""
      ].join("\n");

      const outPath = path.join(outDir, `${slug}.md`);
      fs.writeFileSync(outPath, fm + body, "utf8");
    }
  }

  console.log("Migration concluded: Markdown moved to src/, frontmatter added.");
}

migrate();


