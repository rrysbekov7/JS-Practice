document.addEventListener('DOMContentLoaded', e => {
  const name = document.getElementById('name');
  const region = document.getElementById('region');
  const subregion = document.getElementById('subregion');
  const capital = document.getElementById('capital');
  const flag = document.getElementById('flag');
  const countryText = document.getElementById('country-text');
  const show = document.getElementById('show');

  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function () {
    console.log(JSON.parse(this.responseText));
    name.innerText = JSON.parse(this.responseText)[0].name.common;
    region.innerText = JSON.parse(this.responseText)[0].region;
    subregion.innerText = JSON.parse(this.responseText)[0].subregion;
    capital.innerText = JSON.parse(this.responseText)[0].capital;
    flag.innerText = JSON.parse(this.responseText)[0].flag;
  });

  show.addEventListener('click', e => {
    xhr.open("GET", `https://restcountries.com/v3.1/name/${countryText.value}`);
    xhr.send();
    e.preventDefault();
  })
  e.preventDefault();
})
