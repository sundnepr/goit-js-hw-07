function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const body = document.querySelector("body");

changeColorBtn.addEventListener("click", changeColorBtnSubmit);

function changeColorBtnSubmit(){

  const myColor  = getRandomHexColor();
  body.style.backgroundColor = myColor;
  const mySpain = document.querySelector(".color");
  mySpain.textContent =  String(myColor) ;
}