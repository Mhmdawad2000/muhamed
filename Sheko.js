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

let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let nouval = document.querySelector(".nouval");
window.onscroll = function () {
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    nouval.style.fontSize = value + 'px';
     if (window.scrollY === 0) {
        navmain.classList.remove("scr")
    } else {
        navmain.classList.add("scr")
    }
    if(scrollY>=67){
        nouval.style.fontSize=67+'px';
        nouval.style.position='fixed';
        river.style.display='none';
        if(scrollY>=360){
            nouval.style.display='none';
        }else{
            nouval.style.display='block';
        }
    }else{
        river.style.display='block';
    }
    if(scrollY>=127){
        document.querySelector('.main').style.background='linear-gradient(#376281,#10001f)';
    }else{
        document.querySelector('.main').style.background='linear-gradient(#200016,#10001f)';
    }
}

