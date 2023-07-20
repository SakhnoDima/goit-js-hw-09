const refs ={
    btnStart : document.querySelector("[data-start]"),
    btnStop : document.querySelector("[data-stop]"),
    body : document.body,
}
let TIMER_ID = null;
let disabled = false;

refs.btnStart.addEventListener("click", onBtnStartClick);
refs.btnStop.addEventListener("click", onBtnStopClick);


function onBtnStartClick (event){
if (!disabled) {
    TIMER_ID = setInterval((changeColor), 1000);

    refs.btnStart.disabled = true;
}
};

function onBtnStopClick(event){
    refs.btnStart.disabled = false;
    clearInterval(TIMER_ID);  
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

function changeColor() {
    refs.body.style.backgroundColor = `${getRandomHexColor()}`
};