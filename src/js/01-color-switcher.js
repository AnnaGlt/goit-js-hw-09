
/*let getEl = selector => document.querySelector('button')
getEl('button[data-start]').addEventListener('click', timeIntervalClick)
getEl('button[data-stop]').addEventListener('click', stopClick)
*/

const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
}

refs.startBtn.addEventListener('click', timeIntervalClick)
refs.stopBtn.addEventListener('click', stopClick)

let interval

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

function timeIntervalClick() {
    interval = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor()  
    }, 1000)

    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;    
}

function stopClick() {
    clearInterval(interval)
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true; 
}