document.addEventListener('DOMContentLoaded', e => {
  const container = document.getElementById('container');
  const tabs = document.querySelector('.tabs');
  const items = document.querySelectorAll('.item');
  const content = document.querySelector('.content');
  const contentItems = document.querySelectorAll('.content-item');
  content.style.display = 'none';
  contentItems.forEach((contentItem) => {
    contentItem.style.display = 'none';
  })
  items[0].classList.add('active');
  for (let i = 0; i < items.length; i++) {
    console.log(items[i].textContent);
    items[i].addEventListener('click', () => {
      for (let j = 0; j < items.length; j++) {
        items[j].classList.remove('active');
        if (i === j) {
          items[i].classList.add('active');
        }
      }
      for (let k = 0; k < contentItems.length; k++) {
        if (i === k) {
          content.style.display = 'block';
          contentItems[k].style.display = 'block';
        } else {
          contentItems[k].style.display = 'none';
        }
      }
    })

  }
  e.preventDefault();
});
