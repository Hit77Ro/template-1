function ShowMenu() {
  let menu = document.querySelector(".header .nav");
  let header = document.querySelector(".header");
  let bar = menu.parentElement.querySelector(".menu-toggler");
  bar.addEventListener("click", () => menu.classList.toggle("active"));

  menu.addEventListener("click", (e) =>
    e.target.matches(".nav-link") ? bar.click() : null
  );
  document.addEventListener("click", (e) =>
    !header.contains(e.target) ? bar.click() : null
  );
}

ShowMenu();
// Start sticky header function
function StickyHeader() {
  let header = document.querySelector(".header");
  header.querySelector(".nav").classList.contains(".active")
    ? header.querySelector(".nav").classList.remove("active")
    : null;

  window.addEventListener("scroll", function () {
    let y = this.scrollY;
    if (y > 700) header.classList.add("sticky");
    else header.classList.remove("sticky");
  });
}

StickyHeader();
