//Dados iniciais
let currentQuestion = 0;
let correctAnswers = 0;

showQuestion();

//Evento Reset
document
  .querySelector(".scoreArea button")
  .addEventListener("click", resetEvent);

//Funções
function showQuestion() {
  if (questions[currentQuestion]) {
    let q = questions[currentQuestion];
    // Criar variável para a barra de progresso baseado na divisão entre número questão atual e quantidade de questões vezes 100. Use a função Math.floor para arredondar.
    let barraProgresso = Math.floor((currentQuestion / questions.length) * 100);
    // Defina a largura da .progress--bar com o valor obtido
    document.querySelector(".progress--bar").style.width = `${barraProgresso}`;
    // Esconda a .scoreArea
    document.querySelector(".scoreArea").style.display = "none";
    // Exiba a .questionArea
    document.querySelector(".questionArea").style.display = "block";
    // Insira em .question o valor da questão
    document.querySelector(".question").innerHTML = q.question;
    // Defina .options como ""
    document.querySelector(".options").innerHTML = "";
    // Crie uma let optionsHtml para o texto das opções
    let optionsHtml = "";
    // Faça um laço em q.options e defina o valor da optionHtml com `<div data-op="${i}" class="option"><span>${parseInt(i) + 1}</span>${q.options[i]}</div>`
    for (let i = 0; i < q.options.length; i++) {
      optionsHtml += `<div data-op="${i}" class="option"><span>${
        parseInt(i) + 1
      }</span>${q.options[i]}</div>`;
    }
    console.log(optionsHtml);

    // Insira optionsHtml em .options
    document.querySelector(".options").innerHTML = optionsHtml;

    document.querySelectorAll(".options .option").forEach((item) => {
      item.addEventListener("click", optionClickEvent);
    });
  } else {
    // Chame a função finishQuiz
    finishQuiz();
  }
}

function optionClickEvent(e) {
  // Verifique qual questão foi clicada recuperando o atributo data-op. Use parseInt para formatar o atributo. Atribua o valor a uma variável.s
  let clickedOption = parseInt(e.target.getAttribute("data-op"));
  // Se a resposta clicada foi a correta, incremente a variável correctAnswers
  if (questions[currentQuestion].answer === clickedOption) {
    correctAnswers++;
  }
  // Incremente a variável currentQuestion
  currentQuestion++;
  // Chame a função showQuestion
  showQuestion();
}

function finishQuiz() {
  // Criar variável de pontos baseado na divisão entre respostas corretas e quantidade de questões. Use a função Math.floor para arredondar.
  let pontos = Math.floor((correctAnswers / questions.length) * 100);
  // Implementar condicionais para inserir mensagem e cor do placar de acordo com a pontuação.
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

  // Usar condicional if e condicionais <, <=, >, >=
  // Inserir a pontuação em .scorePct e o texto em .scoreText2
  //document.querySelector(".scoreText2").innerHTML = pontos;
  // Ocultar a .questionArea e exibir a .scoreArea
  document.querySelector(".scoreArea").style.display = "block";
  document.querySelector(".questionArea").style.display = "none";
  // Deixar a .progress--bar em 100%
  document.querySelector(".progress--bar").style.width = "100%";
}

function resetEvent() {
  // Redefina os valores de correctAnswers e currentQuestion para 0
  currentQuestion = 0;
  correctAnswers = 0;
  // Chame a função showQuestion
  showQuestion();
}
