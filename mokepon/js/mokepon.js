const d = document,
  inputPets = d.querySelectorAll(`input`),
  playersPet = d.getElementById("playersPet"),
  label = d.querySelectorAll(`label`),
  enemysPet = d.getElementById(`enemysPet`),
  allButtons = d.querySelectorAll("button"),
  messege = d.getElementById("msg"),
  spanAll = d.querySelectorAll(`span`),
  allSection = d.querySelectorAll(`section`);

const random = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + 1);
};

let randomMore = random(3, 1),
  playerHearth = 3,
  enemyHearth = 3;

const hideOrShow = (n, ForT, i = 4, ixd = "none") => {
  allSection[n].style.display = ForT;
  allButtons[i].style.display = ixd;
};

const msgAndMore = (el, n) => {
  messege.innerHTML += `<p> Your pet attacked to - ${el}. enemys'pet attacked to - ${allButtons[randomMore].textContent} ....`;

  if (n === randomMore) {
    spanAll[4].textContent = `it's TIE!!!`;

    setTimeout(() => {
      spanAll[4].textContent = null;
    }, 2000);
  } else if (
    (n === 2 && randomMore === 1) ||
    (n === 1 && randomMore === 3) ||
    (n === 3 && randomMore === 2)
  ) {
    spanAll[3].textContent = enemyHearth = enemyHearth - 1;
  } else {
    spanAll[1].textContent = playerHearth = playerHearth - 1;
  }

  if (playerHearth === 0 || enemyHearth === 0) {
    allButtons[1].disabled = true;
    allButtons[2].disabled = true;
    allButtons[3].disabled = true;
  }
  playerHearth === 0
    ? alert(`You fail !😱😨🙀!, (${playerHearth} - ${enemyHearth})`)
    : enemyHearth === 0
    ? alert(`YOU WIN, WELL DONE 🥳🙌🎉🎈, (${playerHearth} - ${enemyHearth})`)
    : null;
};

d.addEventListener("DOMContentLoaded", (element) => {
  hideOrShow(1, "none");

  d.addEventListener("click", (e) => {
    if (e.target.matches(".buttonPets")) {
      hideOrShow(1, "block");

      inputPets.forEach((item) => {
        if (item.checked) playersPet.textContent = item.id;
      });
    }

    if (e.target.matches(".buttonFire")) msgAndMore(`🔥Fire🔥`, 1);

    if (e.target.matches(".buttonAqua")) msgAndMore(`💧Aqua💧`, 2);

    if (e.target.matches(".buttonTerra")) msgAndMore(`🌱Terra🌱`, 3);

    if (e.target.matches(".buttonReset")) location.reload();

    if (e.target.matches(".buttonFire, .buttonAqua, .buttonTerra"))
      hideOrShow(1, "block", 4, "block");
  });

  try {
    enemysPet.textContent = label[random(5, 0)].textContent;
  } catch (error) {
    enemysPet.textContent = label[0].textContent;
  }
});
