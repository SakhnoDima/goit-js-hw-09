import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    inputForDate :document.querySelector("#datetime-picker"),
    btnStart : document.querySelector("[data-start]"),
} 


refs.btnStart.setAttribute("disabled", true)

const fp = flatpickr(refs.inputForDate, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {

refs.btnStart.addEventListener("click", onBtnClick)
const selectedDate = selectedDates[0].getTime();
const dateNow = new Date().getTime();
const timeToCount = selectedDate - dateNow;
if ( timeToCount< 0 ){
    alert("Please choose a date in the future");
} else if (timeToCount> 0 ){
refs.btnStart.removeAttribute("disabled");
}








function onBtnClick (event) {
  const time = convertMs(timeToCount)
    console.log(time);
    console.log("x");
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