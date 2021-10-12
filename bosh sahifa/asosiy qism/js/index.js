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
window.addEventListener("DOMContentLoaded", function () {
  let tabs = document.querySelectorAll(".tabheader__item"),
    tabParents = document.querySelector(".tabheader__items"),
    tabcontent = document.querySelectorAll(".tabcontent");
  function showheadr() {
    tabcontent.forEach((item) => {
      item.classList.add("none");
      item.classList.remove("show", "fade");
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }
  function table(i = 0) {
    tabcontent[i].classList.add("show", "fade");
    tabcontent[i].classList.remove("none");
    tabs[i].classList.add("tabheader__item_active");
  }
  showheadr();
  table();
  tabParents.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (event.target === item) {
          showheadr();
          table(i);
        }
      });
    }
  });
});
