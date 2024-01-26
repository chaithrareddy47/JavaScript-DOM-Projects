/*
  Key concepts covered:

objects
DOMContentLoaded
addEventListener()
array.length
textContent

*/

// array object
const reviews = [
	{
		id: 1,
		name: 'Susan smith',
		job: 'Ux Designer',
		img: 'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg&ga=GA1.1.1168400549.1706226034&semt=sph',
		text: 'ABC',
	},
	{
		id: 2,
		name: 'Susan smith',
		job: 'Ux Designer',
		img: 'https://img.freepik.com/free-photo/portrait-beautiful-young-woman-with-curly-hair-brown-hat_1142-42780.jpg?size=338&ext=jpg&ga=GA1.1.1168400549.1706226034&semt=sph',
		text: 'ABC',
	},
	{
		id: 3,
		name: 'Susan smith',
		job: 'Ux Designer',
		img: 'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg&ga=GA1.1.1168400549.1706226034&semt=sph',
		text: 'ABC',
	},
	{
		id: 4,
		name: 'Susan smith',
		job: 'Ux Designer',
		img: 'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg&ga=GA1.1.1168400549.1706226034&semt=sph',
		text: 'ABC',
	},
];

// selecting items
const img = document.querySelector('#person-img');
const author = document.querySelector('.author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


//starting item must be 0 bcos we are using array based indes
let currentItem = 0;

//load initial items
window.addEventListener('DOMContentLoaded', function(){
  showFunction(currentItem);
})

function callBackFunc(){
  
  // console.log('shke and bake');
  // //assigned the cuttentItem to a item const variabel
  // const item = reviews[currentItem];
  // //adding src to img tag dynamically
  // img.src = item.img;
  // author.textContent = item.name;
  // job.textContent = item.job;
  // info.textContent = item.text;

  //refactoruing the code
}

// show person based on item
function showFunction(person){
	const item = reviews[person];
	//adding src to img tag dynamically
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
}

nextBtn.addEventListener('click', function(){
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showFunction(currentItem);
})
prevBtn.addEventListener('click', function(){
  currentItem--;
	if (currentItem < 0) {
		currentItem = reviews.length - 1;
	}
	showFunction(currentItem);
})