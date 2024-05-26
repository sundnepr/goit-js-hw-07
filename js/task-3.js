const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

console.log(nameInput);
console.log(nameOutput);

nameInput.addEventListener("input", onInputNameChange);

function onInputNameChange(){
    const strName = nameInput.value.trim();
    nameOutput.textContent = (strName === ``)? 'Anonymous' :  strName;
}