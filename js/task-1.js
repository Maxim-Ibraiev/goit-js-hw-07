const listEl = document.getElementById("categories");

getCategoryLength(listEl);

function getCategoryLength(list) {
  console.log(`В списке ${list.querySelectorAll(".item").length} категории.`);
}

getHeaderAndQty(listEl);

function getHeaderAndQty(list) {
  const itemArr = list.querySelectorAll(".item");

  itemArr.forEach((el) => {
    console.log(`Категория:  ${el.querySelector("h2").textContent}`);
    console.log(`Количество элементов: ${el.querySelectorAll("li").length}`);
  });
}
