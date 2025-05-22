const link = document.querySelector(".links");
const close = document.querySelector(".close");
const open = document.querySelector(".open");

open.addEventListener("click", () => {
  link.classList.add("show");
  open.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", () => {
  link.classList.remove("show");
  open.style.display = "block";
  close.style.display = "none";
});
