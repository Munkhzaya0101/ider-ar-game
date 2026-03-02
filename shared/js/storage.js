export const StorageKeys = {
  unlock: "ider_unlock",        // жишээ: "lab1"
  score: "ider_game_score",     // жишээ: "1200"
};

export function setUnlock(value) {
  localStorage.setItem(StorageKeys.unlock, String(value));
}

export function getUnlock() {
  return localStorage.getItem(StorageKeys.unlock);
}

export function clearUnlock() {
  localStorage.removeItem(StorageKeys.unlock);
}

export function setScore(value) {
  localStorage.setItem(StorageKeys.score, String(value));
}

export function getScore() {
  return localStorage.getItem(StorageKeys.score);
}

export function clearScore() {
  localStorage.removeItem(StorageKeys.score);
}