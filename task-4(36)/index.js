document.addEventListener('DOMContentLoaded', e => {
  let alertBtn = document.getElementById('alert__btn');
  let confirmBtn = document.getElementById('confirm__btn');
  let propmtBtn = document.getElementById('prompt__btn');
  alertBtn.style.padding = '5px 15px';
  alertBtn.style.marginBottom = '10px';

  confirmBtn.style.padding = '5px 15px';
  confirmBtn.style.marginBottom = '10px';

  propmtBtn.style.padding = '5px 15px';
  propmtBtn.style.marginBottom = '10px';

  const customPrompt = () => {
    let alertBox = document.createElement('div');
    let title = document.createElement('h1');
    let text = document.createElement('p');
    let btn = document.createElement('button');
    alertBox.style.width = '400px';
    alertBox.style.padding = '15px 20px';
    alertBox.style.position = 'fixed';
    alertBox.style.background = '#ffffff';
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
    let cancelBtn = document.createElement('button');
    cancelBtn.innerText = 'Cancel';
    cancelBtn.style.background = "rgb(66, 147, 228)";
    cancelBtn.style.color = 'white';
    cancelBtn.style.border = 'none';
    cancelBtn.style.borderRadius = '3px';
    cancelBtn.style.padding = '5px 10px';
    cancelBtn.style.fontWeight = 'bold';
    cancelBtn.style.position = 'absolute';
    cancelBtn.style.right = '100px';
    cancelBtn.style.bottom = '15px';
    let textInput = document.createElement('input');
    textInput.style.width = '50%';
    textInput.style.height = '20px';
    alertBox.appendChild(cancelBtn);
    alertBox.appendChild(title);
    alertBox.appendChild(text);
    alertBox.appendChild(textInput);
    alertBox.appendChild(btn);
    document.body.appendChild(alertBox);

    btn.addEventListener('click', () => {
      alert(textInput.value);
      alertBox.remove();
      propmtBtn.disabled = false;
      document.body.style.background = '#ffffff';
    });

    cancelBtn.addEventListener('click', () => {
      alert(null);
      alertBox.remove();
      propmtBtn.disabled = false;
      document.body.style.background = '#ffffff';
    });
  }

  propmtBtn.addEventListener('click', () => {
    document.body.style.background = '#c4c4c4';
    propmtBtn.disabled = true;
    customPrompt();
  });

  e.preventDefault();
})
