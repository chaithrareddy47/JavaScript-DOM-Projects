/*
const increment = document.querySelector('.inc')
const decrement = document.querySelector('.dec')
const reset = document.querySelector('.reset')

let num = 0;

increment.addEventListener('click', function(){
   num++
   number.textContent = `${num}`
})

decrement.addEventListener('click', function(){
  if (num > 0) {
      num--;
			number.textContent = `${num}`;
  }
})

reset.addEventListener('click', function(){
  if (num > 0) {
      num = 0;
			number.textContent = `${num}`;
  }
})

*/
// Revised version of counter app
let count = 0;
const value = document.querySelector('.value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
  btn.addEventListener('click', function(e){
    console.log(e.currentTarget.value);
    const styles = e.currentTarget.classList;
    if (styles.contains('dec')) {
      if (count > 0) {
        count--;
      }
    } else if(styles.contains('inc')){
      count++
    } else{
      count = 0;
    }
    value.textContent = count;
  })
})


