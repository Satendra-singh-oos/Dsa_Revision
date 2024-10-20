let progressBar = document.querySelector(".scroll-indicator .progress");

let scrollHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", scroll);

function scroll() {
  let scrollTop = document.documentElement.scrollTop;

  const scrollPercent = (scrollTop / scrollHeight) * 100;

  progressBar.style.width = `${scrollPercent}%`;
}
