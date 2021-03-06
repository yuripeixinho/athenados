function startReset () {
  var buttonStart = document.getElementById('start-btn')
  buttonStart.style.left = '40%';
  buttonStart.style.top = '85%';
}
























const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question') 
const answerButtonsElement = document.getElementById('answer-buttons')
const resolutionElement = document.getElementById('resolution')

let shuffledQuestions, currentQuestionIndex



startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question

  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')

    button.addEventListener('click', resolutionStatusOn)

    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  }) 
}




function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}


function selectAnswer(e) {
  const selectedButton = e.target

  resolutionElement.innerText = questions[currentQuestionIndex].resolution;

  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Reiniciar'
    startButton.classList.remove('hide')
  }
  startButton.addEventListener('click', resolutionStatusOff)

}


function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')

}

function resolutionStatusOff() {
  document.getElementById('resolution').style.display = 'none';
  
}

function resolutionStatusOn() {
  document.getElementById('resolution').style.display = 'block';
}










const questions = [
  {
    question: '(ENEM - 2019) Para que a passagem da produ????o ininterrupta de novidade a seu consumo seja feita continuamente, h?? necessidade de mecanismos, de engrenagens. \n Uma esp??cie de grande m??quina industrial, incitante, tentacular, entra em a????o. Mas bem depressa a simples lei da oferta e da procura segundo as necessidades n??o vale mais: ?? preciso excitar a demanda, excitar o acontecimento, provoc??-lo, espica????-lo, fabric??-lo, pois a modernidade se alimenta disso. \n\n\n No contexto da arte contempor??nea, o texto da autora Anne Cauquelin reflete a????es que explicitam:',

    resolution: 'A autora do texto busca explicitar as motiva????es do mercado da arte em busca de novas necessidades.',
    answers: [
      { text: 'm??todos utilizados pelo mercado de arte.', correct: true },
      { text: 'investimentos realizados por mecenas.', correct: false },
      { text: 'interesses do consumidor de arte.', correct: false },
      { text: 'pr??ticas cotidianas do artista.', correct: false },
      { text: 'fomentos p??blicos ?? cultura.', correct: false },
    ]
  },




  {
    question: '(ENEM - 2015) Na exposi????o ???A Artista Est?? Presente???, no MoMa, em Nova Iorque, a performer Marina Abramovic fez uma retrospectiva de sua carreira. No meio desta, protagonizou uma performance marcante. Em 2010, de 14 de mar??o a 31 de maio, seis dias por semana, num total de 736 horas, ela repetia a mesma postura. Sentada numa sala, recebia os visitantes, um a um, e trocava com cada um deles um longo olhar sem palavras. Ao redor, o p??blico assistia a essas cenas recorrentes. \n\n\n O texto apresenta uma obra da artista Marina Abramovic, cuja performance se alinha a tend??ncias contempor??neas e se caracteriza pela:    ',

    resolution: 'Nessa performance, Marina busca uma conex??o com as pessoas atrav??s do olhar. ?? necess??rio que haja a colabora????o do p??blico e a disposi????o para a troca, que ocorre no ??mbito dos sentidos e das emo????es.',
    answers: [
      { text: ' inova????o de uma proposta de arte relacional que adentra um museu.', correct: false },
      { text: 'abordagem educacional estabelecida na rela????o da artista com o p??blico.', correct: false },
      { text: 'redistribui????o do espa??o do museu, que integra diversas linguagens art??sticas.', correct: false },
      { text: 'Negocia????o colaborativa de sentidos entre a artista e a pessoa com quem interage', correct: true },
      { text: 'aproxima????o entre artista e p??blico, o que rompe com a elitiza????o dessa forma de arte.', correct: false },
    ]
  },
  



































  
]
