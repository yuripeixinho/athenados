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
    question: '(ENEM - 2020) Ser?? que as coisas lhe pareceriam diferentes, se, de fato, todas elas existissem apenas na sua mente - se tudo o que voc?? julgasse ser o mundo externo real fosse apenas um sonho ou alucina????o gigante, de que voc?? jamais fosse despertar? Se assim fosse, ent??o ?? claro que voc?? nunca poderia despertar, como faz quando sonha, pois significaria que n??o h?? mundo "real" no qual despertar. Logo, n??o seria exatamente igual a um sonho ou alucina????o normal. \n\n\n O texto confere visibilidade a uma doutrina filos??fica contemporr??nea conhecida como',

    resolution: 'O solipsismo designa uma doutrina filos??fica que reduz toda a realidade ao sujeito pensante; ?? um ceticismo radical, uma doutrina segundo a qual s?? existem efetivamente o eu e suas sensa????es, sendo os outros entes (seres humanos e objetos), como participante da ??nica mente pensante.',
    answers: [
      { text: 'Personalismo, que vincula a realidade circundante aos dom??nios do pessoal.', correct: false },
      { text: 'Falsificacionismo, que estabelece ciclos de problemas para refutar uma conjectura.', correct: false },
      { text: 'Falibilismo, que rejeita mecanismos mentais para sustentar uma cren??a inequ??voca.', correct: false },
      { text: 'Idealismo, que nega a exist??ncia de objetos independentemente do trabalho cognoscente.', correct: false },
      { text: 'Solipsismo, que reconhece limita????es cognitivas para compreender uma experi??ncia compartilhada.', correct: true },
    ]
  },

  {
    question: '(ENEM - 2020) Em A morte de Ivan Ilitch, Tolstoi descreve com detalhes repulsivos o terror de encarar a morte iminente. Ilitch adoece depois de um pequeno acidente e logo compreende que se encaminha para o fim de modo imposs??vel de parar. "Nas profundezas de seu cora????o, ele sabia estar morrendo, mas em vez de se acostumar com a ideia, simplesmente n??o o fazia e n??o conseguia compreend??-la." \n\n\n O texto descreve a experi??ncia do personagem de Tolstoi diante de um aspecto incontorn??vel de nossas vidas. Esse aspecto foi um tema central na tradi????o filos??fica',

    resolution: 'O aspecto contorn??vel de que se fala seria a morte, sendo este um tema central do existencialismo.',
    answers: [
      { text: 'marxista, no contexto do materialismo hist??rico.', correct: false },
      { text: 'logicista, no prop??sito de entendimento dos fatos.', correct: false },
      { text: 'Utilitarista, no setido da racionalidade das a????es.', correct: false },
      { text: 'p??s-modernista, na discuss??o da fluidez das rela????es.', correct: false },
      { text: 'existencialista, na quest??o do reconhecimento de si.', correct: true },
    ]
  },

  {
    question: '(ENEM - 2020) \n\n TEXTO 1 \n\n Os meus pensamentos s??o todos sensa????es \n Penso com os olhos e com os ouvidos \n E com as m??os e os p??s \n E com o nariz e a boca. \n\n TEXTO II \n\n Tudo aquilo que sei do mundo, mesmo por ci??ncia, eu o sei a partir de uma vis??o minha ou de uma experi??ncia do mundo sem a qual os s??mbolos da ci??ncia n??o poderiam dizer nada. \n\n\n Os textos mostram-se alinhados a um entendimento acerca da ideia de conhecimento, numa perspectiva que ampara a',

    resolution: 'A valoriza????o do corpo na apreens??o da realidade ?? um postulado do empirismo.',
    answers: [
      { text: 'anterioridade da raz??o do dom??nio cognitivo.', correct: false },
      { text: 'confirma????o da exist??ncia de saberes inatos.', correct: false },
      { text: 'valoriza????o do corpo na apreens??o da realidade.', correct: true },
      { text: 'verificabilidade de proposi????es no campo da l??gica.', correct: false },
      { text: 'possibilidade de contempla????o de verdades atemporais.', correct: false },
    ]
  },
 
  {
    question: '(ENEM - 2020) Vemos que toda cidade ?? uma esp??cie de comunidade, e toda comunidade se forma com vistas a algum bem, pois todas as a????es de todos os homens s??o praticadas com vistas ao que lhe parece um bem; se todas as comunidades visam algum bem, ?? evidente que a mais importante de todas elas e que inclui todas as outras tem mais que todas este objetivo e visa ao mais importante de todos os bens. \n\n\n No fragmento, Arist??teles promove uma reflex??o que associa dois elementos essenciais ?? discuss??o sobre a vida em comunidade, a saber:',

    resolution: 'Arist??teles, ao falar da vida em comunidade, relaciona com os conceitos de ??tica ?? Pol??tica, em que a primeira ?? uma doutrina moral individual e a segunda uma doutrina moral coletiva, em que a finalidade ??ltima do estado deveria ser a virtude, ou seja, a forma????o moral das pessoas e o conjunto de meios necess??rios para que isso ocorra, o que levaria a eudaimonia.',
    answers: [
      { text: '??tica e pol??tica, pois conduzem ?? eudaimonia.', correct: true },
      { text: 'Ret??rica e linguagem, pois cuidam dos discursos na ??gora.', correct: false },
      { text: 'Metaf??sica e ontologia, pois tratam da filosofia primeira.', correct: false },
      { text: 'Democracia e sociedade, pois se referem a rela????es sociais.', correct: false },
      { text: 'Gera????o e corrup????o, pois abarcam o campo da physis.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) Ad??o, ainda que supus??ssemos que suas faculdades racionais fossem inteiramente perfeitas desde o in??cio, n??o poderia ter inferido da fluidez e transpar??ncia da ??gua que ela o sufocaria, nem da luminosidade e calor do fogo que este poderia consum??-lo. Nenhum objeto jamais revela, pelas qualidades que aparecem aos sentidos, nem as causas que o produziram, nem os efeitos que fele provir??o; e tampouco nossa raz??o ?? capaz de extrair, sem aux??lio da experi??ncia, qualquer conclus??o referente ?? exist??ncia afetiva de coisas ou quest??es de fato. \n\n\n Segundo o autor, qual ?? a origem do conhecimento humano?',

    resolution: 'Para Hume, a origem do conhecimento estava no conhecimento emp??rico.',
    answers: [
      { text: 'A pot??ncia inata da mente.', correct: false },
      { text: 'A revela????o da inspira????o divina.', correct: false },
      { text: 'O estudo das tradi????es filos??ficas.', correct: false },
      { text: 'A viv??ncia dos fen??menos do mundo.', correct: true },
      { text: 'O desenvolvimento do racioc??nio abstrato.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) \n\n TEXTO 1 \n\n Considero apropriado deter-me algum tempo na contempla????o deste Deus todo perfeito, ponderar totalmente ?? vontade seus maravilhosos atributos, considerar, admirar e adorar a incompar??vel beleza dessa imensa luz. \n\n TEXTO II \n\n PQual ser?? a forma mais razo??vel de entender como ?? o mundo? Existir?? alguma boa raz??o para acreditar que o mundo foi criado por uma divindade todo-poderosa? N??o podemos dizer que a cren??a em Deus ?? "apenas" uma quest??o de f??. \n\n\n Os textos abordam um questionamento da constru????o da modernidade que defende um modelo',

    resolution: 'Descartes, no primeiro texto, centra seu argumento da prova da exist??ncia de Deus na raz??o humana. O segundo texto questiona a melhor forma de conhecer o mundo e o que poderia levar o ser humano a conceber a cren??a em Deus. Nesse sentido, ambos os textos, na medida em que valorizam a figura de Deus e da religi??o na cria????o e exist??ncia humanas, abordam um questionamento da modernidade, que centra seu modelo de conhecimento na raz??o humana.',
    answers: [
      { text: 'centrado na raz??o humana.', correct: true },
      { text: 'o baseado na explica????o mitol??gica. ', correct: false },
      { text: 'fundamentado na ordena????o imanentista.', correct: false },
      { text: 'focado na legitima????o contratualista.', correct: false },
      { text: 'configurado na percep????o etnoc??ntrica. ', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) "A hospitalidade pura consiste em acolher aquele que chega antes de lhe impor condi????es, antes de saber e indagar o que quer que seja, ainda que seja um nome ou um ???documento??? de identidade. Mas ela tamb??m sup??e que dirija a ele, de maneira singular, chamando-o portanto e reconhecendo-lhe um nome pr??prio: ???Como voc?? se chama???? A hospitalidade consiste em fazer tudo para se dirigir ao outro, em lhe conceder, at?? mesmo perguntar seu nome, evitando que essa pergunta se torne uma ???condi????o???, um inqu??rito policial, um fichamento ou um simples controle das fronteiras. Uma arte e uma po??tica, mas tamb??m toda uma pol??tica dependem disso, toda uma ??tica se decide a??."',

    resolution: 'Derrida acredita que a alteridade ?? a quest??o central do pensamento. O conceito de hospitalidade proposto por ele imp??e a necessidade de incorpora????o da alteridade: no contato com o outro, ?? necess??rio acolher antes de impor condi????es e fazer perguntas; ?? se colocar no lugar do outro e atribuir-lhe humanidade, "reconhecendo-lhe um nome pr??prio".',
    answers: [
      { text: 'anula????o da diferen??a..', correct: false },
      { text: 'cristaliza????o da biografia.', correct: false },
      { text: 'incorpora????o da alteridade.', correct: true },
      { text: 'supress??o da comunica????o.', correct: false },
      { text: 'verifica????o da proveni??ncia.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) Dizem que Humboldt, naturalista do s??culo XIX, maravilhado pela geografia, flora e fauna da regi??o sul-americana, via seus habitantes como se fossem mendigos sentados sobre um saco de ouro, referindo-se a suas incomensur??veis riquezas naturais n??o exploradas. De alguma maneira, o cientista ratificou nosso papel de exportadores de natureza no que seria o mundo depois da coloniza????o ib??rica: enxergou-nos como territ??rios condenados a aproveitar os recursos naturais existentes. \n\n\n A rela????o entre ser humano e natureza ressaltada no texto refletia a perman??ncia da seguinte corrente filos??fica:',

    resolution: 'A doutrina do racionalismo alega que tudo o que existe tem uma causa intelig??vel, ainda que essa causa n??o possa ser provada empiricamente. Ou seja, somente o pensamento por meio da raz??o ?? capaz de atingir a verdade absoluta. O Racionalismo baseia-se no princ??pio de que a raz??o ?? a principal fonte de conhecimentos e que essa ?? inata aos humanos. Assim, o racioc??nio l??gico seria constru??do atrav??s da dedu????o de ideias, tal como os conhecimentos de Matem??tica.',
    answers: [
      { text: 'Relativismo cognitivo.', correct: false },
      { text: 'Materialismo dial??tico.', correct: false },
      { text: 'Racionalismo cartesiano.', correct: true },
      { text: 'Pluralismo epistemol??gico.', correct: false },
      { text: 'Existencialismo fenomenol??gico.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) "Em sentido geral e fundamental, Direito ?? a t??cnica da coexist??ncia humana, isto ??, a t??cnica voltada a tornar poss??vel a coexist??ncia dos homens. Como t??cnica, o Direito se concretiza em um conjunto de regras (que, nesse caso, s??o leis ou normas); e tais regras t??m por objeto o comportamento intersubjetivo, isto ??, o comportamento rec??proco dos homens entre si." \n\n\n O sentido geral e fundamental do Direito, conforme foi destacado, refere-se ??',

    resolution: 'Abbagnano define o sentido fundamental do Direito como o mecanismo que permite a coexist??ncia humana. Tal mecanismo se articula um conjunto de regras que visam o comportamento dos indiv??duos em suas rela????es interpessoais. Assim, o sentido geral e fundamental do Direito se refere ?? regula????o do conv??vio social.',
    answers: [
      { text: 'aplica????o de c??digos legais.', correct: false },
      { text: 'regula????o do conv??vio social..', correct: true},
      { text: 'legitima????o de decis??es pol??ticas.', correct: false},
      { text: 'media????o de conflitos econ??micos.', correct: false },
      { text: 'representa????o da autoridade constitu??da.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) Penso que n??o h?? um sujeito soberano, fundador, uma forma universal de sujeito que poder??amos encontrar em todos os lugares. Penso, pelo contr??rio, que o sujeito se constitui atrav??s das pr??ticas de sujei????o ou, de maneira mais aut??noma, atrav??s de pr??ticas de libera????o, de liberdade, como na Antiguidade ??? a partir, obviamente, de um certo n??mero de regras, de estilos, que podemos encontrar no meio cultural. \n\n\n O texto aponta que a subjetiva????o se efetiva numa dimens??o:',

    resolution: 'A constitui????o do sujeito ?? identificada em pr??ticas de sujei????o e libera????o, a partir de elementos "que podemos encontrar no meio cultural" ("regras", "estilos"), ou seja, que implicam intera????es sociais. Al??m disso, ?? um fen??meno submetido ?? imprevisibilidade, n??o definitivo nem orientado e concretizado da mesma forma sempre. Como afirma Foucault, n??o existe "uma forma universal de sujeito que poder??amos encontrar em todos os lugares." ',
    answers: [
      { text: 'Legal, pautada em preceitos jur??dicos. ', correct: false },
      { text: 'Racional, baseada em pressupostos l??gicos', correct: false },
      { text: 'Contingencial, processada em intera????es sociais.', correct: true },
      { text: 'Transcendental, efetivada em princ??pios religiosos.', correct: false },
      { text: 'Essencial, fundamentada em par??metros substancialistas.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) \n\n TEXTO 1 \n\n Os segredos da natureza se revelam mais sob a tortura dos experimentos do que no seu curso natural. \n\n TEXTO II \n\n O ser humano, totalmente desintegrado do todo, n??o percebe mais as rela????es de equil??brio da natureza. Age de forma totalmente desarm??nica sobre o ambiente, causando grandes desequil??brios ambientais. \n\n\n Os textos indicam uma rela????o da sociedade diante da natureza caracterizada pela',

    resolution: 'O primeiro texto se refere ?? experimenta????o cient??fica como a melhor forma para descobrir os "segredos" da natureza, ou seja, a elabora????o de hip??teses a partir de testes emp??ricos. O segundo fala sobre os impactos naturais provocados pelos seres humanos, que ignoram as rela????es de equil??brio da natureza e desconsideram as consequ??ncias de uma explora????o predativa.',
    answers: [
      { text: 'Objetifica????o do espa??o f??sico.', correct: true },
      { text: 'Retomada do modelo criacionista.', correct: false },
      { text: 'Recupera????o do legado ancestral.', correct: false },
      { text: 'Infalibilidade do m??todo cient??fico. ', correct: false },
      { text: 'Forma????o da cosmovis??o hol??stica.', correct: false }, 
    ]
  },

  {
    question: '(ENEM - 2019) Para Maquiavel, quando um homem decide dizer a verdade pondo em risco a pr??pria integridade f??sica, tal resolu????o diz respeito apenas a sua pessoa. Mas se esse mesmo homem ?? um chefe de Estado, os crit??rios pessoais n??o s??o mais adequados para decidir sobre a????es cujas consequ??ncias se tomam t??o amplas, j?? que o preju??zo n??o ser?? apenas individual, mas coletivo. Nesse caso, conforme as circunst??ncias e os fins a serem atingidos, pode-se decidir que o melhor para o bem comum seja mentir. \n\n\n O texto aponta uma inova????o na teoria politica na ??poca moderna expressa na distin????o entre:',

    resolution: 'As teorias pol??ticas anteriores ?? Maquiavel se voltavam para as formas ideais de governo e governante, pensando o "dever-ser". O pensador florentino trouxe uma inova????o na medida em que se voltava para os fatos concretos, para o que acontece na pol??tica e n??o para o que deveria acontecer. Em O Pr??ncipe, Maquiavel introduz uma filosofia pragm??tica, cuja moralidade particular afirma que os fins justificam os meios.',
    answers: [
      { text: 'Idealidade e efetividade da moral. ', correct: true },
      { text: 'Nulidade e preservabilidade da liberdade. ', correct: false },
      { text: 'Ilegalidade e legitimidade do governante. ', correct: false },
      { text: 'Verificabilidade e possibilidade da verdade.', correct: false },
      { text: 'Objetividade e subjetividade do conhecimento.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) \n\n TEXTO 1 \n\n Duas coisas enchem o ??nimo de admira????o e venera????o sempre crescentes: o c??u estrelado sobre mim e a lei moral em mim. \n\n TEXTO II \n\n Duas coisas admiro: a dura lei cobrindo-me e o estrelado c??u dentro de mim. \n\n\n A releitura realizada pela poeta inverte as seguintes ideias centrais do pensamento kantiano:    ',

    resolution: 'A quest??o aborda duas ideias centrais no pensamento kantiano: a interioridade da norma (o imperativo categ??rico, o dever moral) e os fen??menos do mundo. O primeiro texto, de Kant, revela a admira????o do pensador pela lei dentro dele e o c??u sobre ele. O segundo texto inverte esta fala: a autora admira a lei sobre ela e o c??u dentro dela.',
    answers: [
      { text: 'Possibilidade da liberdade e obriga????o de a????o.', correct: false },
      { text: 'A prioridade do ju??zo e import??ncia da natureza.', correct: false }, 
      { text: 'Necessidade da boa vontade e cr??tica da metaf??sica.', correct: false },
      { text: 'Prescindibilidade do emp??rico e autoridade da raz??o.', correct: false },
      { text: 'Interioridade da norma e fenomenalidade do mundo.', correct: true },
    ]
  },

  {
    question: '(ENEM - 2018) Ora, desde que tenhamos compreendido o significado da palavra ???Deus???, sabemos, de imediato, que Deus existe. Com efeito, esta palavra designa uma coisa de tal ordem que n??o podemos conceber nada que lhe seja maior. Ora, o que existe na realidade e no pensamento ?? maior do que o que existe apenas no pensamento. Donde se segue que o objeto designado pela palavra ???Deus???, que existe no pensamento, desde que se entenda esta palavra, tamb??m existe na realidade. Por conseguinte, a exist??ncia de Deus ?? evidente. \n\n\n O texto apresenta uma elabora????o te??rica de Tom??s de Aquino caracterizada por:',

    resolution: 'O texto citado ?? uma das vias de Tom??s de Aquino ou um dos argumentos para demonstrar a exist??ncia de Deus, conhecido como as ???Cinco vias???. Segundo o pensador escol??stico, a pr??pria intelig??ncia humana poderia alcan??ar o conhecimento de Deus, ou seja, a raz??o humana, por si s??, ?? capaz de concluir que existe um ser maior acima dos demais. Destarte, a via citada ?? a quarta (os graus de perfei????o); neste argumento, Tom??s de Aquino fortalece o argumento de Santo Anselmo de que n??o se pode pensar num conceito mais perfeito e maior que o de ???Deus???, nem no pensamento e nem na realidade. ',
    answers: [
      { text: 'reiterar a ortodoxia religiosa contra os her??ticos.', correct: false },
      { text: 'sustentar racionalmente doutrina alicer??ada na f??.', correct: true },
      { text: 'explicar as virtudes teologais pela demonstra????o', correct: false },
      { text: 'flexibilizar a interpreta????o oficial dos textos sagrados.', correct: false },
      { text: 'justificar pragmaticamente cren??a livre de dogmas.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2018) \n\n TEXTO 1 \n\n Tudo aquilo que ?? v??lido para um tempo de guerra, em que todo homem ?? inimigo de todo homem, ?? v??lido tamb??m para o tempo durante o qual os homens vivem sem outra seguran??a sen??o a que lhes pode ser oferecida por sua pr??pria for??a e inven????o. \n\n TEXTO II \n\n N??o vamos concluir, com Hobbes que, por n??o ter nenhuma ideia de bondade, o homem seja naturalmente mau. Esse autor deveria dizer que, sendo o estado de natureza aquele em que o cuidado de nossa conserva????o ?? menos prejudicial ?? dos outros, esse estado era, por conseguinte, o mais pr??prio ?? paz e o mais conveniente ao g??nero humano. \n\n\n Os trechos apresentam diverg??ncias conceituais entre autores que sustentam um entendimento segundo o qual a igualdade entre os homens se d?? em raz??o de uma',

    resolution: ' A quest??o apresenta dois trechos sobre o problema do Contrato Social. O primeiro autor, Thomas Hobbes, apresenta uma vers??o judaico-crist?? sobre o ser humano: originalmente corrompido pelo pecado e sempre sujeito a fazer o mal, isto ??, ?? mal por natureza. O segundo autor, por sua vez, apresenta diretamente um contraponto ao autor anterior, afirmando que o ser humano ?? naturalmente impulsionado ao bem e ?? paz; contudo, a sociedade e os valores civilizacionais que tendem ao individualismo sempre o corrompe.',
    answers: [
      { text: 'predisposi????o ao conhecimento', correct: false },
      { text: 'submiss??o ao transcendente.', correct: false },
      { text: 'tradi????o epistemol??gica.', correct: false },
      { text: 'condi????o original.', correct: false },
      { text: 'voca????o pol??tica.', correct: true },
    ]
  },

  {
    question: '(ENEM - 2018) No in??cio da d??cada de 1990, dois bi??logos importantes, Redford e Robinson, produziram um modelo largamento aceito de "produ????o sustent??vel" que previa quantos indiv??duos de cada esp??cie poderiam ser ca??ados de forma sustent??vel baseado nas suas taxas de reprodu????o. Os seringueiros do Alto do Juru?? tinham um modelo diferente: a quem lhes afirmava que estavam ca??ando acima dos sustent??vel (dentro do modelo), eles diziam que n??o, que o n??vel de ca??a dependia da exist??ncia de ??reas de ref??gio em que ningu??m ca??ava. Ora, esse acabou sendo o modelo batizado de "fonte-ralo" proposto dez anos ap??s o primeiro por Novaro, Bodmer, e o pr??prio Redford e que suplantou o modelo anterior. \n\n\n No contexto da produ????o cient??fica, a necessidade de reconstru????o desse modelo, conforme exposto no texto, foi determinada pelo confronto com um(a):',

    resolution: 'A quest??o discute, num contexto pr??tico, o problema epistemol??gico no que diz respeito sobre o crit??rio da verdade. Num primeiro momento, apresenta uma teoria baseada num modelo cient??fico; num segundo momento, aparece uma outra metodologia de ca??a completamente desprovida de metodologias cient??ficas mas que possuem um alto grau de razoabilidade.',
    answers: [
      { text: 'conclus??o operacional obtida por l??gica dedutiva.', correct: false },
      { text: 'vis??o de mundo marcada por preconceitos morais.', correct: false },
      { text: 'h??bito social condicionado pela religiosidade popular.', correct: false },
      { text: 'conhecimento emp??rico apropriado pelo senso comum.', correct: true },
      { text: 'padr??o de preserva????o constru??do por experimenta????o dirigida.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2018) A quem n??o basta pouco, nada basta. \n\n\n Remanescente do per??odo helen??stico, a m??xima apresentada valoriza a seguinte virtude:',

    resolution: ' O epicurismo, corrente filos??fica criada por Epicuro na Gr??cia antiga, apresenta uma concep????o moral hedonista, a partir da qual a finalidade das a????es humanas seria a busca pelo prazer.',
    answers: [
      { text: 'Esperan??a, tida como confian??a no porvir.', correct: false },
      { text: 'Justi??a, interpretada como retid??o de car??ter.', correct: false },
      { text: 'Temperan??a, marcada pelo dom??nio da vontade.', correct: true },
      { text: 'Coragem, definida como fortitude na dificuldade.', correct: false },
      { text: 'Prud??ncia, caracterizada pelo correto uso da raz??o.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2018) O fil??sofo reconhece-se pela posse insepar??vel do gosto da evid??ncia e do sentido da ambiguidade. Quando se limita a suportar a ambiguidade, esta se chama equ??voco. Sempre aconteceu que, mesmo aqueles que pretenderam construir uma filosofia absolutamente positiva, s?? conseguiram ser fil??sofos na medida em que, simultaneamente, se recusaram o direito de se instalar no saber absoluto. O que caracteriza o fil??sofo ?? o movimento que leva incessantemente do saber ?? ignor??ncia, da ignor??ncia ao saber, e um certo repouso neste movimento. \n\n\n O texto apresenta um entendimento acerca dos elementos constitutivos da atividade do fil??sofo, que se caracteriza por',

    resolution: 'O texto, de um pensador contempor??neo, discute sobre a ess??ncia da atividade filos??fica; fazendo, concomitantemente, uma cr??tica ??s posi????es positivistas e dogm??ticas do saber filos??fico.',
    answers: [
      { text: 'reunir os antagonismos das opini??es ao m??todo dial??tico.', correct: false },
      { text: 'ajustar a clareza do conhecimento ao inatismo das ideias.', correct: false },
      { text: 'associar a certeza do intelecto ?? imutabilidade da verdade.', correct: false },
      { text: 'conciliar o rigor da investiga????o ?? inquietude do questionamento. ', correct: true },
      { text: 'compatibilizar as estruturas do pensamento aos princ??pios fundamentais.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2018) A primeira fase da domina????o da economia sobre a vida social acarretou, no modo de definir  toda realiza????o humana, uma evidente degrada????o do ser para o ter. A fase atual, em que a vida social est?? totalmente tomada pelos resultados da economia, leva a um deslizamento generalizado do ter para o parecer, do qual todo ter efetivo deve extrair seu prest??gio imediato e sua fun????o ??ltima. Ao mesmo tempo, toda realidade individual tornou-se social, diretamente dependente da for??a social, moldada por ela. \n\n\n Uma manifesta????o contempor??nea do fen??meno descrito no texto ?? o(a)    ',

    resolution: 'A obra em quest??o (A sociedade do espet??culo) discute o problema contempor??neo do exibicionismo pr??prio da sociedade capitalista em que as mercadorias, ap??s serem adquiridas (ter), demandam a condi????o de serem expostas (parecer).',
    answers: [
      { text: 'Valoriza????o dos conhecimentos acumulados.', correct: false },
      { text: 'Exposi????o nos meios de comunica????o.', correct: true },
      { text: 'Aprofundamento da viv??ncia espiritual.', correct: false },
      { text: 'Fortalecimento das rela????es interpessoais.', correct: false },
      { text: 'Reconhecimento na esfera art??stica.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2018) N??o ?? verdade que est??o ainda cheios de velhice espiritual aqueles que nos dizem: ???Que fazia Deus antes de criar o c??u e a terra? Se estava ocioso e nada realizava???, dizem eles, ???por que n??o ficou sempre assim no decurso dos s??culos, abstendo-se, como antes, de toda a????o? Se existiu em Deus um novo movimento, uma vontade nova para dar o ser a criaturas que nunca antes criara, como pode haver verdadeira eternidade, se n???Ele aparece uma vontade que antes n??o existia???? \n\n\n A quest??o da eternidade, tal como abordada pelo autor, ?? um exemplo da reflex??o filos??fica sobre a(s)',

    resolution: 'O pensador concebe uma oposi????o entre eternidade e temporalidade: a primeira ?? divina e ilimitada, enquanto que a segunda ?? dimensional, situada entre o nascimento e a morte de um indiv??duo. No texto, Agostinho trata da inabilidade humana de compreender a eternidade; ?? um exemplo de reflex??o filos??fica sobre a abrang??ncia da compreens??o humana.',
    answers: [
      { text: 'ess??ncia da ??tica crist??.', correct: false },
      { text: 'natureza universal da tradi????o.', correct: false },
      { text: 'certezas inabal??veis da experi??ncia', correct: false },
      { text: 'abrang??ncia da compreens??o humana.', correct: true },
      { text: 'interpreta????es da realidade circundante.', correct: false },
    ]
  },

  



































  
]
