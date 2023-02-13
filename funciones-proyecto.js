window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0)
})

const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
})


let hideText_btn = document.getElementById("hideText_btn")
let hideText = document.getElementById("hideText")

hideText_btn.addEventListener("click", toggleText);

function toggleText(){
    hideText.classList.toggle("show");
    if(hideText.classList.contains("show")){
        hideText_btn.innerHTML= "Ocultar Bibliografía";
    }
    else{
        hideText_btn.innerHTML= "Mostrar Bibliografía";
    }
}
