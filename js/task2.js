const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

  let ingredientList = document.querySelector("#ingredients");
  

  ingredients.map((el) => {
    const liEl = document.createElement('li');
    liEl.classList.add("item");
    liEl.innerHTML = el;
    ingredientList.append(liEl);
  }
  )
