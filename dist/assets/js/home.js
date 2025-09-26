(function() {
  "use strict";

  const categories = ["notes", "projects", "studies", "media"];
  const BASEURL = (typeof window !== "undefined" && window.__BASEURL__) ? window.__BASEURL__ : "";
  const ROOT = BASEURL ? (BASEURL.endsWith('/') ? BASEURL : BASEURL + '/') : '/';
  const displayLimit = 5; 

  const categorySingular = {
    "notes": "Note",
    "projects": "Project",
    "studies": "Study",
    "media": "Media"
  };

  async function loadItems(category) {
    try {
      const res = await fetch(`${ROOT}assets/data/${category}.json`, { cache: "no-store" });
      if (!res.ok) {
        console.error(`Failed to load data for ${category}`);
        return [];
      }
      const data = await res.json();
      return data.items && Array.isArray(data.items) ? data.items : [];
    } catch (err) {
      console.error(`Error fetching ${category}.json:`, err);
      return [];
    }
  }

  function renderRows(category, items) {
    const tbody = document.getElementById(`${category}-tbody`);
    if (!tbody) return;

    if (!items || items.length === 0) {
      tbody.innerHTML = '<tr><td colspan="3">No items found.</td></tr>';
      return;
    }

    const humanType = categorySingular[category];
    let rowsHtml = "";
    
    const itemsToShow = items.slice(0, displayLimit);

    for (const item of itemsToShow) {
      const linkTitle = `View ${humanType} - ${item.title}`;
      const buttonText = (humanType === 'Studie' || humanType === 'Project') ? 'View' : 'Read';
      const slug = item.href.split('slug=')[1] || item.href.split('/').pop();
      const cleanUrl = `${ROOT}${category}/${slug}`;
      rowsHtml += `
        <tr>
          <td>
            <time datetime="${item.date}">${item.date}</time>
          </td>
          <td>
            <a href="${cleanUrl}" title="${item.title}">${item.title}</a>
          </td>
          <td class="hide-phone">
            <a class="btn btn-sm bg-dark-green white hover-white hover-bg-black measure-6" href="${cleanUrl}" title="${linkTitle}">${buttonText} →</a><br/>
          </td>
        </tr>
      `;
    }
    tbody.innerHTML = rowsHtml;
  }

  async function init() {
    for (const category of categories) {
      const items = await loadItems(category);
      renderRows(category, items);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
