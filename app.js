const link = document.querySelectorAll("#lnk");
const close = document.querySelector(".close");
const open = document.querySelector(".open");

open.addEventListener("click", () => {
  link.forEach((link) => (link.style.display = "block"));
  open.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", () => {
  open.style.display = "block";
  close.style.display = "none";
  link.forEach((link) => (link.style.display = "none"));
});
