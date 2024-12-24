const container = document.querySelector(".container");
let resolution = 16;

function createGrid(res) {
    let flexBasis = (100/res);
    for (let i = 0; i < res; i++) {
        for (let i = 0; i < res; i++) {
            let pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.style.cssText = `flex-basis: ${flexBasis}%;`;
            container.appendChild(pixel);
        } 
    }
    addPixelEventListenrs();
}

createGrid(resolution);


function addPixelEventListenrs() {
    let pixels = document.querySelectorAll(".pixel");

    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseover", () => {
            pixel.classList.add('pixel-color');
        });
    });
};
const resButton = document.querySelector(".resolution");

resButton.addEventListener("click", () => {
    let chosenRes = 101;
    while (chosenRes > 100) {
        chosenRes = prompt("What resolution would you like (max 100)?");
    };
    let pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        container.removeChild(pixel);
    });
    createGrid(chosenRes);  
    addPixelEventListenrs();
});
     