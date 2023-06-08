const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

  let ingredientList = document.querySelector("#ingredients");
  let liEl;

  ingredients.map((el, index, array) => {
    let liEl = document.createElement('li');
    liEl.classList.add("item");
    liEl.innerHTML = el;
    ingredientList.append(liEl);
  }
  )
