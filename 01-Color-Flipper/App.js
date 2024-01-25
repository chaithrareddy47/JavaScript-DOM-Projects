const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
 let hexCode = '#';
 for (let i=0; i<6; i++) {
  hexCode = hexCode + hex[randomNumber()];
  console.log('btn clicked', hexCode);

  color.innerHTML = hexCode;
  document.body.style.backgroundColor = hexCode;
 
  
 }
})

function randomNumber(){
  return Math.trunc(Math.random() * hex.length)
}
