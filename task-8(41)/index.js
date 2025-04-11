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
    const url = `https://restcountries.com/v3.1/name/${input.value}`;
    showData({url: url})
      .then(data => {
        const foreignCountry = document.createElement("p");
        foreignCountry.style.display = "flex";
        foreignCountry.style.flexDirection = "column";
        if (data[0].borders === undefined) {
          foreignCountry.innerHTML = `Страна: <b>${data[0].name.common}</b>
        <span><img src=${data[0].flags.png} style="width: 45px; height: 30px; outline: 1px solid blue"></span>
        <p>У нее нет границ!!!</p>`;
          container.appendChild(foreignCountry);
        } else {
          foreignCountry.innerHTML = `Страна: <b>${data[0].name.common}</b>
          <span><img src=${data[0].flags.png} style="width: 45px; height: 30px; outline: 1px solid blue"></span>
          <p>Граничит с:</p>`;
          container.appendChild(foreignCountry);
          console.log('first then',data[0].borders);
          return data[0].borders;
        }
      })
      .then(data => {
        return Promise.all(data.map(item => {
          const url = `https://restcountries.com/v3.1/alpha/${item}`;
          console.log('second then',url);
          return showData({url: url});
        }));
      })
      .then(data => {
        return Promise.all(data.map(item => {
          console.log('third then',item[0]);
          const foreignCountry = document.createElement("p");
          foreignCountry.style.outline = "1px solid green";
          foreignCountry.style.padding = "10px";
          foreignCountry.innerHTML = `<b>${item[0].name.common}</b>
          <p><img src=${item[0].flags.png} style="width: 45px; height: 30px; outline: 1px solid blue"></p>`;
          container.appendChild(foreignCountry);
        }))
      })
      .catch(err => {
        alert('error ' + err);
      })
    e.preventDefault();
  })
  e.preventDefault();
});
