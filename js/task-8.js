const numbersEl = document.querySelector("#controls [type='number']");
const renderBtnEl = document.querySelector("[data-action='render']");
const destroyBtnEl = document.querySelector("[data-action='destroy']");
const boxesEl = document.getElementById("boxes");
let acc = 20;

renderBtnEl.addEventListener("click", () => {
  const qty = numbersEl.value;

  createBoxes(qty);
});

destroyBtnEl.addEventListener("click", () => {
  acc = 20;

  boxesEl.innerHTML = "";
});

function createBoxes(amount) {
  const boxesAcc = Array(+amount).fill();

  boxesAcc.forEach((el, index, arr) => {
    const divEl = document.createElement("div");

    acc += 10;

    divEl.style.width = `${acc}px`;
    divEl.style.height = `${acc}px`;
    divEl.style.backgroundColor = `rgb(${Math.random() * (255 - 1) + 1}, ${
      Math.random() * (255 - 1) + 1
    }, ${Math.random() * (255 - 1) + 1})`;

    arr[index] = divEl;
  });

  const divisions = boxesAcc.reduce((acc, el) => {
    let divEl = document.createElement("div");

    divEl.insertAdjacentHTML("beforeend", `${el.outerHTML}`);
    acc.push(divEl);

    return acc;
  }, []);

  boxesEl.append(...divisions);
}
