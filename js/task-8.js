const numbersEl = document.querySelector("#controls [type='number']");
const renderBtnEl = document.querySelector("[data-action='render']");
const destroyBtnEl = document.querySelector("[data-action='destroy']");
const boxesEl = document.getElementById("boxes");

renderBtnEl.addEventListener("click", () => {
  const qty = numbersEl.value;

  createBoxes(qty);
});

destroyBtnEl.addEventListener("click", () => {
  boxesEl.innerHTML = "";
});

function createBoxes(amount) {
  const boxesAcc = [];
  const size = 10;
  let acc = 20;

  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement("div");

    acc += size;

    divEl.style.width = `${acc}px`;
    divEl.style.height = `${acc}px`;
    divEl.style.backgroundColor = `rgb(${Math.random() * (255 - 1) + 1}, ${
      Math.random() * (255 - 1) + 1
    }, ${Math.random() * (255 - 1) + 1})`;

    boxesAcc.push(divEl);
  }

  const divisions = Array.from(boxesAcc).reduce((acc, el) => {
    let divEl = document.createElement("div");

    divEl.insertAdjacentHTML("beforeend", `${el.outerHTML}`);
    acc.push(divEl);

    return acc;
  }, []);

  boxesEl.append(...divisions);
}
