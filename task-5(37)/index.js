document.addEventListener('DOMContentLoaded', e => {
  const container = document.getElementById('container');
  const textarea = document.getElementById('textarea');
  const saveBtn = document.querySelector('.save-btn');
  const clearBtn = document.querySelector('.clear-btn');
  const quitBtn = document.querySelector('.quit-btn');
  const form = document.querySelector('form');
  const inputText = document.querySelector('input[type=text]');
  inputText.value = '';
  const clickBtn = document.querySelector('.click-btn');
  clickBtn.disabled = true;
  container.style.display = 'none';
  let userKey;
  inputText.addEventListener('keyup', () => {
    if(inputText.value !== null && inputText.value.length !== 0) {
      clickBtn.disabled = false;
    } else {
      clickBtn.disabled = true;
    }
  })

  clickBtn.addEventListener('click', e => {
    container.style.display = 'flex';
    form.style.display = 'none';
    userKey = inputText.value;
    console.log('userKey', userKey);

    let myTextData = localStorage.getItem(userKey);
    console.log('get',myTextData);

    if (myTextData !== null) {
      console.log('super')
      textarea.value = myTextData;
    } else {
      textarea.value = null;
      console.log('lol')
    }
    e.preventDefault();
  });


  saveBtn.addEventListener('click', () => {
    console.log('save',textarea.value);
    localStorage.setItem(userKey, textarea.value)
    console.log('savebtn', saveBtn);
  })

  clearBtn.addEventListener('click', () => {
    textarea.value = null;
    localStorage.setItem(userKey, textarea.value);
    console.log('clear',textarea.value);
    console.log('clearbtn', clearBtn);
  })

  quitBtn.addEventListener('click', () => {
    container.style.display = 'none';
    form.style.display = 'flex';
  });


  e.preventDefault();
});
