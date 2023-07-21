import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    inputForDate : document.querySelector("#datetime-picker"),
    btnStart : document.querySelector("[data-start]"),
    days : document.querySelector("[data-days]"),
    hours : document.querySelector("[data-hours]"),
    minutes : document.querySelector("[data-minutes]"),
    seconds : document.querySelector("[data-seconds]"),
} 
refs.btnStart.setAttribute("disabled", true)


const fp = flatpickr(refs.inputForDate, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {

refs.btnStart.addEventListener("click", onBtnClick)
const selectedDate = selectedDates[0].getTime(); // выбранное время
const timeToCount = selectedDate - Date.now(); // выбранное - текущее время 

if ( timeToCount< 0 ){
    alert("Please choose a date in the future");
} else if (timeToCount> 0 ){
refs.btnStart.removeAttribute("disabled");
}

function onBtnClick (event) {
 const intervalId = setInterval(() => {
    const time = (Date.now() - selectedDate)* (-1) 
    console.log(time);
  if (!time){
    alert("Timer is finish");
    clearInterval(intervalId);
    return
  } 
    const timeS= convertMs(time)
    const timeWithZero = addLeadingZero(timeS);
    updateTime(timeWithZero);
  }, 1000)

  refs.btnStart.setAttribute("disabled", true)
}

    },
  });

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  function addLeadingZero(value){
    const { days, hours, minutes, seconds } = value;
    const DAYS = String(days).padStart(2, "0");
    const HOURS =  String(hours).padStart(2, "0");
    const MINUTES =  String(minutes).padStart(2, "0");
    const SECONDS = String(seconds).padStart(2, "0");
     return { DAYS, HOURS, MINUTES, SECONDS }
  }
  function updateTime ({ DAYS, HOURS, MINUTES, SECONDS }) {
    refs.days.textContent = `${DAYS}`;
    refs.hours.textContent = `${HOURS}`;
    refs.minutes.textContent = `${MINUTES}`;
    refs.seconds.textContent = `${SECONDS}`;
  } 