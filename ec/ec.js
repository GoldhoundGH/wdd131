const dieImages = document.querySelectorAll("#gameboard img");


document.getElementById("rollButton").addEventListener("click", (event) => {

    // dieImages[0].src = "assets/die_rolling.gif";

    dieImages.forEach((image) => {
        if(isDieChecked(image)) {
            image.src = "assets/die_rolling.gif";
        }
    });

    setTimeout(() => {
        dieImages.forEach((image) => {
            if(isDieChecked(image)) {
                image.src = "assets/white_dice_" + (Math.floor(Math.random() * 5 + 1)) + ".gif";
            }
        });
    }, 500);

});

function isDieChecked(die) {
    const checkboxes = document.querySelectorAll("#gameboard input");
    const unchecked = Array.from(checkboxes).filter(checkbox => !checkbox.checked);
    return unchecked.find(checkbox => checkbox.className === die.className);
}