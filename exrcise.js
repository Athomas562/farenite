function convertirCelsiusEnFahrenheit(celsius) {
	return (celsius * 9) / 5 + 32;
}

console.log(convertirCelsiusEnFahrenheit(0));
console.log(convertirCelsiusEnFahrenheit(25));

function sommeTroisNombres(a, b, c) {
	return a + b + c;
}

console.log(sommeTroisNombres(5, 10, 15));

function heuresEnSecondes(heures) {
	return heures * 3600;
}

console.log(heuresEnSecondes(2));

function peutVoter(age, nationalite) {
	if ((age >= 18) & (nationalite == "française")) {
		return "Éligible";
	} else {
		return "Non éligible";
	}
}
console.log(peutVoter(20, "française"));
console.log(peutVoter(16, "française"));
console.log(peutVoter(20, "espagnole"));
