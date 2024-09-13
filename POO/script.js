// let personne1 = {
//     firstName : "Martin",
//     lastName : "Gausseran",
//     dateOfBirth : "29/09/1995",
// }

// personne1.animalPréféré = "Pepper";

// console.log(personne1.animalPréféré);


function Utilisateur(prenom, nom, email) {
    this.prenom = prenom;
    this.nom = nom;
    this.email = email;
}

let Martin = new Utilisateur("Martin", "Gausseran", "martin.gausseran@gmail.com");
console.log(Martin.email);
Martin.posteActuel = "Développeur Web (en devenir)";


function Logement(type, année, parking, adresse, propriétaire) {
    this.type = type;
    this.année = année;
    this.parking = parking;
    this.adresse = adresse
    this.propriétaire = propriétaire
}

let appartementDeMartin = new Logement("Appartement", 1970, true, "Avenue de la Charmille 20", Martin);

console.log(appartementDeMartin.propriétaire);

//Créer un objet avec Object 

class Animal {
    constructor(nombreDePattes, poids, espece, cri){
        this.nombreDePattes = nombreDePattes;
        this.poidsenKg = poids;
        this.espece = espece;
        this.cri = cri
    }
    crier() {
        console.log(this.cri);
    }
}

class Mammifère extends Animal {
    constructor(nombreDePattes, poids, espece, cri, typeDePoils) {
        super(nombreDePattes, poids, espece, cri)
        this.typeDePoils = typeDePoils;
    }
}

class Oiseau extends Animal {
    constructor(nombreDePattes, poids, longueurDesAiles) {
        super(nombreDePattes, poids)
        this.longueurDesAiles = longueurDesAiles;
    }
}

let lapin = new Mammifère(4, 3, "lagomorphe", "kouik kouik", "longs", );
let perruche = new Oiseau(2, 0.5, 15);

lapin.crier();
console.log(lapin);
console.log(perruche);