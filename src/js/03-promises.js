import resolver from 'bower-npm-resolver';
import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form')
}

refs.form.addEventListener('submit', createPromise)

let position = 0

function createPromise(position, delay, e) {
  e.preventDefault();

  position += 1
  
  return new Promise((resolve, reject) => {
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

createPromise({ position, delay })
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });

