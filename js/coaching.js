const knapp = document.querySelector("#visa-ovning");
const ovningText = document.querySelector("#ovning-text");

knapp.addEventListener("click", () => {
  ovningText.classList.toggle("hidden");

  if (ovningText.classList.contains("hidden")) {
    knapp.textContent = "Visa övningen";
  } else {
    knapp.textContent = "Dölj övningen";
  }
});
