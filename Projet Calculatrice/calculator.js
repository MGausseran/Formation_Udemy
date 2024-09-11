let choice
do {
    choice = Number(prompt("Quel calcul souhaitez-vous faire ? \n\n1.Addition\n\n2.Soustraction\n\n3.Division\n\n4.Multiplication"));
    if (isNaN(choice) || choice < 1 || choice > 4) {
        alert("Veuillez choisir un calcul valide.");
    }
} while (isNaN(choice) || choice < 1 || choice > 4);

switch (choice) {
    case 1:
        choice = "addition";
        break

    case 2:
        choice = "soustraction";
        break

    case 3:
        choice = "division";
        break

    case 4:
        choice = "multiplication";
        break
}

console.log(choice);

let numberA

do {
    numberA = Number(prompt("Quel est le premier chiffre de votre " + choice + " ?"));
    if (isNaN(numberA)) {
        alert("Veuillez choisir un chiffre valide.");
    }
    else if (choice === "division" && numberA == 0) {
        alert("Veuillez choisir un chiffre valide par lequel diviser.")
    }

} while ((choice === "division" && numberA == 0)||(isNaN(numberA)));


console.log(numberA);

let numberB

do {
    numberB = Number(prompt("Quel est le deuxième chiffre de votre " + choice + " ?"));
    if (isNaN(numberB)) {
        alert("Veuillez choisir un chiffre valide.");
    }
    else if (choice === "division" && numberB == 0) {
        alert("Veuillez choisir un chiffre valide par lequel diviser.")
    }
}
while ((choice === "division" && numberB == 0)||(isNaN(numberB)));

console.log(numberB);

function addition(numberA, numberB) {
    result = numberA + numberB;
    return result;
}

function soustraction(numberA, numberB) {
    result = numberA - numberB;
    return result;
}

function division(numberA, numberB) {
    result = numberA / numberB;
    return result;
}

function multiplication(numberA, numberB) {
    result = numberA * numberB;
    return result;
}

if (choice === "addition") {
    addition(numberA, numberB);
    alert(result);
}

if (choice === "soustraction") {
    soustraction(numberA, numberB);
    alert(result);
}

if (choice === "multiplication") {
    multiplication(numberA, numberB);
    alert(result);
}

if (choice === "division") {
    division(numberA, numberB);
    alert(result);
    }