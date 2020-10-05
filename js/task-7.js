const sizeControlEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

sizeControlEl.addEventListener("input", () => {
  textEl.style.fontSize = `${sizeControlEl.value}px`;
});
