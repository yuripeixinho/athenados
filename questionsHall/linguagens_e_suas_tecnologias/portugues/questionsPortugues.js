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
    question: '(ENEM - 2020) \n\n Mulher tem coração clinicamente partido após morte de cachorro \n\n Como explica o The New England Journal of Medicine, a peciente, chamada Joanie Simpson, tinha sinais de infarto, como dores no peito e pressão alta, e apresentava problemas nas artérias coronárias. Ao fazerem um ecocardiograma, os médicos encontraram o problema: cardiomiopatia de Takotsubo, conhecida como síndrome do coração partido. \n\n Essa condição médica tipicamente acontece com mulheres em fase pós-menstrual e pode ser precedida por um evento muito estressante ou emotivo. Nesses casos, o coração apresenta um movimento discinético transitório da parede anterior do ventrículo esquerdo, com acentuação da cinética da base ventricular, de acordo com um artigo médico brasileiro que relata um caso semelhante. Simpson foi encaminhada para casa após dois dias e passou a tomar medicamentos regulares. \n\n Ao Washington Post, ela contou que estava quase inconsolável após a perda do seu animal de estimação, um cão da raça yokshire terrier. Recuperada após cerca de um ano, ela diz que não abrirá mão de ter um animal de estimação porque aprecia a companhia e o amor que os cachorros dão aos humanos. O caso aconteceu em Houston, nos Estados Unidos. \n\n\n Pelas características do texto lido, que trata das consquências da perda de um animal de estimação, considera-se que ele se enquadra no gênero',

    resolution: 'Como não há narração de uma história, o texto não pode ser um conto, bem como não aparece predominância da 1ª pessoa, característica importante de depoimentos e relatos. O texto apresenta características que são observadas nas notícias, como objetividade na linguagem, relato dos fatos ocorridos de maneira direta e descritiva, sem a presença de uma opinião, apenas relatando o fato, diferentemente da reportagem, onde o relato é mais extenso e aprofundado e menos objetivo, mais subjetivo, fazendo com que a letra [E] se apresente como a correta, pois o texto descreve e divulga um caso de síndrome do coração partido de forma clara.',
    answers: [
      { text: 'conto, pois exibe a história de vida de Joanie Simpson.', correct: false },
      { text: 'depoimento, pois expõe o sofrimento da dona do animal.', correct: false },
      { text: 'reportagem, pois discute cientificamente a cardiomiopatia.', correct: false },
      { text: 'relato, pois narra um fato estressante vivido pela paciente.', correct: false },
      { text: 'notícia, pois divulga fatos sobre a síndrome do coração partido.', correct: true },
    ]
  },

  {
    question: '(ENEM - 2020) Fomos falar com o tal encarregado, depois com um engenheiro, depois com um supervisor que mandou chamar um engenheiro da nossa companhia. Esses homens são da sua companhia, engenheiro, ele falou, estão pedindo a conta. A companhia estava empenhada nessa ponte, gente, falou o engenheiro, vocês não podem sair assim sem mais nem menos. Tinha uma serra circular cortando uns caibros ali perto, então só dava pra falar quando a serra parava, e aquilo foi dando nos nervos. \n\n Falei que a gente tinha o direito de sair quando a gente quisesse, e pronto. Nisso encostou um sujeito de paletó mas sem gravata, o engenheiro continuou falando e a serra cortando. Quando ele parou de falar, 50 Volts aproveitou uma parada da serra e falou que a gente não era bicho pra trabalhar daquele jeito; daí o supervisor falou que, se era falta de mulher, eles davam um jeito. O engenheiro falou que tinha mais de vinte companhias trabalhando na ponte, a maioria com prejuízo, porque era mais uma questão de honra, a gente tinha que acabar a ponte, a nossa companhia nunca ia esquecer nosso trabalho ali naquela ponte, um orgulho nacional.',

    resolution: 'O argumento mais forte por parte do engenheiro diante dos trabalhadores, passa pela reivindicação de uma “honra”, que associa a imagem da empresa À imagem da pátria - ambas mediadas pelo (falso) orgulho diante dos operários. Esse tipo de associação confirma um apelo interessado em neutralizar as insatisfações do proletariado em questão.',
    answers: [
      { text: 'sequência de atribuição de responsabilidades e de poder decisório a terceiros.', correct: false },
      { text: 'solicitação em nome dos prejuízos e compromissos para entrega da obra.', correct: false },
      { text: 'intimidação pela discreta presença de um agente de segurança na cena.', correct: false },
      { text: 'promessa de imediato atendimento da carência sexual dos operários.', correct: false },
      { text: 'apelo pela identificação com a empresa extensiva ao amor patriótico.', correct: true },
    ]
  },

  {
    question: '(ENEM - 2020) Chiquito tinha quase trinta quando conheceu Mariana num baile de casamento na Forquilha, onde moravam uns parentes dele. Por lá foi ficando, remanchando. Fez mal à moça, como costumavam dizer, tiveram de casar às pressas. Morou uns tempos com o sogro, descombinaram. Foi só conta de colher o milho e vender. Mudou para casa do velho Chico Lourenço [seu pai]. Fumaça própria só viu subir um par de anos depois, quando o pai repartiu as terras. De tão parecidos, pai e filho nunca combinaram direito. Cada qual mais topetudo, muitas vezes dona Aparecida ouvia o marido reclamar da natureza forte do filho. Ela escutava com paciência e respondia dum jeito sempre igual: \n\n — "Quem herda, não rouba." \n\n Vinha um brilho nos olhos, o velho se acalmava. \n\n\n Os ditados populares são frases de sabedoria criadas pelo povo, utilizadas em várias situações da vida. Nesse texto, a personagem emprega um ditado popular com a intenção de',

    resolution: 'O ditado popular repetido pela personagem significa que Chiquito "herdou" do Chico o temperamento ("De tão parecidos, pai e filho nunca combinaram direito. Cada qual mais topetudo"). A repetição da frase indica que dona Aparecida não faz julgamentos desses momentos (nem da natureza do filho nem da agressividade do marido), pois é um fato corriqueiro para ela. A mãe usa a mesma fala com frequência para mostrar que tanto filho quanto pai têm temperamento difícil. Isso consequentemente acalma Chico ("o velho se acalmava"), mas não é a intenção primordial da mãe, apenas um efeito de sua fala.',
    answers: [
      { text: 'criticar a natureza forte do filho.', correct: false },
      { text: 'justificar o gênio difícil de Chiquito.', correct: true },
      { text: 'legitimar o direito do filho à herança.', correct: false },
      { text: 'conter o ânimo violento de Chico Lourenço.', correct: false },
      { text: 'condenar a agressividade do marido contra o filho.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) \n\n Deu vontade de jogar, mas não sabe como reunir os amigos... \n\n Muitas vezes é difícil encontrar grupos para bater uma bola. Em função disso, estão sendo disponibilizados aplicativos que reúnem times e reservam espaços para os adeptos da paixão nacional. Num exemplo dessas iniciativas, é possível organizar uma partida de futebol, se inscrever para participar de um jogo, alugar campos e quadras, convidar jogadores. O aplicativo tem dois tipos de usuários: um que o usa como ferramenta de gestão do grupo, convidando amigos para jogar, vendo quem confirmou e avaliando os jogos. Outro usuário é o que busca partidas perto de onde ele está, caso de pessoas que estão de passagem numa cidade. \n\n\n A inter-relação entre tecnologia e sociedade tem estimulado a criação de aplicativos. Nesse texto, isso é percebido pelo desenvolvimento de aplicativos para',

    resolution: 'Como não há narração de uma história, o texto não pode ser um conto, bem como não aparece predominância da 1ª pessoa, característica importante de depoimentos e relatos. O texto apresenta características que são observadas nas notícias, como objetividade na linguagem, relato dos fatos ocorridos de maneira direta e descritiva, sem a presença de uma opinião, apenas relatando o fato, diferentemente da reportagem, onde o relato é mais extenso e aprofundado e menos objetivo, mais subjetivo, fazendo com que a letra [E] se apresente como a correta, pois o texto descreve e divulga um caso de síndrome do coração partido de forma clara.',
    answers: [
      { text: 'organização de eventos de competições esportivas.', correct: false },
      { text: 'agendamento de viagens para eventos de esporte amador.', correct: false },
      { text: 'mapeamento dos interesses dos praticantes acerca dos esportes.', correct: false },
      { text: 'identificação da escassez de espaços para a vivência dos esportes.', correct: false },
      { text: 'formação de grupos em comunidades virtuais para prática esportiva. ', correct: true },
    ]
  },

  {
    question: '(ENEM - 2020) Eu tenho empresas e sou digno do visto para ir a Nova York. O dinheiro que chove em Nova York é para pessoas com poder de compra. Pessoas que tenham um visto do consulado americano. O dinheiro que chove em Nova York também é para os nova-iorquinos. São milhares de dólares. [...] Estou indo para Nova York, onde está chovendo dinheiro. Sou um grande administrador. Sim, está chovendo dinheiro em Nova York. Deu no rádio. Vejo que há pedestres invadindo a via onde trafega o meu carro vermelho, importado da Alemanha. Vejo que há carros nacionais trafegando pela via onde trafega o meu carro vermelho, importado da Alemanha. Ao chegar em Nova York, tomarei providências. \n\n\n As repetições e as frases curtas constituem procedimentos linguísticos importantes para a compreensão da temática do texto, pois',

    resolution: 'A repetição das palavras durante o texto ressalta coisas importantes por detrás do ato. Pois a repetição está acentuando a questão da futilidade do discurso raso e repetitivo, sem profundidade, do poder enquanto capital financeiro "está chovendo dinheiro',
    answers: [
      { text: 'expressam a futilidade do discurso de poder e de distinção do narrador.', correct: true },
      { text: 'disfarçam a falta de densidade das angústias existenciais narradas.', correct: false },
      { text: 'ironizam a valorização da cultura norte-americana pelos brasileiros.', correct: false },
      { text: 'explicitam a ganância financeira do capitalismo contemporâneo.', correct: false },
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
