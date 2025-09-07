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

  function getRoot() {
    const BASEURL = (typeof window !== "undefined" && window.__BASEURL__) ? window.__BASEURL__ : "";
    return BASEURL ? (BASEURL.endsWith('/') ? BASEURL : BASEURL + '/') : '/';
  }

  async function loadData(type) {
    const ROOT = getRoot();
    const res = await fetch(`${ROOT}assets/data/${type}.json`, { cache: "no-store" });
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
      const ROOT = getRoot();
      a.href = item.href && !item.href.startsWith("http") ? `${ROOT}${item.href}` : item.href;
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
      const BASEURL = (typeof window !== "undefined" && window.__BASEURL__) ? window.__BASEURL__ : "";
      const ROOT = BASEURL ? (BASEURL.endsWith('/') ? BASEURL : BASEURL + '/') : '/';
      let path = window.location.pathname || '';
      if (BASEURL && path.startsWith(BASEURL)) path = path.slice(BASEURL.length);
      path = path.replace(/^\/+/, '').replace(/\/+$/,'');
      const desired = `${type}/archive.html`;
      if (path !== desired) {
        const prettyUrl = ROOT + desired;
        if (window.history && window.history.replaceState) {
          window.history.replaceState({}, '', prettyUrl);
        }
      }
    } catch (e) {
      // no-op if history API is unavailable
    }
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

