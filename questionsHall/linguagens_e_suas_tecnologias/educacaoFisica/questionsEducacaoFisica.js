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

    resolution: 'A repetição das palavras durante o texto ressalta coisas importantes por detrás do ato. Pois a repetição está acentuando a questão da futilidade do discurso raso e repetitivo, sem profundidade, do poder enquanto capital financeiro "está chovendo dinheiro',
    answers: [
      { text: 'contato corporal intenso entre o aluno e seu oponente.', correct: true },
      { text: 'contenda entre os alunos que se agridem fisicamente.', correct: false },
      { text: 'confronto corporal em que os vencedores são previamente identificados.', correct: false },
      { text: 'combate corporal intencional com ações regulamentadas entre os oponentes.', correct: false },
      { text: 'criticam os estereótipos sociais das visões de mundo elitistas.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) \n\n LUTA: prática corporal imprevisível, caracterizada por determinado estado de contato proposital, que possibilita a duas ou mais pessoas se enfrentarem numa constante troca de ações ofensivas e/ou defensivas, regida por regras, com o objetivo mútuo sobre um alvo móvel personificado no oponente. \n\n\n De acordo com o texto, podemos identificar uma abordagem das lutas nas aulas de educação física quando o professor realiza uma proposta envolvendo',

    resolution: 'Conforme a definição apresentada pela questão, a luta, como prática esportiva, implica um conjunto sistematizado de regras em que os objetivos são predeterminados no sentido de garantir disputas éticas, cuja finalidade é o treinamento do corpo e da mente. Por ser organizada pelo professor de educação física, ela é intencional e se difere das brigas, não há conflito, e sim esporte.',
    answers: [
      { text: 'contato corporal intenso entre o aluno e seu oponente.', correct: false },
      { text: 'contenda entre os alunos que se agridem fisicamente.', correct: false },
      { text: 'confronto corporal em que os vencedores são previamente identificados.', correct: false },
      { text: 'combate corporal intencional com ações regulamentadas entre os oponentes.', correct: true },
      { text: 'conflito resolvido pelos alunos por meio de regras previamente estabelecidas.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) A vida às vezes é como um jogo brincado na rua: estamos no último minuto de uma brincadeira bem quente e não sabemos que a qualquer momento pode chegar um mais velho a avisar que a brincadeira já acabou e está na hora de jantar. A vida afinal acontece muito de repente — nunca ninguém nos avisou que aquele era mesmo o último Carnaval da Vitória. O Carnaval também chegava sempre de repente. Nós, as crianças, vivíamos num tempo fora do tempo, sem nunca sabermos dos calendários de verdade. [...] O "dia da véspera do Carnaval", como dizia a avó Nhé, era dia de confusão com roupas e pinturas a serem preparadas, sonhadas e inventadas. Mas quando acontecia era um dia rápido, porque os dias mágicos passam depressa deixando marcas fundas na nossa memória, que alguns chamam também do coração. \n\n\n As signficações afetivas engendradas no fragmento pressupõem o reconhecimento da',

    resolution: 'No fragmento, o narrador assume a perspectiva infantil ao descrever as brincadeiras que vivia na época de criança, além de utilizar "nós, as crianças" em determinado momento do texto, evidenciando ainda mais essa perspectiva assumida por ele ao longo do texto.',
    answers: [
      { text: 'perspectiva infantil assumida pela voz narrativa.', correct: true },
      { text: 'suspensão da linearidade temporal da narração.', correct: false },
      { text: 'tentativa de materializar lembranças da infância.', correct: false },
      { text: 'incidência da memória sobre as imagens narradas.', correct: false },
      { text: 'alternância entre impressões subjetivas e relatos factuais.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) \n\n Leandro Aparecido Ferreira, o MC Fioti, compôs em 2017 a música Bum bum tam tam, que gerou, em nove meses, 480 milhões de visualizações do YouTube. É o funk brasileiro mais ouvido na história do site. \n\n A partir de uma gravação da flauta que achou na internet, MC Fioti fez tudo sozinho: compôs, cantou e produziu em uma noite só. "Comecei a pesquisar alguns tipos de flauta, coisas antigas. E nisso eu achei a flautinha do Sebastian Bach", conta. A descoberta foi por acaso: Fioti não sabia quem era o músico alemão e não sabe tocar o instrumento. \n\n A "flauta envolvente" da música é um trecho da Partita em Lá menor, escrita pelo alemão Johann Sebastian Bach por volta de 1723.',

    resolution: 'A proposta de “Bum bum tam tam” é a de mistura de linguagens advindas de meios culturais muito diferentes: a música erudita europeia do século XVIII e as linguagens da favela brasileira contemporânea, que constituem uma inovação no plano musical, com novas e inusitadas sonoridades. A utilização da música distante não é desintencional, pois era o que Mc Fioti buscava, apesar de desconhecer Bach.',
    answers: [
      { text: 'conto, pois exibe a história de vida de Joanie Simpson.', correct: false },
      { text: 'depoimento, pois expõe o sofrimento da dona do animal.', correct: false },
      { text: 'reportagem, pois discute cientificamente a cardiomiopatia.', correct: false },
      { text: 'relato, pois narra um fato estressante vivido pela paciente.', correct: false },
      { text: 'notícia, pois divulga fatos sobre a síndrome do coração partido.', correct: true },
    ]
  },

  {
    question: '(ENEM - 2020) \n\n Por que a indústria do empreendedorismo de palco irá destruir você \n\n Se, antigamente, os livros, enormes, e com suas setecentas páginas, cuspiam fórmulas, equações e cálculos que te ensinavam a lidar com o fluxo de caixa da sua empresa, hoje eles dizem: "Você irá chegar lá! Acredite, você irá vencer!". \n\n Mindset, empoderamento, millenials, networking, coworking, deal, business, deadline, salesman, com perfil hunter...tudo isso faz parte do seu vocabulário. O pacote de livros é sempre idêntico e as experiências são passadas da mesma forma: você está a um único centímetro da vitória. Não pare! \n\n Se desistir agora, será para sempre. Tome, leia a estratégia do oceano azul. Faça mais uma mentoria, participe de mais uma sessão de coaching. O problema é que o seu mindset não está ajustado. Você precisa ser mais proativo. Vamos fazer mais um powermind? Eu consigo um precinho bacana para você... \n\n\n De acordo com o texto, é possível identificar o "empreendedor de palco" por',

    resolution: 'O empreendedor de palco ele possui um padrão de linguagem, não só ao falar as palavras em Inglês, mas ter, na ponta da língua, os motivos do sucesso não ter sido alcançado, portanto letra D.',
    answers: [
      { text: 'livros por ele indicados.', correct: false },
      { text: 'suas habilidades em língua inglesa.', correct: false },
      { text: 'experiências por ele compartilhadas.', correct: false },
      { text: 'padrões de linguagem por ele utilizados.', correct: true },
      { text: 'preços acessíveis de seus treinamentos.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) Em 2000 tivermos a primeira experiência do futebol feminino em um jogo de videogame, o Mia Hamm Soccer. Doze anos depois, uma petição on-line pedia que a EA Sports incluísse o futebol feminino no Fifa 13. Contudo, só em 2015, com uma nova petição on-line, que arrecadou milhares de assinaturas, tivemos o futebol feminino incluído no Fifa 16. Vendo um nicho de mercado inexplorado, a EA Sports produziu o jogo com 12 seleções femininas e o apresentou como invação. A empresa sabe que mais de 40% dos praticantes de futebol nos EUA são meninas. Para elas, ver o futebol feminino representado em um jogo de videogame é extremamente importante. Ter o futebol feminino no Fifa 16 é um grande passo para a sua popularização na luta pela igualdade de gênero, num contexto machista, sexista, misôgino e homofóbico. \n\n\n Os jogos eletrônicos presentes na cultura juvenil podem desempenhar uma relevante função na abordagem do futebol ao',

    resolution: 'Como não há narração de uma história, o texto não pode ser um conto, bem como não aparece predominância da 1ª pessoa, característica importante de depoimentos e relatos. O texto apresenta características que são observadas nas notícias, como objetividade na linguagem, relato dos fatos ocorridos de maneira direta e descritiva, sem a presença de uma opinião, apenas relatando o fato, diferentemente da reportagem, onde o relato é mais extenso e aprofundado e menos objetivo, mais subjetivo, fazendo com que a letra [E] se apresente como a correta, pois o texto descreve e divulga um caso de síndrome do coração partido de forma clara.',
    answers: [
      { text: 'disseminarem uma modalidade, promovendo a igualdade de gênero.', correct: true },
      { text: 'superarem jogos malsucedidos no mercado, lançados anteriormente.', correct: false },
      { text: 'inovarem a modalidade com novas ofertas de jogos ao mercado.', correct: false },
      { text: 'explorarem nichos de mercado antes ignorados, produzindo mais lucro.', correct: false },
      { text: 'reforçarem estereótipos de gênero masculino ou feminino nos esportes.', correct: false },
    ]
  },

  



































  
]
