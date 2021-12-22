const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function countDays() {
  let IniData = new Date(document.getElementById("IniData"));
  let FinData = new Date(document.getElementById("FinData"));

  let diff = FinData.getTime() - IniData.getTime();

  document.getElementById("dias").innerText = Math.floor(diff / day);
}