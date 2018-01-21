var genders = ["male", "female"];
var names = ["Doctor Gonzo", "Doonesbury", "Periwinkle", "Chipper", "Elmer", "Dolce", "Babushka", "Grover", "Taxi", "Rosebud", "Ouija", "Bossman", "Truffles", "Six Toes", "Sadie", "Seuss", "Van Gogh", "Bunk", "Heidi"];
var dogs = [];

function adoptHandler() {
	// let's add our code here to handle adopting a dog
	// don't forget to stop the form from reloading the page
	event.preventDefault();
	adoptDog();
}

function adoptDog() {
	// show the 'addmore' and 'done' and console.log a message that talks about the dog.
	document.getElementById("addmore").className = "";
	document.getElementById("done").className = "";

	var select = document.getElementById("rescue");
	var breed = select.options[select.selectedIndex].value;

	// add the dog message to the array
	var name = names[generateRandomNumber(names.length)];
	var gender = genders[generateRandomNumber(genders.length)];
	console.log("You've just adopted a new " + gender + " " + breed + " with the name " + name);
	dogs.push(createDogObject(gender, breed, name));
}

function finishHandler() {
	// let's console log all our dogs
	for (var i = 0; i < dogs.length; i++) {
		const dog = dogs[i];
		console.log("You've adopted the " + dog.gender + " " + dog.breed + ": " + dog.name);
	}
	dogs = [];
};

function createDogObject(gender, breed, name) {
	return {gender: gender, breed: breed, name: name};
}

function generateRandomNumber(maxInt) {
	return Math.floor(Math.random(maxInt) * maxInt);
}

// add a click handler for the #selectDog button
document.getElementById("formSubmit").onclick = function () {
	//dogs = [];
	adoptHandler();
};

// add a click handler for the #addmore button
document.getElementById("addmore").onclick = adoptHandler;

// add a click handler for the #done button
document.getElementById("done").onclick = finishHandler;
