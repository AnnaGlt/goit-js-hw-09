import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form')
}

refs.form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
  event.preventDefault();
  
  let formDelay = Number(event.currentTarget.delay.value)
  let formStep = Number(event.currentTarget.step.value)
  let formAmount = Number(event.currentTarget.amount.value)
  
  for(let index = 0; index < formAmount; index++) {
    createPromise(index + 1, formDelay + formStep * index)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }); 
  }
}

function createPromise(position, delay) {
   return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({position, delay})
      } else {
        // Reject
        reject({position, delay})
      }
    }, delay)
  })
}