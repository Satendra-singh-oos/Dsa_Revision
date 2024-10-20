let inputFiled = document.getElementById("input-field");
let outputField = document.getElementById("output-field");
let buttons = document.querySelectorAll("button");

inputFiled.addEventListener(
  "keyup",
  () => (outputField.innerHTML = inputFiled.value)
);

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("uppercase")) {
      outputField.innerHTML = outputField.innerHTML.toUpperCase();
    } else if (btn.classList.contains("lowercase")) {
      outputField.innerHTML = outputField.innerHTML.toLowerCase();
    } else if (btn.classList.contains("capitalize")) {
      outputField.innerHTML =
        outputField.innerHTML.charAt(0).toUpperCase() +
        outputField.innerHTML.slice(1).toLowerCase();
    } else if (btn.classList.contains("bold")) {
      outputField.style.fontWeight =
        outputField.style.fontWeight === "bold" ? "normal" : "bold";
    } else if (btn.classList.contains("italic")) {
      outputField.style.fontStyle =
        outputField.style.fontStyle === "italic" ? "normal" : "italic";
    } else if (btn.classList.contains("underline")) {
      outputField.style.textDecoration =
        outputField.style.textDecoration === "underline" ? "none" : "underline";
    }
  });
});
