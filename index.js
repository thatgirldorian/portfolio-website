//this will help toggle the hamburger menu
const menu = document.querySelector(".menu")
const menuItems = document.querySelectorAll(".menuItem")
const hamburger = document.querySelector(".hamburger")
const closeIcon = document.querySelector(".closeIcon")
const menuIcon = document.querySelector(".menuIcon")

// Toggle the menu
toggleMenu = () => {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu")
        closeIcon.style.display = "none"
        menuIcon.style.display = "inline"
    } else {
        menu.classList.add("showMenu")
        closeIcon.style.display = "inline"
        menuIcon.style.display = "none"
    }
}

hamburger.addEventListener("click", toggleMenu)

// Hide menu when the links are clicked
menuItems.forEach(
    function(menuItem) { 
        menuItem.addEventListener("click", toggleMenu);
    })
