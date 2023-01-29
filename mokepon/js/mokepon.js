const d = document,
  inputPets = d.querySelectorAll(`input`),
  PlayerPetbutton = document.querySelector("#buttonPets");

d.addEventListener("DOMContentLoaded", (element) => {
  PlayerPetbutton.addEventListener("click", (e) => {
    inputPets.forEach((item) => (item.checked ? console.log(item.id) : null));
  });
});
