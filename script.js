const btn = document.querySelector("button");
const inputField = document.querySelector("#inputField");
const errorMessage = document.querySelector("#errorMessage");

btn.addEventListener("click", function () {
  const inputValue = inputField.value.trim();

  if (inputValue === "") {
    inputField.classList.add("shake");
    errorMessage.style.visibility = "visible";
    inputField.style.border = "1px solid red";

    setTimeout(function () {
      inputField.classList.remove("shake");
      errorMessage.style.visibility = "hidden";
      inputField.style.border = "1px solid darkblue";
    }, 500);
  } else {
    alert("Hello, There");
  }
});
