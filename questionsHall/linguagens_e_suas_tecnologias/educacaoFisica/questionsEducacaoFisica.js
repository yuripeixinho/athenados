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
    question: '(ENEM - 2016) A educa????o f??sica ensinada a jovens do ensino m??dio deve garantir o ac??mulo cultural no que tange ?? oportuniza????o de viv??ncia das pr??ticas corporais; a compreens??o do papel do corpo no mundo da produ????o, no que tange ao controle sobre o pr??prio esfor??o, e do direito ao repouso e ao lazer; a iniciativa pessoal nas articula????es coletivas relativas ??s pr??ticas corporais comunit??rias; a iniciativa pessoal para criar, planejar ou buscar orienta????o para suas pr??prias pr??ticas corporais; a interven????o pol??tica sobre as iniciativas p??blicas de esporte e de lazer. \n\n\n Segundo o texto, a educa????o f??sica visa propiciar ao indiv??duo oportunidades de aprender a conhecer e a perceber, de forma permanente e cont??nua, o seu pr??prio corpo, concebendo as pr??ticas corporais como meios para',

    resolution: 'Dentre outros benef??cios causados pela atividade f??sica est?? a intera????o social.',
    answers: [
      { text: 'ampliar a intera????o social.', correct: true },
      { text: 'atingir padr??es de beleza.', correct: false },
      { text: 'obter resultados de alta performance.', correct: false },
      { text: 'reproduzir movimentos predeterminados.', correct: false },
      { text: 'alcan??ar maior produtividade no trabalho.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2016) A perda de massa muscular ?? comum com a idade, por??m, ?? na faixa dos 60 anos que ela se torna clinicamente percept??vel e suas consequ??ncias come??am a incomodar no dia a dia, quando simples atos de subir escadas ou ir ?? padaria se tornam sacrif??cios. Esse processo tem nome: sarcopenia. Essa condi????o ocasiona a perda da for??a e qualidade dos m??sculos e tem um impacto significante na sa??de \n\n\n A sarcopenia ?? inerente ao envelhecimento, mas seu quadro e consequentes danos podem ser retardados com a pr??tica de exerc??cios f??sicos, cujos resultados mais r??pidos s??o alcan??ados com o(a)',

    resolution: 'Essa quest??o exige a correla????o de conhecimentos e interpreta????o de texto.  O enunciado quer saber como retardar os efeitos da sarcopenia ??? inerente ?? velhice ???  e seus consequentes danos, o texto traz informa????es sobre perda de massa muscular. Cabe ao candidato juntar todas essas informa????es e concluir que a resposta ?? ???C???, pois a consequ??ncia da muscula????o ?? o ganho de massa muscular.',
    answers: [
      { text: 'hidrogin??stica.', correct: false },
      { text: 'alongamento.', correct: false },
      { text: 'muscula????o.', correct: true },
      { text: 'corrida.', correct: false },
      { text: 'dan??a.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2016) ?? poss??vel considerar as modalidades esportivas coletivas dentro de uma mesma l??gica, pois possuem uma estrutura comum: seis princ??pios operacionais divididos em dois grupos, o ataque e a defesa. Os tr??s princ??pios operacionais de ataque s??o: conserva????o individual e coletiva da bola, progress??o da equipe com a posse da bola em dire????o ao alvo advers??rio e finaliza????o da jogada, visando a obten????o de ponto. Os tr??s princ??pios operacionais da defesa s??o: recupera????o da bola, impedimento do avan??o da equipe contr??ria com a posse da bola e prote????o do alvo para impedir a finaliza????o da equipe advers??ria. \n\n\n Considerando os princ??pios expostos no texto, o drible no handebol caracteriza o princ??pio de',

    resolution: 'No handebol, o drible serve para mostrar uma continuidade, uma sequencia????o da jogada; logo, isso revela o que a quest??o chama de progress??o.',
    answers: [
      { text: 'recupera????o da bola.', correct: false },
      { text: 'progress??o da equipe.', correct: true },
      { text: 'finaliza????o da jogada.', correct: false },
      { text: 'prote????o do pr??prio alvo.', correct: false },
      { text: 'impedimento do avan??o advers??rio.', correct: false },
    ]
  },

  {
    question: '(Enem 2020) Uma das mais contundentes cr??ticas ao discurso da aptid??o f??sica relacionada ?? sa??de est?? no car??ter eminentemente individual de suas propostas, o que serve para obscurecer outros determinantes da sa??de. Ou seja, costuma-se apresentar o indiv??duo como o problema e a mudan??a do estilo de vida como a solu????o. Argumenta-se ainda que o movimento da aptid??o f??sica relacionada ?? sa??de considera a exist??ncia de uma cultura homog??nea na qual todos seriam livres para escolher seus estilos de vida, o que n??o condiz com a realidade. O fato ?? que vivemos numa sociedade dividida em classes sociais, na qual nem todas as pessoas t??m condi????es econ??micas para adotar um estilo de vida ativo e saud??vel. H?? desigualdades estruturais com ra??zes pol??ticas, econ??micas e sociais que dificultam a ado????o desses estilos de vida. \n\n\n Com base no texto, a rela????o entre sa??de e estilos de vida',

    resolution: 'O ??ltimo per??odo do texto (???H?? desigualdades estruturais com ra??zes pol??ticas, econ??micas e sociais que dificultam a ado????o desses estilos de vida.???) reproduz, por par??frase, o que est?? contido na letra D.',
    answers: [
      { text: 'constr??i a ideia de que a mudan??a individual de h??bitos promove a sa??de.', correct: false },
      { text: 'considera a homogeneidade da escolha de h??bitos saud??veis pelos indiv??duos.', correct: false },
      { text: 'refor??a a necessidade de solucionar os problemas de sa??de da sociedade com a pr??tica de exerc??cios.', correct: false },
      { text: 'problematiza a organiza????o social e seu impacto na mudan??a de h??bitos dos indiv??duos.', correct: true },
      { text: 'reproduz a no????o de que a melhoria da aptid??o f??sica pela pr??tica de exerc??cios promove a sa??de.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) LUTA: pr??tica corporal imprevis??vel, caracterizada por determinado estado de contato proposital, que possibilita a duas ou mais pessoas se enfrentarem numa constante troca de a????es ofensivas e/ou defensivas, regidas por regras, com o objetivo m??tuo sobre um alvo m??vel personificado no oponente. \n\n\n De acordo com o texto, podemos identificar uma abordagem das lutas nas aulas de educa????o f??sica quando o professor realiza uma proposta envolvendo',

    resolution: 'Nessa quest??o de infer??ncia, devem-se relacionar as informa????es sobre luta apresentadas pelo texto ao trabalho do professor de educa????o f??sica. Assim, revestida de inten????o pedag??gica, a luta se converte em atividade dotada de um sistema de regras e valores que s??o transmitidos aos alunos e ??s alunas.',
    answers: [
      { text: 'contato corporal intenso entre o aluno e seu oponente.', correct: false },
      { text: 'contenda entre os alunos que se agridem fisicamente.', correct: false },
      { text: 'confronto corporal em que os vencedores s??o previamente identificados.', correct: false },
      { text: 'combate corporal intencional com a????es regulamentadas entre os oponentes.', correct: true },
      { text: 'conflito resolvido pelos alunos por meio de regras previamente estabelecidas.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) \n\n  M??dias: aliadas ou inimigas da educa????o f??sica escolar? \n\n No caso do esporte, a media????o efetuada pela c??mera de TV construiu uma nova modalidade de consumo: o esporte telespet??culo, realidade textual relativamente aut??noma face ?? pr??tica ???real??? do esporte, constru??da pela codifica????o e media????o dos eventos esportivos efetuados pelo enquadramento, edi????o das imagens e coment??rios, interpretando para o espectador o que ele est?? vendo. Esse fen??meno tende a valorizar a forma em rela????o ao conte??do, e para tal faz uso privilegiado da linguagem audiovisual com ??nfase na imagem cujas possibilidades s??o levadas cada vez mais adiante, em decorr??ncia dos avan??os tecnol??gicos. Por outro lado, a narra????o esportiva prop??e uma concep????o hegem??nica de esporte: esporte ?? esfor??o m??ximo, busca da vit??ria, dinheiro... O pre??o que se paga por sua espetaculariza????o ?? a fragmenta????o do fen??meno esportivo. A experi??ncia global do ser-atleta ?? modificada: a sociabiliza????o no confronto e a ludicidade n??o s??o viv??ncias privilegiadas no enfoque das m??dias, mas as eventuais manifesta????es de viol??ncia, em partidas de futebol, por exemplo, s??o exibidas e reexibidas em todo o mundo. \n\n\n A reflex??o trazida pelo texto, que aborda o esporte telespet??culo, est?? fundamentada na',

    resolution: 'A distor????o da experi??ncia do ser-atleta para os espectadores est?? sugerida no texto quando o autor ressalta que as manifesta????es de viol??ncia s??o privilegiadas em rela????o a, por exemplo, sociabiliza????o e ludicidade. Para o espectador, assim, a imagem que sobressai ?? o contexto da viol??ncia.',
    answers: [
      { text: 'distor????o da experi??ncia do ser-atleta para os espectadores.', correct: true },
      { text: 'interpreta????o dos espectadores sobre o conte??do transmitido.', correct: false },
      { text: 'utiliza????o de equipamentos audiovisuais de ??ltima gera????o.', correct: false },
      { text: 'valoriza????o de uma vis??o ampliada do esporte.', correct: false },
      { text: 'equipara????o entre a forma e o conte??do.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) \n\n Esporte e cultura: an??lise acerca da esportiviza????o de pr??ticas corporais nos jogos ind??genas. \n\n Nos Jogos dos Povos Ind??genas, observa-se que as pr??ticas corporais realizadas envolvem elementos tradicionais (como as pinturas e adornos corporais) e modernos (como a regulamenta????o, a fiscaliza????o e a padroniza????o). O arco e flecha e a lan??a, por exemplo, s??o instrumentos tradicionalmente utilizados para a ca??a e a defesa da comunidade na aldeia. Na ocasi??o do evento, esses artefatos foram produzidos pela pr??pria etnia, por??m sua estrutura????o como ???modalidade esportiva??? promoveu uma semelhan??a entre as t??cnicas apresentadas, com o sentido ??nico da competi????o. \n\n\n A rela????o entre os elementos tradicionais e modernos nos Jogos dos Povos Ind??genas desencadeou a',

    resolution: 'O arco e flecha foram deslocados da ca??a e da pesca (caracter??sticos do cotidiano ind??gena) para se tornarem uma modalidade esportiva.',
    answers: [
      { text: 'padroniza????o de pinturas e adornos corporais.', correct: false },
      { text: 'sobreposi????o de elementos tradicionais sobre os modernos.', correct: false },
      { text: 'individua????o das t??cnicas apresentadas em diferentes modalidades.', correct: false },
      { text: 'legitima????o das pr??ticas corporais ind??genas como modalidade esportiva.', correct: true },
      { text: 'preserva????o dos significados pr??prios das pr??ticas corporais em cada cultura', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) \n\n Educa????o para a sa??de mediante programas de educa????o f??sica escolar \n\n A educa????o para a sa??de dever?? ser alcan??ada mediante intera????o de a????es que possam envolver o pr??prio homem mediante suas atitudes frente ??s exig??ncias ambientais representadas pelos h??bitos alimentares, estado de estresse, op????es de lazer, atividade f??sica, agress??es clim??ticas etc. Dessa forma, parece evidente que o estado de ser saud??vel n??o ?? algo est??tico. Pelo contr??rio, torna-se necess??rio adquiri-lo e constru??-lo de forma individualizada constantemente ao longo de toda a vida, apontando para o fato de que sa??de ?? educ??vel e, portanto, deve ser tratada n??o apenas com base em referenciais de natureza biol??gica e higienista, mas sobretudo em um contexto did??tico-pedag??gico. \n\n\n A educa????o para a sa??de pressup??e a ado????o de comportamentos com base na intera????o de fatores relacionados ??.',

    resolution: 'A educa????o para a sa??de, segundo o texto, envolve pr??ticas como ???atitudes frente ??s exig??ncias ambientais representadas pelos h??bitos alimentares, estado de estresse, op????es de lazer, atividade f??sica, agress??es clim??ticas???, que constituem h??bitos saud??veis.',
    answers: [
      { text: 'ades??o a programas de lazer.', correct: false },
      { text: 'op????o por dietas balanceadas.', correct: false },
      { text: 'constitui????o de h??bitos saud??veis.', correct: true },
      { text: 'evas??o de ambientes estressores.', correct: false },
      { text: 'realiza????o de atividades f??sicas regulares', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) No Brasil, a dissemina????o de uma expectativa de corpo com base na est??tica da magreza ?? bastante grande e apresenta uma enorme repercuss??o, especialmente, se considerada do ponto de vista da realiza????o pessoal. Em pesquisa feita na cidade de S??o Paulo, aparecem os percentuais de 90% entre as mulheres pesquisadas que se dizem preocupadas com seu peso corporal, sendo que 95% se sentem insatisfeitas com ???seu pr??prio corpo???. \n\n\n A preocupa????o excessiva com o ???peso??? corporal pode provocar o desenvolvimento de dist??rbios associados diretamente ?? imagem do corpo, tais como',

    resolution: 'Tendo em vista os conceitos biol??gicos relacionados ao processo de dist??rbios alimentares associados ?? imagem corporal, destacam-se a anorexia e a bulimia.',
    answers: [
      { text: 'anorexia e bulimia.', correct: true },
      { text: 'ortorexia e vigorexia.', correct: false },
      { text: 'ansiedade e depress??o.', correct: false },
      { text: 'sobrepeso e fobia social.', correct: false },
      { text: 'sedentarismo e obesidade.', correct: false },
    ]
  },

  



































  
]
