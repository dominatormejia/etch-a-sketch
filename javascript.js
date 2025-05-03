const container = document.querySelector(".container");
const box = document.createElement("div");
const resize = document.querySelector(".resize");
const erase = document.querySelector(".erase");
const draw = document.querySelector(".draw");
let boxSize = 16;

function randomHSL() {
  const h = Math.floor(Math.random() * 360);
  return `hsl(${h}deg, 100%, 90%)`;
}

erase.addEventListener("mouseover", () => {
  erase.style.backgroundColor = randomHSL();
});
erase.addEventListener("mouseout", () => {
  erase.style.backgroundColor = "";
});

resize.addEventListener("mouseover", () => {
  resize.style.backgroundColor = randomHSL();
});
resize.addEventListener("mouseout", () => {
  resize.style.backgroundColor = "";
});

resize.addEventListener("click", () => {
  let input = prompt("Pick a number between 1 and 100!");

  boxSize = parseInt(input, 10);

  if (boxSize < 1 || boxSize > 100 || isNaN(boxSize)) {
    return (boxSize = prompt("Enter a valid number between 1 and 100"));
  }

  container.innerHTML = "";
  makeGrid(boxSize);
});

function makeGrid(boxSize) {
  for (let i = 0; i < boxSize * boxSize; i++) {
    const box = document.createElement("div");
    box.classList.add("grid");
    container.appendChild(box);
    box.textContent = "";
    box.style.height = `${640 / boxSize}px`;
    box.style.width = `${640 / boxSize}px`;
  }
  const boxes = document.querySelectorAll(".grid");
  boxes.forEach((box) => {
    let colorPicker = randomHSL();
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = colorPicker;
    });
  });
}

erase.addEventListener("click", () => {
  const updatedBoxes = document.querySelectorAll(".grid");
  updatedBoxes.forEach((box) => {
    box.style.backgroundColor = "";
  });
});

makeGrid(boxSize);
