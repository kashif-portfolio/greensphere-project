let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-3');
let scrolltop = document.querySelector('.scroll-top');
document.querySelector('.footer-bottom p').innerHTML = `&copy; ${new Date().getFullYear()} <strong>Greensphare</strong> | All rights reserved | Created by <span>KASHIF ABBASI</span>`;
// adds the copyright symbol. dynamically gets the current year.


menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');  //Adds a click event listener to the menu element.When the menu is clicked, the function inside will run. 
    navbar.classList.toggle('active');
});

window.onscroll = () => {    //he onscroll event is triggered when the user moves the page up or down.

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    if (window.scrollY > 250) {   //window.scrollY is the distance the page has been scrolled vertically from the top.
        header.classList.add('active');
    } else { 
        header.classList.remove('active');
    }

    if (window.scrollY > 250) {
        scrolltop.style.display = 'initial';
    } else { 
        scrolltop.style.display = 'none'; 
    }
};

var swiper = new Swiper(".home-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
});
// JavaScript code for additional functionality can be added here
// For example, handling the search button click

document.querySelector('.search-section button').addEventListener('click', function() {
    var category = document.querySelector('.search-section select').value;
    var searchText = document.querySelector('.search-section input').value;

    // Perform search logic here
    console.log('Category:', category);
    console.log('Search Text:', searchText);

    // You can redirect to the products page with query parameters
    var url = 'products.html?category=' + category + '&search=' + encodeURIComponent(searchText);
    window.location.href = url;
});
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            var mapUrl = `https://www.google.com/maps?q=${lat},${lon}&hl=en`;
            window.open(mapUrl, '_blank');  // Open map with the user's location in a new tab
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

