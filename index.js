const image = document.querySelector('#PP');
const body = document.body;

image.addEventListener('mouseenter', () => {
  body.classList.add('blurred');
});

image.addEventListener('mouseleave', () => {
  body.classList.remove('blurred');
});
