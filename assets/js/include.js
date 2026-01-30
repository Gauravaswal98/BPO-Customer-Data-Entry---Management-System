document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-include]").forEach(el => {
    fetch(el.getAttribute("data-include"))
      .then(res => res.text())
      .then(html => {
        el.outerHTML = html;

        // ⏳ wait for DOM paint
        setTimeout(setActiveMenu, 0);
      });
  });
});

function setActiveMenu() {
  const currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll(".side-nav-link").forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage) {
      link.closest(".side-nav-item").classList.add("active");
    }
  });
}
