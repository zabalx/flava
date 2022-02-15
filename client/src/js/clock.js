let target_date = new Date(2022, 2, 1, 0, 0, 0, 0); 
let days, hours, minutes, seconds; 
let clock__days = Array.from(document.getElementsByClassName("js-days"))[0]
let clock__hours = Array.from(document.getElementsByClassName("js-hours"))[0]
let clock__minutes = Array.from(document.getElementsByClassName("js-minutes"))[0]
let clock__seconds = Array.from(document.getElementsByClassName("js-seconds"))[0]

getCountdown();
setInterval(function () { getCountdown(); }, 1000);
 
function getCountdown(){
 
  let current_date = new Date().getTime();
  let seconds_left = (target_date - current_date) / 1000;
 
    days = pad( parseInt(seconds_left / 86400) );
    seconds_left = seconds_left % 86400;
          
    hours = pad( parseInt(seconds_left / 3600) );
    seconds_left = seconds_left % 3600;
           
    minutes = pad( parseInt(seconds_left / 60) );
    seconds = pad( parseInt( seconds_left % 60 ) );
 

    clock__days.innerHTML =  days;
    clock__hours.innerHTML =  hours;
    clock__minutes.innerHTML =  minutes;
    clock__seconds.innerHTML =  seconds;
}
 function pad(n) {
    return (n < 10 ? '0' : '') + n;
}