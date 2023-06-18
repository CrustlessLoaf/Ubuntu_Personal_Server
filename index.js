const image = document.querySelector('#PP');
const body = document.body;

image.addEventListener('mouseenter', 'onclick', () => {
  body.classList.add('blurred');
});

image.addEventListener('mouseleave', 'onclick', () => {
  body.classList.remove('blurred');
});
