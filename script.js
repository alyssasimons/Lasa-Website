document.addEventListener('DOMContentLoaded', function() {
    const formButton = document.querySelector("#formButton");
    formButton.addEventListener("click", getInput);
});

function getInput() {
	let sent = false;
	let suggestion = document.getElementById("feedback").value;
	let form = document.getElementById("feedbackForm");
	let text = document.getElementById("textArea");

	if(suggestion != null && suggestion != "") {
		formButton.removeEventListener("click", getInput);
		let req = new XMLHttpRequest();
		text.innerHTML = `<p>${suggestion}</p>`

		req.onreadystatechange = () => {
		if (req.readyState == XMLHttpRequest.DONE && !sent) {
			form.innerHTML='<p>Thanks for suggesting!</p>';
			sent = true;
      		let arr = JSON.parse(req.responseText)['record'];

			req.open("PUT", "https://api.jsonbin.io/v3/b/655cc84d0574da7622c9c5eb", true);
			req.setRequestHeader("Content-Type", "application/json");
			req.setRequestHeader("X-ACCESS-Key", "$2a$10$Xn0VvCBkIdlWdh8D/uls3Os88h6ZQZCRvO6vAMPvhSZdGD43NUvXW");
			arr.push({feedback: suggestion});
			req.send(JSON.stringify(arr));
		}
		};
		
		req.open("GET", "https://api.jsonbin.io/v3/b/655cc84d0574da7622c9c5eb/latest", true);
		req.setRequestHeader("X-ACCESS-Key", "$2a$10$Xn0VvCBkIdlWdh8D/uls3Os88h6ZQZCRvO6vAMPvhSZdGD43NUvXW");
		req.send();
	}
}
/*

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

// random recipe
const recipes = [
	'Sinigang',
	'Filipino Spaghetti',
	'Biko',
	'Pancit Molo',
	'Kare Kare', 
	'Filipino Chop Suey'
];

document.getElementById('funButton').addEventListener('click', function() {
	displayRandomRecipe();
});

function displayRandomRecipe() {
	const recipeContainer = document.getElementById('recipeContainer');
	const randomIndex = Math.floor(Math.random() * recipes.length);
	const randomRecipe = recipes[randomIndex];

	recipeContainer.innerHTML = `<p>Recipe of the Day: ${randomRecipe}</p>`;
} */