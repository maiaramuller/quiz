let currentQuestion = 0;
let correctAnswers = 0;

showQuestion();

document
  .querySelector(".scoreArea button")
  .addEventListener("click", resetEvent);

function showQuestion() {
  if (questions[currentQuestion]) {
    let q = questions[currentQuestion];

    let barraProgresso = Math.floor((currentQuestion / questions.length) * 100);

    document.querySelector(".progress--bar").style.width = `${barraProgresso}`;

    document.querySelector(".scoreArea").style.display = "none";

    document.querySelector(".questionArea").style.display = "block";

    document.querySelector(".question").innerHTML = q.question;

    document.querySelector(".options").innerHTML = "";

    let optionsHtml = "";

    for (let i = 0; i < q.options.length; i++) {
      optionsHtml += `<div data-op="${i}" class="option"><span>${
        parseInt(i) + 1
      }</span>${q.options[i]}</div>`;
    }
    console.log(optionsHtml);

    document.querySelector(".options").innerHTML = optionsHtml;

    document.querySelectorAll(".options .option").forEach((item) => {
      item.addEventListener("click", optionClickEvent);
    });
  } else {
    finishQuiz();
  }
}

function optionClickEvent(e) {
  let clickedOption = parseInt(e.target.getAttribute("data-op"));

  if (questions[currentQuestion].answer === clickedOption) {
    correctAnswers++;
  }

  currentQuestion++;

  showQuestion();
}

function finishQuiz() {
  let pontos = Math.floor((correctAnswers / questions.length) * 100);

  if (pontos <= 30) {
    document.querySelector(
      ".scoreText1"
    ).innerHTML = `Que pena! Estude mais um pouco e tente novamente.`;

    document.querySelector(".scorePct").innerHTML = `Acertou ${pontos}%.`;
    document.querySelector(
      ".scoreText2"
    ).innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswers} `;
    document.querySelector(".scoreArea").style.backgroundColor = "#FE1105";
  } else if (pontos > 30 && pontos <= 60) {
    document.querySelector(
      ".scoreText1"
    ).innerHTML = `Está bom, mas da para melhorar!`;

    document.querySelector(".scorePct").innerHTML = `Acertou ${pontos}%.`;
    document.querySelector(
      ".scoreText2"
    ).innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswers} `;
    document.querySelector(".scoreArea").style.backgroundColor = "#FEE305";
  } else if (pontos > 60 && pontos <= 90) {
    document.querySelector(".scoreText1").innerHTML = `PARABÉNS!!!`;

    document.querySelector(".scorePct").innerHTML = `Acertou ${pontos}%.`;
    document.querySelector(
      ".scoreText2"
    ).innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswers} `;
    document.querySelector(".scoreArea").style.backgroundColor = "#10FE05";
  } else {
    document.querySelector(
      ".scoreText1"
    ).innerHTML = `EXCELENTE! Você é um gênio.`;

    document.querySelector(".scorePct").innerHTML = `Acertou ${pontos}%.`;
    document.querySelector(
      ".scoreText2"
    ).innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswers} `;
    document.querySelector(".scoreArea").style.backgroundColor = "#054DFE";
  }

  document.querySelector(".scoreArea").style.display = "block";
  document.querySelector(".questionArea").style.display = "none";

  document.querySelector(".progress--bar").style.width = "100%";
}

function resetEvent() {
  currentQuestion = 0;
  correctAnswers = 0;

  showQuestion();
}
