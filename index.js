//

// window.onload = function() {
//     let client = contentful.createClient({
//         space: 'mdfqpwy4pc7k',
//         accessToken: 'X0B5mSBqytlkq5PKARxwhHTBrOePhHeWavJZ2FtXOeI',
//     });

//     const getBlogPosts = async ()=>{
//         const data = await client.getEntries().then(function (entries) {
//           console.log(entries)
//             // log the title for all the entries that have it
//             entries.items.forEach(function (entry) {
//               if (entry.fields.productName) {
//                 console.log(entry.fields.productName);
//               }
//             });
//           });
//           console.log(data)
//     }
//     getBlogPosts()
//   };



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
        menuIcon.style.display = "block"
    } else {
        menu.classList.add("showMenu")
        closeIcon.style.display = "block"
        menuIcon.style.display = "none"
    }
}

hamburger.addEventListener("click", toggleMenu)

// Hide menu when the links are clicked
menuItems.forEach(
    function(menuItem) { 
        menuItem.addEventListener("click", toggleMenu);
    })
