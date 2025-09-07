(function() {
  "use strict";

  function parseType() {
    const params = new URLSearchParams(window.location.search);
    const type = (params.get("type") || "notes").toLowerCase();
    const allowed = ["notes", "projects", "studies", "media"];
    if (allowed.includes(type)) {
      return type;
    }
    return "notes";
  }

  function setChrome(type) {
    const human = type.charAt(0).toUpperCase() + type.slice(1);
    document.title = `Kyle Lyon / ${human}`;
    const crumb = document.getElementById("crumb-type");
    const h2 = document.getElementById("archive-title");
    if (crumb) crumb.textContent = human;
    if (h2) h2.textContent = `${human} Index`;
    const body = document.getElementById("archive-body");
    if (body) {
      body.classList.add(`tag-${type}`);
    }
  }

  async function loadData(type) {
    const BASEURL = (typeof window !== "undefined" && window.__BASEURL__) ? window.__BASEURL__ : "";
    const res = await fetch(`${BASEURL}assets/data/${type}.json`, { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to load data for ${type}`);
    return res.json();
  }

  function renderRows(items) {
    const tbody = document.getElementById("archive-tbody");
    if (!tbody) return;
    tbody.innerHTML = "";
    items.forEach(item => {
      const tr = document.createElement("tr");
      const tdDate = document.createElement("td");
      const time = document.createElement("time");
      time.setAttribute("datetime", item.date);
      time.textContent = item.date;
      tdDate.appendChild(time);

      const tdTitle = document.createElement("td");
      tdTitle.className = "pv1 pr4 dtc";
      const a = document.createElement("a");
      a.className = "link";
      const BASEURL = (typeof window !== "undefined" && window.__BASEURL__) ? window.__BASEURL__ : "";
      a.href = item.href && !item.href.startsWith("http") ? `${BASEURL}${item.href}` : item.href;
      a.title = item.title;
      a.textContent = item.title;
      tdTitle.appendChild(a);

      tr.appendChild(tdDate);
      tr.appendChild(tdTitle);
      tbody.appendChild(tr);
    });
  }

  async function init() {
    const type = parseType();
    setChrome(type);
    try {
      const data = await loadData(type);
      renderRows(data.items || []);
    } catch (err) {
      console.error("archive.js: data load failed", { error: String(err) });
      renderRows([]);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

