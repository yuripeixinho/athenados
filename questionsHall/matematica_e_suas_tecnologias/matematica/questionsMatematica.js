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
    question: '(ENEM - 2020) Um hotel de 3 andares est?? sendo constru??do. Cada andar ter?? 100 quartos. Os quartos ser??o numerados de 100 a 399 e cada um ter?? seu n??mero afixado ?? prota. Cada n??mero ser?? composto de pe??as individuais, cada uma simbolizando um ??nico algarismo. \n\n\n Qual a quantidade m??nima de pe??as, simbolizando o algarismo 2, necess??rias para identificar o n??mero de todos os quartos?',

    resolution: 'Para descobrirmos quantos algarismos de n??mero dois, vem: \n 100???109???1 \n 110???119???1 \n 120???129???11 \n\n\n 190???199 ???1 \n De 100 ?? 199 t??m 20 algarismos 2 \n O caso dos n??meros de 200???299 ter?? uma peculiaridade, pois haver?? 100 algarimos iguais a 2 a mais por conta por conta da casa das centenas, portanto, ficamos com 100+20 \n E de 300???399 a situa????o ser?? igual ?? primeira, contendo 20 algarismos. \n O que totaliza: \n 20+120+20=160 algarismos.',
    answers: [
      { text: '160', correct: true },
      { text: '157', correct: false },
      { text: '130', correct: false },
      { text: '120', correct: false },
      { text: '60', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) Um p?? de eucalipto em idade adequada para o corte rende, em m??dia, 20 mil folhas de papel A4. A densidade superficial do papel A4, medida pela raz??o da massa de uma folha desse papel por sua ??rea, ?? de 75 gramas por metro quadrado, e a ??rea de uma folha de A4 ?? 0,062 metro quadrado. \n\n\n Nessas condia????es, quantos quilogramas de papel rende, em m??dia, um p?? de eucalipto?',

    resolution: '1) Um p?? de eucalipto rende 20 mil folhas de papel A4. \n 2) A densidade de um papel ?? 75 g/m??. \n 3) Como um papel possui 0,062 m??, logo um papel possui 75 * 0.062 = 4.65 g.     ',
    answers: [
      { text: '4301', correct: false },
      { text: '1500', correct: true },
      { text: '930', correct: false },
      { text: '267', correct: false },
      { text: '93', correct: false },
    ]
  },
  

  {
    question: '(ENEM - 2020) Um grupo sangu??neo, ou tipo sangu??neo, baseia-se na presen??a ou aus??ncia de dois ant??genos, A e B, na superf??cie das c??lulas vermelhas do sangue. Como dois ant??genos est??o envolvidos, os quatro tipos sangu??neos distintos s??o: \n\n- Tipo A: apenas o ant??geno A est?? presente; \n\n - Tipo B: apenas o ant??geno B est?? presente; \n\n - Tipo AB: ambos os ant??genos est??o presentes; \n\n - Tipo O: nenhum dos ant??genos est?? presente. \n\nForam coletadas amostras de sangue de 200 pessoas e, ap??s an??lise laboratorial, foi identificado que em 100 amostras est?? presente o ant??geno A, em 110 amostras h?? presen??a do ant??geno B e em 20 amostras nenhum dos ant??genos est?? presente. \n\n\n Dessas pessoas que foram submetidas ?? coleta de sangue, o n??mero das que possuem o tipo sangu??neo A ?? igual a',

    resolution: 'Sabendo que o total de pessoas ?? 200, vem a equa????o: \n\n 20+100???x+x+110???x=200 \n\n 230???x=200  \n\n  x=30 \n\n  ?? composto por 100???x=100???30=70',
    answers: [
      { text: '30', correct: true },
      { text: '60', correct: false },
      { text: '70', correct: false },
      { text: '90', correct: false },
      { text: '100', correct: false },
    ]
  },


  {
    question: '(ENEM - 2020) Uma das Sete Maravilhas do Mundo Moderno ?? o Templo de Kukulk??n, localizado na cidade de Chich??n Itz??, no M??xico. Geometricamente, esse templo pode ser representado por um tronco reto de pir??mide de base quadrada. \n\n\n As quantidades de cada tipo de figura plana que formam esse tronco de pir??mide s??o',

    resolution: 'Como ?? dito que a pir??mide ?? de base quadrada, ent??o ela deve ser representada por 2 quadrados e 4 trap??zios is??sceles dando Letra C.',
    answers: [
      { text: '2 quadrados e 4 ret??ngulos.', correct: false },
      { text: '1 ret??ngulo e 4 tri??ngulos is??sceles.', correct: false },
      { text: '2 quadrados e 4 trap??zios is??sceles.', correct: true },
      { text: '1 quadrado, 3 ret??ngulos  e 2 trap??zios is??sceles.', correct: false },
      { text: '2 ret??ngulos, 2 quadrados e 2 trap??zios ret??ngulos.', correct: false },
    ]
  },
  


  {
    question: '(ENEM - 2020) Um motociclista planeja realizar uma viagem cujo destino fica a 500km de sua casa. Sua moto consome 5 litros de gasolina para cada 100km rodados, e o tanque da moto tem capacidade para 22 litros. Pelo mapa, observou que no trajeto da viagem o ??ltimo posto dispon??vel para reabastecimento, chamado Estrela, fica a 80 km do seu destino. Ele pretende partir com o tanque da moto cheio e planeja fazer somente duas paradas para reabastecimento, uma na ida e outra na volta, ambas no posto Estrela. No reabastecimento para a viagem de ida deve considerar tamb??m combust??vel suficiente para se deslocar por 200 km no seu destino. \n\n\n A quantidade m??nima de combust??vel, em litro, que esse motociclista deve reabastecer no posto Estrela na viagem de ida, que seja suficiente para fazer o segundo reabastecimento, ??',

    resolution: 'Viagem 500km. \n\n A cada 5 litros de gasolina ?? poss??vel deslocar 100km, logo, a moto faz 20km/L. \n\n Capacidade do tanque = 22Litros, podendo rodar 440km. \n\n ??ltimo posto = 80km do destino. \n\n Considerar necessidade de rodar 200km em seu destino, ou seja, deve colocar 10 litros de gasolina para tal. \n\n  Ele chegar?? no posto Estrela com, apenas, 1L de gasolina na viagem de ida, j?? que s??o 420km, at?? o pontos (500km- 80km), e o tanque suporta em litros o equivalente a 440km, e cada litro permite a motocicleta rodar 20km. \n\n Assim, ele precisar?? de 4Litros para chegar na cidade, mais, 10Litros para rodar os 200km na cidade e 4 Litros para retornar ao posto, contudo, j?? possuir?? 1Litro em seu tanque na hora de abastecer na ida. Assim, temos que, 4L+10L+4L-1L=17L \n\n  Dessa forma, chegamos ao gabarito, alternativa C, j?? que o enunciado pede a quantidade m??nima de combust??vel, em litros, que deve ser abastecida no posto Estrela.',
    answers: [
      { text: '13', correct: false },
      { text: '14', correct: false },
      { text: '17', correct: true },
      { text: '18', correct: false },
      { text: '21', correct: false },
    ]
  },  

  {
    question: '(ENEM - 2019) Uma pessoa que perdeu um objeto pessoal quando visitou uma cidade pretende divulgar nos meios de comunica????o informa????es a respeito da perda desse objeto e de seu contato para eventual devolu????o. No entanto, ela lembra que, de acordo com o Art. 1 234 do C??digo Civil, poder?? ter que pagar pelas despesas do transporte desse objeto at?? sua cidade e poder?? ter que recompensar a pessoa que lhe restituir o objeto em, pelo menos, 5 % do valor do objeto. \n\n Ela sabe que o custo com transporte ser?? de um quinto do valor atual do objeto e, como ela tem muito interesse em reav??-lo, pretende ofertar o maior percentual poss??vel de recompensa, desde que o gasto total n??o ultrapasse o valor atual do objeto. Nessas condi????es, o percentual sobre o valor do objeto, dado como recompensa, que ela dever?? ofertar ?? igual a',

    resolution: 'O custo do transporte s?? de 1/5 do valor total do objeto. Logo: \n\n 1/5 = 0,2 = 20% \n\n Se o custo com transporte corresponde a 20% do valor do objeto, para que o valor da recompensa n??o ultrapasse o valor do objeto, ela dever?? ofertar, no m??ximo: \n\n 100% - 20% = 80%',
    
    answers: [
      { text: '20%', correct: false },
      { text: '25%', correct: false },
      { text: '40%', correct: false },
      { text: '60%', correct: false },
      { text: '80%', correct: true },
    ]
  },

  {
    question: '(ENEM - 2019) Em um jogo on-line, cada jogador procura subir de n??vel e aumentar sua experi??ncia, que s??o dois par??metros importantes no jogo, dos quais dependem as for??as de defesa e ataque do participante. A for??a de defesa de cada jogador ?? diretamente proporcional ao seu n??vel e ao quadrado de sua experi??ncia, enquanto sua for??a de ataque ?? diretamente proporcional ?? sua experi??ncia e ao quadrado do seu n??vel. Nenhum jogador sabe o n??vel ou experi??ncia dos demais. Os jogadores iniciam o jogo no n??vel 1 com experi??ncia 1 e possuem for??a de ataque 2 e de defesa 1. Nesse jogo, cada participante se movimenta em uma cidade em busca de tesouros para aumentar sua experi??ncia. Quando dois deles se encontram, um deles pode desafiar o outro para um confronto, sendo o desafiante considerado o atacante. Compara-se ent??o a for??a de ataque do desafiante com a for??a de defesa do desafiado e vence o confronto aquele cuja for??a for maior. O vencedor do desafio aumenta seu n??vel em uma unidade. Caso haja empate no confronto, ambos os jogadores aumentam seus n??veis em uma unidade. Durante o jogo, o jogador J1, de n??vel 4 e experi??ncia 5, ir?? atacar o jogador J2, de n??vel 2 e experi??ncia 6. O jogador J1 venceu esse confronto porque a diferen??a entre sua for??a de ataque e a for??a de defesa de seu oponente era',

    resolution: 'Explica????o dessa quest??o ainda est?? em constru????o...',
    
    answers: [
      { text: '112', correct: false },
      { text: '88', correct: true },
      { text: '60', correct: false },
      { text: '28', correct: false },
      { text: '24', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) Segundo o Instituto Brasileiro de Geografia e Estat??stica (IBGE), o rendimento m??dio mensal dos trabalhadores brasileiros, no ano 2000, era de R$ 1 250,00. J?? o Censo 2010 mostrou que, em 2010, esse valor teve um aumento de  7,2% em rela????o a 2000. Esse mesmo instituto projeta que, em 2020, o rendimento m??dio mensal dos trabalhadores brasileiros poder?? ser 10% maior do que foi em 2010. \n\n\n Supondo que as proje????es do IBGE se realizem, o rendimento m??dio mensal dos brasileiros ser?? de',

    resolution: '1) Em 2000,  o rendimento m??dio era R$1250,00 \n\n 2) Em 2010, houve um aumento de 7,2%, logo o rendimento m??dio era R$1250 * 1,072 = R$1340 \n\n 3) Em 2020, o rendimento poder?? ser 10% maior do que ocorreu em 2010. Logo, segundo as proje????es ser?? R$1340*1,1 = R$1474',
    
    answers: [
      { text: 'R$1.340,00', correct: false },
      { text: 'R$1.349,00.', correct: false },
      { text: 'R$1.375,00.', correct: false },
      { text: 'R$1.465,00. ', correct: false },
      { text: 'R$1.474,00. ', correct: true },
    ]
  },

  {
    question: '(ENEM - 2019) Durante suas f??rias, oito amigos, dos quais dois s??o canhotos, decidem realizar um torneio de v??lei de praia. Eles precisam formar quatro duplas para a realiza????o do torneio. Nenhuma dupla pode ser formada por dois jogadores canhotos. De quantas maneiras diferentes podem ser formadas essas quatro duplas?',

    resolution: '1) Como nenhuma dupla pode ser formada por dois jogadores canhotos, vamos pensar em rela????o a escolha deles  primeiramente para que fique mais f??cil o pensamento. \n\n 2) O primeiro jogador canhoto pode escolher entre os outros 6 amigos destros um para ser sua dupla, o que gera 6 possibilidades. \n\n 3) Ap??s essa escolha, restar??o 5 amigos para que esteja junto com o outro jogador canhoto (5 possibilidades) \n\n 4) Com isso, restar??o 4 amigo sem formarem times. Um deles possui 3 op????es de escolha. \n\n 5) Ap??s isso, restar??o 2 amigos sem dupla, o que significa apenas uma possibilidade \n\n 6) Logo, via princ??pio fundamental da contagem, haver??o 6.5.3.1 = 90 possibilidades',
    
    answers: [
      { text: '69', correct: false },
      { text: '70', correct: false },
      { text: '90', correct: true },
      { text: '104', correct: false },
      { text: '105', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) O preparador f??sico de um time de basquete disp??e de um plantel de 20 jogadores, com m??dia de altura igual a  1,80 m. No ??ltimo treino antes da estreia em um campeonato, um dos jogadores desfalcou o time em raz??o de uma s??ria contus??o, for??ando o t??cnico a contratar outro jogador para recompor o grupo. \n\n\n Se o novo jogador ??  0,20 m mais baixo que o anterior, qual ?? a m??dia de altura, em metro, do novo grupo?',

    resolution: '1) A soma das alturas do jogadores do time de basquete original ?? 20 x 1,8 = 36m. \n\n 2) Como o novo jogador ??  0,20 m mais baixo que o anterior, a soma das alturas do jogadores ser?? \n\n 3) Com isso, a nova m??dia ser?? 35,8/20 = 1,79m',
    answers: [
      { text: '1,60', correct: false },
      { text: '1,78', correct: false },
      { text: '1,79', correct: true },
      { text: '1,81', correct: false },
      { text: '1,82', correct: false },
    ]
  },



























































  
]
