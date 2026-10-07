console.log("The quiz brain is alive");

const form = document.querySelector("form");
const result = document.querySelector("#result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log("Submitted!");

  const answer1 = form.querySelector('input[name="q1"]:checked');
  const answer2 = form.querySelector('input[name="q2"]:checked');
  const answer3 = form.querySelector('input[name="q3"]:checked');
  const answer4 = form.querySelector('input[name="q4"]:checked');
  const answer5 = form.querySelector('input[name="q5"]:checked');

  if (!answer1 || !answer2 || !answer3 || !answer4 || !answer5) {
    result.textContent = "Please answer all five questions.";
    return;
  }

  console.log(
    answer1.value,
    answer2.value,
    answer3.value,
    answer4.value,
    answer5.value
  );

  result.textContent =
    `You picked: ${answer1.value}, ${answer2.value}, ${answer3.value}, ${answer4.value}, ${answer5.value}`;
});