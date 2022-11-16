let colors = document.querySelector('.colors');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.getElementById('back');
// console.log(body,color1,color2)

function changeBackground() {
  console.log(color1,color2)
  body.style.background = `linear-gradient(to right, ${color1.value},${color2.value} )`;
  colors.textContent = `Right: ${color1.value}, Left: ${color2.value}`;
}

color1.addEventListener('input', changeBackground);

color2.addEventListener('input', changeBackground);
