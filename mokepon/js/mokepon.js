const d = document,
  inputPets = d.querySelectorAll(`input`),
  PlayerPetbutton = document.querySelector("#buttonPets"),
  playersPet = d.getElementById("playersPet");

d.addEventListener("DOMContentLoaded", (element) => {
  PlayerPetbutton.addEventListener("click", (e) => {
    inputPets.forEach((item) =>
      item.checked ? (playersPet.textContent = item.id) : null
    );
  });
});
