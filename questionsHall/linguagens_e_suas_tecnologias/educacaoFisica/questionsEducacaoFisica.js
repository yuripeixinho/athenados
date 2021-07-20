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
    question: '(ENEM - 2016) A educação física ensinada a jovens do ensino médio deve garantir o acúmulo cultural no que tange à oportunização de vivência das práticas corporais; a compreensão do papel do corpo no mundo da produção, no que tange ao controle sobre o próprio esforço, e do direito ao repouso e ao lazer; a iniciativa pessoal nas articulações coletivas relativas às práticas corporais comunitárias; a iniciativa pessoal para criar, planejar ou buscar orientação para suas próprias práticas corporais; a intervenção política sobre as iniciativas públicas de esporte e de lazer. \n\n\n Segundo o texto, a educação física visa propiciar ao indivíduo oportunidades de aprender a conhecer e a perceber, de forma permanente e contínua, o seu próprio corpo, concebendo as práticas corporais como meios para',

    resolution: 'Dentre outros benefícios causados pela atividade física está a interação social.',
    answers: [
      { text: 'ampliar a interação social.', correct: true },
      { text: 'atingir padrões de beleza.', correct: false },
      { text: 'obter resultados de alta performance.', correct: false },
      { text: 'reproduzir movimentos predeterminados.', correct: false },
      { text: 'alcançar maior produtividade no trabalho.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2016) A perda de massa muscular é comum com a idade, porém, é na faixa dos 60 anos que ela se torna clinicamente perceptível e suas consequências começam a incomodar no dia a dia, quando simples atos de subir escadas ou ir à padaria se tornam sacrifícios. Esse processo tem nome: sarcopenia. Essa condição ocasiona a perda da força e qualidade dos músculos e tem um impacto significante na saúde \n\n\n A sarcopenia é inerente ao envelhecimento, mas seu quadro e consequentes danos podem ser retardados com a prática de exercícios físicos, cujos resultados mais rápidos são alcançados com o(a)',

    resolution: 'Essa questão exige a correlação de conhecimentos e interpretação de texto.  O enunciado quer saber como retardar os efeitos da sarcopenia – inerente à velhice –  e seus consequentes danos, o texto traz informações sobre perda de massa muscular. Cabe ao candidato juntar todas essas informações e concluir que a resposta é “C”, pois a consequência da musculação é o ganho de massa muscular.',
    answers: [
      { text: 'hidroginástica.', correct: false },
      { text: 'alongamento.', correct: false },
      { text: 'musculação.', correct: true },
      { text: 'corrida.', correct: false },
      { text: 'dança.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2016) É possível considerar as modalidades esportivas coletivas dentro de uma mesma lógica, pois possuem uma estrutura comum: seis princípios operacionais divididos em dois grupos, o ataque e a defesa. Os três princípios operacionais de ataque são: conservação individual e coletiva da bola, progressão da equipe com a posse da bola em direção ao alvo adversário e finalização da jogada, visando a obtenção de ponto. Os três princípios operacionais da defesa são: recuperação da bola, impedimento do avanço da equipe contrária com a posse da bola e proteção do alvo para impedir a finalização da equipe adversária. \n\n\n Considerando os princípios expostos no texto, o drible no handebol caracteriza o princípio de',

    resolution: 'No handebol, o drible serve para mostrar uma continuidade, uma sequenciação da jogada; logo, isso revela o que a questão chama de progressão.',
    answers: [
      { text: 'recuperação da bola.', correct: false },
      { text: 'progressão da equipe.', correct: true },
      { text: 'finalização da jogada.', correct: false },
      { text: 'proteção do próprio alvo.', correct: false },
      { text: 'impedimento do avanço adversário.', correct: false },
    ]
  },

  {
    question: '(Enem 2020) Uma das mais contundentes críticas ao discurso da aptidão física relacionada à saúde está no caráter eminentemente individual de suas propostas, o que serve para obscurecer outros determinantes da saúde. Ou seja, costuma-se apresentar o indivíduo como o problema e a mudança do estilo de vida como a solução. Argumenta-se ainda que o movimento da aptidão física relacionada à saúde considera a existência de uma cultura homogênea na qual todos seriam livres para escolher seus estilos de vida, o que não condiz com a realidade. O fato é que vivemos numa sociedade dividida em classes sociais, na qual nem todas as pessoas têm condições econômicas para adotar um estilo de vida ativo e saudável. Há desigualdades estruturais com raízes políticas, econômicas e sociais que dificultam a adoção desses estilos de vida. \n\n\n Com base no texto, a relação entre saúde e estilos de vida',

    resolution: 'O último período do texto (“Há desigualdades estruturais com raízes políticas, econômicas e sociais que dificultam a adoção desses estilos de vida.”) reproduz, por paráfrase, o que está contido na letra D.',
    answers: [
      { text: 'constrói a ideia de que a mudança individual de hábitos promove a saúde.', correct: false },
      { text: 'considera a homogeneidade da escolha de hábitos saudáveis pelos indivíduos.', correct: false },
      { text: 'reforça a necessidade de solucionar os problemas de saúde da sociedade com a prática de exercícios.', correct: false },
      { text: 'problematiza a organização social e seu impacto na mudança de hábitos dos indivíduos.', correct: true },
      { text: 'reproduz a noção de que a melhoria da aptidão física pela prática de exercícios promove a saúde.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) LUTA: prática corporal imprevisível, caracterizada por determinado estado de contato proposital, que possibilita a duas ou mais pessoas se enfrentarem numa constante troca de ações ofensivas e/ou defensivas, regidas por regras, com o objetivo mútuo sobre um alvo móvel personificado no oponente. \n\n\n De acordo com o texto, podemos identificar uma abordagem das lutas nas aulas de educação física quando o professor realiza uma proposta envolvendo',

    resolution: 'Nessa questão de inferência, devem-se relacionar as informações sobre luta apresentadas pelo texto ao trabalho do professor de educação física. Assim, revestida de intenção pedagógica, a luta se converte em atividade dotada de um sistema de regras e valores que são transmitidos aos alunos e às alunas.',
    answers: [
      { text: 'contato corporal intenso entre o aluno e seu oponente.', correct: false },
      { text: 'contenda entre os alunos que se agridem fisicamente.', correct: false },
      { text: 'confronto corporal em que os vencedores são previamente identificados.', correct: false },
      { text: 'combate corporal intencional com ações regulamentadas entre os oponentes.', correct: true },
      { text: 'conflito resolvido pelos alunos por meio de regras previamente estabelecidas.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) \n\n  Mídias: aliadas ou inimigas da educação física escolar? \n\n No caso do esporte, a mediação efetuada pela câmera de TV construiu uma nova modalidade de consumo: o esporte telespetáculo, realidade textual relativamente autônoma face à prática “real” do esporte, construída pela codificação e mediação dos eventos esportivos efetuados pelo enquadramento, edição das imagens e comentários, interpretando para o espectador o que ele está vendo. Esse fenômeno tende a valorizar a forma em relação ao conteúdo, e para tal faz uso privilegiado da linguagem audiovisual com ênfase na imagem cujas possibilidades são levadas cada vez mais adiante, em decorrência dos avanços tecnológicos. Por outro lado, a narração esportiva propõe uma concepção hegemônica de esporte: esporte é esforço máximo, busca da vitória, dinheiro... O preço que se paga por sua espetacularização é a fragmentação do fenômeno esportivo. A experiência global do ser-atleta é modificada: a sociabilização no confronto e a ludicidade não são vivências privilegiadas no enfoque das mídias, mas as eventuais manifestações de violência, em partidas de futebol, por exemplo, são exibidas e reexibidas em todo o mundo. \n\n\n A reflexão trazida pelo texto, que aborda o esporte telespetáculo, está fundamentada na',

    resolution: 'A distorção da experiência do ser-atleta para os espectadores está sugerida no texto quando o autor ressalta que as manifestações de violência são privilegiadas em relação a, por exemplo, sociabilização e ludicidade. Para o espectador, assim, a imagem que sobressai é o contexto da violência.',
    answers: [
      { text: 'distorção da experiência do ser-atleta para os espectadores.', correct: true },
      { text: 'interpretação dos espectadores sobre o conteúdo transmitido.', correct: false },
      { text: 'utilização de equipamentos audiovisuais de última geração.', correct: false },
      { text: 'valorização de uma visão ampliada do esporte.', correct: false },
      { text: 'equiparação entre a forma e o conteúdo.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) \n\n Esporte e cultura: análise acerca da esportivização de práticas corporais nos jogos indígenas. \n\n Nos Jogos dos Povos Indígenas, observa-se que as práticas corporais realizadas envolvem elementos tradicionais (como as pinturas e adornos corporais) e modernos (como a regulamentação, a fiscalização e a padronização). O arco e flecha e a lança, por exemplo, são instrumentos tradicionalmente utilizados para a caça e a defesa da comunidade na aldeia. Na ocasião do evento, esses artefatos foram produzidos pela própria etnia, porém sua estruturação como “modalidade esportiva” promoveu uma semelhança entre as técnicas apresentadas, com o sentido único da competição. \n\n\n A relação entre os elementos tradicionais e modernos nos Jogos dos Povos Indígenas desencadeou a',

    resolution: 'O arco e flecha foram deslocados da caça e da pesca (característicos do cotidiano indígena) para se tornarem uma modalidade esportiva.',
    answers: [
      { text: 'padronização de pinturas e adornos corporais.', correct: false },
      { text: 'sobreposição de elementos tradicionais sobre os modernos.', correct: false },
      { text: 'individuação das técnicas apresentadas em diferentes modalidades.', correct: false },
      { text: 'legitimação das práticas corporais indígenas como modalidade esportiva.', correct: true },
      { text: 'preservação dos significados próprios das práticas corporais em cada cultura', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) \n\n Educação para a saúde mediante programas de educação física escolar \n\n A educação para a saúde deverá ser alcançada mediante interação de ações que possam envolver o próprio homem mediante suas atitudes frente às exigências ambientais representadas pelos hábitos alimentares, estado de estresse, opções de lazer, atividade física, agressões climáticas etc. Dessa forma, parece evidente que o estado de ser saudável não é algo estático. Pelo contrário, torna-se necessário adquiri-lo e construí-lo de forma individualizada constantemente ao longo de toda a vida, apontando para o fato de que saúde é educável e, portanto, deve ser tratada não apenas com base em referenciais de natureza biológica e higienista, mas sobretudo em um contexto didático-pedagógico. \n\n\n A educação para a saúde pressupõe a adoção de comportamentos com base na interação de fatores relacionados à.',

    resolution: 'A educação para a saúde, segundo o texto, envolve práticas como “atitudes frente às exigências ambientais representadas pelos hábitos alimentares, estado de estresse, opções de lazer, atividade física, agressões climáticas”, que constituem hábitos saudáveis.',
    answers: [
      { text: 'adesão a programas de lazer.', correct: false },
      { text: 'opção por dietas balanceadas.', correct: false },
      { text: 'constituição de hábitos saudáveis.', correct: true },
      { text: 'evasão de ambientes estressores.', correct: false },
      { text: 'realização de atividades físicas regulares', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) No Brasil, a disseminação de uma expectativa de corpo com base na estética da magreza é bastante grande e apresenta uma enorme repercussão, especialmente, se considerada do ponto de vista da realização pessoal. Em pesquisa feita na cidade de São Paulo, aparecem os percentuais de 90% entre as mulheres pesquisadas que se dizem preocupadas com seu peso corporal, sendo que 95% se sentem insatisfeitas com “seu próprio corpo”. \n\n\n A preocupação excessiva com o “peso” corporal pode provocar o desenvolvimento de distúrbios associados diretamente à imagem do corpo, tais como',

    resolution: 'Tendo em vista os conceitos biológicos relacionados ao processo de distúrbios alimentares associados à imagem corporal, destacam-se a anorexia e a bulimia.',
    answers: [
      { text: 'anorexia e bulimia.', correct: true },
      { text: 'ortorexia e vigorexia.', correct: false },
      { text: 'ansiedade e depressão.', correct: false },
      { text: 'sobrepeso e fobia social.', correct: false },
      { text: 'sedentarismo e obesidade.', correct: false },
    ]
  },

  



































  
]
