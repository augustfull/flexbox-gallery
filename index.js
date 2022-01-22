document.addEventListener("DOMContentLoaded", () => {
  const panels = document.querySelectorAll(".panel");

  function toggle() {
    this.classList.toggle("open");
  }

  function toggleActive() {
    this.classList.toggle("open-active");
  }

  panels.forEach((panel) => panel.addEventListener("click", toggle));
  panels.forEach((panel) =>
    panel.addEventListener("transitionend", toggleActive)
  );
});
