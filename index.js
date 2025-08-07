let container = document.querySelector(".container");
let second = 0;
let minuts = 0;
let hour = 1;
// let secondPin = document.querySelector(".second-pin");
let watch = document.querySelector(".watch");
let hourdiv = document.querySelector(".hour-container");
let minutdiv = document.querySelector(".minut-container");
let seconddiv = document.querySelector(".second-container");
hourdiv.innerText = hour < 10 ? "0" + hour : hour;
minutdiv.innerText = "00";
seconddiv.innerText = "00";
let setIntervalId = null;
function startClock() {
  if (setIntervalId) {
    clearInterval(setIntervalId);
  }
  setIntervalId = setInterval(() => {
    second++;
    if (second === 60) {
      minuts++;
      second = 0;
      if (minuts === 60) {
        hour++;
        minuts = 0;
        second = 0;
        if (hour == 13) {
          hour = 1;
          minuts = 0;
          second = 0;
        }
      }
    }
    hourdiv.innerText = hour < 10 ? "0" + hour : hour;
    minutdiv.innerText = minuts < 10 ? "0" + minuts : minuts;
    seconddiv.innerText = second < 10 ? "0" + second : second;
  }, 1000);
}
startClock();

document.querySelector("#set-time-btn").addEventListener("click", () => {
  let setHour = parseInt(document.querySelector("#set-hour").value);
  let setMinuts = parseInt(document.querySelector("#set-minute").value);
  let setSecond = parseInt(document.querySelector("#set-second").value);

  if (
    isNaN(setHour) ||
    isNaN(setMinuts) ||
    isNaN(setSecond) ||
    setHour < 1 ||
    setHour > 12 ||
    setMinuts < 0 ||
    setMinuts > 59 ||
    setSecond < 0 ||
    setSecond > 59
  ) {
    alert("Please enter valid time values.");
    return;
  }
  hour = setHour;
  minuts = setMinuts;
  second = setSecond;
  hourdiv.innerText = hour < 10 ? "0" + hour : hour;
  minutdiv.innerText = minuts < 10 ? "0" + minuts : minuts;
  seconddiv.innerText = second < 10 ? "0" + second : second;
  document.querySelector("#set-hour").value = "";
  document.querySelector("#set-minute").value = "";
  document.querySelector("#set-second").value = "";
});
