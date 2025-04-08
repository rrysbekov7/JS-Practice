document.addEventListener("DOMContentLoaded", ev => {
  const container = document.getElementById("container");
  const select = document.getElementById("select");
  const option = document.createElement("option");
  const clickBtn = document.getElementById("clickBtn");
  const textArea = document.querySelector("textarea");
  const date = document.getElementById("date");
  const form = document.querySelector("form");
  const countryList = [];
  const getCountryList = JSON.parse(localStorage.getItem("countryLocalList"));
  let count = 1;
  option.innerText = 'Выберите страну';
  option.disabled = true;
  select.appendChild(option);
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function () {
    if (getCountryList.length !== 0) {
      console.log('All', getCountryList);
      for (let j = 0; j < getCountryList.length; j++) {
        countryList.push(getCountryList[j]);
        container.style.display = "flex";
        container.style.flexDirection = "column-reverse";
        const newContainer = document.createElement("div");
        container.append(newContainer);
        newContainer.classList.add("container");
        newContainer.style.outline = "1px solid red";
        newContainer.style.position = "relative";
        newContainer.style.marginBottom = "10px";
        // container.appendChild(newContainer);

        const removeBtn = document.createElement("button");
        removeBtn.classList.add("remove");
        removeBtn.innerText = "Remove";
        removeBtn.style.position = "absolute";
        removeBtn.style.top = "0";
        removeBtn.style.right = "0";
        removeBtn.style.border = "none";
        removeBtn.style.backgroundColor = "transparent";
        removeBtn.style.fontWeight = "bold";

        const text = document.createElement("p");
        // text.innerText = JSON.parse(this.responseText)[i].name.common;
        text.innerHTML = `Post #${getCountryList[j].count} at ${getCountryList[j].date}
          being in: ${getCountryList[j].name}
          <img src=${getCountryList[j].flags} style="width: 15px; height: 10px">`;
        text.style.margin = '0';
        newContainer.append(text);
        newContainer.append(getCountryList[j].text);
        newContainer.append(removeBtn);

        removeBtn.addEventListener("click", e => {
          console.log('sss', getCountryList[j].name);
          if (confirm("Are you sure you want to delete?")) {
            for (let i = 0; i < countryList.length; i++) {
              // console.log(countryList[i]);
              if (getCountryList[j].name === countryList[i].name) {
                console.log('fff', countryList[i]);
                newContainer.remove(newContainer);
                countryList.splice(i,1);
                const countryLocalList = localStorage.setItem("countryLocalList", JSON.stringify(countryList));
              }
            }
          }
          e.preventDefault();
        })
      }
    }



    const numbers = JSON.parse(this.responseText).length;
    for (let i = 0; i < numbers; i++) {
      const option = document.createElement("option");
      option.innerText = `${JSON.parse(this.responseText)[i].name.common}`;
      select.appendChild(option);
    }
    select.addEventListener('click', e => {
      console.log(select.value);
    })
    console.log(JSON.parse(this.responseText)[0]);
    form.addEventListener("submit", e => {{
      container.style.display = "flex";
      container.style.flexDirection = "column-reverse";
      const newContainer = document.createElement("div");
      container.append(newContainer);
      newContainer.classList.add("container");
      newContainer.style.outline = "1px solid red";
      newContainer.style.position = "relative";
      newContainer.style.marginBottom = "10px";
      // container.appendChild(newContainer);
      const removeBtn = document.createElement("button");
      removeBtn.classList.add("remove");
      removeBtn.innerText = "Remove";
      removeBtn.style.position = "absolute";
      removeBtn.style.top = "0";
      removeBtn.style.right = "0";
      removeBtn.style.border = "none";
      removeBtn.style.backgroundColor = "transparent";
      removeBtn.style.fontWeight = "bold";
      for (let i = 0; i < numbers; i++) {
        if (select.value === JSON.parse(this.responseText)[i].name.common) {
          console.log(i + 1);

          console.log('sdsd', JSON.parse(this.responseText)[i].flags.png);
          const text = document.createElement("p");
          // text.innerText = JSON.parse(this.responseText)[i].name.common;
          text.innerHTML = `Post #${count} at ${date.value} being in: ${select.value}
          <img src=${JSON.parse(this.responseText)[i].flags.png} style="width: 15px; height: 10px">`;
          text.style.margin = '0';
          newContainer.append(text);
          newContainer.append(textArea.value);
          newContainer.append(removeBtn);
          let countryItem = {};
          countryItem.name = select.value;
          countryItem.date = date.value;
          countryItem.text = textArea.value;
          countryItem.flags = JSON.parse(this.responseText)[i].flags.png;
          countryItem.count = count++;
          countryList.push(countryItem);
        }

      }
      removeBtn.addEventListener("click", e => {
        console.log('xxx', select.value);
        if (confirm("Are you sure you want to delete?")) {
          for (let i = 0; i < countryList.length; i++) {
            // console.log(countryList[i]);
            if (select.value === countryList[i].name) {
              console.log('www', countryList[i]);
              newContainer.remove(newContainer);
              countryList.splice(i,1);
              const countryLocalList = localStorage.setItem("countryLocalList", JSON.stringify(countryList));
            }
          }
        }
        e.preventDefault();
      })

      console.log('countryList', countryList);
      const countryLocalList = localStorage.setItem("countryLocalList", JSON.stringify(countryList));
      e.preventDefault();
    }})
  });
  xhr.open("GET", `https://restcountries.com/v3.1/all`);
  xhr.send();
  container.style.outline = "1px solid red";
  ev.preventDefault()
});
