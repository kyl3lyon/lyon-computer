(function() {
  "use strict";

  const categories = ["notes", "projects", "studies", "media"];
  const BASEURL = (typeof window !== "undefined" && window.__BASEURL__) ? window.__BASEURL__ : "";

  async function fetchAllItems() {
    let allItems = [];
    for (const category of categories) {
      try {
        const res = await fetch(`${BASEURL}assets/data/${category}.json`, { cache: "no-store" });
        if (!res.ok) {
          console.error(`Failed to load data for ${category}`);
          continue; 
        }
        const data = await res.json();
        if (data.items && Array.isArray(data.items)) {
          const itemsWithCategory = data.items.map(item => ({ ...item, category }));
          allItems = allItems.concat(itemsWithCategory);
        }
      } catch (err) {
        console.error(`Error fetching ${category}.json:`, err);
      }
    }
    return allItems;
  }

  function sortItemsByDate(items) {
    return items.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  function renderRows(items) {
    const tbody = document.getElementById("site-index-tbody");
    if (!tbody) return;

    if (!items || items.length === 0) {
      tbody.innerHTML = '<tr><td colspan="3">No items found.</td></tr>';
      return;
    }

    let rowsHtml = "";
    for (const item of items) {
      const humanCategory = item.category.charAt(0).toUpperCase() + item.category.slice(1);
      const href = item.href.startsWith("http") ? item.href : `${BASEURL}${item.href}`;
      rowsHtml += `
        <tr>
          <td>
            <time datetime="${item.date}">${item.date}</time>
          </td>
          <td>
            <a href="${href}" title="${item.title}">${item.title}</a>
          </td>
          <td class="hide-phone">${humanCategory}</td>
        </tr>
      `;
    }
    tbody.innerHTML = rowsHtml;
  }

  async function init() {
    const allItems = await fetchAllItems();
    const sortedItems = sortItemsByDate(allItems);
    renderRows(sortedItems);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
