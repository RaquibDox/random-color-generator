const containerEl = document.querySelector(".container");

//making an array containing objects of different random hex colors
let a = [];
for (let i = 0; i < 30; i++) {
  let x = randomHex();
  a[i] = { id: i, color: x };
}

//setting the html for the color containers
let colorPalettes = a
  .map((item) => {
    return `<div class="color-container">${item.color}</div>`;
  })
  .join("");
containerEl.innerHTML = colorPalettes;

//changing the colors of the container according to the random hex contents
const colorContainer = document.querySelectorAll(".color-container");
for (let i = 0; i < 30; i++) {
  colorContainer[i].style.backgroundColor = a[i].color;
}

//generating random hex values
function randomHex() {
  let hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let color = "";
  for (let i = 0; i < 6; i++) {
    color = color + hex[Math.floor(Math.random() * hex.length)];
  }
  return "#" + color;
}
