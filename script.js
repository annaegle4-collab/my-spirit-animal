const form = document.querySelector("form");
const result = document.querySelector("#result");

// Piemēra sadalījums: atbildes vērtība → dzīvnieks
const animalByValue = {
  a: "fox",
  b: "bear",
  c: "rabbit",
  d: "deer",
  e: "squirrel"
};

// Katra dzīvnieka nosaukums un apraksts
const animals = {
  fox: {
    name: "Fox",
    description: "You came for a walk, but now you're investigating mysterious footprints."
  },
  bear: {
    name: "Bear",
    description: "You carry the snacks and confidently lead everyone in the wrong direction."
  },
  rabbit: {
    name: "Rabbit",
    description: "A relaxing forest walk? You've already turned it into a race."
  },
  deer: {
    name: "Deer",
    description: "You find the quietest spot in the forest and hope nobody follows."
  },
  squirrel: {
    name: "Squirrel",
    description: "You find the quietest spot in the forest and hope nobody follows."
  }
};

// Vienāda punktu skaita gadījumā priekšroka pirmajam šajā sarakstā.
// Pielāgo šo secību savam Block 1 noteikumam.
const tiePriority = ["fox", "bear", "rabbit", "deer", "squirrel"];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Submitted!");

  const questions = ["q1", "q2", "q3", "q4", "q5"];

  // Punkti sākas no nulles katrā iesniegšanas reizē.
  const scores = {
    fox: 0,
    bear: 0,
    rabbit: 0,
    deer: 0,
    squirrel: 0
  };

  for (const question of questions) {
    const answer = form.querySelector(
      `input[name="${question}"]:checked`
    );

    if (!answer) {
  result.textContent =
    "Oops! One of your answers is missing. Answer all five questions to meet your forest animal!";
  return;
}

    const animal = animalByValue[answer.value];
    scores[animal] += 1;
  }

  console.log(scores);

  let winner = tiePriority[0];

  for (const animal of tiePriority) {
    if (scores[animal] > scores[winner]) {
      winner = animal;
    }
  }

  result.textContent =
    `You're a ${animals[winner].name}: ${animals[winner].description}`;
});
const playAgain = document.querySelector("#play-again");

playAgain.addEventListener("click", function () {
  form.reset();
  result.textContent = "";
});
