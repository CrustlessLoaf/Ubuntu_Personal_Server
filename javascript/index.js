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

  document.addEventListener("DOMContentLoaded", function(event) {
    document.body.style.opacity = "1"; // Set the opacity to 1, making the body visible
    document.body.style.transition="2.5s";
  });
  