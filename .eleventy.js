module.exports = function(eleventyConfig) {
  // Preserve assets and CNAME
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "CNAME": "CNAME" });

  // Date formatting filter for Nunjucks
  eleventyConfig.addFilter("fmtDate", function(date) {
    try {
      const d = new Date(date);
      if (Number.isNaN(d.getTime())) return String(date);
      return new Intl.DateTimeFormat("en-CA", { year: "numeric", month: "2-digit", day: "2-digit" }).format(d);
    } catch (e) {
      return String(date);
    }
  });

  // Nunjucks-compatible 'date' filter used by templates
  eleventyConfig.addNunjucksFilter("date", function(dateVal, format) {
    try {
      const d = new Date(dateVal);
      if (Number.isNaN(d.getTime())) return String(dateVal);
      if (format === "yyyy-MM-dd") {
        const iso = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())).toISOString();
        return iso.slice(0, 10);
      }
      if (format === "yyyy") {
        return String(d.getFullYear());
      }
      // Fallback ISO date string
      return d.toISOString();
    } catch (e) {
      return String(dateVal);
    }
  });

  // Collections
  eleventyConfig.addCollection("notes", c => c.getFilteredByGlob("src/notes/**/*.md").sort((a,b)=>b.date-a.date));
  eleventyConfig.addCollection("projects", c => c.getFilteredByGlob("src/projects/**/*.md").sort((a,b)=>b.date-a.date));
  eleventyConfig.addCollection("studies", c => c.getFilteredByGlob("src/studies/**/*.md").sort((a,b)=>b.date-a.date));
  eleventyConfig.addCollection("media", c => c.getFilteredByGlob("src/media/**/*.md").sort((a,b)=>b.date-a.date));
  eleventyConfig.addCollection("allPosts", c => [
    ...c.getFilteredByGlob("src/notes/**/*.md"),
    ...c.getFilteredByGlob("src/projects/**/*.md"),
    ...c.getFilteredByGlob("src/studies/**/*.md"),
    ...c.getFilteredByGlob("src/media/**/*.md"),
  ].sort((a,b)=>b.date-a.date));

  // Limit filter for Nunjucks (take first N items)
  eleventyConfig.addNunjucksFilter("limit", function(arr, count) {
    if (!Array.isArray(arr)) return [];
    const n = typeof count === "number" ? count : 0;
    return arr.slice(0, Math.max(0, n));
  });

  return {
    dir: { input: "src", output: "dist", includes: "_includes", data: "_data" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};


