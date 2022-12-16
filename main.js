const mo =  document.querySelector("#mo");
const navitems =  document.querySelector(".nav-items");
const navlinks =  document.querySelectorAll(".nav-link");
const navmain =  document.querySelector(".nav-main");
mo.addEventListener('click',() =>{
    navitems.classList.toggle("active");
    mo.classList.toggle("moc");
    
});
navlinks.forEach(navlink => {
    navlink.addEventListener('click',() =>{
        navitems.classList.toggle("active");
        mo.classList.toggle("moc");
        
    });
});
window.onscroll = function () {
    if (window.scrollY === 0) {
        navmain.classList.remove("scr")
    } else {
        navmain.classList.add("scr")
    }
}