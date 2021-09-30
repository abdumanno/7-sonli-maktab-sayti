const burger = document.querySelector("#burger"),
  clone = document.querySelector(".delete");
const menu = document.querySelector(".menu");
burger.addEventListener("click", openburger);
clone.addEventListener("click", exitburger);
function openburger() {
  menu.style.display = "block";
  burger.style.display = "none";
}
function exitburger() {
  menu.style.display = "none";
  burger.style.display = "block";
}
burger.addEventListener("click", (event) => {
  console.log(event.target);
  if (event.target === menu) {
    exitburger();
  }
});
const btn = document.querySelector(".loader");
setTimeout(() => {
  btn.style.opacity = "0";
  setTimeout(() => {
    btn.style.display = "none";
  }, 1300);
}, 1800);
