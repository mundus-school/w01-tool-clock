function showTime() {
  let date = new Date();
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let s = date.getSeconds(); // 0 - 59

  /* The following lines do the same as writing
  if (h < 10) {
    h = "0" + h;
  } else {
    h = h;
    }
  */

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let time = h + ":" + m + ":" + s;

  document.getElementById("clock-display").textContent = time;
}

function homeCD() {
  const now = new Date();
  const target = new Date();
  target.setHours(16, 30, 0, 0);

  let diff = target - now;

  if (diff <= 0) {
    document.getElementById("home-countdown").textContent = "00:00:00";
    return;
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const formatted =
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0");

  document.getElementById("home-countdown").textContent = formatted;
}

showTime();
homeCD();
setInterval(() => {
  showTime(), homeCD();
}, 1000);
