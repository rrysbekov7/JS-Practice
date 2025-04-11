document.addEventListener("DOMContentLoaded", e => {
  const container = document.getElementById("container");
  const form = document.querySelector("form");
  const input = document.querySelector("input");
  const findBtn = document.querySelector("find-btn");

  const showData = (config) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.addEventListener("load", function () {
        if (this.status >= 200 && this.status < 300) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject(this.status);
        }
      })
      xhr.addEventListener("error", function () {
        reject('Internet connection is bad');
      });
      xhr.addEventListener('timeout', function () {
        reject('Request timeout!');
      });
      xhr.open("GET", config.url);
      xhr.send();
    })
  }

  form.addEventListener("submit", e => {
    const url =  `https://restcountries.com/v3.1/name/${input.value}`;

    showData({url: url})
      .then(data => {
        console.log('g',data);
        const myCountry = document.createElement("p");

        container.appendChild(myCountry);
        if (data[0].borders === undefined) {
          console.log('У страны нет границ - это остров!');
          myCountry.innerHTML =  `<p>Страна: <b>${data[0].name.common}</b></p><p>У нее нет границ: </p>`;
        } else {
          myCountry.innerHTML =  `<p>Страна: <b>${data[0].name.common}</b></p><p>Граничит с: </p>`;
        }


      console.log('first then', data[0].borders);
      return data[0].borders;
      })
      .then(data => {

        for (let index = 0; index < data.length; index++) {
          const url = `https://restcountries.com/v3.1/alpha/${data[index]}`;
          showData({url: url}).then(data => {
            const foreignCountry = document.createElement("p");
            foreignCountry.innerText = data[0].name.common;
            foreignCountry.style.fontWeight = "bold";
            container.appendChild(foreignCountry);
            console.log(data[0].name.common);
          })
        }
      })
      .catch(err => {
        alert('error ' + err);
      })
    e.preventDefault();
  })
  e.preventDefault();
});
