(function() {
  "use strict";

  function parseParams() {
    const params = new URLSearchParams(window.location.search);
    let src = params.get("src");
    let type = params.get("type") || "notes";
    const slug = params.get("slug");
    if (!src && slug) {
      src = `posts/${type}/${slug}.md`;
    }

    // Fallback to path-based parsing if neither src nor slug param is present
    if (!src) {
      const BASEURL = (typeof window !== "undefined" && window.__BASEURL__) ? window.__BASEURL__ : "";
      let path = window.location.pathname || "";
      if (BASEURL && path.startsWith(BASEURL)) path = path.slice(BASEURL.length);
      path = path.replace(/^\/+/, "");
      const segments = path.split("/");
      if (segments[0] === "p" && segments.length >= 3) {
        type = segments[1] || type;
        const slugFromPath = (segments[2] || "").replace(/\/?index\.html?$/i, "").replace(/\/$/, "");
        if (slugFromPath) {
          src = `posts/${type}/${slugFromPath}.md`;
        }
      }
    }
    return { src, type };
  }

  function updateChrome(type, interimTitle = "Post") {
    const humanType = type.charAt(0).toUpperCase() + type.slice(1);
    document.title = interimTitle;

    const breadcrumb = document.getElementById("breadcrumb");
    const BASEURL = (typeof window !== "undefined" && window.__BASEURL__) ? window.__BASEURL__ : "";
    if (breadcrumb) {
      breadcrumb.innerHTML = `~ / <a class="link" href="${BASEURL}">Home</a> / <a class="link" href="${BASEURL}archive.html?type=${type}">${humanType}</a> / ${interimTitle}`;
    }

    const backLink = document.getElementById("back-link");
    if (backLink) {
      backLink.href = `${BASEURL}archive.html?type=${type}`;
      backLink.textContent = `← Back to ${humanType}`;
    }

    document.body.classList.add(`tag-${type}`);
  }

  function applyFinalTitle(type, finalTitle) {
    updateChrome(type, finalTitle);
  }

  async function loadAndRenderMarkdown(src, type) {
    const contentDiv = document.getElementById("post-content");
    if (!contentDiv) return;

    if (!src) {
      contentDiv.innerHTML = "<h2>Error: No post source specified.</h2>";
      return;
    }

    try {
      const BASEURL = (typeof window !== "undefined" && window.__BASEURL__) ? window.__BASEURL__ : "";
      const url = src.startsWith("http") ? src : `${BASEURL}${src.startsWith('/') ? src.slice(1) : src}`;
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) {
        throw new Error(`File not found: ${src}`);
      }
      const markdown = await res.text();
      // Determine title from the first ATX-style heading (any level)
      const match = markdown.match(/^\s{0,3}#{1,6}\s+(.+)$/m);
      const derivedTitle = match ? match[1].trim() : "Post";
      applyFinalTitle(type, derivedTitle);
      // Use marked.parse() which is the new method for marked v4+
      contentDiv.innerHTML = marked.parse(markdown);
    } catch (err) {
      console.error("Failed to load or render markdown:", err);
      contentDiv.innerHTML = `<h2>Error loading post</h2><p>${err.message}</p>`;
    }
  }

  async function init() {
    const { src, type } = parseParams();
    updateChrome(type, "Loading…");
    await loadAndRenderMarkdown(src, type);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
