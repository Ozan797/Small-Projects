const body = document.querySelector("body");
const rollValue = document.querySelector("#roll-value");
const btn = document.querySelector("#btn");

btn.onclick = () =>{
  let randomNum = Math.floor(Math.random() * 6) + 1;
  rollValue.innerHTML = randomNum;
};
