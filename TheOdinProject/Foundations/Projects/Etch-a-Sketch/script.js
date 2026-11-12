const container = document.querySelector(".container");

const button = document.querySelector("button");

button.addEventListener("click", () => {
    let box = prompt("Enter the number of row/col of Sketch pad: ");
    if(box > 100) alert("Size can't be greater than 100 X 100");
    else {    
        container.innerHTML = "";
        for (let i = 0; i < box * box; i++) {
            const square = document.createElement("div");
            square.style.height = square.style.width = `${960/box}px`;
            square.classList.add("square");

            container.appendChild(square);
        }
    }
});