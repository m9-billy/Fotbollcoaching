const knappar = document.querySelectorAll(".nivaknapp");
const nivaText = document.querySelector("#niva-text");

knappar.forEach((knapp) => {
  knapp.addEventListener("click", () => {
    nivaText.textContent = knapp.dataset.text;
  });
});
