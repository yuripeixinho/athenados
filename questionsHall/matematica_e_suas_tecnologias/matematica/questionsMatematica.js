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
    question: '(ENEM - 2020) Um motociclista planeja realizar uma viagem cujo destino fica a 500km de sua casa. Sua moto consome 5 litros de gasolina para cada 100km rodados, e o tanque da moto tem capacidade para 22 litros. Pelo mapa, observou que no trajeto da viagem o último posto disponível para reabastecimento, chamado Estrela, fica a 80 km do seu destino. Ele pretende partir com o tanque da moto cheio e planeja fazer somente duas paradas para reabastecimento, uma na ida e outra na volta, ambas no posto Estrela. No reabastecimento para a viagem de ida deve considerar também combustível suficiente para se deslocar por 200 km no seu destino. \n\n\n A quantidade mínima de combustível, em litro, que esse motociclista deve reabastecer no posto Estrela na viagem de ida, que seja suficiente para fazer o segundo reabastecimento, é',

    resolution: 'Viagem 500km. \n\n A cada 5 litros de gasolina é possível deslocar 100km, logo, a moto faz 20km/L. \n\n Capacidade do tanque = 22Litros, podendo rodar 440km. \n\n Último posto = 80km do destino. \n\n Considerar necessidade de rodar 200km em seu destino, ou seja, deve colocar 10 litros de gasolina para tal. \n\n  Ele chegará no posto Estrela com, apenas, 1L de gasolina na viagem de ida, já que são 420km, até o pontos (500km- 80km), e o tanque suporta em litros o equivalente a 440km, e cada litro permite a motocicleta rodar 20km. \n\n Assim, ele precisará de 4Litros para chegar na cidade, mais, 10Litros para rodar os 200km na cidade e 4 Litros para retornar ao posto, contudo, já possuirá 1Litro em seu tanque na hora de abastecer na ida. Assim, temos que, 4L+10L+4L-1L=17L \n\n  Dessa forma, chegamos ao gabarito, alternativa C, já que o enunciado pede a quantidade mínima de combustível, em litros, que deve ser abastecida no posto Estrela.',
    answers: [
      { text: '13', correct: false },
      { text: '14', correct: false },
      { text: '17', correct: true },
      { text: '18', correct: false },
      { text: '21', correct: false },
    ]
  },  

  {
    question: '(ENEM - 2019) Uma pessoa que perdeu um objeto pessoal quando visitou uma cidade pretende divulgar nos meios de comunicação informações a respeito da perda desse objeto e de seu contato para eventual devolução. No entanto, ela lembra que, de acordo com o Art. 1 234 do Código Civil, poderá ter que pagar pelas despesas do transporte desse objeto até sua cidade e poderá ter que recompensar a pessoa que lhe restituir o objeto em, pelo menos, 5 % do valor do objeto. \n\n Ela sabe que o custo com transporte será de um quinto do valor atual do objeto e, como ela tem muito interesse em reavê-lo, pretende ofertar o maior percentual possível de recompensa, desde que o gasto total não ultrapasse o valor atual do objeto. Nessas condições, o percentual sobre o valor do objeto, dado como recompensa, que ela deverá ofertar é igual a',

    resolution: 'O custo do transporte sé de 1/5 do valor total do objeto. Logo: \n\n 1/5 = 0,2 = 20% \n\n Se o custo com transporte corresponde a 20% do valor do objeto, para que o valor da recompensa não ultrapasse o valor do objeto, ela deverá ofertar, no máximo: \n\n 100% - 20% = 80%',
    
    answers: [
      { text: '20%', correct: false },
      { text: '25%', correct: false },
      { text: '40%', correct: false },
      { text: '60%', correct: false },
      { text: '80%', correct: true },
    ]
  },

  {
    question: '(ENEM - 2019) Em um jogo on-line, cada jogador procura subir de nível e aumentar sua experiência, que são dois parâmetros importantes no jogo, dos quais dependem as forças de defesa e ataque do participante. A força de defesa de cada jogador é diretamente proporcional ao seu nível e ao quadrado de sua experiência, enquanto sua força de ataque é diretamente proporcional à sua experiência e ao quadrado do seu nível. Nenhum jogador sabe o nível ou experiência dos demais. Os jogadores iniciam o jogo no nível 1 com experiência 1 e possuem força de ataque 2 e de defesa 1. Nesse jogo, cada participante se movimenta em uma cidade em busca de tesouros para aumentar sua experiência. Quando dois deles se encontram, um deles pode desafiar o outro para um confronto, sendo o desafiante considerado o atacante. Compara-se então a força de ataque do desafiante com a força de defesa do desafiado e vence o confronto aquele cuja força for maior. O vencedor do desafio aumenta seu nível em uma unidade. Caso haja empate no confronto, ambos os jogadores aumentam seus níveis em uma unidade. Durante o jogo, o jogador J1, de nível 4 e experiência 5, irá atacar o jogador J2, de nível 2 e experiência 6. O jogador J1 venceu esse confronto porque a diferença entre sua força de ataque e a força de defesa de seu oponente era',

    resolution: 'Explicação dessa questão ainda está em construção...',
    
    answers: [
      { text: '112', correct: false },
      { text: '88', correct: true },
      { text: '60', correct: false },
      { text: '28', correct: false },
      { text: '24', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) Segundo o Instituto Brasileiro de Geografia e Estatística (IBGE), o rendimento médio mensal dos trabalhadores brasileiros, no ano 2000, era de R$ 1 250,00. Já o Censo 2010 mostrou que, em 2010, esse valor teve um aumento de  7,2% em relação a 2000. Esse mesmo instituto projeta que, em 2020, o rendimento médio mensal dos trabalhadores brasileiros poderá ser 10% maior do que foi em 2010. \n\n\n Supondo que as projeções do IBGE se realizem, o rendimento médio mensal dos brasileiros será de',

    resolution: '1) Em 2000,  o rendimento médio era R$1250,00 \n\n 2) Em 2010, houve um aumento de 7,2%, logo o rendimento médio era R$1250 * 1,072 = R$1340 \n\n 3) Em 2020, o rendimento poderá ser 10% maior do que ocorreu em 2010. Logo, segundo as projeções será R$1340*1,1 = R$1474',
    
    answers: [
      { text: 'R$1.340,00', correct: false },
      { text: 'R$1.349,00.', correct: false },
      { text: 'R$1.375,00.', correct: false },
      { text: 'R$1.465,00. ', correct: false },
      { text: 'R$1.474,00. ', correct: true },
    ]
  },

  {
    question: '(ENEM - 2019) Durante suas férias, oito amigos, dos quais dois são canhotos, decidem realizar um torneio de vôlei de praia. Eles precisam formar quatro duplas para a realização do torneio. Nenhuma dupla pode ser formada por dois jogadores canhotos. De quantas maneiras diferentes podem ser formadas essas quatro duplas?',

    resolution: '1) Como nenhuma dupla pode ser formada por dois jogadores canhotos, vamos pensar em relação a escolha deles  primeiramente para que fique mais fácil o pensamento. \n\n 2) O primeiro jogador canhoto pode escolher entre os outros 6 amigos destros um para ser sua dupla, o que gera 6 possibilidades. \n\n 3) Após essa escolha, restarão 5 amigos para que esteja junto com o outro jogador canhoto (5 possibilidades) \n\n 4) Com isso, restarão 4 amigo sem formarem times. Um deles possui 3 opções de escolha. \n\n 5) Após isso, restarão 2 amigos sem dupla, o que significa apenas uma possibilidade \n\n 6) Logo, via princípio fundamental da contagem, haverão 6.5.3.1 = 90 possibilidades',
    
    answers: [
      { text: '69', correct: false },
      { text: '70', correct: false },
      { text: '90', correct: true },
      { text: '104', correct: false },
      { text: '105', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) O preparador físico de um time de basquete dispõe de um plantel de 20 jogadores, com média de altura igual a  1,80 m. No último treino antes da estreia em um campeonato, um dos jogadores desfalcou o time em razão de uma séria contusão, forçando o técnico a contratar outro jogador para recompor o grupo. \n\n\n Se o novo jogador é  0,20 m mais baixo que o anterior, qual é a média de altura, em metro, do novo grupo?',

    resolution: '1) A soma das alturas do jogadores do time de basquete original é 20 x 1,8 = 36m. \n\n 2) Como o novo jogador é  0,20 m mais baixo que o anterior, a soma das alturas do jogadores será \n\n 3) Com isso, a nova média será 35,8/20 = 1,79m',
    answers: [
      { text: '1,60', correct: false },
      { text: '1,78', correct: false },
      { text: '1,79', correct: true },
      { text: '1,81', correct: false },
      { text: '1,82', correct: false },
    ]
  },



























































  
]
