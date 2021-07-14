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
    question: '(ENEM - 2020) \n\n Finally, Aisha finished with her customer and asked what colour Ifemelu wanted for her hair attachments. \n  "Colour four. \n "Not good colour," Aisha said promptly. \n "That's what I use."    ',

    resolution: 'Como não há narração de uma história, o texto não pode ser um conto, bem como não aparece predominância da 1ª pessoa, característica importante de depoimentos e relatos. O texto apresenta características que são observadas nas notícias, como objetividade na linguagem, relato dos fatos ocorridos de maneira direta e descritiva, sem a presença de uma opinião, apenas relatando o fato, diferentemente da reportagem, onde o relato é mais extenso e aprofundado e menos objetivo, mais subjetivo, fazendo com que a letra [E] se apresente como a correta, pois o texto descreve e divulga um caso de síndrome do coração partido de forma clara.',
    answers: [
      { text: 'conto, pois exibe a história de vida de Joanie Simpson.', correct: false },
      { text: 'depoimento, pois expõe o sofrimento da dona do animal.', correct: false },
      { text: 'reportagem, pois discute cientificamente a cardiomiopatia.', correct: false },
      { text: 'relato, pois narra um fato estressante vivido pela paciente.', correct: false },
      { text: 'notícia, pois divulga fatos sobre a síndrome do coração partido.', correct: true },
    ]
  },

 



  



































  
]
