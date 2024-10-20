const url = "https://api.chucknorris.io/jokes/random";

const display = document.getElementById("display-joke");
const btn = document.getElementById("getJoke");
let latestRequest = 0;
btn.addEventListener("click", getRandomJoke);
// handle this end point with XMLHttpRequest

// handle this end point with promises

// function getRandomJoke() {
//   fetch(url)
//     .then((res) => {
//       if (!res.ok) {
//         alert("Response is not okay");
//       }
//       return res.json();
//     })
//     .then((data) => {
//       display.innerHTML = `${data.value}`;
//     })
//     .catch((err) => alert(err));
// }

// handle the case of race condition

function getRandomJoke() {
  //   const currentRequest = ++latestRequest;
  latestRequest++;
  const currentRequest = latestRequest;

  fetch(url)
    .then((res) => {
      if (!res.ok) {
        alert("Response is not okay");
      }
      return res.json();
    })
    .then((data) => {
      if (currentRequest === latestRequest) {
        display.innerHTML = `${data.value}`;
      }
    })
    .catch((err) => alert(err));
}
