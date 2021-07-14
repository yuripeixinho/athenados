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
    question: '(ENEM - 2020) A fragmentação dos hábitats é caracterizada pela formação de ilhas da paisagem original, circundadas por áreas transformadas. Esse tipo de interferência no ambiente ameça a biodiversidade. Imagine que uma população de onças foi isolada em uma mata pequena. Elas se extinguiriam mesmo sem terem sido abatidas. Diversos componentes da ilha de hábitat, como o tamanho, a heterogeneidade, o seu entorno, a sua conectividade e o efeito de borda são determinantes para a persistência ou não das espécies originais.     \n\n\n Uma medida que auxilia na conservação da biodiversidade nas ilhas mencionadas no texto compreende a',

    resolution: 'Os corredores ecológicos tem como principal função recuperar as ligações entre as ilhas de hábitat, o que diminui o efeito borda e permite um trânsito das espécies entre os fragmentos florestais, permitindo que ocorre uma variabilidade genética entre as populações que estavam isoladas. Essa variabilidade genética é importante para a preservação das espécies e aumento da biodiversidade.',
    answers: [
      { text: 'formação de micro-hábitats.', correct: false },
      { text: 'ampliação do efeito de bordas.', correct: false },
      { text: 'construção de corredores ecológicos.', correct: true },
      { text: 'promoção de sucessão ecológica.', correct: false },
      { text: 'introdução de novas espécies de animais e vegetais.', correct: false },
    ]
  },


  
  {
    question: '(ENEM - 2020) Em 2011, uma falha no processo de perfuração realizado por uma empresa petrolífera ocasionou derramamento de petróleo na bacia hidrográfica de Campos, no Rio de Janeiro.    \n\n\n Os impactos decorrentes desse derramamento ocorrem porque os componentes do petróleo    ',

    resolution: 'O petróleo, por ser uma substância oleosa, possui caráter hidrofóbico e baixa densidade, ficando suspensos na água quando liberados nos oceanos ou corpos d’água. Por ficarem suspensos, formam grandes camadas de óleo que separam a água do ar atmosférico, impedindo que trocas gasosas entre esses ambientes ocorram, acarretando em diminuição na quantidade de oxigênio, principalmente nos oceanos. Além disso, a formação dessa camada na superfície prejudica a entrada de luz na água, prejudicando os seres dependentes de fotossíntese.',
    answers: [
      { text: 'reagem com a água do mar e sofrem degradação, gerando compostos com elevada toxicidade.', correct: false },
      { text: 'acidificam o meio, promovendo o desgaste das conchas calcárias de moluscos e a morte de corais.', correct: false },
      { text: 'dissolvem-se na água, causando a mortandade dos seres marinhos por ingestão da água contaminada.', correct: false },
      { text: 'têm caráter hidrofóbico e baixa densidade, impedindo as trocas gasosas entre o meio aquáticos e a atmosfera.', correct: true },
      { text: 'têm cadeia pequena e elevada volatilidade, contaminando a atmosfera local e regional em função dos ventos nas orlas marítimas.', correct: false },
    ]
  },




  
  {
    question: '(ENEM - 2020) O dióxido de carbono passa para o estado sólido (gelo seco) a -78ºC e retorna ao estado gasoso à temperatura ambiente. O gá é facilmente solubilizado em água, capaz de absorver radiação infravermelha na superfície da terra e não conduz eletricidade. Ele é utilizado como matéria-prima para a fotossíntese até o limite de saturação. Após a fixação pelos organismos autotróficos, o gás retorna ao meio ambiente pela respiração aeróbica, fermentação, decomposição ou por resíduos industriais, queima de combustíveis fósseis e queimadas. Apesar de sua importância ecológica, seu excesso causa perturbações no equilíbrio ambiental.     \n\n\n Considerando as propriedades descritas, o aumento atmosférico da substância afetará os organismos aquáticos em razão de',

    resolution: 'O aumento de gás carbônico dissolvido na água aumenta sua acidez, ou seja, diminui o potencial hidrogeniônico (o pH). O aumento do pH da água afeta os organismos aquáticos, pois pode reduzir a atividade de enzimas e outras atividades metabólicas desses seres, como a fixação de cálcio, podendo também, em casos extremos, a morte de indivíduos.',
    answers: [
      { text: 'redução do potencial hidrogeniônico da água', correct: true },
      { text: 'restrição de aerobiose pelo excesso de poluentes.', correct: false },
      { text: 'diminuição da emissão de oxigênio pelos autótrofos.', correct: false },
      { text: 'limitação de transferência de energia entre os seres vivos.', correct: false },
      { text: 'retração dos oceanos pelo congelamento do gás nos polos.', correct: false },
    ]
  },



  {
    question: '(ENEM - 2020) Grupos de proteção ao meio ambiente conseguem resgatar muitas aves aquáticas vítimas de vazamentos de petróleo. Essas aves são lavadas com água e detergente neutro para a retirada completa do óleo de seu corpo e, posteriormente, são aquecidas, medicadas, desintoxicadas e alimentadas. Mesmo após esses cuidados, o retorno ao ambiente não pode ser imediato, pois elas precisam recuperar a capacidade de flutuação.     \n\n\n Para flutuar, essas aves precisam    ',

    resolution: 'Ao serem lavadas com a solução de água e detergente, a cera impermeabilizante será dissolvida. Sendo assim, para que essas aves possam voltar para o ambiente aquático é necessário que haja uma reposição dessa cera que será naturalmente produzida pelo próprio animal.',
    answers: [
      { text: 'recuperar o tônus muscular.       ', correct: false },
      { text: 'restaurar a massa corporal.       ', correct: false },
      { text: 'substituir as penas danificadas.       ', correct: false },
      { text: 'reestabelecer a capacidade de homeotermia.       ', correct: false },
      { text: 'refazer a camada de cera impermeabilizante das penas.       ', correct: true },
    ]
  },



  {
    question: '(ENEM - 2020) Na indústria farmacêutica, é muito comum o emprego de substâncias de revestimento em medicamentos de uso oral, pois trazem uma série de benefícios como alteração de sabor em medicamentos que tenham gosto ruim, melhoria da assimilação do composto, entre outras ações. Alguns compostos poliméricos à base do polissacarídeo celulose são utilizados para garantir que o fármaco somente seja liberado quando em contato com soluções aquosas cujo pH se encontre próximo da faixa da neutralidade.     \n\n\n Qual é a finalidade do uso desse revestimento à base de celulose?',

    resolution: 'Esse revestimento de celulose tem como finalidade garantir que as substâncias ativas do fármaco só seja liberada no intestino, onde o ph se encontra entre 7 e 8,5, próximo à neutralidade. Isso evita que as substâncias sejam digeridas pelas secreções gástricas, não sendo aproveitados pelo organismo.',
    answers: [
      { text: 'Diminuir a absorção do princípio ativo no intestino.', correct: false },
      { text: 'Impedir que o fármaco seja solubilizado no intestino.', correct: false },
      { text: 'Garantir que o fármaco não seja afetado pelas secreções gástricas.', correct: true },
      { text: 'Permitir a liberação do princípio ativo pela ação das amilases salivares.', correct: false },
      { text: 'Facilitar a liberação do fármaco pela ação dos sais biliares sobre o revestimento.', correct: false },
    ]
  },



  {
    question: '(ENEM - 2020) Instituições acadêmicas e de pesquisa no mundo estão inserindo genes em genomas de plantas que possam codificar produtos de interesse farmacológico. No Brasil, está sendo desenvolvida uma variedade de soja com com um viricida ou microbicida capaz de prevenir a contaminação pelo vírus causador da aids. Essa leguminosa está sendo induzida a produzir a enzima cianovirina-N que tem eficiência comprovada contra o vírus.     \n\n\n A técnica para gerar essa leguminosa é um exemplo de?',

    resolution: 'A transgenia é o processo de alteração do material genético de uma espécie pela introdução de uma ou mais sequências de genes provenientes de outra espécie. Alternativa Letra B.',
    answers: [
      { text: 'hibridismo.', correct: false },
      { text: 'transgenia.', correct: true },
      { text: 'conjugação.', correct: false },
      { text: 'terapia gênica.', correct: false },
      { text: 'melhoramento genético.', correct: false },
    ]
  },



  {
    question: '(ENEM - 2020) Aranhas, escorpiões, carrapatos e ácaros são representantes da classe dos Aracnídeos. Esses animais são terrestres em sua grande maioria e ocupam os mais variados hábitats, tais como montanhas altas, pântanos, desertos e solos arenosos. Podem ter sido os primeiros representantes do filo Arthropoda a habitar terra seca.     \n\n\n A característica que justifica o sucesso adaptativo desse grupo na ocupação do ambiente terrestre é a presença de',

    resolution: 'A conquista do ambiente terrestre por todas as espécies foi dependente principalmente de conseguir meios de sobreviver com cada vez menos acesso a água. No caso dos Aracnídeos, um exoesqueleto que auxilia no controle da perda de água para o ambiente foi fundamental. Alternativa Letra C',
    answers: [
      { text: 'quelíceras e pedipalpos que coordenam o movimento corporal.       ', correct: false },
      { text: 'excreção de ácido úrico que confere estabilidade ao pH corporal.', correct: false },
      { text: 'exoesqueleto constituído de quitina que auxilia no controle hídrico corporal.', correct: true },
      { text: 'circulação sanguínea aberta que impede a desidratação dos tecidos corporais.', correct: false },
      { text: 'sistema nervoso ganglionar que promove a coordenação central do movimento corporal.', correct: false },
    ]
  },




  {
    question: '(ENEM - 2020) Pesquisadores dos Estados Unidos desenvolveram uma nova técnica, que utiliza raios de luz infravermelha (invisíveis a olho nu) para destruir tumores. Primeiramente o paciente recebe uma injeção com versões modificadas de anticorpos que têm a capacidade de "grudar" apenas nas células cancerosas. Sozinhos, eles não fazem nada contra o tumor. Entretanto, esses anticorpos estão ligados a uma molécula denominada IR700, que funcionará como uma "microbomba", que irá destruir o câncer. Em seguida, o paciente recebe raios infravermelhos. Esses raios penetrem no corpo e chegam até a molécula IR700, que é ativada e libera uma substância que ataca a célula cancerosa..     \n\n\n Com bases nas etapas de desenvolvimento, o nome apropriado para a técnica descrita é:    ',

    resolution: 'A fotoimunoterapia é um tratamento que utiliza raios de luz infravermelha para o combate ao câncer, técnica recente que foi elaborada para acabar com células cancerígenas, assim como a técnica ditada no enunciado.',
    answers: [
      { text: 'Radioterapia.', correct: false },
      { text: 'Cromoterapia.', correct: false },
      { text: 'Quimioterapia.', correct: false },
      { text: 'Fotoimunoterapia.', correct: true },
      { text: 'Terapia magnética.', correct: false },
    ]
  },




  {
    question: '(ENEM - 2020) Plantas pioneiras são as que iniciam o processo natural de cicatrização de uma área desprovida de vegetação. Em geral, têm pequeno porte e crescem muito rápido, desenvolvem-se a pleno sol e são pouco exigentes quanto às condições do solo. Produzem grande quantidade de sementes e possuem ciclo de vida curto.     \n\n\n Essas plantas são importantes em um projeto de restauração ambiental, pois promovem, no solo    ',

    resolution: 'A espécie tratada na questão muito provavelmente é uma gramínea que, por ser uma monocotiledônea, possui raiz fasciculada e é capaz de segurar bastante água do solo e com isso propicia que outras plantas que necessitem de uma maior demanda de água possam se desenvolver no local.',
    answers: [
      { text: 'aumento da incidência de luz solar.', correct: false },
      { text: 'diminuição da absorção de água.', correct: false },
      { text: 'estabilização da umidade.', correct: true },
      { text: 'elevação da temperatura.', correct: false },
      { text: 'liberação de oxigênio.', correct: false },
    ]
  },



  {
    question: '(ENEM - 2020) Plantas pioneiras são as que iniciam o processo natural de cicatrização de uma área desprovida de vegetação. Em geral, têm pequeno porte e crescem muito rápido, desenvolvem-se a pleno sol e são pouco exigentes quanto às condições do solo. Produzem grande quantidade de sementes e possuem ciclo de vida curto.     \n\n\n Essas plantas são importantes em um projeto de restauração ambiental, pois promovem, no solo    ',

    resolution: 'A espécie tratada na questão muito provavelmente é uma gramínea que, por ser uma monocotiledônea, possui raiz fasciculada e é capaz de segurar bastante água do solo e com isso propicia que outras plantas que necessitem de uma maior demanda de água possam se desenvolver no local.',
    answers: [
      { text: 'aumento da incidência de luz solar.', correct: false },
      { text: 'diminuição da absorção de água.', correct: false },
      { text: 'estabilização da umidade.', correct: true },
      { text: 'elevação da temperatura.', correct: false },
      { text: 'liberação de oxigênio.', correct: false },
    ]
  },




  {
    question: '(ENEM - 2020) Aranhas, escorpiões, carrapatos e ácaros são representantes da classe dos Aracnídeos. Esses animais são terrestres em sua grande maioria e ocupam os mais variados hábitats, tais como montanhas altas, pântanos, desertos e solos arenosos. Podem ter sido os primeiros. representantes do filo Arthropoda a habitar a terra seca.    \n\n\n A característica que justifica o sucesso adaptativo desse grupo na ocupação do ambiente terrestre é a presença de',

    resolution: 'O exoesqueleto dos aracnídeos (e demais artrópodes) evita a perda excessiva de água permitindo a grande irradiação adaptativa desses animais no ambiente terrestre.',
    answers: [
      { text: 'queliceras e pedipalpos que coordenam o movimento corporal.      ', correct: false },
      { text: 'excreção de ácido úrico que confere estabilidade ao pH corporal.', correct: false },
      { text: 'exoesqueleto constituído de quitina que auxilia no controle hídrico corporal.', correct: true },
      { text: 'circulação sanguínea aberta que impede a desidratação dos tecidos corporais.', correct: false },
      { text: 'sistema nervoso ganglionar que promove a coordenação central do movimento corporal', correct: false },
    ]
  },






























































  
]
