import { Notify } from 'notiflix/build/notiflix-notify-aio';
// ? глобально прописал опции
Notify.init({ 
      width: '300px',
      timeout: 3000,
      position: 'center-center',});
const refs = {
  form : document.querySelector(".form")
}
let number = 1;
refs.form.addEventListener("submit", onSubmit)


function onSubmit(event){
  event.preventDefault()

  const { delay, step, amount } = event.currentTarget.elements;
  let delayValue = Number(delay.value);
  const stePp = Number(step.value);

  for (let i = 0; i < amount.value; i+=1) {
    
  createPromise(number, delayValue).then(({position, delay}) => 
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`))
  .catch(({position, delay}) => 
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));

  delayValue+=stePp;
  number+=1;
  }
  number = 1;
}

function createPromise(position, delay) {

  return new Promise ((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;

  setTimeout(() => {

  if (shouldResolve) {
    resolve({position, delay})
    
  } else {
    reject({position, delay});
    
  }
}, delay);

});
}
