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
    question: '(ENEM - 2020) Dois grandes eventos históricos tomaram possível um caso como o de Menocchio: a invenção da impresa e a Reforma. A imprensa lhe permitiu confrontar os livros com a tradição oral em que havia crescido e lhe forneceu as palavras para organizar o amontoado de ideias e fantasias que nele conviviam. A Reforma lhe deu audácia para comunicar o que pensava ao padre do vilarejo, conterrâneos, inquisidores - mesmo não tendo conseguido dizer tudo diante do papa, dos cardeais e dos príncipes, como queria. Os acontecimentos históricos citados ajudaram esse indivíduo, no século XVI, a repensar a visão católica do mundo ao possibilitarem a...',
    resolution: 'O protestantismo defendia a livre interpretação dos textos bíblicos.',
    answers: [
      { text: ' Consulta pública das bibliotecas reais.', correct: false },
      { text: ' Sofisticação barroca do ritual litúrgico.', correct: false },
      { text: 'Aceitação popular da educação secular.', correct: false },
      { text: 'Interpretação autônoma dos textos bíblicos.', correct: true },
      { text: 'correção doutrinária das heresias medievais.', correct: false },
    ]
  },
  {
    question: '(ENEM - 2020) A arté pré-histórica africana foi incontestavelmente um veículo de mensagens pedagógicas e sociais. Os San, que constituem hoje o povo mais próximo da realidade das representações rupestres, afirmam que seus antepassados lhes explicaram sua visão do mundo a partir desse gigantesco livro de imagens que são as galerias. A educação dos povos que desconhecem a escrita está baseada sobretudo na imagem e no som, no audiovisual. De acordo com o texto, a arte mencionada é importante para os povos que a cultivam por colaborar para o(a)',
    resolution: 'Ao final do texto se afirma: “A educação dos povos que desconhecem a escrita está baseada sobretudo na imagem e no som, no audiovisual.” ',
    answers: [
      { text: 'transmissão dos saberes acumulados.', correct: true },
      { text: 'afirmar o ideário cristão para reconquistar a grandeza perdida.', correct: false },
      { text: 'ruptura da disciplina hierárquica.', correct: false },
      { text: 'surgimento dos laços familiares.', correct: false },
      { text: 'rejeição de práticas exógenas.', correct: false }

    ]
  },
  {
    question: '(ENEM - 2020) Desde o mundo antigo e sua filosofia, que o trabalho tem sido compreendido como expressão de vida e degradação, criação e infelicidade, atividade vital e escravidão, felicidade social e servidão. Trabalho e fadiga. Na modernidade, sob o comando do mundo da mercadoria e do dinheiro, a prevalência do negócio (negar o ócio) veio sepultar o império do repouso, da folga e da preguiça, criando uma ética positiva do trabalho. O processo de ressignificação do trabalho nas sociedades modernas teve início a partir do surgimento de uma nova mentalidade, influenciada pela...',
    
    resolution: 'Weber trabalha muito a ideia de que a nova visão protestante, especialmente a Calvista, trouxe a ideia do trabalho como positivo, há uma racionalização do trabalho secular que apresenta a ideia de que este leva o indivíduo a um caminho de rentabilidade.',
    answers: [
      { text: 'reforma higienista, que combateu o caráter excessivo e insalubre do trabalho fabril.', correct: false },
      { text: 'Reforma Protestante, que expressou a importância das atividades laboriais no mundo secularizado.', correct: true },
      { text: 'força do sindicalismo, que emergiu no esteio do anarquismo reivindicando direitos trabalhistas.', correct: false },
      { text: 'participação das mulheres em movimentos sociais, defendendo o direito ao trabalho.', correct: false },
      { text: 'visão do catolicismo, que, desde a Idade Média, defendia a dignidade do trabalho e do lucro.', correct: false },
    ]
  },
  {
    question: '(ENEM - 2020) Sexto rei sumério (governante entre os século XVIII e XVII a.C.) e nascido em Babel, "Khammu-rabi" (pronúncia em babilônio) foi fundado do I Império Babilônico (correspondente ao atual Iraque), unificando amplamente o mundo mesopotâmico, unindo os semitas e os sumérios e levando a Babilônia ao máximo esplendor. O nome de Hamurábi permanece indissociavelmente ligado ao código jurídico tido como o mais remoto já descoberto: o Código de Hamurábi. O legislador babilônico consolidou a tradição jurídica, harmonizou os costumes e estendeu o direito e a lei a todos os súditos. Nesse contexto de organização da vida social, as leis contidas no código citado tinham o sentido de...',
    
    resolution: 'O Código de Hamurabi é um conjunto de leis que tange majoritariamente sobre punições. É conhecido principalmente devido a lei de Talião “olho por olho, dente por dente."',
    answers: [
      { text: 'assegurar garantias individuais aos cidadãos livres.', correct: false },
      { text: 'tipificar as regras referentes aos atos dignos de punição.', correct: true },
      { text: 'conceder benefícios de indulto aos prisioneiros de guerra.', correct: false },
      { text: 'promover distribuição de terras aos desempregados urbanos.', correct: false },
      { text: 'conferir prerrogativas políticas aos descendentes de estrangeiros.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) É difícil imaginar que nos anos 1990, num país com setores da população na pobreza absoluta e sem uma rede de benefícios sociais em que se apoiar, um governo possa abandonar o papel de promotor de programas de geração de emprego, de assistência social, de desenvolvimento da infraestrutura e de promoção de regiões excluídas, na expectativa de que o mercado venha algum dia a dar uma resposta adequada a tudo isso. Nesse contexto, a criticada postura dos governos frente à situação social do país coincidiu com a priorização de que medidas?',
    
    resolution: 'Na década de 90 um dos grandes problemas do Brasil era sem dúvidas a inflação como uma consequência da década de 80. Os governos focaram em tentar controlar a inflação e em reformas políticas macroeconômica.',
    answers: [
      { text: 'Expansão dos investimentos nas empresas públicas e nos bancos estatais.', correct: false },
      { text: 'Democratização do crédito habitacional e da aquisição de moradias populares..', correct: false },
      { text: 'Enxugamento da carga fiscal individual e da contribuição tributária empresarial.', correct: false },
      { text: 'Reformulação do acesso ao ensino superior e do financiamento científico nacional.', correct: false },
      { text: 'Reforma das políticas macroeconômicas e dos mecanismos de controle inflacionário.', correct: true },
    ]
  }











































  
]
