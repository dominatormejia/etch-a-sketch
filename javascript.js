const container = document.querySelector(".container");
const box = document.createElement("div");
const resize = document.querySelector(".resize");
const erase = document.querySelector(".erase");
const draw = document.querySelector(".draw");

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

draw.addEventListener("mouseover", () => {
  draw.style.backgroundColor = randomRGB();
});
draw.addEventListener("mouseout", () => {
  draw.style.backgroundColor = "";
});

erase.addEventListener("mouseover", () => {
  erase.style.backgroundColor = randomRGB();
});
erase.addEventListener("mouseout", () => {
  erase.style.backgroundColor = "";
});

resize.addEventListener("mouseover", () => {
  resize.style.backgroundColor = randomRGB();
});
resize.addEventListener("mouseout", () => {
  resize.style.backgroundColor = "";
});

makeGrid();
