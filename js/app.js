const content = document.getElementById("content");

async function loadPage(page) {
  try {
    const res = await fetch(`sections/${page}.html`);
    const html = await res.text();
    content.innerHTML = html;
  } catch (err) {
    content.innerHTML = "<p>Page not found.</p>";
  }
}

function router() {
  const hash = window.location.hash.replace("#", "") || "home";
  loadPage(hash);
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
