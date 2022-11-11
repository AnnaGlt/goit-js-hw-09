import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form')
}

refs.form.addEventListener('submit', createPromise)

function createPromise(event) {

  let formDelay = Number(event.currentTarget.delay.value)
  let formStep = Number(event.currentTarget.step.value)
  let formAmount = Number(event.currentTarget.amount.value)

  for (let index = 0; index < formAmount -1; index++) {
    let position = index+1;
    let delay = formDelay + formStep * index 
  }

  return new Promise((resolve, reject) => {
      event.preventDefault();
    const shouldResolve = Math.random() > 0.3;
    
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve('{position, delay}')
      } else {
        // Reject
        reject('{position, delay}')
      }
    }, delay)
  })
}

createPromise()
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });

