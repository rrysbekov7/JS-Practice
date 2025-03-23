document.addEventListener('DOMContentLoaded', e => {
  let alertBtn = document.getElementById('alert__btn');
  alertBtn.style.padding = '5px 15px';
  alertBtn.style.marginBottom = '10px';

  const customAlert = () => {
    let alertBox = document.createElement('div');
    let title = document.createElement('h1');
    let text = document.createElement('p');
    let btn = document.createElement('button');
    alertBox.style.outline = '1px solid red';
    alertBox.style.width = '400px';
    alertBox.style.padding = '15px 20px';
    alertBox.style.position = 'fixed';
    alertBox.style.background = 'white';
    alertBox.style.borderRadius = '5px';
    title.innerText = 'Alert!';
    title.style.margin = 0;
    text.innerHTML = '<p>This is a sample alert.</br>with some <b>HTML</b> <i>contents</i></p>';
    text.style.margin = 0;
    text.style.marginBottom = '40px';
    btn.innerText = 'OKAY';
    btn.style.background = "rgb(66, 147, 228)";
    btn.style.color = 'white';
    btn.style.border = 'none';
    btn.style.borderRadius = '3px';
    btn.style.padding = '5px 10px';
    btn.style.fontWeight = 'bold';
    btn.style.position = 'absolute';
    btn.style.right = '20px';
    btn.style.bottom = '15px';
    alertBox.appendChild(title);
    alertBox.appendChild(text);
    alertBox.appendChild(btn);

    document.body.appendChild(alertBox);

    btn.addEventListener('click', () => {
      alertBox.remove();
      alertBtn.disabled = false;
    });
  }

  alertBtn.addEventListener('click', () => {
    customAlert();

    alertBtn.disabled = true;
  });

  e.preventDefault();
})
