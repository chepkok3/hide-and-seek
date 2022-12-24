const form = document.querySelector("form");
const formField = document.querySelector("form_field");

const printName = () => {
  const name = document.querySelector("name").value;
  const displayName = document.querySelector("user-name");
  const body = document.querySelector("body");
  const color = document.querySelector("color").value;

  displayName.textContent = name;
  body.style.background-color = color;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  printName();
});
