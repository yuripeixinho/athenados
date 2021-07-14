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
  document.getElementById('resolution').style.visibility = 'hidden';
  
}

function resolutionStatusOn() {
  document.getElementById('resolution').style.visibility = 'visible';
}










const questions = [
  {
    question: '(ENEM - 2019) Para que a passagem da produção ininterrupta de novidade a seu consumo seja feita continuamente, há necessidade de mecanismos, de engrenagens. \n Uma espécie de grande máquina industrial, incitante, tentacular, entra em ação. Mas bem depressa a simples lei da oferta e da procura segundo as necessidades não vale mais: é preciso excitar a demanda, excitar o acontecimento, provocá-lo, espicaçá-lo, fabricá-lo, pois a modernidade se alimenta disso. \n\n\n No contexto da arte contemporânea, o texto da autora Anne Cauquelin reflete ações que explicitam:',

    resolution: 'A autora do texto busca explicitar as motivações do mercado da arte em busca de novas necessidades.',
    answers: [
      { text: 'métodos utilizados pelo mercado de arte.', correct: true },
      { text: 'investimentos realizados por mecenas.', correct: false },
      { text: 'interesses do consumidor de arte.', correct: false },
      { text: 'práticas cotidianas do artista.', correct: false },
      { text: 'fomentos públicos à cultura.', correct: false },
    ]
  },




  {
    question: '(ENEM - 2015) Na exposição “A Artista Está Presente”, no MoMa, em Nova Iorque, a performer Marina Abramovic fez uma retrospectiva de sua carreira. No meio desta, protagonizou uma performance marcante. Em 2010, de 14 de março a 31 de maio, seis dias por semana, num total de 736 horas, ela repetia a mesma postura. Sentada numa sala, recebia os visitantes, um a um, e trocava com cada um deles um longo olhar sem palavras. Ao redor, o público assistia a essas cenas recorrentes. \n\n\n O texto apresenta uma obra da artista Marina Abramovic, cuja performance se alinha a tendências contemporâneas e se caracteriza pela:    ',

    resolution: 'Nessa performance, Marina busca uma conexão com as pessoas através do olhar. É necessário que haja a colaboração do público e a disposição para a troca, que ocorre no âmbito dos sentidos e das emoções.',
    answers: [
      { text: ' inovação de uma proposta de arte relacional que adentra um museu.', correct: false },
      { text: 'abordagem educacional estabelecida na relação da artista com o público.', correct: false },
      { text: 'redistribuição do espaço do museu, que integra diversas linguagens artísticas.', correct: false },
      { text: 'Negociação colaborativa de sentidos entre a artista e a pessoa com quem interage', correct: true },
      { text: 'aproximação entre artista e público, o que rompe com a elitização dessa forma de arte.', correct: false },
    ]
  },
  



































  
]
