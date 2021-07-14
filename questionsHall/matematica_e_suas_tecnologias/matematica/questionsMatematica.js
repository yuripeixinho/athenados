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
    question: '(ENEM - 2020) Um hotel de 3 andares está sendo construído. Cada andar terá 100 quartos. Os quartos serão numerados de 100 a 399 e cada um terá seu número afixado à prota. Cada número será composto de peças individuais, cada uma simbolizando um único algarismo. \n\n\n Qual a quantidade mínima de peças, simbolizando o algarismo 2, necessárias para identificar o número de todos os quartos?',

    resolution: 'Para descobrirmos quantos algarismos de número dois, vem: \n 100→109→1 \n 110→119→1 \n 120→129→11 \n\n\n 190→199 →1 \n De 100 à 199 têm 20 algarismos 2 \n O caso dos números de 200→299 terá uma peculiaridade, pois haverá 100 algarimos iguais a 2 a mais por conta por conta da casa das centenas, portanto, ficamos com 100+20 \n E de 300→399 a situação será igual à primeira, contendo 20 algarismos. \n O que totaliza: \n 20+120+20=160 algarismos.',
    answers: [
      { text: '160', correct: true },
      { text: '157', correct: false },
      { text: '130', correct: false },
      { text: '120', correct: false },
      { text: '60', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) Um pé de eucalipto em idade adequada para o corte rende, em média, 20 mil folhas de papel A4. A densidade superficial do papel A4, medida pela razão da massa de uma folha desse papel por sua área, é de 75 gramas por metro quadrado, e a área de uma folha de A4 é 0,062 metro quadrado. \n\n\n Nessas condiações, quantos quilogramas de papel rende, em média, um pé de eucalipto?',

    resolution: '1) Um pé de eucalipto rende 20 mil folhas de papel A4. \n 2) A densidade de um papel é 75 g/m². \n 3) Como um papel possui 0,062 m², logo um papel possui 75 * 0.062 = 4.65 g.     ',
    answers: [
      { text: '4301', correct: false },
      { text: '1500', correct: true },
      { text: '930', correct: false },
      { text: '267', correct: false },
      { text: '93', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) Um hotel de 3 andares está sendo construído. Cada andar terá 100 quartos. Os quartos serão numerados de 100 a 399 e cada um terá seu número afixado à prota. Cada número será composto de peças individuais, cada uma simbolizando um único algarismo. \n\n\n Qual a quantidade mínima de peças, simbolizando o algarismo 2, necessárias para identificar o número de todos os quartos?',

    resolution: 'Para descobrirmos quantos algarismos de número dois, vem: \n 100→109→1 \n 110→119→1 \n 120→129→11 \n\n\n 190→199 →1 \n De 100 à 199 têm 20 algarismos 2 \n O caso dos números de 200→299 terá uma peculiaridade, pois haverá 100 algarimos iguais a 2 a mais por conta por conta da casa das centenas, portanto, ficamos com 100+20 \n E de 300→399 a situação será igual à primeira, contendo 20 algarismos. \n O que totaliza: \n 20+120+20=160 algarismos.',
    answers: [
      { text: '160', correct: true },
      { text: '157', correct: false },
      { text: '130', correct: false },
      { text: '120', correct: false },
      { text: '60', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) Um hotel de 3 andares está sendo construído. Cada andar terá 100 quartos. Os quartos serão numerados de 100 a 399 e cada um terá seu número afixado à prota. Cada número será composto de peças individuais, cada uma simbolizando um único algarismo. \n\n\n Qual a quantidade mínima de peças, simbolizando o algarismo 2, necessárias para identificar o número de todos os quartos?',

    resolution: 'Para descobrirmos quantos algarismos de número dois, vem: \n 100→109→1 \n 110→119→1 \n 120→129→11 \n\n\n 190→199 →1 \n De 100 à 199 têm 20 algarismos 2 \n O caso dos números de 200→299 terá uma peculiaridade, pois haverá 100 algarimos iguais a 2 a mais por conta por conta da casa das centenas, portanto, ficamos com 100+20 \n E de 300→399 a situação será igual à primeira, contendo 20 algarismos. \n O que totaliza: \n 20+120+20=160 algarismos.',
    answers: [
      { text: '160', correct: true },
      { text: '157', correct: false },
      { text: '130', correct: false },
      { text: '120', correct: false },
      { text: '60', correct: false },
    ]
  },
  



































  
]
