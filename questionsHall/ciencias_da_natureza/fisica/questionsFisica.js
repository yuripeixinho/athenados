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
    question: '(ENEM - 2020) Em uma usina geradora de energia el??trica, seja atrav??s de uma queda-d ??gua ou atrav??s de vapor sob press??o, as p??s do gerador s??o postas a girar. O movimento relativo de um im?? em rela????o a um conjunto de bobinas produz um fluxo magn??tico vari??vel atrav??s delas, gerando uma diferen??a de potencial em seus terminais. Durante o funcionamento de um dos geradores, o operador da usina percebeu que houve um aumento inesperado da diferen??a de potencial el??trico nos terminais das bobinas. \n\n\n Nessa situa????o, o aumento do m??dulo da diferen??a de potencial obtida nos terminais das bobinas resulta do aumento do(a)',

    resolution: 'A tens??o na bobina ?? dada pela varia????o do fluxo magn??tico. A maneira vi??vel de se fazer isso na bobina ?? aumentando a velocidade de giro das p??s do gerador.',
    answers: [
      { text: 'intervalo de tempo em que as bobinas ficam imersas no campo magn??tico externo, por meio de uma diminui????o de velocidade no eixo de rota????o do gerador.', correct: false },
      { text: 'fluxo magn??tico atrav??s das bobinas, por meio de um aumento em sua ??rea interna exposta ao campo magn??tico aplicado.', correct: false },
      { text: 'intensidade do campo magn??tico no qual as bobinas est??o imersas, por meio de aplica????o de campos magn??ticos mais intensos.', correct: false },
      { text: 'rapidez com que o fluxo magn??tico varia atrav??s das bobinas, por meio de um aumento em sua velocidade angular.', correct: true },
      { text: 'resist??ncia interna do condutor que constitui as bobinas, por meio de um aumento na espessura dos terminais.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) Os manuais de refrigerador apresentam a recomenda????o de que o equipamento n??o deve ser instalado pr??ximo a fontes de calor, como fog??o e aquecedores, ou em local onde incida diretamente a luz do sol. A instala????o em local inadequado prejudica o funcionamento do refrigerador e aumenta o consumo de energia. \n\n\n O n??o atendimento dessa recomenda????o resulta em aumento do consumo de energia porque',

    resolution: 'A energia em um refrigerador ?? gasta no condensador. Esse processo ?? respons??vel por transferir calor para o ambiente. Se a temperatura ambiente estiver elevada o condensador gastar?? mais energia nesse processo.',
    answers: [
      { text: 'o fluxo de calor por condu????o no condensador sofre consider??vel redu????o.', correct: false },
      { text: 'a temperatura da substancia refrigerante no condensador diminui mais rapidamente.', correct: false },
      { text: 'o fluxo de calor promove significativa eleva????o da temperatura no interior do refrigerador.', correct: false },
      { text: 'a liquefa????o da subst??ncia refrigerante no condensador exige mais trabalho do compressor.', correct: false },
      { text: 'as correntes de convec????o nas proximidades do condensador ocorrem com maior dificuldade.', correct: true },
    ]
  },

  {
    question: '(ENEM - 2020) H?? muitos mitos em rela????o a como se proteger de raios, cobrir espelhos e n??o pegar em facas, garfos e outros objetos met??licos, por exemplo. Mas, de fato, se houver uma tempestade com raios, alguns cuidados s??o importantes, como evitar ambientes abertos. Um bom abrigo para prote????o ?? o interior de um autom??vel, desde que este n??o seja convers??vel. \n\n\n Qual o motivo f??sico da prote????o fornecida pelos autom??veis, conforme citado no texto?',

    resolution: 'O motivo da prote????o ?? a blindagem eletrost??tica por causa da carca??a met??lica. As cargas se acumulam apenas na parte externa da carca??a, assim o interior ?? seguro.',
    answers: [
      { text: 'Isolamento el??trico dos pneus.', correct: false },
      { text: 'Efeito de para-raios da antena.', correct: false },
      { text: 'Blindagem pela carca??a met??lica.', correct: true },
      { text: 'Escoamento de ??gua pela lataria.', correct: false },
      { text: 'Aterramento pelo fio terra da bateria.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) As panelas de press??o reduzem o tempo de cozimento dos alimentos por elevar a temperatura de ebuli????o da ??gua. Os usu??rios conhecedores do utens??lio normalmente abaixam a intensidade do fogo em panelas de press??o ap??s essas iniciarem a sa??da dos vapores. \n\n\n Ap??s abaixar o fogo, reduz-se a chama, pois assim evita-se o(a)',

    resolution: 'Durante a ebuli????o a temperatura n??o muda, manter a chama alta apenas faria com que a libera????o de vapor se mantivesse mais intensa, mas em nada ajuda a aumentar a velocidade do cozimento. Assim, ao abaixar a chama, economiza-se g??s sem preju??zo ao tempo de cozimento e ?? esse o efeito que se busca com essa pr??tica. ',
    answers: [
      { text: 'aumento da press??o interna e os riscos de explos??o.', correct: false },
      { text: 'dilata????o da panela e a desconex??o com sua tampa.', correct: false },
      { text: 'perda da qualidade nutritiva do alimento.', correct: false },
      { text: 'deforma????o da borracha de veda????o.', correct: false },
      { text: 'consumo de g??s desnecess??rio.', correct: true },
    ]
  },

  {
    question: '(ENEM - 2020) Embora a energia nuclear possa ser utilizada para fins pac??ficos, recentes conflitos geopol??ticos t??m trazido preocupa????es em v??rias partes do planeta e estimulado discuss??es visando o combate ao uso de armas de destrui????o em massa. Al??m do potencial destrutivo da bomba at??mica, uma grande preocupa????o associada ao emprego desse artefato b??lico ?? a poeira radioativa deixada ap??s a bomba ser detonada. \n\n\n Qual ?? o processo envolvido na detona????o dessa bomba?',

    resolution: 'A bomba at??mica ?? provocada pela fiss??o nuclear do Ur??nio-235, emitindo neutr??ns e raios gama. O bombardeamento do n??cleo de ur??nio ocorre com n??utros.',
    answers: [
      { text: 'Fiss??o nuclear do ur??nio, provocada por n??utrons.', correct: true },
      { text: 'Fus??o nuclear do hidrog??nio, provocada por pr??tons.', correct: false },
      { text: 'Desintegra????o nuclear do plut??nio, provocada por el??trons.', correct: false },
      { text: 'Associa????o em cadeia de chumbo, provocada por p??sitrons.', correct: false },
      { text: 'Decaimento radioativo do carbono, provocado por part??culas beta.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) Os fones de ouvido tradicionais transmitem a m??sica diretamente para nossos ouvidos. J?? os modelos dotados de tecnologia redutora de ru??do - Cancelamento de Ru??do (CR) - al??m de transmitirem m??sica, tamb??m reduzem todo ru??do inconsistente ?? nossa volta como o barulho de turbinas de avi??o e aspiradores de p??. Os fones de ouvido CR n??o reduzem realmente barulhos irregulares como discursos e choros de beb??s. Mesmo assim, a supress??o do ronco das turbinas do avi??o contribui para reduzir a "fadiga de ru??do", um cansa??o persistente provocado pela exposi????o a um barulho alto por horas a fio. Esses aparelhos tamb??m permitem que n??s ou??amos m??sicas ou assistamos a v??deos no trem ou no avi??o a um volume muito menor (e mais seguro). \n\n\n A tecnologia redutora de ru??do CR utilizada na produ????o de fones de ouvido baseia-se em qual fen??meno ondulat??rio?',

    resolution: 'O fen??meno que ?? respons??vel por "cancelar" outros sons ou ru??dos ?? a interfer??ncia destrut??va. Como o som ?? um tipo de onde, por interfer??ncia, os fones de ouvido suprimem os ru??dos.',
    answers: [
      { text: 'Absor????o.', correct: false },
      { text: 'Interfer??ncia.', correct: true },
      { text: 'Polariza????o.', correct: false },
      { text: 'Reflex??o.', correct: false },
      { text: 'Difra????o.', correct: false},
    ]
  },

  {
    question: '(ENEM - 2020) Dois engenheiros est??o verificando se uma cavidade perfurada no solo est?? de acordo com o planejamento de uma obra, cuja profundidade requerida ?? de 30 m. O teste ?? feito por um dispositivo denominado oscilador de ??udio de frequ??ncia vari??vel, que permite relacionar a profundidade com os valores da frequ??ncia de duas resson??ncias consecutivas, assim como em um tubo sonoro fechado. A menor frequ??ncia de resson??ncia que o aparelho mediu foi 135 Hz. Considere que a velocidade do som dentro da cavidade perfurada ?? de 360 ms-1. \n\n\n Se a profundidade estiver de acordo com o projeto, qual ser?? o valor da pr??xima frequ??ncia de resson??ncia que ser?? medida?',

    resolution: 'V=??f ?? a rela????o fundamental. \n Para tubos fechados temos fd=(2n???1)V/4L, em que n ?? o modo de resson??ncia. \n 135=(2n+1)x360/120 \n (2n+1)=135/3=45 \n n = 23 \n O pr??ximo modo ent??o ?? o 24??. \n f23 = 47 x 3 = 141 Hz.',
    answers: [
      { text: '137 Hz.', correct: false },
      { text: '138 Hz.', correct: false },
      { text: '141 Hz.', correct: true },
      { text: '144 Hz.', correct: false },
      { text: '159 Hz.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) Em 1962, um jingle (vinheta musical) criado por Heitor Carillo fez tanto sucesso que extrapolou as fronteiras do r??dio e chegou ?? televis??o ilustrado por um desenho animado. Nele, uma pessoa respondia ao fantasma que batia em sua porta, personificando o ???frio???, que n??o o deixaria entrar, pois n??o abriria a porta e compraria l??s e cobertores para aquecer a sua casa. Apesar de memor??vel, tal comercial televisivo continha incorre????es a respeito e conceitos f??sicos relativos ?? calorimetria. \n\n\n Para solucionar essas incorre????es, deve-se associar ?? porta e aos cobertores, respectivamente, as fun????es de',

    resolution: 'Essa ?? uma quest??o que envolve o conceito de energia em tr??nsito: calor. A nossa sensa????o de frio est?? relacionada a um fluxo de calor que deixa o nosso corpo para o ambiente, assim como a nossa sensa????o de calor est?? relacionada com um fluxo de calor do ambiente para o nosso corpo.',
    answers: [
      { text: 'aquecer a casa e os corpos.', correct: false },
      { text: 'evitar a entrada do frio na casa e nos corpos.', correct: false },
      { text: 'minimizar a perda de calor pela casa e pelos corpos.', correct: true },
      { text: 'diminuir a entrada do frio na casa e aquecer os corpos.', correct: false },
      { text: 'aquecer a casa e reduzir a perda de calor pelos corpos.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) As redes de alta tens??o para transmiss??o de energia el??trica geram campo magn??tico vari??vel o suficiente para induzir corrente el??trica no arame das cercas. Tanto os animais quanto os funcion??rios das propriedades rurais ou das concession??rias de energia devem ter muito cuidado ao se aproximarem de uma cerca quando esta estiver pr??xima a uma rede de alta tens??o, pois, se tocarem no arame da cerca, poder??o sofrer choque el??trico.\n\n\n Para minimizar este tipo de problema, deve-se',

    resolution: 'A tens??o na bobina ?? dada pela varia????o do fluxo magn??tico. A maneira vi??vel de se fazer isso na bobina ?? aumentando a velocidade de giro das p??s do gerador.',
    answers: [
      { text: 'fazer o aterramento dos arames da cerca.', correct: true },
      { text: 'acrescentar fus??vel de seguran??a na cerca.', correct: false },
      { text: 'realizar o aterramento da rede de alta tens??o.', correct: false },
      { text: 'instalar fus??vel de seguran??a na rede de alta tens??o.', correct: false },
      { text: 'utilizar fios encapados com isolantes na rede de alta tens??o.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) A maioria das pessoas fica com a vis??o emba??ada ao abrir os olhos debaixo d?????gua. Mas h?? uma exce????o: o povo moken, que habita a costa da Tail??ndia. Essa caracter??stica se deve principalmente ?? adaptabilidade do olho e ?? plasticidade do c??rebro, o que significa que voc?? tamb??m, com algum treinamento, poderia enxergar relativamente bem debaixo d?????gua. Estudos mostraram, que as pupilas de olhos de indiv??duos moken sofrem redu????o significativa debaixo d?????gua, o que faz com que os raios luminosos incidam quase paralelamente ao eixo ??ptico da pupila. \n\n\n A acuidade visual associada ?? redu????o das pupilas ?? fisicamente explicada pela diminui????o',

    resolution: 'Como o enunciado mesmo destacou, para enxergar com mais nitidez debaixo da ??gua ?? necess??rio que os raios luminosos chegam paralelos ao eixo ??ptico, ou seja eles devem sofrer pouco ou nenhum desvio no caminho. Lembrem-se que nosso olho funciona como um instrumento ??ptico que est?? embutido de uma lente convergente, ou seja o processo que rege a luz chegar no nosso olho at?? alcan??ar o nosso nervo ?? a refra????o, nenhum outro processo, como citado nas outras alternativas, corresponde ao processo que o olho faz para focar os raios de luz',
    answers: [
      { text: 'da intensidade luminosa incidente na retina.', correct: false },
      { text: 'da difra????o dos feixes luminosos que atravessam a pupila.', correct: false },
      { text: 'da intensidade dos feixes luminosos em uma dire????o por polariza????o.', correct: false },
      { text: 'do desvio dos feixes luminosos refratados no interior do olho.', correct: true },
      { text: 'das reflex??es dos feixes luminosos no interior do olho.', correct: false },
    ]
  },



  



































  
]
