const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listEl = document.getElementById("ingredients");

// let arr = [];

let arr = ingredients.reduce((acc, el) => {
  const liEl = document.createElement("li");

  liEl.textContent = `${el}`;
  acc.push(liEl);

  return acc;
}, []);

// for (let i = 0; i < ingredients.length; i++) {
//   arr[i] = document.createElement("li");
//   arr[i].textContent = ingredients[i];
// }

listEl.append(...arr);
