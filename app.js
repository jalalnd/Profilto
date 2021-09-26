window.onload=function(){
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list .drop');
const header = document.querySelector('.header.container');
const Home = document.getElementById("Home");
const About = document.getElementById("About");
const Contact = document.getElementById("Contact");

Home.addEventListener("click", handler);
About.addEventListener("click", handler);
Contact.addEventListener("click", handler);

hamburger.addEventListener('click', () => {
    console.log("Hello world!");
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    
});

function handler() {
    console.log("Hello world!");
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
}
}

