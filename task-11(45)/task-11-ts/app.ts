const root : HTMLElement | null = document.getElementById('root');
const div = document.createElement('div');
div.innerHTML = "Hello";

const input = document.createElement('input');
input.type = 'text';
input.setAttribute('id', 'name');


const button: HTMLButtonElement = document.createElement('button');
button.type = 'button';
button.innerHTML = 'Get name';
button.addEventListener('click', () => {
  alert(input.value);
})

div.appendChild(input);
div.appendChild(button);

if (root !== null) {
  root.appendChild(div);
}

