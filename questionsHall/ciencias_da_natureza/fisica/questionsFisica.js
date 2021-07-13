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
    question: '(ENEM - 2020) Em uma usina geradora de energia elétrica, seja através de uma queda-d água ou através de vapor sob pressão, as pás do gerador são postas a girar. O movimento relativo de um imã em relação a um conjunto de bobinas produz um fluxo magnético variável através delas, gerando uma diferença de potencial em seus terminais. Durante o funcionamento de um dos geradores, o operador da usina percebeu que houve um aumento inesperado da diferença de potencial elétrico nos terminais das bobinas. \n\n\n Nessa situação, o aumento do módulo da diferença de potencial obtida nos terminais das bobinas resulta do aumento do(a)',

    resolution: 'A tensão na bobina é dada pela variação do fluxo magnético. A maneira viável de se fazer isso na bobina é aumentando a velocidade de giro das pás do gerador.',
    answers: [
      { text: 'intervalo de tempo em que as bobinas ficam imersas no campo magnético externo, por meio de uma diminuição de velocidade no eixo de rotação do gerador.', correct: false },
      { text: 'fluxo magnético através das bobinas, por meio de um aumento em sua área interna exposta ao campo magnético aplicado.', correct: false },
      { text: 'intensidade do campo magnético no qual as bobinas estão imersas, por meio de aplicação de campos magnéticos mais intensos.', correct: false },
      { text: 'rapidez com que o fluxo magnético varia através das bobinas, por meio de um aumento em sua velocidade angular.', correct: true },
      { text: 'resistência interna do condutor que constitui as bobinas, por meio de um aumento na espessura dos terminais.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) Os manuais de refrigerador apresentam a recomendação de que o equipamento não deve ser instalado próximo a fontes de calor, como fogão e aquecedores, ou em local onde incida diretamente a luz do sol. A instalação em local inadequado prejudica o funcionamento do refrigerador e aumenta o consumo de energia. \n\n\n O não atendimento dessa recomendação resulta em aumento do consumo de energia porque',

    resolution: 'A energia em um refrigerador é gasta no condensador. Esse processo é responsável por transferir calor para o ambiente. Se a temperatura ambiente estiver elevada o condensador gastará mais energia nesse processo.',
    answers: [
      { text: 'o fluxo de calor por condução no condensador sofre considerável redução.', correct: false },
      { text: 'a temperatura da substancia refrigerante no condensador diminui mais rapidamente.', correct: false },
      { text: 'o fluxo de calor promove significativa elevação da temperatura no interior do refrigerador.', correct: false },
      { text: 'a liquefação da substância refrigerante no condensador exige mais trabalho do compressor.', correct: false },
      { text: 'as correntes de convecção nas proximidades do condensador ocorrem com maior dificuldade.', correct: true },
    ]
  },

  {
    question: '(ENEM - 2020) Há muitos mitos em relação a como se proteger de raios, cobrir espelhos e não pegar em facas, garfos e outros objetos metálicos, por exemplo. Mas, de fato, se houver uma tempestade com raios, alguns cuidados são importantes, como evitar ambientes abertos. Um bom abrigo para proteção é o interior de um automóvel, desde que este não seja conversível. \n\n\n Qual o motivo físico da proteção fornecida pelos automóveis, conforme citado no texto?',

    resolution: 'O motivo da proteção é a blindagem eletrostática por causa da carcaça metálica. As cargas se acumulam apenas na parte externa da carcaça, assim o interior é seguro.',
    answers: [
      { text: 'Isolamento elétrico dos pneus.', correct: false },
      { text: 'Efeito de para-raios da antena.', correct: false },
      { text: 'Blindagem pela carcaça metálica.', correct: true },
      { text: 'Escoamento de água pela lataria.', correct: false },
      { text: 'Aterramento pelo fio terra da bateria.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) As panelas de pressão reduzem o tempo de cozimento dos alimentos por elevar a temperatura de ebulição da água. Os usuários conhecedores do utensílio normalmente abaixam a intensidade do fogo em panelas de pressão após essas iniciarem a saída dos vapores. \n\n\n Após abaixar o fogo, reduz-se a chama, pois assim evita-se o(a)',

    resolution: 'Durante a ebulição a temperatura não muda, manter a chama alta apenas faria com que a liberação de vapor se mantivesse mais intensa, mas em nada ajuda a aumentar a velocidade do cozimento. Assim, ao abaixar a chama, economiza-se gás sem prejuízo ao tempo de cozimento e é esse o efeito que se busca com essa prática. ',
    answers: [
      { text: 'aumento da pressão interna e os riscos de explosão.', correct: false },
      { text: 'dilatação da panela e a desconexão com sua tampa.', correct: false },
      { text: 'perda da qualidade nutritiva do alimento.', correct: false },
      { text: 'deformação da borracha de vedação.', correct: false },
      { text: 'consumo de gás desnecessário.', correct: true },
    ]
  },

  {
    question: '(ENEM - 2020) Embora a energia nuclear possa ser utilizada para fins pacíficos, recentes conflitos geopolíticos têm trazido preocupações em várias partes do planeta e estimulado discussões visando o combate ao uso de armas de destruição em massa. Além do potencial destrutivo da bomba atômica, uma grande preocupação associada ao emprego desse artefato bélico é a poeira radioativa deixada após a bomba ser detonada. \n\n\n Qual é o processo envolvido na detonação dessa bomba?',

    resolution: 'A bomba atômica é provocada pela fissão nuclear do Urânio-235, emitindo neutrôns e raios gama. O bombardeamento do núcleo de urânio ocorre com nêutros.',
    answers: [
      { text: 'Fissão nuclear do urânio, provocada por nêutrons.', correct: true },
      { text: 'Fusão nuclear do hidrogênio, provocada por prótons.', correct: false },
      { text: 'Desintegração nuclear do plutônio, provocada por elétrons.', correct: false },
      { text: 'Associação em cadeia de chumbo, provocada por pósitrons.', correct: false },
      { text: 'Decaimento radioativo do carbono, provocado por partículas beta.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) Os fones de ouvido tradicionais transmitem a música diretamente para nossos ouvidos. Já os modelos dotados de tecnologia redutora de ruído - Cancelamento de Ruído (CR) - além de transmitirem música, também reduzem todo ruído inconsistente à nossa volta como o barulho de turbinas de avião e aspiradores de pó. Os fones de ouvido CR não reduzem realmente barulhos irregulares como discursos e choros de bebês. Mesmo assim, a supressão do ronco das turbinas do avião contribui para reduzir a "fadiga de ruído", um cansaço persistente provocado pela exposição a um barulho alto por horas a fio. Esses aparelhos também permitem que nós ouçamos músicas ou assistamos a vídeos no trem ou no avião a um volume muito menor (e mais seguro). \n\n\n A tecnologia redutora de ruído CR utilizada na produção de fones de ouvido baseia-se em qual fenômeno ondulatório?',

    resolution: 'O fenômeno que é responsável por "cancelar" outros sons ou ruídos é a interferência destrutíva. Como o som é um tipo de onde, por interferência, os fones de ouvido suprimem os ruídos.',
    answers: [
      { text: 'Absorção.', correct: false },
      { text: 'Interferência.', correct: true },
      { text: 'Polarização.', correct: false },
      { text: 'Reflexão.', correct: false },
      { text: 'Difração.', correct: false},
    ]
  },

  {
    question: '(ENEM - 2020) Dois engenheiros estão verificando se uma cavidade perfurada no solo está de acordo com o planejamento de uma obra, cuja profundidade requerida é de 30 m. O teste é feito por um dispositivo denominado oscilador de áudio de frequência variável, que permite relacionar a profundidade com os valores da frequência de duas ressonâncias consecutivas, assim como em um tubo sonoro fechado. A menor frequência de ressonância que o aparelho mediu foi 135 Hz. Considere que a velocidade do som dentro da cavidade perfurada é de 360 ms-1. \n\n\n Se a profundidade estiver de acordo com o projeto, qual será o valor da próxima frequência de ressonância que será medida?',

    resolution: 'V=λf é a relação fundamental. \n Para tubos fechados temos fd=(2n−1)V/4L, em que n é o modo de ressonância. \n 135=(2n+1)x360/120 \n (2n+1)=135/3=45 \n n = 23 \n O próximo modo então é o 24º. \n f23 = 47 x 3 = 141 Hz.',
    answers: [
      { text: '137 Hz.', correct: false },
      { text: '138 Hz.', correct: false },
      { text: '141 Hz.', correct: true },
      { text: '144 Hz.', correct: false },
      { text: '159 Hz.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) Em 1962, um jingle (vinheta musical) criado por Heitor Carillo fez tanto sucesso que extrapolou as fronteiras do rádio e chegou à televisão ilustrado por um desenho animado. Nele, uma pessoa respondia ao fantasma que batia em sua porta, personificando o “frio”, que não o deixaria entrar, pois não abriria a porta e compraria lãs e cobertores para aquecer a sua casa. Apesar de memorável, tal comercial televisivo continha incorreções a respeito e conceitos físicos relativos à calorimetria. \n\n\n Para solucionar essas incorreções, deve-se associar à porta e aos cobertores, respectivamente, as funções de',

    resolution: 'Essa é uma questão que envolve o conceito de energia em trânsito: calor. A nossa sensação de frio está relacionada a um fluxo de calor que deixa o nosso corpo para o ambiente, assim como a nossa sensação de calor está relacionada com um fluxo de calor do ambiente para o nosso corpo.',
    answers: [
      { text: 'aquecer a casa e os corpos.', correct: false },
      { text: 'evitar a entrada do frio na casa e nos corpos.', correct: false },
      { text: 'minimizar a perda de calor pela casa e pelos corpos.', correct: true },
      { text: 'diminuir a entrada do frio na casa e aquecer os corpos.', correct: false },
      { text: 'aquecer a casa e reduzir a perda de calor pelos corpos.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) As redes de alta tensão para transmissão de energia elétrica geram campo magnético variável o suficiente para induzir corrente elétrica no arame das cercas. Tanto os animais quanto os funcionários das propriedades rurais ou das concessionárias de energia devem ter muito cuidado ao se aproximarem de uma cerca quando esta estiver próxima a uma rede de alta tensão, pois, se tocarem no arame da cerca, poderão sofrer choque elétrico.\n\n\n Para minimizar este tipo de problema, deve-se',

    resolution: 'A tensão na bobina é dada pela variação do fluxo magnético. A maneira viável de se fazer isso na bobina é aumentando a velocidade de giro das pás do gerador.',
    answers: [
      { text: 'fazer o aterramento dos arames da cerca.', correct: true },
      { text: 'acrescentar fusível de segurança na cerca.', correct: false },
      { text: 'realizar o aterramento da rede de alta tensão.', correct: false },
      { text: 'instalar fusível de segurança na rede de alta tensão.', correct: false },
      { text: 'utilizar fios encapados com isolantes na rede de alta tensão.', correct: true },
    ]
  },

  {
    question: '(ENEM - 2020) Em uma usina geradora de energia elétrica, seja através de uma queda-d água ou através de vapor sob pressão, as pás do gerador são postas a girar. O movimento relativo de um imã em relação a um conjunto de bobinas produz um fluxo magnético variável através delas, gerando uma diferença de potencial em seus terminais. Durante o funcionamento de um dos geradores, o operador da usina percebeu que houve um aumento inesperado da diferença de potencial elétrico nos terminais das bobinas. \n\n\n Nessa situação, o aumento do módulo da diferença de potencial obtida nos terminais das bobinas resulta do aumento do(a)',

    resolution: 'A tensão na bobina é dada pela variação do fluxo magnético. A maneira viável de se fazer isso na bobina é aumentando a velocidade de giro das pás do gerador.',
    answers: [
      { text: 'intervalo de tempo em que as bobinas ficam imersas no campo magnético externo, por meio de uma diminuição de velocidade no eixo de rotação do gerador.', correct: false },
      { text: 'fluxo magnético através das bobinas, por meio de um aumento em sua área interna exposta ao campo magnético aplicado.', correct: false },
      { text: 'intensidade do campo magnético no qual as bobinas estão imersas, por meio de aplicação de campos magnéticos mais intensos.', correct: false },
      { text: 'rapidez com que o fluxo magnético varia através das bobinas, por meio de um aumento em sua velocidade angular.', correct: false },
      { text: 'resistência interna do condutor que constitui as bobinas, por meio de um aumento na espessura dos terminais.', correct: true },
    ]
  },



  



































  
]
