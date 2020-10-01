const valueEl = document.getElementById("value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

incrementBtn.addEventListener("click", () => {
  valueEl.textContent = +valueEl.textContent + 1;
});

decrementBtn.addEventListener("click", () => {
  valueEl.textContent = +valueEl.textContent - 1;
});
