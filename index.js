const hour = document.getElementById("hours");
const min = document.getElementById("minutes");
const sec = document.getElementById("seconds");
const ampm = document.getElementById("amorpm");

function updateClock() {
  debugger;
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let apm = "AM";

  if (h > 12) {
    h = h - 12;
    apm = "PM";
  }

  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  hour.innerHTML = h;
  min.innerHTML = m;
  sec.innerHTML = s;
  ampm.innerHTML = apm;

  setTimeout(() => {
    updateClock();
  }, 1000);
}
updateClock();
