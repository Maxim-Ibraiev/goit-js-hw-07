const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listEl = document.getElementById("ingredients");

let arr = [];

for (let i = 0; i < ingredients.length; i++) {
  arr[i] = document.createElement("li");
  arr[i].textContent = ingredients[i];
}

listEl.append(...arr);
