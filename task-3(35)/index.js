document.addEventListener('DOMContentLoaded', event => {
  let username = document.querySelector('input[name = "username"]');
  let password = document.querySelector('input[name = "password"]');
  let btn = document.querySelector('input[type="submit"]');
  let form = document.querySelector("form");

  username.addEventListener('keyup', () => {
    myEventFunc();
  });

  password.addEventListener('keyup', () => {
    myEventFunc();
  });

  const myEventFunc = () => {
    if (username.value.length >= 6 && password.value.length >= 6) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  }

  form.addEventListener('submit', e => {
    alert(`Login: ${user} \nPassword: ${pass}`);
    e.preventDefault();
  })
  event.preventDefault();
});
