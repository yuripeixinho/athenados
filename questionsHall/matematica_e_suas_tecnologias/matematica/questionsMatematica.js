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
    question: '(ENEM - 2020) Um grupo sanguíneo, ou tipo sanguíneo, baseia-se na presença ou ausência de dois antígenos, A e B, na superfície das células vermelhas do sangue. Como dois antígenos estão envolvidos, os quatro tipos sanguíneos distintos são: \n\n- Tipo A: apenas o antígeno A está presente; \n\n - Tipo B: apenas o antígeno B está presente; \n\n - Tipo AB: ambos os antígenos estão presentes; \n\n - Tipo O: nenhum dos antígenos está presente. \n\nForam coletadas amostras de sangue de 200 pessoas e, após análise laboratorial, foi identificado que em 100 amostras está presente o antígeno A, em 110 amostras há presença do antígeno B e em 20 amostras nenhum dos antígenos está presente. \n\n\n Dessas pessoas que foram submetidas à coleta de sangue, o número das que possuem o tipo sanguíneo A é igual a',

    resolution: 'Sabendo que o total de pessoas é 200, vem a equação: \n\n 20+100−x+x+110−x=200 \n\n 230−x=200  \n\n  x=30 \n\n  é composto por 100−x=100−30=70',
    answers: [
      { text: '30', correct: true },
      { text: '60', correct: false },
      { text: '70', correct: false },
      { text: '90', correct: false },
      { text: '100', correct: false },
    ]
  },


  {
    question: '(ENEM - 2020) Uma das Sete Maravilhas do Mundo Moderno é o Templo de Kukulkán, localizado na cidade de Chichén Itzá, no México. Geometricamente, esse templo pode ser representado por um tronco reto de pirâmide de base quadrada. \n\n\n As quantidades de cada tipo de figura plana que formam esse tronco de pirâmide são',

    resolution: 'Como é dito que a pirâmide é de base quadrada, então ela deve ser representada por 2 quadrados e 4 trapézios isósceles dando Letra C.',
    answers: [
      { text: '2 quadrados e 4 retângulos.', correct: false },
      { text: '1 retângulo e 4 triângulos isósceles.', correct: false },
      { text: '2 quadrados e 4 trapézios isósceles.', correct: true },
      { text: '1 quadrado, 3 retângulos  e 2 trapézios isósceles.', correct: false },
      { text: '2 retângulos, 2 quadrados e 2 trapézios retângulos.', correct: false },
    ]
  },
  


  {
    question: '(ENEM - 2020) Amigo secreto é uma brincadeira tradicional nas festas de fim de ano. Um grupo de amigos se reúne e cada um deles sorteia o nome da pessoa que irá presentear. No dia da troca de presentes, uma primeira pessoa presenteia seu amigo secreto. Em seguida, o presenteado revela seu amigo secreto e o presenteia. A brincadeira continua até que todos sejam presenteados, mesmo no caso em que o ciclo se fecha. Dez funcionários de uma empresa, entre eles um casal, participarão de um amigo secreto. A primeira pessoa a revelar será definida por sorteio. \n\n\n Qual é a probabilidade de que a primeira pessoa a revelar o seu amigo secreto e a última presenteada sejam as duas pessoas do casal?',

    resolution: 'Primeiramente, nós podemos sortear as duas pessoas do casal, logo, das 10 pessoas possíveis, 2 podem ser sorteadas a fim de que a primeira pessoa a ser sorteada seja do casal. Logo, esta probabilidade é de ou a primeira pessoa do casal ser escolhida ou a segunda pessoa do casal ser escolhida: \n\n
    1/10 + 1/10 = 2/10 = 1/5. \n\n Depois, deseja-se que a última pessoa a ser entregue o presente seja também uma pessoa do casal. Como a última pessoa a entregar o presente não pode ser escolhida como pessoa presenteada, então temos um total de 9 pessoas possíveis a serem presentadas. \n\n  Como também esta será a última pessoa a ser presenteada, então a outra pessoa do casal já foi presenteada, nos restando somente uma pessoa desse casal que ainda deve ser presenteada. Logo, isto nos dá a probabilidade de: \n\n  1 pessoa do casal a ser presenteada / 9 pessoas possíveis para se receber o presente = 1/9.',
    answers: [
      { text: '1/5', correct: false },
      { text: '1/45', correct: true },
      { text: '1/50', correct: false },
      { text: '1/90', correct: false },
      { text: '1/100', correct: false },
    ]
  },






























  
]
