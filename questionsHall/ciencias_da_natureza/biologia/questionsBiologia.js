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
    question: '(ENEM - 2020) A fragmenta????o dos h??bitats ?? caracterizada pela forma????o de ilhas da paisagem original, circundadas por ??reas transformadas. Esse tipo de interfer??ncia no ambiente ame??a a biodiversidade. Imagine que uma popula????o de on??as foi isolada em uma mata pequena. Elas se extinguiriam mesmo sem terem sido abatidas. Diversos componentes da ilha de h??bitat, como o tamanho, a heterogeneidade, o seu entorno, a sua conectividade e o efeito de borda s??o determinantes para a persist??ncia ou n??o das esp??cies originais.     \n\n\n Uma medida que auxilia na conserva????o da biodiversidade nas ilhas mencionadas no texto compreende a',

    resolution: 'Os corredores ecol??gicos tem como principal fun????o recuperar as liga????es entre as ilhas de h??bitat, o que diminui o efeito borda e permite um tr??nsito das esp??cies entre os fragmentos florestais, permitindo que ocorre uma variabilidade gen??tica entre as popula????es que estavam isoladas. Essa variabilidade gen??tica ?? importante para a preserva????o das esp??cies e aumento da biodiversidade.',
    answers: [
      { text: 'forma????o de micro-h??bitats.', correct: false },
      { text: 'amplia????o do efeito de bordas.', correct: false },
      { text: 'constru????o de corredores ecol??gicos.', correct: true },
      { text: 'promo????o de sucess??o ecol??gica.', correct: false },
      { text: 'introdu????o de novas esp??cies de animais e vegetais.', correct: false },
    ]
  },


  
  {
    question: '(ENEM - 2020) Em 2011, uma falha no processo de perfura????o realizado por uma empresa petrol??fera ocasionou derramamento de petr??leo na bacia hidrogr??fica de Campos, no Rio de Janeiro.    \n\n\n Os impactos decorrentes desse derramamento ocorrem porque os componentes do petr??leo    ',

    resolution: 'O petr??leo, por ser uma subst??ncia oleosa, possui car??ter hidrof??bico e baixa densidade, ficando suspensos na ??gua quando liberados nos oceanos ou corpos d?????gua. Por ficarem suspensos, formam grandes camadas de ??leo que separam a ??gua do ar atmosf??rico, impedindo que trocas gasosas entre esses ambientes ocorram, acarretando em diminui????o na quantidade de oxig??nio, principalmente nos oceanos. Al??m disso, a forma????o dessa camada na superf??cie prejudica a entrada de luz na ??gua, prejudicando os seres dependentes de fotoss??ntese.',
    answers: [
      { text: 'reagem com a ??gua do mar e sofrem degrada????o, gerando compostos com elevada toxicidade.', correct: false },
      { text: 'acidificam o meio, promovendo o desgaste das conchas calc??rias de moluscos e a morte de corais.', correct: false },
      { text: 'dissolvem-se na ??gua, causando a mortandade dos seres marinhos por ingest??o da ??gua contaminada.', correct: false },
      { text: 't??m car??ter hidrof??bico e baixa densidade, impedindo as trocas gasosas entre o meio aqu??ticos e a atmosfera.', correct: true },
      { text: 't??m cadeia pequena e elevada volatilidade, contaminando a atmosfera local e regional em fun????o dos ventos nas orlas mar??timas.', correct: false },
    ]
  },




  
  {
    question: '(ENEM - 2020) O di??xido de carbono passa para o estado s??lido (gelo seco) a -78??C e retorna ao estado gasoso ?? temperatura ambiente. O g?? ?? facilmente solubilizado em ??gua, capaz de absorver radia????o infravermelha na superf??cie da terra e n??o conduz eletricidade. Ele ?? utilizado como mat??ria-prima para a fotoss??ntese at?? o limite de satura????o. Ap??s a fixa????o pelos organismos autotr??ficos, o g??s retorna ao meio ambiente pela respira????o aer??bica, fermenta????o, decomposi????o ou por res??duos industriais, queima de combust??veis f??sseis e queimadas. Apesar de sua import??ncia ecol??gica, seu excesso causa perturba????es no equil??brio ambiental.     \n\n\n Considerando as propriedades descritas, o aumento atmosf??rico da subst??ncia afetar?? os organismos aqu??ticos em raz??o de',

    resolution: 'O aumento de g??s carb??nico dissolvido na ??gua aumenta sua acidez, ou seja, diminui o potencial hidrogeni??nico (o pH). O aumento do pH da ??gua afeta os organismos aqu??ticos, pois pode reduzir a atividade de enzimas e outras atividades metab??licas desses seres, como a fixa????o de c??lcio, podendo tamb??m, em casos extremos, a morte de indiv??duos.',
    answers: [
      { text: 'redu????o do potencial hidrogeni??nico da ??gua', correct: true },
      { text: 'restri????o de aerobiose pelo excesso de poluentes.', correct: false },
      { text: 'diminui????o da emiss??o de oxig??nio pelos aut??trofos.', correct: false },
      { text: 'limita????o de transfer??ncia de energia entre os seres vivos.', correct: false },
      { text: 'retra????o dos oceanos pelo congelamento do g??s nos polos.', correct: false },
    ]
  },



  {
    question: '(ENEM - 2020) Grupos de prote????o ao meio ambiente conseguem resgatar muitas aves aqu??ticas v??timas de vazamentos de petr??leo. Essas aves s??o lavadas com ??gua e detergente neutro para a retirada completa do ??leo de seu corpo e, posteriormente, s??o aquecidas, medicadas, desintoxicadas e alimentadas. Mesmo ap??s esses cuidados, o retorno ao ambiente n??o pode ser imediato, pois elas precisam recuperar a capacidade de flutua????o.     \n\n\n Para flutuar, essas aves precisam    ',

    resolution: 'Ao serem lavadas com a solu????o de ??gua e detergente, a cera impermeabilizante ser?? dissolvida. Sendo assim, para que essas aves possam voltar para o ambiente aqu??tico ?? necess??rio que haja uma reposi????o dessa cera que ser?? naturalmente produzida pelo pr??prio animal.',
    answers: [
      { text: 'recuperar o t??nus muscular.       ', correct: false },
      { text: 'restaurar a massa corporal.       ', correct: false },
      { text: 'substituir as penas danificadas.       ', correct: false },
      { text: 'reestabelecer a capacidade de homeotermia.       ', correct: false },
      { text: 'refazer a camada de cera impermeabilizante das penas.       ', correct: true },
    ]
  },



  {
    question: '(ENEM - 2020) Na ind??stria farmac??utica, ?? muito comum o emprego de subst??ncias de revestimento em medicamentos de uso oral, pois trazem uma s??rie de benef??cios como altera????o de sabor em medicamentos que tenham gosto ruim, melhoria da assimila????o do composto, entre outras a????es. Alguns compostos polim??ricos ?? base do polissacar??deo celulose s??o utilizados para garantir que o f??rmaco somente seja liberado quando em contato com solu????es aquosas cujo pH se encontre pr??ximo da faixa da neutralidade.     \n\n\n Qual ?? a finalidade do uso desse revestimento ?? base de celulose?',

    resolution: 'Esse revestimento de celulose tem como finalidade garantir que as subst??ncias ativas do f??rmaco s?? seja liberada no intestino, onde o ph se encontra entre 7 e 8,5, pr??ximo ?? neutralidade. Isso evita que as subst??ncias sejam digeridas pelas secre????es g??stricas, n??o sendo aproveitados pelo organismo.',
    answers: [
      { text: 'Diminuir a absor????o do princ??pio ativo no intestino.', correct: false },
      { text: 'Impedir que o f??rmaco seja solubilizado no intestino.', correct: false },
      { text: 'Garantir que o f??rmaco n??o seja afetado pelas secre????es g??stricas.', correct: true },
      { text: 'Permitir a libera????o do princ??pio ativo pela a????o das amilases salivares.', correct: false },
      { text: 'Facilitar a libera????o do f??rmaco pela a????o dos sais biliares sobre o revestimento.', correct: false },
    ]
  },



  {
    question: '(ENEM - 2020) Institui????es acad??micas e de pesquisa no mundo est??o inserindo genes em genomas de plantas que possam codificar produtos de interesse farmacol??gico. No Brasil, est?? sendo desenvolvida uma variedade de soja com com um viricida ou microbicida capaz de prevenir a contamina????o pelo v??rus causador da aids. Essa leguminosa est?? sendo induzida a produzir a enzima cianovirina-N que tem efici??ncia comprovada contra o v??rus.     \n\n\n A t??cnica para gerar essa leguminosa ?? um exemplo de?',

    resolution: 'A transgenia ?? o processo de altera????o do material gen??tico de uma esp??cie pela introdu????o de uma ou mais sequ??ncias de genes provenientes de outra esp??cie. Alternativa Letra B.',
    answers: [
      { text: 'hibridismo.', correct: false },
      { text: 'transgenia.', correct: true },
      { text: 'conjuga????o.', correct: false },
      { text: 'terapia g??nica.', correct: false },
      { text: 'melhoramento gen??tico.', correct: false },
    ]
  },



  {
    question: '(ENEM - 2020) Aranhas, escorpi??es, carrapatos e ??caros s??o representantes da classe dos Aracn??deos. Esses animais s??o terrestres em sua grande maioria e ocupam os mais variados h??bitats, tais como montanhas altas, p??ntanos, desertos e solos arenosos. Podem ter sido os primeiros representantes do filo Arthropoda a habitar terra seca.     \n\n\n A caracter??stica que justifica o sucesso adaptativo desse grupo na ocupa????o do ambiente terrestre ?? a presen??a de',

    resolution: 'A conquista do ambiente terrestre por todas as esp??cies foi dependente principalmente de conseguir meios de sobreviver com cada vez menos acesso a ??gua. No caso dos Aracn??deos, um exoesqueleto que auxilia no controle da perda de ??gua para o ambiente foi fundamental. Alternativa Letra C',
    answers: [
      { text: 'quel??ceras e pedipalpos que coordenam o movimento corporal.       ', correct: false },
      { text: 'excre????o de ??cido ??rico que confere estabilidade ao pH corporal.', correct: false },
      { text: 'exoesqueleto constitu??do de quitina que auxilia no controle h??drico corporal.', correct: true },
      { text: 'circula????o sangu??nea aberta que impede a desidrata????o dos tecidos corporais.', correct: false },
      { text: 'sistema nervoso ganglionar que promove a coordena????o central do movimento corporal.', correct: false },
    ]
  },




  {
    question: '(ENEM - 2020) Pesquisadores dos Estados Unidos desenvolveram uma nova t??cnica, que utiliza raios de luz infravermelha (invis??veis a olho nu) para destruir tumores. Primeiramente o paciente recebe uma inje????o com vers??es modificadas de anticorpos que t??m a capacidade de "grudar" apenas nas c??lulas cancerosas. Sozinhos, eles n??o fazem nada contra o tumor. Entretanto, esses anticorpos est??o ligados a uma mol??cula denominada IR700, que funcionar?? como uma "microbomba", que ir?? destruir o c??ncer. Em seguida, o paciente recebe raios infravermelhos. Esses raios penetrem no corpo e chegam at?? a mol??cula IR700, que ?? ativada e libera uma subst??ncia que ataca a c??lula cancerosa..     \n\n\n Com bases nas etapas de desenvolvimento, o nome apropriado para a t??cnica descrita ??:    ',

    resolution: 'A fotoimunoterapia ?? um tratamento que utiliza raios de luz infravermelha para o combate ao c??ncer, t??cnica recente que foi elaborada para acabar com c??lulas cancer??genas, assim como a t??cnica ditada no enunciado.',
    answers: [
      { text: 'Radioterapia.', correct: false },
      { text: 'Cromoterapia.', correct: false },
      { text: 'Quimioterapia.', correct: false },
      { text: 'Fotoimunoterapia.', correct: true },
      { text: 'Terapia magn??tica.', correct: false },
    ]
  },




  {
    question: '(ENEM - 2020) Plantas pioneiras s??o as que iniciam o processo natural de cicatriza????o de uma ??rea desprovida de vegeta????o. Em geral, t??m pequeno porte e crescem muito r??pido, desenvolvem-se a pleno sol e s??o pouco exigentes quanto ??s condi????es do solo. Produzem grande quantidade de sementes e possuem ciclo de vida curto.     \n\n\n Essas plantas s??o importantes em um projeto de restaura????o ambiental, pois promovem, no solo    ',

    resolution: 'A esp??cie tratada na quest??o muito provavelmente ?? uma gram??nea que, por ser uma monocotiled??nea, possui raiz fasciculada e ?? capaz de segurar bastante ??gua do solo e com isso propicia que outras plantas que necessitem de uma maior demanda de ??gua possam se desenvolver no local.',
    answers: [
      { text: 'aumento da incid??ncia de luz solar.', correct: false },
      { text: 'diminui????o da absor????o de ??gua.', correct: false },
      { text: 'estabiliza????o da umidade.', correct: true },
      { text: 'eleva????o da temperatura.', correct: false },
      { text: 'libera????o de oxig??nio.', correct: false },
    ]
  },



  {
    question: '(ENEM - 2020) Plantas pioneiras s??o as que iniciam o processo natural de cicatriza????o de uma ??rea desprovida de vegeta????o. Em geral, t??m pequeno porte e crescem muito r??pido, desenvolvem-se a pleno sol e s??o pouco exigentes quanto ??s condi????es do solo. Produzem grande quantidade de sementes e possuem ciclo de vida curto.     \n\n\n Essas plantas s??o importantes em um projeto de restaura????o ambiental, pois promovem, no solo    ',

    resolution: 'A esp??cie tratada na quest??o muito provavelmente ?? uma gram??nea que, por ser uma monocotiled??nea, possui raiz fasciculada e ?? capaz de segurar bastante ??gua do solo e com isso propicia que outras plantas que necessitem de uma maior demanda de ??gua possam se desenvolver no local.',
    answers: [
      { text: 'aumento da incid??ncia de luz solar.', correct: false },
      { text: 'diminui????o da absor????o de ??gua.', correct: false },
      { text: 'estabiliza????o da umidade.', correct: true },
      { text: 'eleva????o da temperatura.', correct: false },
      { text: 'libera????o de oxig??nio.', correct: false },
    ]
  },




  {
    question: '(ENEM - 2020) Aranhas, escorpi??es, carrapatos e ??caros s??o representantes da classe dos Aracn??deos. Esses animais s??o terrestres em sua grande maioria e ocupam os mais variados h??bitats, tais como montanhas altas, p??ntanos, desertos e solos arenosos. Podem ter sido os primeiros. representantes do filo Arthropoda a habitar a terra seca.    \n\n\n A caracter??stica que justifica o sucesso adaptativo desse grupo na ocupa????o do ambiente terrestre ?? a presen??a de',

    resolution: 'O exoesqueleto dos aracn??deos (e demais artr??podes) evita a perda excessiva de ??gua permitindo a grande irradia????o adaptativa desses animais no ambiente terrestre.',
    answers: [
      { text: 'queliceras e pedipalpos que coordenam o movimento corporal.      ', correct: false },
      { text: 'excre????o de ??cido ??rico que confere estabilidade ao pH corporal.', correct: false },
      { text: 'exoesqueleto constitu??do de quitina que auxilia no controle h??drico corporal.', correct: true },
      { text: 'circula????o sangu??nea aberta que impede a desidrata????o dos tecidos corporais.', correct: false },
      { text: 'sistema nervoso ganglionar que promove a coordena????o central do movimento corporal', correct: false },
    ]
  },






























































  
]
