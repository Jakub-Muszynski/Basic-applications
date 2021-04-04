let topColor = document.getElementById("top");
let bottomColor = document.getElementById("bottom");
const lTop = document.getElementById("lTop");
const lBottom = document.getElementById("lBottom");
const gradient = document.getElementById("gradient");
let color1 = "#e66495";
let color2 = "#f6b73c";
let cssGradient = 'linear-gradient(180deg, #e66495 0%, #f6b73c 100%)';

function updateGradient() {
  let finalGradient = `linear-gradient(${color1}, ${color2})`
  gradient.style.background = finalGradient;
  gradient.setAttribute('data-clipboard-text', finalGradient);
}

topColor.addEventListener("change", function () {
  color1 = topColor.value;
  lTop.innerHTML = color1;
  updateGradient();
});

bottomColor.addEventListener("change", function () {
  color2 = bottomColor.value;
  lBottom.innerHTML = color2;
  
  updateGradient();
});

gradient.addEventListener("click", function(){
     console.log('copied css');
})

new ClipboardJS('#gradient');