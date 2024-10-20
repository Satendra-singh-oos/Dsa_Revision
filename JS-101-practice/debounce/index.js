// with each character typed in search box, make an API call to randomuserme api and display a card below it. Use debounce concept to reduce api calls.

// You will automatically learn about this and apply in this. ☕️

const url = "https://randomuser.me/api?result=1";

function displayCard(user) {
  const userCard = document.getElementById("user-card");
  userCard.style.display = "block";
  userCard.innerHTML = `
    <img src="${user.picture.large}"/>
    <p >${user.email}</p>
    
    `;
}

function fetchRandomUser() {
  const userInput = document.getElementById("user-input").value;

  if (userInput.length > 0) {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => displayCard(data.results[0]))
      .catch((err) => console.log("error", err));
  }
}

// debounce methord return the function not the exuceuted function
function debounce(func, delay) {
  let debounceTimer;

  return function () {
    // clear the timeout and argument context

    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
}

document
  .getElementById("user-input")
  .addEventListener("keyup", debounce(fetchRandomUser, 1000));
