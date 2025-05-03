const container = document.querySelector(".container");
const box = document.createElement("div");

let idCount = 0;

function makeGrid() {
  for (let i = 0; i <= 256; i++) {
    const box = document.createElement("div");
    box.id = idCount;
    idCount++;
    box.classList.add("grid");
    container.appendChild(box);
    box.textContent = "";
    console.log(box.id);
  }
  const boxes = document.querySelectorAll(".grid");
  boxes.forEach((box) => {
    let colorPicker = randomRGB();
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = colorPicker;
    });
  });
}

function randomRGB() {
  const h = Math.floor(Math.random() * 360);
  return `hsl(${h}deg, 100%, 90%)`;
}

makeGrid();
