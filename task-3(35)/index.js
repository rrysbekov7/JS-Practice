document.addEventListener('DOMContentLoaded', event => {
  const container = document.getElementById('container');
  const btn = document.getElementById('add-item-btn');
  btn.addEventListener('click', e => {
    const element = document.createElement('div');
    element.className = 'element';
    element.innerText = 'Element';
    container.appendChild(element);
  });
  event.preventDefault();
});
