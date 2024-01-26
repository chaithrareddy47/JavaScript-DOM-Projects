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

//updated
const imageData = [
	{
		id: 1,
		author: 'susan smith',
		img: 'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=338&ext=jpg&ga=GA1.1.1168400549.1706226034&semt=sph',
		job: 'UX Designer',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, earum?',
	},
	{
		id: 2,
		author: 'Nick',
		img: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1168400549.1706226034&semt=sph',
		job: 'Frontend Developer',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, earum?',
	},
	{
		id: 3,
		author: 'Lena',
		img: 'https://img.freepik.com/free-photo/portrait-beautiful-young-woman-with-curly-hair-brown-hat_1142-42780.jpg?size=338&ext=jpg&ga=GA1.1.1168400549.1706226034&semt=sph',
		job: 'UI Designer',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, earum?',
	},
	{
		id: 4,
		author: 'smith',
		img: 'https://img.freepik.com/free-psd/3d-illustration-person-with-long-hair_23-2149436197.jpg?size=338&ext=jpg&ga=GA1.1.1168400549.1706226034&semt=sph',
		job: 'Intern',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, earum?',
	},

	// Add more objects as needed
];

const personImg = document.querySelector('#person-img');
const job = document.querySelector('#job');
const info = document.querySelector('#info');
const author= document.querySelector('.author');

// selection buttons
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//cuttent item initialy 0 because arrays is 0 based index
let currentItem = 0;

function showPerson(){
	const item = imageData
	personImg.src = imageData.img;
	job.textContent = imageData.job;
	info.textContent = imageData.info;
	author.textContent = imageData.author;
}

// adding event to html
//document - refers whole html documnet
document.addEventListener('DOMContentLoaded', function(){
	showPerson(currentItem)
})
