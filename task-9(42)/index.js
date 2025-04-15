document.addEventListener("DOMContentLoaded", e => {
  const container = document.getElementById("container");
  const pokemonList = async () => {
      const list = await fetch(`https://pokeapi.co/api/v2/pokemon`);
       return await list.json();
  }
  const pokemonList2 = async () => {
    const newList = await pokemonList();
    const heroesList = newList.results.map(async (item) => {
      const heroes = await fetch(item.url);
      return await heroes.json();
    })
    const result = await Promise.all(heroesList);
    console.log(result);
    const nameList = document.createElement("ol");
    const box = document.createElement("div");
    const itemImage = document.createElement("img");
    const itemName = document.createElement("p");
    const itemType = document.createElement("p");
    const itemHeight = document.createElement("p");
    const itemWeight = document.createElement("p");
    nameList.style.width = "50%";
    result.map( (item) => {
      const nameItem = document.createElement("li");
      nameItem.innerHTML = `<a href="#" style="text-decoration: none">${item.name}</a>`
      nameList.append(nameItem);
      nameItem.addEventListener("click", e => {
        itemImage.src = `${item.sprites.front_default}`;
        itemImage.style.outline = "1px solid red";
        itemName.textContent = `Name: ${item.name}`;
        itemName.style.margin = 0;
        itemType.textContent = `Type: ${item.types[0].type.name}`;
        itemType.style.margin = 0;
        itemType.textContent = `Type: ${item.types[0].type.name}`;
        itemType.style.margin = 0;
        itemHeight.textContent = `Height: ${item.height}`;
        itemHeight.style.margin = 0;
        itemWeight.textContent = `Weight: ${item.weight}`;
        itemWeight.style.margin = 0;
        box.appendChild(itemImage);
        box.appendChild(itemName);
        box.appendChild(itemType);
        box.appendChild(itemHeight);
        box.appendChild(itemWeight);
        box.style.margin = '40px auto';
        box.style.width = "20%";
        box.style.height = "30%";
        box.style.marginRight = "50p";
        container.append(box);
        e.preventDefault();
      })
      container.append(nameList);
      container.style.display = "flex";
      container.style.justifyContent = "space-between";
    })
  }
  pokemonList2();
  e.preventDefault();
})


