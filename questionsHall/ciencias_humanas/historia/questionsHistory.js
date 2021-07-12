function startReset () {
  var buttonStart = document.getElementById('start-btn')
  buttonStart.style.left = '40%';
  buttonStart.style.top = '79%';
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
    question: '(Enem/2013) É preciso ressaltar que, de todas as capitanias brasileiras, Minas era a mais urbanizada. Não havia ali hegemonia de um ou dois grandes centros. A região era repleta de vilas e arraiais, grandes e pequenos, em cujas ruas muita gente circulava. As regiões da América portuguesa tiveram distintas lógicas de ocupação. Uma explicação para a especificidade da região descrita no texto está identificada na:',
    resolution: 'fiscalização estatal diante das particularidades econômicas. Por conta da extração do ouro, Minas Gerais sempre foi mais vigiada pelo poder público a fim de garantir que as riquezas encontradas chegariam à Corte. As outras opções não refletem a realidade histórica da região neste período com exageros como "produção manufatureira" e "autonomia administrativa".',
    answers: [
      { text: 'apropriação cultural diante das influências externas.', correct: false },
      { text: 'produção manufatureira diante do exclusivo comercial.', correct: false },
      { text: 'insubordinação religiosa diante da hierarquia eclesiástica.', correct: false },
      { text: 'fiscalização estatal diante das particularidades econômicas.', correct: true },
      { text: 'autonomia administrativa diante das instituições metropolitanas.', correct: false },
    ]
  },
  {
    question: '(Enem/2016) No aniversário do primeiro decênio da Marcha sobre Roma, em outubro de 1932, Mussolini irá inaugurar sua Via dell Impero; a nova Via Sacra do Fascismo, ornada com estátuas de César, Augusto, Trajano, servirá ao culto do antigo e à glória do Império Romano e de espaço comemorativo do ufanismo italiano. Às sombras do passado recriado ergue-se a nova Roma, que pode vangloriar-se e celebrar seus imperadores e homens fortes; seus grandes poetas e apólogos como Horácio e Virgílio. A retomada da Antiguidade clássica pela perspectiva do patrimônio cultural foi realizada com o objetivo de',
    resolution: 'utilizar os vestígios restaurados para justificar o regime político. Mussolini utiliza o passado do Império Romano para mostrar a continuidade entre os dois regimes e assim, empregava vários símbolos desta época a fim de reforçar esta ligação. Desta maneira, ele reforçava a ideia de um passado expansionista para justificar as conquistas na África, por exemplo. As demais opções não são corretas, pois o regime de Mussolini não tinha intenção de "afirmar o ideário cristão para reconquistar a grandeza perdida" e também não utilizou a Antiguidade para "favorecer a participação política".',
    answers: [
      { text: 'utilizar os vestígios restaurados para justificar o regime político.', correct: true },
      { text: 'afirmar o ideário cristão para reconquistar a grandeza perdida.', correct: false },
      { text: 'difundir os saberes ancestrais para moralizar os costumes sociais.', correct: false },
      { text: 'recompor a organização republicana para fortalecer a administração estatal.', correct: false },
      { text: 'recompor a organização republicana para fortalecer a administração estatal.', correct: false }

    ]
  },
  {
    question: '(Enem/2016) É hoje a nossa festa nacional. O Brasil inteiro, da capital do Império à mais remota e insignificante de suas aldeolas, congrega-se unânime para comemorar o dia que o tirou dentre as nações dependentes para colocá-lo entre as nações soberanas, e entregou-lhes seus destinos, que até então haviam ficado a cargo de um povo estranho. As festividades em torno da Independência do Brasil marcam o nosso calendário desde os anos imediatamente posteriores ao de setembro de 1822. Essa comemoração está diretamente relacionada com:',
    
    resolution: 'utilizar os vestígios restaurados para justificar o regime político. Mussolini utiliza o passado do Império Romano para mostrar a continuidade entre os dois regimes e assim, empregava vários símbolos desta época a fim de reforçar esta ligação. Desta maneira, ele reforçava a ideia de um passado expansionista para justificar as conquistas na África, por exemplo. As demais opções não são corretas, pois o regime de Mussolini não tinha intenção de "afirmar o ideário cristão para reconquistar a grandeza perdida" e também não utilizou a Antiguidade para "favorecer a participação política".',
    answers: [
      { text: 'a construção e manutenção de símbolos para a formação de uma identidade nacional.', correct: true },
      { text: 'o domínio da elite brasileira sobre os principais cargos políticos, que se efetivou logo após 1822.', correct: false },
      { text: 'os interesses de senhores de terras que, após a Independência, exigiram a abolição da escravidão.', correct: false },
      { text: 'o apoio popular às medidas tomadas pelo governo imperial para a expulsão de estrangeiros do país.', correct: false },
      { text: 'a consciência da população sobre os seus direitos adquiridos posteriormente à transferência da Corte para o Rio de Janeiro. ', correct: false },
    ]
  },
  {
    question: '(Enem/2010) Para o Paraguai, portanto, essa foi uma guerra pela sobrevivência. De todo modo, uma guerra contra dois gigantes estava fadada a ser um teste debilitante e severo para uma economia de base tão estreita. Lopez precisava de uma vitória rápida e, se não conseguisse vencer rapidamente, provavelmente não venceria nunca. A Guerra do Paraguai teve consequências políticas importantes para o Brasil, pois',
    
    resolution: 'O Exército brasileiro saiu fortalecido do conflito e passou a exigir mais participação no cenário político, o que acabaria redundando no golpe republicano. As demais opções não são corretas. Afinal, o Brasil não conquista a hegemonia da Bacia Platina e nem os escravos negros são emancipados.',
    answers: [
      { text: 'representou a afirmação do Exército Brasileiro como um ator político de primeira ordem.', correct: true },
      { text: 'confirmou a conquista da hegemonia brasileira sobre a Bacia Platina.', correct: false },
      { text: 'concretizou a emancipação dos escravos negros.', correct: false },
      { text: 'incentivou a adoção de um regime constitucional monárquico.', correct: false },
      { text: 'solucionou a crise financeira, em razão das indenizações recebidas.', correct: false },
    ]
  },

  {
    question: '(Enem/2011) Se a mania de fechar, verdadeiro habitus da mentalidade medieval nascido talvez de um profundo sentimento de insegurança, estava difundida no mundo rural, estava do mesmo modo no meio urbano, pois que uma das características da cidade era de ser limitada por portas e por uma muralha. As práticas e os usos das muralhas sofreram importantes mudanças no final da Idade Média, quando elas assumiram a função de pontos de passagem ou pórticos. Este processo está diretamente relacionado com:',
    
    resolution: 'o crescimento das atividades comerciais e urbanas. No começo da Idade Média, as muralhas tinha função defensiva. No entanto, com o aumento populacional e o deslocamento de pessoas e mercadorias, urgia controlar a entrada e saída nas cidades, além de cobrar os respectivos impostos. As demais opções não são corretas. A opção e) "a contenção das epidemias e doenças" já era uma função das muralhas e a alternativa c) "a expansão dos parques industriais e fabris" não corresponde aos fatos históricos da época.',
    answers: [
      { text: 'o crescimento das atividades comerciais e urbanas.', correct: true },
      { text: 'a migração de camponeses e artesãos.', correct: false },
      { text: 'a expansão dos parques industriais e fabris.', correct: false },
      { text: 'o aumento do número de castelos e feudos.', correct: false },
      { text: 'a contenção das epidemias e doenças.', correct: false },
    ]
  }











































  
]
