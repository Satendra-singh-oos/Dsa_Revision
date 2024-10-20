const word = [
  "Cool",
  "Fun",
  "Not Java",
  "Love",
  "Jhakaas",
  "mast",
  "dhinchak",
  "Weird",
];
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");
const typeingDelay = 300;
const erasingDelay = 300;
const newLetterDelay = 300;

let index = 0;
let charIndex = 0;

function type() {
  if (charIndex < word[index].length) {
    typedText.textContent += word[index].charAt(charIndex);
    charIndex++;

    setTimeout(type, typeingDelay);
  } else {
    setTimeout(erase, newLetterDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = word[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    index++;
    if (index >= word.length) {
      index = 0;
    }
    setTimeout(type, typeingDelay + 1000);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (word.length) {
    setTimeout(type, newLetterDelay);
  }
});
