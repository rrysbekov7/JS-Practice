document.addEventListener('DOMContentLoaded', e => {
  const name = document.getElementById('name');
  const region = document.getElementById('region');
  const subregion = document.getElementById('subregion');
  const capital = document.getElementById('capital');
  const flag = document.getElementById('flag');

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", function () {
    console.log(JSON.parse(this.responseText));
    name.innerText = JSON.parse(this.responseText)[0].name.common;
    region.innerText = JSON.parse(this.responseText)[0].region;
    subregion.innerText = JSON.parse(this.responseText)[0].subregion;
    capital.innerText = JSON.parse(this.responseText)[0].capital;
    flag.innerText = JSON.parse(this.responseText)[0].flag;

  });

  xhr.open("GET", 'https://restcountries.com/v3.1/name/USA');
  xhr.send();


  e.preventDefault();
})
