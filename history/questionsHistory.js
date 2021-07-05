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
    question: '(Enem/2013) É preciso ressaltar que, de todas as capitanias brasileiras, Minas era a mais urbanizada. Não havia ali hegemonia de um ou dois grandes centros. A região era repleta de vilas e arraiais, grandes e pequenos, em cujas ruas muita gente circulava. As regiões da América portuguesa tiveram distintas lógicas de ocupação. Uma explicação para a especificidade da região descrita no texto está identificada na: ',
    resolution: 'exemplo 1',
    answers: [
      { text: 'apropriação cultural diante das influências externas.', correct: false },
      { text: 'produção manufatureira diante do exclusivo comercial.', correct: false },
      { text: 'insubordinação religiosa diante da hierarquia eclesiástica.', correct: false },
      { text: 'fiscalização estatal diante das particularidades econômicas.', correct: true },
      { text: 'autonomia administrativa diante das instituições metropolitanas.', correct: false },
    ]
  },
  {
    question: '(Enem/2016) No aniversário do primeiro decênio da Marcha sobre Roma, em outubro de 1932, Mussolini irá inaugurar sua Via dell Impero; a nova Via Sacra do Fascismo, ornada com estátuas de César, Augusto, Trajano, servirá ao culto do antigo e à glória do Império Romano e de espaço comemorativo do ufanismo italiano. Às sombras do passado recriado ergue-se a nova Roma, que pode vangloriar-se e celebrar seus imperadores e homens fortes; seus grandes poetas e apólogos como Horácio e Virgílio.',
    resolution: 'exemplo 2',
    answers: [
      { text: 'utilizar os vestígios restaurados para justificar o regime político.', correct: true },
      { text: 'afirmar o ideário cristão para reconquistar a grandeza perdida.', correct: false },
      { text: 'difundir os saberes ancestrais para moralizar os costumes sociais.', correct: false },
      { text: 'recompor a organização republicana para fortalecer a administração estatal.', correct: false },
      { text: 'recompor a organização republicana para fortalecer a administração estatal.', correct: false }

    ]
  },
  {
    question: 'What is 4x2?',
    resolution: 'exemplo 3',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true },
      { text: '3', correct: false },
      { text: '12', correct: false },
      { text: '4', correct: false },
    ]
  }
]
