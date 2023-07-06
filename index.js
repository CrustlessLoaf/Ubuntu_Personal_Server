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


// Check if the user agent string contains 'Instagram'
if (userAgent.includes('insta')) {
  // Get the <ul> element you want to remove
  var ulElement = document.getElementById('pics-link');

  // Check if the <ul> element exists
  if (ulElement) {
    // Remove the <ul> element
    ulElement.parentNode.removeChild(ulElement);
  }
}
image.addEventListener('mouseenter', addBlur);
image.addEventListener('mouseleave', removeBlur);
