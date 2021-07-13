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
    question: '(ENEM - 2020) Embora inegáveis os benefícios que ambas as economias têm auferido do intercâmbio comercial, o Brasil ter reiterado seu objetivo de desenvolver com a China uma relação comercial menos assimétrica. Os números revelam com clareza a assimetria. As exportações brasileiras de produtos básicos, especialmente soja, minério de ferro e petróleo, compõem, dependendo do ano, algo entre 75% e 80% da pauta, ao passo que as importações brasileiras consistem, aproximadamente, em 95% de produtos industrializados chineses, que vão desde os mais variados bens de consumo até máquinas e equipamentos de alto valor. Uma ação estatal de longo prazo capaz de reduzir a assimetria na balança comercial brasileira, conforme exposto no texto, é o(a)',
    resolution: 'Com o fortalecimento da pesquisa científica permitiria a produção, no Brasil, de produtos com maior valor agregado, assim como os produtos vendidos a nós pela China, diminuindo a disparidade, citada pela questão, da balança comercial.',
    answers: [
      { text: 'expansão do setor extrativista.', correct: false },
      { text: 'incremento da atividade agrícola.', correct: false },
      { text: 'diversificação da matriz energética.', correct: false },
      { text: 'fortalecimento da pesquisa científica.', correct: true },
      { text: 'monitoramento do fluxo alfandegário.', correct: false },
    ]
  },
  {
    question: '(ENEM - 2020) As estatísticas mais recentes do Brasil rural revelam um paradoxo que interessa a toda sociedade: o emprego de natureza agrícola definha em praticamente todo o país, mas a população residente no campo voltou a crescer, ou pelo menos parou de cair. Esses sinais trocados sugerem que a dinâmica agrícola, embora fundamental, já não determina sozinha os rumos da demografia no campo. Esse novo cenário é explicado em parte pelo incremento do emprego não agrícola no campo. Ao mesmo tempo, aumentou a massa de desempregados, inativos e aposentados que mantém residência rural. Sobre o espaço brasileiro, o texto apresenta argumentos que refletem a:',
    resolution: 'O texto fala, justamente, sobre a diferença entre modos de vida rurais que fazem com que a demografia agrária se estabilize, mesmo com um número menor de empregos de natureza agrícola.',
    answers: [
      { text: 'heterogeneidade do modo de vida agrário.', correct: true },
      { text: 'redução do fluxo populacional nas cidades.', correct: false },
      { text: 'correlação entre força de trabalho e migração sazonal.', correct: false },
      { text: 'indissociabilidade entre local de moradia e acesso à renda.', correct: false },
      { text: 'desregulamentação das propriedades nas zonas de fronteira.', correct: false }
    ]
  },
  {
    question: '(ENEM - 2020) A propriedade compreende, em seu conteúdo e alcance, além do tradicional direito de uso, gozo e disposição por parte de seu titular , a obrigatoriedade do atendimento de sua função social, cuja definição é inseparável do requisito obrigatório do uso racional da propriedade e dos recursos ambientais que lhe são integrantes. O proprietário, como membro integrante da comunidade, se sujeita a obrigações crescentes que, ultrapassando os limites do direito de vizinhança, no âmbito do direito privado, abrangem o campo dos direitos da coletividade, visando o bem-estar geral, no âmbito do direito público. Os movimentos em prol da reforma agrária, que atuam com base no conceito de direito à propriedade apresentado no texto, propõem-se a:',
    
    resolution: 'A desapropriação de espaços improdutivos é a proposta dos movimentos pró reforma agrária.',
    answers: [
      { text: 'reverter o processo de privatização fundiária.', correct: false },
      { text: 'ressaltar a inviabilidade da produção latifundiária.', correct: false },
      { text: 'defender a desapropriação dos espaços improdutivos.', correct: true },
      { text: 'impedir a produção exportadora nas terras agricultáveis.', correct: false },
      { text: 'coibir o funcionamento de empresas agroindustriais no campo.', correct: false },
    ]
  },
  {
    question: '(Enem/2020) A expansão das cidades e a formação das aglomerações urbanas no Brasil, foram marcadas pela produção industrial e pela consolidação das metrópoles como locais de seu desenvolvimento. Na segunda metade do século XX, as metrópoles brasileiras estenderam-se por áreas de ocupação contínua, configurando densas regiões urbanizadas. O resultado do processo geográfico descrito foi o(a)',
    resolution: 'A extensão das metrópoles em áreas de ocupação contínua, justamente, fala sobre o crescimento das áreas periféricas.',
    answers: [
      { text: 'valorização da escala local.', correct: false },
      { text: 'crescimento das áreas periféricas.', correct: true },
      { text: 'densificação do transporte ferroviário.', correct: false },
      { text: 'predomínio do planejamento estadual', correct: false },
      { text: 'inibição de consórcios intermunicipais.', correct: false },
    ]
  },

  {
    question: '(Enem/2020) "Devo estar chegando perto do centro da Terra. Deixe-me ver: deve ter sido mais de seis mil quilômetros, por aí..." (como se vê, Alice tinha aprendido uma porção de coisas desse tipo na escola, e embora essa não fosse uma oportunidade lá muito boa de demonstrar conhecimentos, já que não havia ninguém por perto para escutá-la, em todo caso era bom praticar um pouco)"...sim, deve ser mais ou menos essa a distância...mas então qual seria a latitude ou longitude em que estou?" (Alice não tinha a menor ideia do que fosse latitude ou longitude, mas achou que eram palavras muito imponentes). O texto descreve uma confusão da personagem em relação',
    
    resolution: 'A falta de referencial do ponto de vista da Alice, gera toda essa confusão relatada no texto.',
    answers: [
      { text: 'ao tipo de projeção cartográfica.', correct: false },
      { text: 'aos contornos dos fusos horários.', correct: false },
      { text: 'à localização do norte magnético.', correct: false },
      { text: 'aos referenciais de posição relativa.', correct: true },
      { text: 'às distorções das formas continentais.', correct: false },
    ]
  }











































  
]
