const navBar = document.querySelector("#navBar");
const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");
const menuOptions = document.querySelectorAll(".nav_nav-list");

openMenu.addEventListener("click", menuOpen);
closeMenu.addEventListener("click", menuClose);

function menuOpen(){
  navBar.classList.add("show");
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
}

function menuClose(){
  navBar.classList.remove("show");
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
}

menuOptions.forEach(menuOption => {
  menuOption.addEventListener("click", () => {
    menuClose();
  });
});