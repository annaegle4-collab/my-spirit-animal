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
    description: "You are curious, clever, and love discovering new things."
  },
  bear: {
    name: "Bear",
    description: "You are brave, strong, and ready for a challenge."
  },
  rabbit: {
    name: "Rabbit",
    description: "You are energetic, quick, and love freedom."
  },
  deer: {
    name: "Deer",
    description: "You are calm, thoughtful, and enjoy nature."
  },
  squirrel: {
    name: "Squirrel",
    description: "You are playful, resourceful, and full of surprises."
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
      result.textContent = "Please answer all five questions.";
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
