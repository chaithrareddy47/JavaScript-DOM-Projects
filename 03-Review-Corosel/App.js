/*
  Key concepts covered:

objects
DOMContentLoaded
addEventListener()
array.length
textContent

*/

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
const author = document.querySelector('.author');

// selection buttons
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//cuttent item initialy 0 because arrays is 0 based index
//meaning the first element in an array has an index of 0. So, if currentItem is 0, you are currently pointing to the first element in the array.
let currentItem = 0;

function showPerson(imageData) {
	personImg.src = imageData.img;
	job.textContent = imageData.job;
	info.textContent = imageData.info;
	author.textContent = imageData.author;
}

// adding event to html
//document - refers whole html documnet 
//domcontenet loaded is triggerd 
document.addEventListener('DOMContentLoaded', function () {
	//here we are pasiing the image data array with current index of 0
	showPerson(imageData[currentItem]);
});

nextBtn.addEventListener('click', function(){
	currentItem = ( currentItem + 1) % imageData.length
	showPerson(imageData[currentItem])
})
prevBtn.addEventListener('click', function(){
	currentItem = ( currentItem - 1 + imageData.length) % imageData.length;
	showPerson(imageData[currentItem])
})

randomBtn.addEventListener('click', function () {
	currentItem = Math.floor(Math.random() * imageData.length);
	showPerson(imageData[currentItem]);
});
