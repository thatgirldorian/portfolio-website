//make the header sticky
window.onscroll = function() {makeSticky()};

// Get the header
let header = document.querySelector(".navbar");

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function makeSticky() {
    if (window.pageYOffset > sticky) {
    header.classList.add("sticky-header");
    } else {
    header.classList.remove("sticky-header");
    }
}