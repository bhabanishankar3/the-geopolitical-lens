document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll("[data-category]");
  buttons.forEach(btn => btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    cards.forEach(card => {
      card.style.display = (filter === "all" || card.dataset.category === filter) ? "" : "none";
    });
  }));

  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".site-header nav");
  if (menu && nav) {
    menu.addEventListener("click", () => {
      nav.classList.toggle("open");
      nav.style.display = nav.classList.contains("open") ? "flex" : "";
      if (nav.classList.contains("open")) {
        nav.style.position = "absolute";
        nav.style.top = "78px";
        nav.style.left = "0";
        nav.style.right = "0";
        nav.style.padding = "20px 7vw";
        nav.style.background = "#07111f";
        nav.style.flexDirection = "column";
      }
    });
  }
});
