const button = document.getElementById("submit");
const emailInput = document.getElementById("email");
const result = document.getElementById("result");
const error = document.getElementById("icon-error");
const formInput = document.getElementById("form-input");

button.addEventListener("click", () => {
  var email = emailInput.value;

  if (validation(email)) {
  } else {
    result.innerHTML = "Please provide a valid email";
    error.classList.toggle("active");
    formInput.classList.toggle("emailError");
  }
});

function validation(email) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}
