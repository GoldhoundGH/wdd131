
const photos = document.querySelector('#photos');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
photos.addEventListener('click', openModal);

function openModal(e) {
    
    console.log(e.target.src); // ...(e.target.src) ?
    modal.showModal();
    modalImage.src = e.target.src.replace("-sm","-full");
    // console.log(modalImage.src)
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
    modalImage.src = "";
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
        modalImage.src = "";
    }
});


let menuBtn = document.getElementsByClassName("menu_small")[0];
// console.log(menuBtn);

menuBtn.addEventListener("click", handleMenuClick);

function handleMenuClick(event) {
    console.log(event)
    // let nav = document.getElementsByTagName("nav");
    let nav = document.querySelector("nav");
    nav.classList.toggle("hide");
    // menuBtn.classList.toggle("show");
    // menuBtn.classList.toggle("change")
}
