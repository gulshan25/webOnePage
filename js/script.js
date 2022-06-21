let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.assEventListener("click", function() {
    navlist.classList.toggle("active");
});

window.onscroll = () => {
    navlist.classList.remove("active");
};