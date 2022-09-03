const sliders = document.querySelectorAll("input[type='range']");
sliders.forEach((slider) => {
  slider.addEventListener("input", calculateTip);
});

const billInput = document.getElementById("bill")
billInput.addEventListener("change",calculateTip)


function calculateTip(){

}
