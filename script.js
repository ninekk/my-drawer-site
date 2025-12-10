const btn = document.getElementById("menuBtn");
const drawer = document.getElementById("drawer");

btn.addEventListener("click", () => {
  drawer.classList.toggle("open");
});
