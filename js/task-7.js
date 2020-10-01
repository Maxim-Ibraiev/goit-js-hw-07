const sizeControlEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

sizeControlEl.addEventListener("click", () => {
  textEl.style.fontSize = `${sizeControlEl.value}px`;
});
