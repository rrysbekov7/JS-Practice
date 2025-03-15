document.addEventListener('DOMContentLoaded', event => {
  const username = document.querySelector('input[name = "username"]');
  const password = document.querySelector('input[name = "password"]');
  const btn = document.querySelector('input[type="submit"]');
  let usercount;
  let passcount;
  username.addEventListener('keyup', e => {
    console.log(e.currentTarget.value.length);
    usercount = e.currentTarget.value;
  });

  password.addEventListener('keyup', e => {
    console.log(e.currentTarget.value);
    passcount = e.currentTarget.value;
  });

  console.log(usercount);
  if (usercount.length >= 6) {
    btn.disabled = false;
  }



  event.preventDefault();
});
