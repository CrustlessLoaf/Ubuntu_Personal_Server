const image = document.querySelector('#PP');
const body = document.body;
// Retrieve the user agent string
var userAgent = navigator.userAgent;

function addBlur() {
  body.classList.add('blurred');
}

function removeBlur() {
  body.classList.remove('blurred');
}

if (userAgent.includes('Instagram')) {
  var ulElement = document.getElementById('your-ul-element-id');

  if (ulElement) {
    ulElement.style.display = 'none';
  }
}
image.addEventListener('mouseenter', addBlur);
image.addEventListener('mouseleave', removeBlur);
