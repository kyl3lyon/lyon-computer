(function() {
  "use strict";

  function parseParams() {
    const params = new URLSearchParams(window.location.search);
    const src = params.get("src");
    const type = params.get("type") || "notes";
    const title = params.get("title") || "Post";
    return { src, type, title };
  }

  function updateChrome(type, title) {
    const humanType = type.charAt(0).toUpperCase() + type.slice(1);
    document.title = title;
    
    const breadcrumb = document.getElementById("breadcrumb");
    if (breadcrumb) {
      breadcrumb.innerHTML = `~ / <a class="link" href="/">Home</a> / <a class="link" href="/archive.html?type=${type}">${humanType}</a> / ${title}`;
    }

    const backLink = document.getElementById("back-link");
    if (backLink) {
      backLink.href = `/archive.html?type=${type}`;
      backLink.textContent = `← Back to ${humanType}`;
    }

    document.body.classList.add(`tag-${type}`);
  }

  async function loadAndRenderMarkdown(src) {
    const contentDiv = document.getElementById("post-content");
    if (!contentDiv) return;

    if (!src) {
      contentDiv.innerHTML = "<h2>Error: No post source specified.</h2>";
      return;
    }

    try {
      const res = await fetch(src, { cache: "no-store" });
      if (!res.ok) {
        throw new Error(`File not found: ${src}`);
      }
      const markdown = await res.text();
      // Use marked.parse() which is the new method for marked v4+
      contentDiv.innerHTML = marked.parse(markdown);
    } catch (err) {
      console.error("Failed to load or render markdown:", err);
      contentDiv.innerHTML = `<h2>Error loading post</h2><p>${err.message}</p>`;
    }
  }

  async function init() {
    const { src, type, title } = parseParams();
    updateChrome(type, title);
    await loadAndRenderMarkdown(src);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
