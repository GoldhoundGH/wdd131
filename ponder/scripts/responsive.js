let menuBtn = document.getElementsByClassName("menu-btn")[0];
// console.log(menuBtn);

menuBtn.addEventListener("click", handleMenuClick);

function handleMenuClick(event) {
    // console.log(event)
    // let nav = document.getElementsByTagName("nav");
    let nav = document.querySelector("nav");
    nav.classList.toggle("hide");
    menuBtn.classList.toggle("change")
}