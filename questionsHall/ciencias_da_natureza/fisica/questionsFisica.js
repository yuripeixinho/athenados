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
    question: '(ENEM - 2020) Será que as coisas lhe pareceriam diferentes, se, de fato, todas elas existissem apenas na sua mente - se tudo o que você julgasse ser o mundo externo real fosse apenas um sonho ou alucinação gigante, de que você jamais fosse despertar? Se assim fosse, então é claro que você nunca poderia despertar, como faz quando sonha, pois significaria que não há mundo "real" no qual despertar. Logo, não seria exatamente igual a um sonho ou alucinação normal. \n\n\n O texto confere visibilidade a uma doutrina filosófica contemporrânea conhecida como',

    resolution: 'O solipsismo designa uma doutrina filosófica que reduz toda a realidade ao sujeito pensante; é um ceticismo radical, uma doutrina segundo a qual só existem efetivamente o eu e suas sensações, sendo os outros entes (seres humanos e objetos), como participante da única mente pensante.',
    answers: [
      { text: 'Personalismo, que vincula a realidade circundante aos domínios do pessoal.', correct: false },
      { text: 'Falsificacionismo, que estabelece ciclos de problemas para refutar uma conjectura.', correct: false },
      { text: 'Falibilismo, que rejeita mecanismos mentais para sustentar uma crença inequívoca.', correct: false },
      { text: 'Idealismo, que nega a existência de objetos independentemente do trabalho cognoscente.', correct: false },
      { text: 'Solipsismo, que reconhece limitações cognitivas para compreender uma experiência compartilhada.', correct: true },
    ]
  },



  



































  
]
