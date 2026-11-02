(() => {
  "use strict";

  const initialize = () => {
    document.documentElement.classList.add("has-js");
    const year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());

    const menuToggle = document.querySelector("button.menu-toggle");
    const navigation = document.getElementById("site-nav");

    if (menuToggle && navigation) {
      const setMenuOpen = (open) => {
        menuToggle.setAttribute("aria-expanded", String(open));
        navigation.classList.toggle("is-open", open);
      };

      setMenuOpen(false);
      menuToggle.hidden = false;

      menuToggle.addEventListener("click", () => {
        setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
      });

      navigation.addEventListener("click", (event) => {
        if (event.target instanceof Element && event.target.closest('a[href^="#"]')) {
          setMenuOpen(false);
        }
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
          setMenuOpen(false);
          menuToggle.focus();
        }
      });

      window.matchMedia("(min-width: 760px)").addEventListener("change", (event) => {
        if (event.matches) setMenuOpen(false);
      });
    }

    const filterButtons = Array.from(document.querySelectorAll("button[data-filter]"));
    const projects = Array.from(document.querySelectorAll("article[data-project][data-category]"));
    const projectStatus = document.getElementById("project-status");

    if (filterButtons.length && projects.length) {
      const applyFilter = (filter) => {
        let visibleCount = 0;

        projects.forEach((project) => {
          const visible = filter === "all" || project.dataset.category === filter;
          project.hidden = !visible;
          if (visible) visibleCount += 1;
        });

        filterButtons.forEach((button) => {
          button.setAttribute("aria-pressed", String(button.dataset.filter === filter));
        });

        if (projectStatus) projectStatus.textContent = `显示 ${visibleCount} 个作品`;
      };

      filterButtons.forEach((button) => {
        button.addEventListener("click", () => applyFilter(button.dataset.filter));
      });

      applyFilter("all");
      document.querySelectorAll("[data-filter-controls]").forEach((controls) => {
        controls.hidden = false;
      });
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
})();
