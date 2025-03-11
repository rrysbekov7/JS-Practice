document.addEventListener('DOMContentLoaded', event => {
  const container = document.getElementById('container');
  container.style.border = '1px solid blue';
  container.style.padding = '10px';
  container.style.marginBottom = '10px';
  container.style.borderRadius = '5px';
  const startBtn = document.getElementById('start');
  const stopBtn = document.getElementById('stop');
  startBtn.style.display = 'inline-block';
  startBtn.style.background = 'lightblue';
  startBtn.style.borderRadius = '3px';
  startBtn.style.padding = '10px 30px';
  startBtn.style.border = '1px solid grey';
  stopBtn.style.display = 'inline-block';
  stopBtn.style.background = 'lightblue';
  stopBtn.style.borderRadius = '3px';
  stopBtn.style.padding = '10px 30px';
  stopBtn.style.border = '1px solid grey';


  const newNumElementFunction = () => {
    const number = Math.round(Math.random() * 20);
    const element = document.createElement('div');
    element.className = 'element';
    element.innerText = number;
    container.appendChild(element);
  }

  startBtn.addEventListener('click', () => {
    const interval = setInterval(newNumElementFunction, 3000);

    stopBtn.addEventListener('click', () => {
      clearInterval(interval);
    });
  });

  event.preventDefault();
});
