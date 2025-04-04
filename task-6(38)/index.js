document.addEventListener('DOMContentLoaded', e => {
  const container = document.getElementById('container');
  const table = document.getElementsByTagName('table');
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", function() {

    const countryLength = JSON.parse(this.responseText).length;
    for (let i = 0; i < countryLength; i++) {
      const tr = document.createElement('tr');
      const tdCode = document.createElement('td');
      tdCode.innerText = JSON.parse(this.responseText)[i].altSpellings[0];
      const tdFlag = document.createElement('td');
      tdFlag.innerHTML = `<img src=${JSON.parse(this.responseText)[i].flags.png} style="width: 60px">`;
      const tdName = document.createElement('td');
      tdName.innerText = JSON.parse(this.responseText)[i].name.common;
      const tdCapital = document.createElement('td');
      tdCapital.innerText = JSON.parse(this.responseText)[i].capital;
      const tdPopulation = document.createElement('td');
      tdPopulation.innerText = JSON.parse(this.responseText)[i].population;
      table[0].appendChild(tr);
      tr.appendChild(tdCode);
      tr.appendChild(tdFlag);
      tr.appendChild(tdName);
      tr.appendChild(tdCapital);
      tr.appendChild(tdPopulation);
    }
  });
  xhr.open("GET", 'https://restcountries.com/v3.1/all');
  xhr.send();
  e.preventDefault();
})
