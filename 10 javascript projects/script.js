const days1 = document.getElementById("days");
const hours1 = document.getElementById("hours");
const minutes1 = document.getElementById("minutes");
const seconds1 = document.getElementById("seconds");
const newDate = "24 Apr 2024";

function countdown(){
  const newDay = new Date(newDate);
  const current = new Date();

  const totalSeconds = (newDay - current) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  days1.innerHTML = days;
  hours1.innerHTML = format(hours);
  minutes1.innerHTML = format(minutes);
  seconds1.innerHTML = format(seconds)
}

function format(time){
  if(time < 10){
    return `0${time}`
  }else{
    return time;
  }
}

countdown();
setInterval(countdown, 1000)