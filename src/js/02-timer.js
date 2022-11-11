import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    btnStart: document.querySelector('button[data-start]'),
    inputData: document.querySelector('#datetime-picker')._flatpickr,
    getHours: document.querySelector('span[data - hours]'.value),
    getMins: document.querySelector('span[data - minutes]'.value),
    getDays: document.querySelector('span[data-days]'.value),
    getSecs: document.querySelector('span[data - seconds]'.value),
}

refs.btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        const dataTime = Data.now()
        const referenceTime = selectedDates[0].getTime()

        if (dataTime < referenceTime) {
            Notiflix.Notify.failure("Please choose a date in the future");
        } else { refs.btnStart = false }
        
    console.log(selectedDates[0]);
  },
};

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

const timer = (targetData) => {
    setInterval(() => {
        const delta = new Data(targetData) - new Data ()

        const timerFormat = `${minutes}:${second}`
        renderTimer (delta)
    }, 1000);
}

const renderTimer = (String) => {
    document.querySelector('span').innerText = String
}


refs.btnStart.addEventListener('click', timeStartClick)

function timeStartClick() {
  flatpickr(refs.inputData, {});
    
    daysMonitor.textContent = new Date(refs.inputData)
}


