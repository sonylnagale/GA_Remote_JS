function isCCNumberValid(ccNumber) {
	if (ccNumber < 1) {
		return false
	}

	// Adheres to Luhn
	return luhnalgorithmCheck(ccNumber);
}

function luhnalgorithmCheck(cardNumber) {
	const reverseString = cardNumber.split("").reverse().join("");
	const reverseDoubled = doubleOtherDigit(reverseString);
	return (sumIntString(reverseDoubled) % 10 == 0)
}

function doubleOtherDigit(number) {

	var cardHolder = "";
	for (var i = 0; i < number.length; i++) {
		if (i % 2 == 1) {
			cardHolder += number[i] * 2;
			continue
		}
		cardHolder += number[i];
	}
	return cardHolder
}

function sumIntString(number) {
	var sum = 0;
	number.split('').map(function (num) {
		sum += new Number(num);
	});
	return sum
}

function addCardToWallet(creditCard) {
	var node = document.createElement("div");
	const textNode = document.createTextNode((creditCard.valid ? "Real news" : "Fake news")
		+ "credit card: " + creditCard.number);
	node.appendChild(textNode);
	document.getElementById("wallet").appendChild(node);
}

var wallet = [];

document.getElementById("formSubmit").onclick = function () {
	event.preventDefault();
	const input = document.getElementById("input");
	const value = input.value;
	input.value = "";

	var creditCard = {
		number: value,
		valid: isCCNumberValid(value) ? true : false,
	};
	wallet.push(creditCard);
	console.log(wallet);
	addCardToWallet(creditCard);
};

// Bonus: How to determine 16 digit combinations that satisfy Luhn Algorithm?