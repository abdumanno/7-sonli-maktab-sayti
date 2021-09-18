const burger = document.querySelector("#burger"),
  menu = document.querySelector(".menu");
// menu.style.display = "none";
burger.addEventListener("click", () => {
  menu.style.animation = "menu 1s  linear .1s";
  menu.style.display = "block";
  burger.style.display = "none";
},2000);
document.querySelector(".delete").addEventListener("click",()=>{
  menu.style.display = "none";
  burger.style.display = "block";
});
