import { setUnlock, getUnlock, setScore, getScore } from "../../shared/js/storage.js";

let score = Number(getScore() ?? 0);

function updateUI() {
  const unlock = getUnlock();
  const el = document.getElementById("gameStatus");

  if (unlock) {
    el.textContent = `Оноо: ${score} • Unlock: ${unlock}`;
  } else {
    el.textContent = `Оноо: ${score} • Unlock: байхгүй`;
  }
}

document.getElementById("addScoreBtn").addEventListener("click", () => {
  score += 100;
  setScore(score);
  updateUI();
});

document.getElementById("unlockBtn").addEventListener("click", () => {
  setUnlock("lab1");
  setScore(score);
  updateUI();
});

updateUI();