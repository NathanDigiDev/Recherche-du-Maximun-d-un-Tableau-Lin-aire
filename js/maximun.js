// RECHERCHE DU MAXIMUM D’UN TABLEAU LINÉAIRE

const validate = document.getElementById("btn-validate");
const inputValidate = document.getElementById("dimension");
const tableau = document.getElementById("tableau");
const error = document.getElementById("error");

validate.addEventListener("click", (e) => {
  e.preventDefault();

  // Vérifie si l'entrée de l'utilisateur est valide
  if (
    inputValidate.value > 20 ||
    inputValidate.value < 1 ||
    isNaN(inputValidate.value) ||
    inputValidate.value === ""
  ) {
    // Affiche un message d'erreur si l'entrée n'est pas valide
    error.innerText = "Veuillez saisir un nombre entre 1 et 20";
    error.style.color = "red";
    error.style.padding = "5px";
    error.style.fontWeight = "bold";
  } else {
    error.innerText = "";

    // Efface tout contenu précédent dans le div "tableau"
    tableau.innerHTML = "";

    // Crée un nombre d'éléments input égal à la valeur saisie par l'utilisateur
    for (let i = 0; i < inputValidate.value; i++) {
      const input = document.createElement("input");
      input.type = "number";
      input.id = "input-tableau"; // Assignation d'un ID pour l'élément input
      tableau.appendChild(input); // Ajoute l'élément input au div "tableau"
    }

    // Crée un élément <br> (saut de ligne) pour espacer les éléments input et le bouton de résultat
    const br = document.createElement("br");
    tableau.appendChild(br);

    // Crée un bouton "Résultat" et lui ajoute un événement d'écoute pour calculer le maximum du tableau
    const resultButton = document.createElement("button");
    resultButton.innerText = "Résultat";
    resultButton.addEventListener("click", () => {
      const inputs = document.querySelectorAll("#input-tableau"); // Sélectionne tous les éléments input créés précédemment

      let allValid = true; // Variable pour suivre si toutes les entrées sont valides ou non

      // Vérifie la validité de chaque élément input
      inputs.forEach((input) => {
        if (input.value === "" || isNaN(input.value)) {
          allValid = false; // Marque la variable comme fausse si une entrée n'est pas valide
          input.style.background = "red";
        } else {
          input.style.background = "white";
        }
      });

      // Si au moins une des entrées n'est pas valide, affiche un message d'erreur
      if (!allValid) {
        error.innerText = "Veuillez saisir uniquement des nombres";
        error.style.color = "red";
        error.style.padding = "5px";
        error.style.fontWeight = "bold";
      } else {
        error.innerText = "";

        const values = []; // Crée un tableau pour stocker les valeurs numériques saisies par l'utilisateur

        // Récupère les valeurs numériques saisies par l'utilisateur et les stocke dans le tableau "values"
        inputs.forEach((input) => {
          values.push(parseInt(input.value));
        });

        // Trouve la valeur maximale dans le tableau "values"
        const max = Math.max(...values);

        const result = document.querySelector("#result"); // Sélectionne l'élément avec l'ID "result"

        // Si l'élément avec l'ID "result" existe déjà, met à jour son contenu avec le nouveau maximum trouvé
        if (result) {
          result.innerHTML = `Le Maximum du Tableau est : <span> ${max}</span>`;
        } else {
          // Sinon, crée un nouvel élément <p> avec l'ID "result" et affiche le maximum trouvé
          const newResult = document.createElement("p");
          newResult.id = "result";
          newResult.innerHTML = `Le Maximum du Tableau est : <span> ${max}</span>`;
          tableau.appendChild(newResult); // Ajoute le nouvel élément au div "tableau"
        }

        // Met en surbrillance en jaune toutes les entrées ayant la valeur maximale
        inputs.forEach((input) => {
          if (parseInt(input.value) === max) {
            input.style.background = "yellow";
          } else {
            input.style.background = "white";
          }
        });
      }
    });

    // Ajoute le bouton "Résultat" au div "tableau"
    tableau.appendChild(resultButton);
  }
});
