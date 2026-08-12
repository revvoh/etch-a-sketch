let size = 16;

function createGrid(size) {
    for(let i=0; i < (size**2); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.flex = `0 0 calc(100% / ${size})`;
        square.style.opacity = `0.1`;
        gridContainer.appendChild(square);
    }

    const buttons = document.querySelectorAll(".square");

    buttons.forEach((button) => {
        button.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = randomRGB();
            let opacity = e.target.style.opacity
            if(parseFloat(opacity) >= 1.0){
                return;
            }
            else
            {
                e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1;    
            }
            
        });
    });
}

function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

const gridContainer = document.querySelector("#grid");
const newGridButton = document.querySelector("#new");
const resetGridButton = document.querySelector("#reset");

createGrid(size);
newGridButton.addEventListener("click", () => {
    do{
        size = prompt("Enter a size for the new grid:\nnote: number should not exceed 100");
    } while (size > 100);
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    createGrid(size);
});

resetGridButton.addEventListener("click", () => {
    const buttons = document.querySelectorAll(".square");
    buttons.forEach((button) => {
        button.style.backgroundColor = "white";
        button.style.opacity = "0.1";
    });
})
