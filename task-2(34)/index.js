document.addEventListener('DOMContentLoaded', event => {
  const circleFiled = document.createElement('div');
  circleFiled.style.width = '1024px';
  circleFiled.style.height = '768px';
  circleFiled.style.outline = '1px solid black';
  circleFiled.style.position = 'relative';
  circleFiled.style.overflow = 'hidden';
  circleFiled.style.margin = '0 auto';
  document.body.appendChild(circleFiled);

  const drawCircles = (count) => {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'pink', 'brown', 'orange', 'grey', 'black', 'cyan', 'crimson', 'springgreen', 'violet', 'olive'];
    for (let i = 0; i < count; i++) {
      const circleElement = document.createElement('div');
      circleElement.style.position = 'absolute';
      circleElement.style.borderRadius = '50%';
      let circleWidth = Math.round(Math.random() * 200);
      if (circleWidth < 50) {
        circleWidth += 50;
      }
      circleElement.style.width = `${circleWidth}px`;
      circleElement.style.height = `${circleWidth}px`;
      circleElement.style.background = `${colors[Math.round(Math.random() * 15)]}`;
      circleElement.style.top = `${Math.round(Math.random() * 768)}px`;
      circleElement.style.right = `${Math.round(Math.random() * 1024)}px`;
      circleFiled.appendChild(circleElement);
    }
  }
  drawCircles(20);
  event.preventDefault();
});
