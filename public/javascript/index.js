// charactersAPI.getFullList().then((resp) => console.log(resp));

// axios.get("http://localhost:8000/characters").then((resp) => console.log(resp));
const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  charactersAPI.getFullList().then((resp) => console.log(resp));
});

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {});

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {});

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {});

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {});
});

document.getElementById("get-country-btn").addEventListener("click", () => {
  const userInput = document.getElementById("country-name-input").value;
  getCountryInfo(userInput);
});
