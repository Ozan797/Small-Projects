const body = document.querySelector('body');
const rollValue = document.querySelector('#roll-value');
const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
    let randomNum = Math.floor(Math.random() * 6) + 1
    rollValue.innerHTML = randomNum
})