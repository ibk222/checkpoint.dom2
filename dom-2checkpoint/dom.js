const COLOR_BOX = document.getElementById("color-box");
const CHANGE_COLOR_BTN = document.getElementById("change-color-btn");

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

CHANGE_COLOR_BTN.addEventListener("click", changeBackgroundColour);
function changeBackgroundColour() {
  COLOR_BOX.style.backgroundColor = getRandomColor();
}

// function getRandomColor() {
//   $("#color-box").css("background-color", getRandomColor());
// }
// console.log(getRandomColor());
