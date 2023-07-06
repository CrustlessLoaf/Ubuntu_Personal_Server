document.addEventListener("DOMContentLoaded", function() {
  var userAgent = navigator.userAgent;

  if (userAgent.includes('Instagram')) {
    var ulElement = document.getElementById('pics-link');

    if (ulElement) {
      ulElement.style.display = 'none';
    }
  }

  const image = document.querySelector('#PP');
  const body = document.body;

  function addBlur() {
    body.classList.add('blurred');
  }

  function removeBlur() {
    body.classList.remove('blurred');
  }

  image.addEventListener('mouseenter', addBlur);
  image.addEventListener('mouseleave', removeBlur);
});
