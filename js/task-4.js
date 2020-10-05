const valueEl = document.getElementById("value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
let counter = 0;

incrementBtn.addEventListener("click", () => {
  counter += 1;
  valueEl.textContent = counter;
});

decrementBtn.addEventListener("click", () => {
  counter -= 1;
  valueEl.textContent = counter;
});
