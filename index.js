const image = document.querySelector('#PP');
const body = document.body;

function addBlur() {
  body.classList.add('blurred');
}

function removeBlur() {
  body.classList.remove('blurred');
}


image.addEventListener('touchstart', addBlur);
image.addEventListener('touchend', removeBlur);