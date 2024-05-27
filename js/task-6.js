function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxElem = document.querySelector('#boxes');
const inputElem = document.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
  

createBtn.addEventListener('click', () => {

  const col = Number(inputElem.value);
  if (0 < col & col <= 100){
     createBoxes(col);
    inputElem.value = '';
  }
  else {
    return alert`Please  enter 1-100`;
  }
   
});
  
  function  createBoxes(amount) {
   const arr = [];
   boxElem.innerHTML = '';
    for (let i = 0; i < amount; i++) {
      const newBoxEl = document.createElement('div');
      newBoxEl.style.width = `${30 + i * 10}px`;
      newBoxEl.style.height = `${30 + i * 10}px`;
      newBoxEl.style.backgroundColor = getRandomHexColor();
      arr.push(newBoxEl);
    }

     boxElem.append(...arr);
   }
   function destroyBoxes() {
    boxElem.innerHTML = '';
  }

  destroyBtn.addEventListener('click', destroyBoxes);

