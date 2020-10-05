const listEl = document.getElementById("categories");

console.log(`В списке ${listEl.querySelectorAll(".item").length} категории.`);

const itemArr = listEl.querySelectorAll(".item");

itemArr.forEach((el) => {
  console.log(`Категория:  ${el.querySelector("h2").textContent}`);
  console.log(`Количество элементов: ${el.querySelectorAll("li").length}`);
});
