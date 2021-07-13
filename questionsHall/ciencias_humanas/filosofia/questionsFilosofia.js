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
    question: '(ENEM - 2020) Será que as coisas lhe pareceriam diferentes, se, de fato, todas elas existissem apenas na sua mente - se tudo o que você julgasse ser o mundo externo real fosse apenas um sonho ou alucinação gigante, de que você jamais fosse despertar? Se assim fosse, então é claro que você nunca poderia despertar, como faz quando sonha, pois significaria que não há mundo "real" no qual despertar. Logo, não seria exatamente igual a um sonho ou alucinação normal. \n\n\n O texto confere visibilidade a uma doutrina filosófica contemporrânea conhecida como',

    resolution: 'O solipsismo designa uma doutrina filosófica que reduz toda a realidade ao sujeito pensante; é um ceticismo radical, uma doutrina segundo a qual só existem efetivamente o eu e suas sensações, sendo os outros entes (seres humanos e objetos), como participante da única mente pensante.',
    answers: [
      { text: 'Personalismo, que vincula a realidade circundante aos domínios do pessoal.', correct: false },
      { text: 'Falsificacionismo, que estabelece ciclos de problemas para refutar uma conjectura.', correct: false },
      { text: 'Falibilismo, que rejeita mecanismos mentais para sustentar uma crença inequívoca.', correct: false },
      { text: 'Idealismo, que nega a existência de objetos independentemente do trabalho cognoscente.', correct: false },
      { text: 'Solipsismo, que reconhece limitações cognitivas para compreender uma experiência compartilhada.', correct: true },
    ]
  },

  {
    question: '(ENEM - 2020) Em A morte de Ivan Ilitch, Tolstoi descreve com detalhes repulsivos o terror de encarar a morte iminente. Ilitch adoece depois de um pequeno acidente e logo compreende que se encaminha para o fim de modo impossível de parar. "Nas profundezas de seu coração, ele sabia estar morrendo, mas em vez de se acostumar com a ideia, simplesmente não o fazia e não conseguia compreendê-la." \n\n\n O texto descreve a experiência do personagem de Tolstoi diante de um aspecto incontornável de nossas vidas. Esse aspecto foi um tema central na tradição filosófica',

    resolution: 'O aspecto contornável de que se fala seria a morte, sendo este um tema central do existencialismo.',
    answers: [
      { text: 'marxista, no contexto do materialismo histórico.', correct: false },
      { text: 'logicista, no propósito de entendimento dos fatos.', correct: false },
      { text: 'Utilitarista, no setido da racionalidade das ações.', correct: false },
      { text: 'pós-modernista, na discussão da fluidez das relações.', correct: false },
      { text: 'existencialista, na questão do reconhecimento de si.', correct: true },
    ]
  },

  {
    question: '(ENEM - 2020) \n\n TEXTO 1 \n\n Os meus pensamentos são todos sensações \n Penso com os olhos e com os ouvidos \n E com as mãos e os pés \n E com o nariz e a boca. \n\n TEXTO II \n\n Tudo aquilo que sei do mundo, mesmo por ciência, eu o sei a partir de uma visão minha ou de uma experiência do mundo sem a qual os símbolos da ciência não poderiam dizer nada. \n\n Sobre a tragédia de Mariana, os textos apresentam divergência quanto ao(à) \n\n\n Os textos mostram-se alinhados a um entendimento acerca da ideia de conhecimento, numa perspectiva que ampara a',

    resolution: 'A valorização do corpo na apreensão da realidade é um postulado do empirismo.',
    answers: [
      { text: 'anterioridade da razão do domínio cognitivo.', correct: false },
      { text: 'confirmação da existência de saberes inatos.', correct: false },
      { text: 'valorização do corpo na apreensão da realidade.', correct: true },
      { text: 'verificabilidade de proposições no campo da lógica.', correct: false },
      { text: 'possibilidade de contemplação de verdades atemporais.', correct: false },
    ]
  },
 
  {
    question: '(ENEM - 2020) Vemos que toda cidade é uma espécie de comunidade, e toda comunidade se forma com vistas a algum bem, pois todas as ações de todos os homens são praticadas com vistas ao que lhe parece um bem; se todas as comunidades visam algum bem, é evidente que a mais importante de todas elas e que inclui todas as outras tem mais que todas este objetivo e visa ao mais importante de todos os bens. \n\n\n No fragmento, Aristóteles promove uma reflexão que associa dois elementos essenciais à discussão sobre a vida em comunidade, a saber:',

    resolution: 'Aristóteles, ao falar da vida em comunidade, relaciona com os conceitos de Ética à Política, em que a primeira é uma doutrina moral individual e a segunda uma doutrina moral coletiva, em que a finalidade última do estado deveria ser a virtude, ou seja, a formação moral das pessoas e o conjunto de meios necessários para que isso ocorra, o que levaria a eudaimonia.',
    answers: [
      { text: 'Ética e política, pois conduzem à eudaimonia.', correct: true },
      { text: 'Retórica e linguagem, pois cuidam dos discursos na ágora.', correct: false },
      { text: 'Metafísica e ontologia, pois tratam da filosofia primeira.', correct: false },
      { text: 'Democracia e sociedade, pois se referem a relações sociais.', correct: false },
      { text: 'Geração e corrupção, pois abarcam o campo da physis.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) Adão, ainda que supuséssemos que suas faculdades racionais fossem inteiramente perfeitas desde o início, não poderia ter inferido da fluidez e transparência da água que ela o sufocaria, nem da luminosidade e calor do fogo que este poderia consumí-lo. Nenhum objeto jamais revela, pelas qualidades que aparecem aos sentidos, nem as causas que o produziram, nem os efeitos que fele provirão; e tampouco nossa razão é capaz de extrair, sem auxílio da experiência, qualquer conclusão referente à existência afetiva de coisas ou questões de fato. \n\n\n Segundo o autor, qual é a origem do conhecimento humano?',

    resolution: 'Para Hume, a origem do conhecimento estava no conhecimento empírico.',
    answers: [
      { text: 'A potência inata da mente.', correct: false },
      { text: 'A revelação da inspiração divina.', correct: false },
      { text: 'O estudo das tradições filosóficas.', correct: false },
      { text: 'A vivência dos fenômenos do mundo.', correct: true },
      { text: 'O desenvolvimento do raciocínio abstrato.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) \n\n TEXTO 1 \n\n Considero apropriado deter-me algum tempo na contemplação deste Deus todo perfeito, ponderar totalmente à vontade seus maravilhosos atributos, considerar, admirar e adorar a incomparável beleza dessa imensa luz. \n\n TEXTO II \n\n PQual será a forma mais razoável de entender como é o mundo? Existirá alguma boa razão para acreditar que o mundo foi criado por uma divindade todo-poderosa? Não podemos dizer que a crença em Deus é "apenas" uma questão de fé. \n\n\n Os textos abordam um questionamento da construção da modernidade que defende um modelo',

    resolution: 'Descartes, no primeiro texto, centra seu argumento da prova da existência de Deus na razão humana. O segundo texto questiona a melhor forma de conhecer o mundo e o que poderia levar o ser humano a conceber a crença em Deus. Nesse sentido, ambos os textos, na medida em que valorizam a figura de Deus e da religião na criação e existência humanas, abordam um questionamento da modernidade, que centra seu modelo de conhecimento na razão humana.',
    answers: [
      { text: 'centrado na razão humana.', correct: true },
      { text: 'o baseado na explicação mitológica. ', correct: false },
      { text: 'fundamentado na ordenação imanentista.', correct: false },
      { text: 'focado na legitimação contratualista.', correct: false },
      { text: 'configurado na percepção etnocêntrica. ', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) "A hospitalidade pura consiste em acolher aquele que chega antes de lhe impor condições, antes de saber e indagar o que quer que seja, ainda que seja um nome ou um “documento” de identidade. Mas ela também supõe que dirija a ele, de maneira singular, chamando-o portanto e reconhecendo-lhe um nome próprio: “Como você se chama?” A hospitalidade consiste em fazer tudo para se dirigir ao outro, em lhe conceder, até mesmo perguntar seu nome, evitando que essa pergunta se torne uma “condição”, um inquérito policial, um fichamento ou um simples controle das fronteiras. Uma arte e uma poética, mas também toda uma política dependem disso, toda uma ética se decide aí."',

    resolution: 'Derrida acredita que a alteridade é a questão central do pensamento. O conceito de hospitalidade proposto por ele impõe a necessidade de incorporação da alteridade: no contato com o outro, é necessário acolher antes de impor condições e fazer perguntas; é se colocar no lugar do outro e atribuir-lhe humanidade, "reconhecendo-lhe um nome próprio".',
    answers: [
      { text: 'anulação da diferença..', correct: false },
      { text: 'cristalização da biografia.', correct: false },
      { text: 'incorporação da alteridade.', correct: true },
      { text: 'supressão da comunicação.', correct: false },
      { text: 'verificação da proveniência.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) Dizem que Humboldt, naturalista do século XIX, maravilhado pela geografia, flora e fauna da região sul-americana, via seus habitantes como se fossem mendigos sentados sobre um saco de ouro, referindo-se a suas incomensuráveis riquezas naturais não exploradas. De alguma maneira, o cientista ratificou nosso papel de exportadores de natureza no que seria o mundo depois da colonização ibérica: enxergou-nos como territórios condenados a aproveitar os recursos naturais existentes. \n\n\n A relação entre ser humano e natureza ressaltada no texto refletia a permanência da seguinte corrente filosófica:',

    resolution: 'A doutrina do racionalismo alega que tudo o que existe tem uma causa inteligível, ainda que essa causa não possa ser provada empiricamente. Ou seja, somente o pensamento por meio da razão é capaz de atingir a verdade absoluta. O Racionalismo baseia-se no princípio de que a razão é a principal fonte de conhecimentos e que essa é inata aos humanos. Assim, o raciocínio lógico seria construído através da dedução de ideias, tal como os conhecimentos de Matemática.',
    answers: [
      { text: 'Relativismo cognitivo.', correct: false },
      { text: 'Materialismo dialético.', correct: false },
      { text: 'Racionalismo cartesiano.', correct: true },
      { text: 'Pluralismo epistemológico.', correct: false },
      { text: 'Existencialismo fenomenológico.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) "Em sentido geral e fundamental, Direito é a técnica da coexistência humana, isto é, a técnica voltada a tornar possível a coexistência dos homens. Como técnica, o Direito se concretiza em um conjunto de regras (que, nesse caso, são leis ou normas); e tais regras têm por objeto o comportamento intersubjetivo, isto é, o comportamento recíproco dos homens entre si." \n\n\n O sentido geral e fundamental do Direito, conforme foi destacado, refere-se à',

    resolution: 'Abbagnano define o sentido fundamental do Direito como o mecanismo que permite a coexistência humana. Tal mecanismo se articula um conjunto de regras que visam o comportamento dos indivíduos em suas relações interpessoais. Assim, o sentido geral e fundamental do Direito se refere à regulação do convívio social.',
    answers: [
      { text: 'aplicação de códigos legais.', correct: false },
      { text: 'regulação do convívio social..', correct: true},
      { text: 'legitimação de decisões políticas.', correct: false},
      { text: 'mediação de conflitos econômicos.', correct: false },
      { text: 'representação da autoridade constituída.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) Penso que não há um sujeito soberano, fundador, uma forma universal de sujeito que poderíamos encontrar em todos os lugares. Penso, pelo contrário, que o sujeito se constitui através das práticas de sujeição ou, de maneira mais autônoma, através de práticas de liberação, de liberdade, como na Antiguidade — a partir, obviamente, de um certo número de regras, de estilos, que podemos encontrar no meio cultural. \n\n\n O texto aponta que a subjetivação se efetiva numa dimensão:',

    resolution: 'A constituição do sujeito é identificada em práticas de sujeição e liberação, a partir de elementos "que podemos encontrar no meio cultural" ("regras", "estilos"), ou seja, que implicam interações sociais. Além disso, é um fenômeno submetido à imprevisibilidade, não definitivo nem orientado e concretizado da mesma forma sempre. Como afirma Foucault, não existe "uma forma universal de sujeito que poderíamos encontrar em todos os lugares." ',
    answers: [
      { text: 'Legal, pautada em preceitos jurídicos. ', correct: false },
      { text: 'Racional, baseada em pressupostos lógicos', correct: false },
      { text: 'Contingencial, processada em interações sociais.', correct: true },
      { text: 'Transcendental, efetivada em princípios religiosos.', correct: false },
      { text: 'Essencial, fundamentada em parâmetros substancialistas.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) \n\n TEXTO 1 \n\n Os segredos da natureza se revelam mais sob a tortura dos experimentos do que no seu curso natural. \n\n TEXTO II \n\n O ser humano, totalmente desintegrado do todo, não percebe mais as relações de equilíbrio da natureza. Age de forma totalmente desarmônica sobre o ambiente, causando grandes desequilíbrios ambientais. \n\n\n Os textos indicam uma relação da sociedade diante da natureza caracterizada pela',

    resolution: 'O primeiro texto se refere à experimentação científica como a melhor forma para descobrir os "segredos" da natureza, ou seja, a elaboração de hipóteses a partir de testes empíricos. O segundo fala sobre os impactos naturais provocados pelos seres humanos, que ignoram as relações de equilíbrio da natureza e desconsideram as consequências de uma exploração predativa.',
    answers: [
      { text: 'Objetificação do espaço físico.', correct: true },
      { text: 'Retomada do modelo criacionista.', correct: false },
      { text: 'Recuperação do legado ancestral.', correct: false },
      { text: 'Infalibilidade do método científico. ', correct: false },
      { text: 'Formação da cosmovisão holística.', correct: false }, 
    ]
  },

  {
    question: '(ENEM - 2019) Para Maquiavel, quando um homem decide dizer a verdade pondo em risco a própria integridade física, tal resolução diz respeito apenas a sua pessoa. Mas se esse mesmo homem é um chefe de Estado, os critérios pessoais não são mais adequados para decidir sobre ações cujas consequências se tomam tão amplas, já que o prejuízo não será apenas individual, mas coletivo. Nesse caso, conforme as circunstâncias e os fins a serem atingidos, pode-se decidir que o melhor para o bem comum seja mentir. \n\n\n O texto aponta uma inovação na teoria politica na época moderna expressa na distinção entre:',

    resolution: 'As teorias políticas anteriores à Maquiavel se voltavam para as formas ideais de governo e governante, pensando o "dever-ser". O pensador florentino trouxe uma inovação na medida em que se voltava para os fatos concretos, para o que acontece na política e não para o que deveria acontecer. Em O Príncipe, Maquiavel introduz uma filosofia pragmática, cuja moralidade particular afirma que os fins justificam os meios.',
    answers: [
      { text: 'Idealidade e efetividade da moral. ', correct: true },
      { text: 'Nulidade e preservabilidade da liberdade. ', correct: false },
      { text: 'Ilegalidade e legitimidade do governante. ', correct: false },
      { text: 'Verificabilidade e possibilidade da verdade.', correct: false },
      { text: 'Objetividade e subjetividade do conhecimento.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) \n\n TEXTO 1 \n\n Duas coisas enchem o ânimo de admiração e veneração sempre crescentes: o céu estrelado sobre mim e a lei moral em mim. \n\n TEXTO II \n\n Duas coisas admiro: a dura lei cobrindo-me e o estrelado céu dentro de mim. \n\n\n A releitura realizada pela poeta inverte as seguintes ideias centrais do pensamento kantiano:    ',

    resolution: 'A questão aborda duas ideias centrais no pensamento kantiano: a interioridade da norma (o imperativo categórico, o dever moral) e os fenômenos do mundo. O primeiro texto, de Kant, revela a admiração do pensador pela lei dentro dele e o céu sobre ele. O segundo texto inverte esta fala: a autora admira a lei sobre ela e o céu dentro dela.',
    answers: [
      { text: 'Possibilidade da liberdade e obrigação de ação.', correct: false },
      { text: 'A prioridade do juízo e importância da natureza.', correct: false }, 
      { text: 'Necessidade da boa vontade e crítica da metafísica.', correct: false },
      { text: 'Prescindibilidade do empírico e autoridade da razão.', correct: false },
      { text: 'Interioridade da norma e fenomenalidade do mundo.', correct: true },
    ]
  },

  {
    question: '(ENEM - 2018) Ora, desde que tenhamos compreendido o significado da palavra “Deus”, sabemos, de imediato, que Deus existe. Com efeito, esta palavra designa uma coisa de tal ordem que não podemos conceber nada que lhe seja maior. Ora, o que existe na realidade e no pensamento é maior do que o que existe apenas no pensamento. Donde se segue que o objeto designado pela palavra “Deus”, que existe no pensamento, desde que se entenda esta palavra, também existe na realidade. Por conseguinte, a existência de Deus é evidente. \n\n\n O texto apresenta uma elaboração teórica de Tomás de Aquino caracterizada por:',

    resolution: 'O texto citado é uma das vias de Tomás de Aquino ou um dos argumentos para demonstrar a existência de Deus, conhecido como as ‘Cinco vias’. Segundo o pensador escolástico, a própria inteligência humana poderia alcançar o conhecimento de Deus, ou seja, a razão humana, por si só, é capaz de concluir que existe um ser maior acima dos demais. Destarte, a via citada é a quarta (os graus de perfeição); neste argumento, Tomás de Aquino fortalece o argumento de Santo Anselmo de que não se pode pensar num conceito mais perfeito e maior que o de ‘Deus’, nem no pensamento e nem na realidade. ',
    answers: [
      { text: 'reiterar a ortodoxia religiosa contra os heréticos.', correct: false },
      { text: 'sustentar racionalmente doutrina alicerçada na fé.', correct: true },
      { text: 'explicar as virtudes teologais pela demonstração', correct: false },
      { text: 'flexibilizar a interpretação oficial dos textos sagrados.', correct: false },
      { text: 'justificar pragmaticamente crença livre de dogmas.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2018) \n\n TEXTO 1 \n\n Tudo aquilo que é válido para um tempo de guerra, em que todo homem é inimigo de todo homem, é válido também para o tempo durante o qual os homens vivem sem outra segurança senão a que lhes pode ser oferecida por sua própria força e invenção. \n\n TEXTO II \n\n Não vamos concluir, com Hobbes que, por não ter nenhuma ideia de bondade, o homem seja naturalmente mau. Esse autor deveria dizer que, sendo o estado de natureza aquele em que o cuidado de nossa conservação é menos prejudicial à dos outros, esse estado era, por conseguinte, o mais próprio à paz e o mais conveniente ao gênero humano. \n\n\n Os trechos apresentam divergências conceituais entre autores que sustentam um entendimento segundo o qual a igualdade entre os homens se dá em razão de uma',

    resolution: ' A questão apresenta dois trechos sobre o problema do Contrato Social. O primeiro autor, Thomas Hobbes, apresenta uma versão judaico-cristã sobre o ser humano: originalmente corrompido pelo pecado e sempre sujeito a fazer o mal, isto é, é mal por natureza. O segundo autor, por sua vez, apresenta diretamente um contraponto ao autor anterior, afirmando que o ser humano é naturalmente impulsionado ao bem e à paz; contudo, a sociedade e os valores civilizacionais que tendem ao individualismo sempre o corrompe.',
    answers: [
      { text: 'predisposição ao conhecimento', correct: false },
      { text: 'submissão ao transcendente.', correct: false },
      { text: 'tradição epistemológica.', correct: false },
      { text: 'condição original.', correct: false },
      { text: 'vocação política.', correct: true },
    ]
  },

  {
    question: '(ENEM - 2018) No início da década de 1990, dois biólogos importantes, Redford e Robinson, produziram um modelo largamento aceito de "produção sustentável" que previa quantos indivíduos de cada espécie poderiam ser caçados de forma sustentável baseado nas suas taxas de reprodução. Os seringueiros do Alto do Juruá tinham um modelo diferente: a quem lhes afirmava que estavam caçando acima dos sustentável (dentro do modelo), eles diziam que não, que o nível de caça dependia da existência de áreas de refúgio em que ninguém caçava. Ora, esse acabou sendo o modelo batizado de "fonte-ralo" proposto dez anos após o primeiro por Novaro, Bodmer, e o próprio Redford e que suplantou o modelo anterior. \n\n\n No contexto da produção científica, a necessidade de reconstrução desse modelo, conforme exposto no texto, foi determinada pelo confronto com um(a):',

    resolution: 'A questão discute, num contexto prático, o problema epistemológico no que diz respeito sobre o critério da verdade. Num primeiro momento, apresenta uma teoria baseada num modelo científico; num segundo momento, aparece uma outra metodologia de caça completamente desprovida de metodologias científicas mas que possuem um alto grau de razoabilidade.',
    answers: [
      { text: 'conclusão operacional obtida por lógica dedutiva.', correct: false },
      { text: 'visão de mundo marcada por preconceitos morais.', correct: false },
      { text: 'hábito social condicionado pela religiosidade popular.', correct: false },
      { text: 'conhecimento empírico apropriado pelo senso comum.', correct: true },
      { text: 'padrão de preservação construído por experimentação dirigida.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2018) A quem não basta pouco, nada basta. \n\n\n Remanescente do período helenístico, a máxima apresentada valoriza a seguinte virtude:',

    resolution: ' O epicurismo, corrente filosófica criada por Epicuro na Grécia antiga, apresenta uma concepção moral hedonista, a partir da qual a finalidade das ações humanas seria a busca pelo prazer.',
    answers: [
      { text: 'Esperança, tida como confiança no porvir.', correct: false },
      { text: 'Justiça, interpretada como retidão de caráter.', correct: false },
      { text: 'Temperança, marcada pelo domínio da vontade.', correct: true },
      { text: 'Coragem, definida como fortitude na dificuldade.', correct: false },
      { text: 'Prudência, caracterizada pelo correto uso da razão.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2018) O filósofo reconhece-se pela posse inseparável do gosto da evidência e do sentido da ambiguidade. Quando se limita a suportar a ambiguidade, esta se chama equívoco. Sempre aconteceu que, mesmo aqueles que pretenderam construir uma filosofia absolutamente positiva, só conseguiram ser filósofos na medida em que, simultaneamente, se recusaram o direito de se instalar no saber absoluto. O que caracteriza o filósofo é o movimento que leva incessantemente do saber à ignorância, da ignorância ao saber, e um certo repouso neste movimento. \n\n\n O texto apresenta um entendimento acerca dos elementos constitutivos da atividade do filósofo, que se caracteriza por',

    resolution: 'O texto, de um pensador contemporâneo, discute sobre a essência da atividade filosófica; fazendo, concomitantemente, uma crítica às posições positivistas e dogmáticas do saber filosófico.',
    answers: [
      { text: 'reunir os antagonismos das opiniões ao método dialético.', correct: false },
      { text: 'ajustar a clareza do conhecimento ao inatismo das ideias.', correct: false },
      { text: 'associar a certeza do intelecto à imutabilidade da verdade.', correct: false },
      { text: 'conciliar o rigor da investigação à inquietude do questionamento. ', correct: true },
      { text: 'compatibilizar as estruturas do pensamento aos princípios fundamentais.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2018) A primeira fase da dominação da economia sobre a vida social acarretou, no modo de definir  toda realização humana, uma evidente degradação do ser para o ter. A fase atual, em que a vida social está totalmente tomada pelos resultados da economia, leva a um deslizamento generalizado do ter para o parecer, do qual todo ter efetivo deve extrair seu prestígio imediato e sua função última. Ao mesmo tempo, toda realidade individual tornou-se social, diretamente dependente da força social, moldada por ela. \n\n\n Uma manifestação contemporânea do fenômeno descrito no texto é o(a)    ',

    resolution: 'A obra em questão (A sociedade do espetáculo) discute o problema contemporâneo do exibicionismo próprio da sociedade capitalista em que as mercadorias, após serem adquiridas (ter), demandam a condição de serem expostas (parecer).',
    answers: [
      { text: 'Valorização dos conhecimentos acumulados.', correct: false },
      { text: 'Exposição nos meios de comunicação.', correct: true },
      { text: 'Aprofundamento da vivência espiritual.', correct: false },
      { text: 'Fortalecimento das relações interpessoais.', correct: false },
      { text: 'Reconhecimento na esfera artística.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2018) Não é verdade que estão ainda cheios de velhice espiritual aqueles que nos dizem: “Que fazia Deus antes de criar o céu e a terra? Se estava ocioso e nada realizava”, dizem eles, “por que não ficou sempre assim no decurso dos séculos, abstendo-se, como antes, de toda ação? Se existiu em Deus um novo movimento, uma vontade nova para dar o ser a criaturas que nunca antes criara, como pode haver verdadeira eternidade, se n’Ele aparece uma vontade que antes não existia?” \n\n\n A questão da eternidade, tal como abordada pelo autor, é um exemplo da reflexão filosófica sobre a(s)',

    resolution: 'O pensador concebe uma oposição entre eternidade e temporalidade: a primeira é divina e ilimitada, enquanto que a segunda é dimensional, situada entre o nascimento e a morte de um indivíduo. No texto, Agostinho trata da inabilidade humana de compreender a eternidade; é um exemplo de reflexão filosófica sobre a abrangência da compreensão humana.',
    answers: [
      { text: 'essência da ética cristã.', correct: false },
      { text: 'natureza universal da tradição.', correct: false },
      { text: 'certezas inabaláveis da experiência', correct: false },
      { text: 'abrangência da compreensão humana.', correct: true },
      { text: 'interpretações da realidade circundante.', correct: false },
    ]
  },

  



































  
]
