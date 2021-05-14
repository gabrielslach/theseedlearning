var myNav = document.getElementById('navbar');
var navbarBrand = document.getElementById('navbar-brand');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
        myNav.classList.add("nav-bg-green");
        myNav.classList.remove("nav-bg");

        navbarBrand.classList.add('brand-container-sm')
        navbarBrand.classList.remove('brand-container')
    } 
    else {
        myNav.classList.add("nav-bg");
        myNav.classList.remove("nav-bg-green");
        
        navbarBrand.classList.add('brand-container')
        navbarBrand.classList.remove('brand-container-sm')
    }
};