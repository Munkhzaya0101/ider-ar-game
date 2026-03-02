import { getUnlock, clearUnlock, getScore } from "../../shared/js/storage.js";

function render() {
  const status = document.getElementById("status");
  const unlockedArea = document.getElementById("unlockedArea");
  const unlockValue = document.getElementById("unlockValue");

  const unlock = getUnlock();
  const score = getScore();

  if (unlock) {
    status.textContent = `Unlock: ${unlock} (Score: ${score ?? "-"})`;
    unlockedArea.style.display = "block";
    unlockValue.textContent = `localStorage.ider_unlock = "${unlock}"`;
  } else {
    status.textContent = "Unlock: байхгүй (тоглоомоос unlock хийгээгүй)";
    unlockedArea.style.display = "none";
    unlockValue.textContent = "";
  }
}

document.getElementById("clearBtn").addEventListener("click", () => {
  clearUnlock();
  render();
});

render();