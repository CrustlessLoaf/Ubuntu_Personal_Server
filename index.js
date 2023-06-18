const image = document.querySelector('#PP');
const body = document.body;

image.addEventListener('mouseenter', 'click', () => {
  body.classList.add('blurred');
});

image.addEventListener('mouseleave', 'click', () => {
  body.classList.remove('blurred');
});
