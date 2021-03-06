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
    question: '(ENEM - 2020) \n\n Mulher tem cora????o clinicamente partido ap??s morte de cachorro \n\n Como explica o The New England Journal of Medicine, a peciente, chamada Joanie Simpson, tinha sinais de infarto, como dores no peito e press??o alta, e apresentava problemas nas art??rias coron??rias. Ao fazerem um ecocardiograma, os m??dicos encontraram o problema: cardiomiopatia de Takotsubo, conhecida como s??ndrome do cora????o partido. \n\n Essa condi????o m??dica tipicamente acontece com mulheres em fase p??s-menstrual e pode ser precedida por um evento muito estressante ou emotivo. Nesses casos, o cora????o apresenta um movimento discin??tico transit??rio da parede anterior do ventr??culo esquerdo, com acentua????o da cin??tica da base ventricular, de acordo com um artigo m??dico brasileiro que relata um caso semelhante. Simpson foi encaminhada para casa ap??s dois dias e passou a tomar medicamentos regulares. \n\n Ao Washington Post, ela contou que estava quase inconsol??vel ap??s a perda do seu animal de estima????o, um c??o da ra??a yokshire terrier. Recuperada ap??s cerca de um ano, ela diz que n??o abrir?? m??o de ter um animal de estima????o porque aprecia a companhia e o amor que os cachorros d??o aos humanos. O caso aconteceu em Houston, nos Estados Unidos. \n\n\n Pelas caracter??sticas do texto lido, que trata das consqu??ncias da perda de um animal de estima????o, considera-se que ele se enquadra no g??nero',

    resolution: 'Como n??o h?? narra????o de uma hist??ria, o texto n??o pode ser um conto, bem como n??o aparece predomin??ncia da 1?? pessoa, caracter??stica importante de depoimentos e relatos. O texto apresenta caracter??sticas que s??o observadas nas not??cias, como objetividade na linguagem, relato dos fatos ocorridos de maneira direta e descritiva, sem a presen??a de uma opini??o, apenas relatando o fato, diferentemente da reportagem, onde o relato ?? mais extenso e aprofundado e menos objetivo, mais subjetivo, fazendo com que a letra [E] se apresente como a correta, pois o texto descreve e divulga um caso de s??ndrome do cora????o partido de forma clara.',
    answers: [
      { text: 'conto, pois exibe a hist??ria de vida de Joanie Simpson.', correct: false },
      { text: 'depoimento, pois exp??e o sofrimento da dona do animal.', correct: false },
      { text: 'reportagem, pois discute cientificamente a cardiomiopatia.', correct: false },
      { text: 'relato, pois narra um fato estressante vivido pela paciente.', correct: false },
      { text: 'not??cia, pois divulga fatos sobre a s??ndrome do cora????o partido.', correct: true },
    ]
  },

  {
    question: '(ENEM - 2020) Fomos falar com o tal encarregado, depois com um engenheiro, depois com um supervisor que mandou chamar um engenheiro da nossa companhia. Esses homens s??o da sua companhia, engenheiro, ele falou, est??o pedindo a conta. A companhia estava empenhada nessa ponte, gente, falou o engenheiro, voc??s n??o podem sair assim sem mais nem menos. Tinha uma serra circular cortando uns caibros ali perto, ent??o s?? dava pra falar quando a serra parava, e aquilo foi dando nos nervos. \n\n Falei que a gente tinha o direito de sair quando a gente quisesse, e pronto. Nisso encostou um sujeito de palet?? mas sem gravata, o engenheiro continuou falando e a serra cortando. Quando ele parou de falar, 50 Volts aproveitou uma parada da serra e falou que a gente n??o era bicho pra trabalhar daquele jeito; da?? o supervisor falou que, se era falta de mulher, eles davam um jeito. O engenheiro falou que tinha mais de vinte companhias trabalhando na ponte, a maioria com preju??zo, porque era mais uma quest??o de honra, a gente tinha que acabar a ponte, a nossa companhia nunca ia esquecer nosso trabalho ali naquela ponte, um orgulho nacional.',

    resolution: 'O argumento mais forte por parte do engenheiro diante dos trabalhadores, passa pela reivindica????o de uma ???honra???, que associa a imagem da empresa ?? imagem da p??tria - ambas mediadas pelo (falso) orgulho diante dos oper??rios. Esse tipo de associa????o confirma um apelo interessado em neutralizar as insatisfa????es do proletariado em quest??o.',
    answers: [
      { text: 'sequ??ncia de atribui????o de responsabilidades e de poder decis??rio a terceiros.', correct: false },
      { text: 'solicita????o em nome dos preju??zos e compromissos para entrega da obra.', correct: false },
      { text: 'intimida????o pela discreta presen??a de um agente de seguran??a na cena.', correct: false },
      { text: 'promessa de imediato atendimento da car??ncia sexual dos oper??rios.', correct: false },
      { text: 'apelo pela identifica????o com a empresa extensiva ao amor patri??tico.', correct: true },
    ]
  },

  {
    question: '(ENEM - 2020) Chiquito tinha quase trinta quando conheceu Mariana num baile de casamento na Forquilha, onde moravam uns parentes dele. Por l?? foi ficando, remanchando. Fez mal ?? mo??a, como costumavam dizer, tiveram de casar ??s pressas. Morou uns tempos com o sogro, descombinaram. Foi s?? conta de colher o milho e vender. Mudou para casa do velho Chico Louren??o [seu pai]. Fuma??a pr??pria s?? viu subir um par de anos depois, quando o pai repartiu as terras. De t??o parecidos, pai e filho nunca combinaram direito. Cada qual mais topetudo, muitas vezes dona Aparecida ouvia o marido reclamar da natureza forte do filho. Ela escutava com paci??ncia e respondia dum jeito sempre igual: \n\n ??? "Quem herda, n??o rouba." \n\n Vinha um brilho nos olhos, o velho se acalmava. \n\n\n Os ditados populares s??o frases de sabedoria criadas pelo povo, utilizadas em v??rias situa????es da vida. Nesse texto, a personagem emprega um ditado popular com a inten????o de',

    resolution: 'O ditado popular repetido pela personagem significa que Chiquito "herdou" do Chico o temperamento ("De t??o parecidos, pai e filho nunca combinaram direito. Cada qual mais topetudo"). A repeti????o da frase indica que dona Aparecida n??o faz julgamentos desses momentos (nem da natureza do filho nem da agressividade do marido), pois ?? um fato corriqueiro para ela. A m??e usa a mesma fala com frequ??ncia para mostrar que tanto filho quanto pai t??m temperamento dif??cil. Isso consequentemente acalma Chico ("o velho se acalmava"), mas n??o ?? a inten????o primordial da m??e, apenas um efeito de sua fala.',
    answers: [
      { text: 'criticar a natureza forte do filho.', correct: false },
      { text: 'justificar o g??nio dif??cil de Chiquito.', correct: true },
      { text: 'legitimar o direito do filho ?? heran??a.', correct: false },
      { text: 'conter o ??nimo violento de Chico Louren??o.', correct: false },
      { text: 'condenar a agressividade do marido contra o filho.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) \n\n Deu vontade de jogar, mas n??o sabe como reunir os amigos... \n\n Muitas vezes ?? dif??cil encontrar grupos para bater uma bola. Em fun????o disso, est??o sendo disponibilizados aplicativos que re??nem times e reservam espa??os para os adeptos da paix??o nacional. Num exemplo dessas iniciativas, ?? poss??vel organizar uma partida de futebol, se inscrever para participar de um jogo, alugar campos e quadras, convidar jogadores. O aplicativo tem dois tipos de usu??rios: um que o usa como ferramenta de gest??o do grupo, convidando amigos para jogar, vendo quem confirmou e avaliando os jogos. Outro usu??rio ?? o que busca partidas perto de onde ele est??, caso de pessoas que est??o de passagem numa cidade. \n\n\n A inter-rela????o entre tecnologia e sociedade tem estimulado a cria????o de aplicativos. Nesse texto, isso ?? percebido pelo desenvolvimento de aplicativos para',

    resolution: 'Como n??o h?? narra????o de uma hist??ria, o texto n??o pode ser um conto, bem como n??o aparece predomin??ncia da 1?? pessoa, caracter??stica importante de depoimentos e relatos. O texto apresenta caracter??sticas que s??o observadas nas not??cias, como objetividade na linguagem, relato dos fatos ocorridos de maneira direta e descritiva, sem a presen??a de uma opini??o, apenas relatando o fato, diferentemente da reportagem, onde o relato ?? mais extenso e aprofundado e menos objetivo, mais subjetivo, fazendo com que a letra [E] se apresente como a correta, pois o texto descreve e divulga um caso de s??ndrome do cora????o partido de forma clara.',
    answers: [
      { text: 'organiza????o de eventos de competi????es esportivas.', correct: false },
      { text: 'agendamento de viagens para eventos de esporte amador.', correct: false },
      { text: 'mapeamento dos interesses dos praticantes acerca dos esportes.', correct: false },
      { text: 'identifica????o da escassez de espa??os para a viv??ncia dos esportes.', correct: false },
      { text: 'forma????o de grupos em comunidades virtuais para pr??tica esportiva. ', correct: true },
    ]
  },

  {
    question: '(ENEM - 2020) Eu tenho empresas e sou digno do visto para ir a Nova York. O dinheiro que chove em Nova York ?? para pessoas com poder de compra. Pessoas que tenham um visto do consulado americano. O dinheiro que chove em Nova York tamb??m ?? para os nova-iorquinos. S??o milhares de d??lares. [...] Estou indo para Nova York, onde est?? chovendo dinheiro. Sou um grande administrador. Sim, est?? chovendo dinheiro em Nova York. Deu no r??dio. Vejo que h?? pedestres invadindo a via onde trafega o meu carro vermelho, importado da Alemanha. Vejo que h?? carros nacionais trafegando pela via onde trafega o meu carro vermelho, importado da Alemanha. Ao chegar em Nova York, tomarei provid??ncias. \n\n\n As repeti????es e as frases curtas constituem procedimentos lingu??sticos importantes para a compreens??o da tem??tica do texto, pois',

    resolution: 'A repeti????o das palavras durante o texto ressalta coisas importantes por detr??s do ato. Pois a repeti????o est?? acentuando a quest??o da futilidade do discurso raso e repetitivo, sem profundidade, do poder enquanto capital financeiro "est?? chovendo dinheiro',
    answers: [
      { text: 'expressam a futilidade do discurso de poder e de distin????o do narrador.', correct: true },
      { text: 'disfar??am a falta de densidade das ang??stias existenciais narradas.', correct: false },
      { text: 'ironizam a valoriza????o da cultura norte-americana pelos brasileiros.', correct: false },
      { text: 'explicitam a gan??ncia financeira do capitalismo contempor??neo.', correct: false },
      { text: 'criticam os estere??tipos sociais das vis??es de mundo elitistas.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) \n\n LUTA: pr??tica corporal imprevis??vel, caracterizada por determinado estado de contato proposital, que possibilita a duas ou mais pessoas se enfrentarem numa constante troca de a????es ofensivas e/ou defensivas, regida por regras, com o objetivo m??tuo sobre um alvo m??vel personificado no oponente. \n\n\n De acordo com o texto, podemos identificar uma abordagem das lutas nas aulas de educa????o f??sica quando o professor realiza uma proposta envolvendo',

    resolution: 'Conforme a defini????o apresentada pela quest??o, a luta, como pr??tica esportiva, implica um conjunto sistematizado de regras em que os objetivos s??o predeterminados no sentido de garantir disputas ??ticas, cuja finalidade ?? o treinamento do corpo e da mente. Por ser organizada pelo professor de educa????o f??sica, ela ?? intencional e se difere das brigas, n??o h?? conflito, e sim esporte.',
    answers: [
      { text: 'contato corporal intenso entre o aluno e seu oponente.', correct: false },
      { text: 'contenda entre os alunos que se agridem fisicamente.', correct: false },
      { text: 'confronto corporal em que os vencedores s??o previamente identificados.', correct: false },
      { text: 'combate corporal intencional com a????es regulamentadas entre os oponentes.', correct: true },
      { text: 'conflito resolvido pelos alunos por meio de regras previamente estabelecidas.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) A vida ??s vezes ?? como um jogo brincado na rua: estamos no ??ltimo minuto de uma brincadeira bem quente e n??o sabemos que a qualquer momento pode chegar um mais velho a avisar que a brincadeira j?? acabou e est?? na hora de jantar. A vida afinal acontece muito de repente ??? nunca ningu??m nos avisou que aquele era mesmo o ??ltimo Carnaval da Vit??ria. O Carnaval tamb??m chegava sempre de repente. N??s, as crian??as, viv??amos num tempo fora do tempo, sem nunca sabermos dos calend??rios de verdade. [...] O "dia da v??spera do Carnaval", como dizia a av?? Nh??, era dia de confus??o com roupas e pinturas a serem preparadas, sonhadas e inventadas. Mas quando acontecia era um dia r??pido, porque os dias m??gicos passam depressa deixando marcas fundas na nossa mem??ria, que alguns chamam tamb??m do cora????o. \n\n\n As signfica????es afetivas engendradas no fragmento pressup??em o reconhecimento da',

    resolution: 'No fragmento, o narrador assume a perspectiva infantil ao descrever as brincadeiras que vivia na ??poca de crian??a, al??m de utilizar "n??s, as crian??as" em determinado momento do texto, evidenciando ainda mais essa perspectiva assumida por ele ao longo do texto.',
    answers: [
      { text: 'perspectiva infantil assumida pela voz narrativa.', correct: true },
      { text: 'suspens??o da linearidade temporal da narra????o.', correct: false },
      { text: 'tentativa de materializar lembran??as da inf??ncia.', correct: false },
      { text: 'incid??ncia da mem??ria sobre as imagens narradas.', correct: false },
      { text: 'altern??ncia entre impress??es subjetivas e relatos factuais.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) \n\n Leandro Aparecido Ferreira, o MC Fioti, comp??s em 2017 a m??sica Bum bum tam tam, que gerou, em nove meses, 480 milh??es de visualiza????es do YouTube. ?? o funk brasileiro mais ouvido na hist??ria do site. \n\n A partir de uma grava????o da flauta que achou na internet, MC Fioti fez tudo sozinho: comp??s, cantou e produziu em uma noite s??. "Comecei a pesquisar alguns tipos de flauta, coisas antigas. E nisso eu achei a flautinha do Sebastian Bach", conta. A descoberta foi por acaso: Fioti n??o sabia quem era o m??sico alem??o e n??o sabe tocar o instrumento. \n\n A "flauta envolvente" da m??sica ?? um trecho da Partita em L?? menor, escrita pelo alem??o Johann Sebastian Bach por volta de 1723.',

    resolution: 'A proposta de ???Bum bum tam tam??? ?? a de mistura de linguagens advindas de meios culturais muito diferentes: a m??sica erudita europeia do s??culo XVIII e as linguagens da favela brasileira contempor??nea, que constituem uma inova????o no plano musical, com novas e inusitadas sonoridades. A utiliza????o da m??sica distante n??o ?? desintencional, pois era o que Mc Fioti buscava, apesar de desconhecer Bach.',
    answers: [
      { text: 'conto, pois exibe a hist??ria de vida de Joanie Simpson.', correct: false },
      { text: 'depoimento, pois exp??e o sofrimento da dona do animal.', correct: false },
      { text: 'reportagem, pois discute cientificamente a cardiomiopatia.', correct: false },
      { text: 'relato, pois narra um fato estressante vivido pela paciente.', correct: false },
      { text: 'not??cia, pois divulga fatos sobre a s??ndrome do cora????o partido.', correct: true },
    ]
  },

  {
    question: '(ENEM - 2020) \n\n Por que a ind??stria do empreendedorismo de palco ir?? destruir voc?? \n\n Se, antigamente, os livros, enormes, e com suas setecentas p??ginas, cuspiam f??rmulas, equa????es e c??lculos que te ensinavam a lidar com o fluxo de caixa da sua empresa, hoje eles dizem: "Voc?? ir?? chegar l??! Acredite, voc?? ir?? vencer!". \n\n Mindset, empoderamento, millenials, networking, coworking, deal, business, deadline, salesman, com perfil hunter...tudo isso faz parte do seu vocabul??rio. O pacote de livros ?? sempre id??ntico e as experi??ncias s??o passadas da mesma forma: voc?? est?? a um ??nico cent??metro da vit??ria. N??o pare! \n\n Se desistir agora, ser?? para sempre. Tome, leia a estrat??gia do oceano azul. Fa??a mais uma mentoria, participe de mais uma sess??o de coaching. O problema ?? que o seu mindset n??o est?? ajustado. Voc?? precisa ser mais proativo. Vamos fazer mais um powermind? Eu consigo um precinho bacana para voc??... \n\n\n De acordo com o texto, ?? poss??vel identificar o "empreendedor de palco" por',

    resolution: 'O empreendedor de palco ele possui um padr??o de linguagem, n??o s?? ao falar as palavras em Ingl??s, mas ter, na ponta da l??ngua, os motivos do sucesso n??o ter sido alcan??ado, portanto letra D.',
    answers: [
      { text: 'livros por ele indicados.', correct: false },
      { text: 'suas habilidades em l??ngua inglesa.', correct: false },
      { text: 'experi??ncias por ele compartilhadas.', correct: false },
      { text: 'padr??es de linguagem por ele utilizados.', correct: true },
      { text: 'pre??os acess??veis de seus treinamentos.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) Em 2000 tivermos a primeira experi??ncia do futebol feminino em um jogo de videogame, o Mia Hamm Soccer. Doze anos depois, uma peti????o on-line pedia que a EA Sports inclu??sse o futebol feminino no Fifa 13. Contudo, s?? em 2015, com uma nova peti????o on-line, que arrecadou milhares de assinaturas, tivemos o futebol feminino inclu??do no Fifa 16. Vendo um nicho de mercado inexplorado, a EA Sports produziu o jogo com 12 sele????es femininas e o apresentou como inva????o. A empresa sabe que mais de 40% dos praticantes de futebol nos EUA s??o meninas. Para elas, ver o futebol feminino representado em um jogo de videogame ?? extremamente importante. Ter o futebol feminino no Fifa 16 ?? um grande passo para a sua populariza????o na luta pela igualdade de g??nero, num contexto machista, sexista, mis??gino e homof??bico. \n\n\n Os jogos eletr??nicos presentes na cultura juvenil podem desempenhar uma relevante fun????o na abordagem do futebol ao',

    resolution: 'Como n??o h?? narra????o de uma hist??ria, o texto n??o pode ser um conto, bem como n??o aparece predomin??ncia da 1?? pessoa, caracter??stica importante de depoimentos e relatos. O texto apresenta caracter??sticas que s??o observadas nas not??cias, como objetividade na linguagem, relato dos fatos ocorridos de maneira direta e descritiva, sem a presen??a de uma opini??o, apenas relatando o fato, diferentemente da reportagem, onde o relato ?? mais extenso e aprofundado e menos objetivo, mais subjetivo, fazendo com que a letra [E] se apresente como a correta, pois o texto descreve e divulga um caso de s??ndrome do cora????o partido de forma clara.',
    answers: [
      { text: 'disseminarem uma modalidade, promovendo a igualdade de g??nero.', correct: true },
      { text: 'superarem jogos malsucedidos no mercado, lan??ados anteriormente.', correct: false },
      { text: 'inovarem a modalidade com novas ofertas de jogos ao mercado.', correct: false },
      { text: 'explorarem nichos de mercado antes ignorados, produzindo mais lucro.', correct: false },
      { text: 'refor??arem estere??tipos de g??nero masculino ou feminino nos esportes.', correct: false },
    ]
  },

  



































  
]
