const container = document.querySelector(".container");
let resolution = 16;
let count = 1;


function createGrid(res) {
    let flexBasis = Math.floor(100/res);
    //create a grid of divs
    for (let i = 0; i < res; i++) {
        for (let i = 0; i < res; i++) {
            let pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.style.cssText = `flex-basis: ${flexBasis}%;`;
            pixel.textContent = count;
            container.appendChild(pixel);
            count++;
        } 
    }
}

createGrid(resolution);