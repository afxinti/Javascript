const colors = document.querySelector('h2').innerText;
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.getElementById('back');

function changeBackground() {
  body.style.background = `linear-gradient(to right, ${color1.value},${color2.value} )`;
}

color1.addEventListener('input', changeBackground());

color2.addEventListener('input', changeBackground());
