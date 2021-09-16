const maktab = () =>{
     const burger = document.querySelector("#menu"),
     nav = document.querySelector(".menu"),
     navlinks = document.querySelectorAll(".menu li");
     burger.addEventListener("click",()=>{
          nav.classList.toggle("nav-active");
     });
     navlinks.forEach((link,i)=>{
          link.style.animation = `navmenu 0.5s ease forwards ${
               i/7+0.35}s`;
     });
}
