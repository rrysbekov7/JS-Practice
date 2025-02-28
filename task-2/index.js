const items = [{
    name: 'Плов',
    count: 2
  },
  {
    name: 'Фри',
    count: 4
  },
  {
    name: 'Кола',
    count: 2
  }
]

const orderEl = document.getElementById('orders');

for (let i = 0; i < items.length; i++) {
  const element = document.createElement('div');
  element.style.backgroundColor = 'blue';
  const item = items[i];
  element.innerText = `${item.name} -x ${item.count}`;
  orderEl.appendChild(element);
}
