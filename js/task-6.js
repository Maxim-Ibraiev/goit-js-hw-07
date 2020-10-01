const validationEl = document.getElementById("validation-input");

validationEl.addEventListener("focusout", () => {
  if (validationEl.value.length >= validationEl.dataset.length) {
    validationEl.classList.remove("invalid");
    validationEl.classList.add("valid");
  } else {
    validationEl.classList.remove("valid");
    validationEl.classList.add("invalid");
  }
});
