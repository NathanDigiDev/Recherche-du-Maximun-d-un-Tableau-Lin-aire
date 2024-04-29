let monTableauJour = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];
let monTableauNumber = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
let monTableauMois = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

console.log(monTableauJour[1], monTableauNumber[14], monTableauMois[3]);

let monTableauFelins = ["Tigre", "Lion", "Panthère", "Ocelot", "Puma"];

let monTableauFelins5caractères = monTableauFelins.filter((i) => i.length <= 5);
console.log(monTableauFelins5caractères);

monTableauFelins.push("Léopard");
console.log(monTableauFelins);

let monTableauFelinsIndicesImpairs = monTableauFelins.filter(
  (i, index) => index % 2 !== 0
);
console.log(monTableauFelinsIndicesImpairs);

let monTableauPoissons = ["Truite", "Ablette", "Brochet", "Carpe", "Gardon"];

let monTableauAnimaux = monTableauFelins.concat(monTableauPoissons);
console.log(monTableauAnimaux);

let monTableauFelins2 = monTableauAnimaux.slice(0, 6);
console.log(monTableauFelins2);

monTableauPoissons.splice(2, 1, "Tanche", "Barbeau");
console.log(monTableauPoissons);

function brochetPresent() {
  if (monTableauPoissons.includes("Brochet")) {
    console.log("Le brochet est présent");
  } else {
    console.log("Le brochet n'est pas présent");
  }
}
brochetPresent();

monTableauPoissons = ["Truite", "Ablette", "Brochet", "Carpe", "Gardon"];

let monTableauxAlternative = [];

for (let i = 0; i < monTableauPoissons.length; i++) {
  monTableauxAlternative.push(monTableauFelins[i], monTableauPoissons[i]);
}

console.log(monTableauxAlternative);

let monTabNombre = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let monTabNombrePair = monTabNombre.filter((i) => i % 2 === 0);
console.log(monTabNombrePair);

let monTabNombreAffine = monTabNombrePair.map((i) => 3 * i + 2);

console.log(monTabNombreAffine);

let utilisateurs = [
  { prenom: "Sacha", nom: "RESTOUEIX" },
  { prenom: "Rémi", nom: "CHOCO" },
  { prenom: "Pierre", nom: "KIROULE" },
];

let utilisateursMap = utilisateurs.map((i) => i.prenom + " " + i.nom);
console.log(utilisateursMap);

let longueurs = utilisateursMap.map((nomComplet) => nomComplet.length);

let racinesArrondies = longueurs.map((longueur) =>
  Math.round(Math.sqrt(longueur))
);

let somme = racinesArrondies.reduce((acc, curr) => acc + curr, 0);

console.log(somme);
