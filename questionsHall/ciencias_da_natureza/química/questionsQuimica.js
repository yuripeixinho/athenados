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
    question: '(ENEM - 2020) A enorme quantidade de resíduos gerados pelo consumo crescente da sociedade traz para a humanidade uma preocupação socioambiental, em especial pela quantidade de lixo produzido. Além da reciclagem e do reúso, pode-se melhorar ainda mais a qualidade de vida, substituindo polímeros convencionais por polímero biodegradáveis. \n\n\n Esses polímeros têm  grandes vantagens socioambientais em relação aos convencionais porque',

    resolution: 'Polímeros biodegradáveis sofrem degradação em um tempo menor que os convencionais.',
    answers: [
      { text: 'não são tóxicos.', correct: false },
      { text: 'não precisam ser reciclados.', correct: false },
      { text: 'não causam poluição ambiental quando descartados.', correct: false },
      { text: 'são degradados em um tempo bastante menor que os convencionais.      ', correct: true },
      { text: 'apresentam propriedades mecânicas semelhantes aos convencionais.', correct: false },
    ]
  },


  {
    question: '(ENEM - 2020) A sacarase (ou invertase) é uma enzima que atua no intestino humano hidrolisando o dissacarídeo sacarose nos monossacarídeos glicose e frutose. Em um estudo cinético da reação de hidrólise da sacarose (C12H22O11), foram dissolvidos 171 g de sacarose em 500 mL de água. Observou-se que, a cada 100 minutos de reação, a concentração de sacarose foi reduzida à metade, qualquer que fosse o momento escolhido como tempo inicial. As massas molares dos elementos H, C e O são iguais a 1, 12 e 16g.mol-1, respectivamente.     \n\n\n Qual é a concentração de sacarose depois de 400 minutos do início da reação de hidrólise?',

    resolution: 'Polímeros biodegradáveis sofrem degradação em um tempo menor que os convencionais.',
    answers: [
      { text: '2,50x10-3 mol L-1', correct: false },
      { text: '6,25x10-2 mol L-1', correct: true },
      { text: '1,25x10-1 mol L-1', correct: false },
      { text: '2,50x10-1 mol L-1', correct: true },
      { text: '4,27x10-1 mol L-1', correct: false },
    ]
  },

  
  {
    question: '(ENEM - 2020) Mega espetáculos com queima de grande quantidade de fogos de artifício em festas de final de ano são muito comuns no Brasil. Após a queima, grande quantidade de material particulado permanece suspensa no ar. Entre os resíduos, encontram-se compostos de sódio, potássio, bário, cálcio, chumbo, antimônio, cromo, além de percloratos e gases, como os dioxiodos de nitrogênio e enxofre.     \n\n\n Esses espetáculos promovem riscos ambientais, porque',

    resolution: 'O chumbo e antimônio são metais pesados. E o dióxido de nitrogênio é um gás tóxico.',
    answers: [
      { text: 'as substâncias resultantes da queima de fogos de artifício são inflamáveis.', correct: false },
      { text: 'os resíduos resultantes da queima de fogos de artifício ainda são explosivos.', correct: false },
      { text: 'o sódio e o potássio são os principais responsáveis pela toxicidade do produto da queima.', correct: false },
      { text: 'os produtos da queima contêm metais pesados e gases tóxicos que resultam em poluição atmosférica.', correct: true },
      { text: 'o material particulado gerado se deposita na superfície das folhas das plantas impedindo os processos de respiração celular.', correct: false },
    ]
  },



  {
    question: '(ENEM - 2020) Grandes reservatórios de óleo leve de melhor qualidade e que produz petróleo mais fino foram descobertos no litoral brasileiro numa camada denominada pré-sal, formada há 150 milhões de anos.    \n\n\n A utilização desse recurso energético acarreta para o ambiente um desequilíbrio no ciclo do',

    resolution: 'O petróleo é formado principalmente por grandes cadeias de hidrocarbonetos. O uso desse recurso então acarreta desequilíbrio do ciclo do carbono devido a liberação dessas cadeias de hidrocarbonetos que se encontram abaixo da cadeia sedimentar (camada pré-sal).',
    answers: [
      { text: 'nitrogênio, devido à nitrificação ambiental transformando amônia em nitrito.', correct: false },
      { text: 'nitrogênio, devido ao aumento dos compostos nitrogenados no ambiente terrestre.', correct: false },
      { text: 'carbono, devido ao aumento dos carbonatos dissolvidos no ambiente marinho.', correct: false },
      { text: 'carbono, devido ao aumento das cadeias carbônicas aprisionadas abaixo dos sedimentos.', correct: true },
      { text: 'fósforo, devido à liberação dos fosfatos acumulados no ambiente marinho.', correct: false },
    ]
  },




  {
    question: '(ENEM - 2020) A nanotecnologia pode ser caracterizada quando os compostos estão na ordem de milionésimos de milímetros, como na utilização de nanomateriais catalíticos nos processos industriais. O uso desses materiais aumenta a eficiência da produção, consome menos energia e gera menores quantidades de resíduos. O sucesso dessa aplicação tecnológica muitas vezes está relacionado ao aumento da velocidade da reação química envolvida.    \n\n\n O êxito da aplicação essa tecnologia é por causa da realização de reações químicas que ocorrem em condições de',

    resolution: 'Segundo o texto, o sucesso da nanotecnologia pode ser relacionada o aumento da velocidade das reações. Além disso, o uso desses materiais aumenta a eficiência, produz menos energia e gera menos resíduos. O aumento da superfície de contato aumenta a eficiência da reação.',
    answers: [
      { text: 'alta pressão.', correct: false },
      { text: 'alta temperatura.', correct: false },
      { text: 'excesso de reagentes.', correct: false },
      { text: 'maior superfície de contato.', correct: true },
      { text: 'elevada energia de ativação.', correct: false },
    ]
  },



  {
    question: '(ENEM - 2020) A Química Verde é um ramo da química que prega o desenvolvimento de processos eficientes, que transformem a maior parte do reagente em produto, de forma mais rápida e seletiva, que utilizem poucos reagentes, que produzam somente o produto desejado, evitando a formação de coprodutos, e que utilizem solventes não agressivos ao meio ambiente. Assim, as indústrias contornariam problemas relacionados à poluição ambiental e ao desperdício de água e energia. \n\n\n O perfil de um processo que segue todos os princípios desse ramo da química pode ser representado por:',

    resolution: 'Poucos reagentes, formação apenas do produto de interesse e uso de um catalisador nao tóxico.',
    answers: [
      { text: 'A+B+C→D (a reação ocorre a altas pressões).', correct: false },
      { text: 'A+B+→C+D (a reação é fortemente endotérmica).', correct: false },
      { text: 'A+3B→C  (a reação ocorre com uso de solvente orgânico).', correct: false },
      { text: '3A+2B→2C→3D+2E (a reação ocorre sob pressão atmosférica).', correct: false },
      { text: 'A+12B→C  (a reação ocorre com o uso de um catalisador contendo um metal não tóxico).', correct: true },
    ]
  },



  {
    question: '(ENEM - 2020) Um teste de laboratório permite identificar alguns cátions metálicos ao introduzir uma pequena quantidade do material de interesse em uma chama de bico de Bunsen para, em seguida, observar a cor da luz emitida.\n\n\n A cor observada é proveniente da emissão de radiação eletromagnética ao ocorrer a',

    resolution: 'O aquecimento no bico de Bunsen promove a excitação de elétrons dos cátions para níveis mais energéticos que ao retornar irão emitir esta energia na forma de luz. Esta propriedade é previsto pelo modelo atômico de Bohr.',
    answers: [
      { text: 'mudança da fase sólida para a fase líquida do elemento metálico.', correct: false },
      { text: 'combustão dos cátions metálicos provocada pelas moléculas de oxigênio da atmosfera.', correct: false },
      { text: 'diminuição da energia cinética dos elétrons em uma mesma órbita na eletrosfera atômica.', correct: false },
      { text: 'transição eletrônica de um nível mais externo para outro mais interno na eletrosfera atômica.', correct: true },
      { text: 'promoção dos elétrons que se encontram no estado fundamental de energia para níveis mais energéticos.', correct: false },
    ]
  },



  {
    question: '(ENEM - 2020) O concreto utilizado na construção civil é um material formado por cimento misturado a areia, a brita e a água. A areia é normalmente extraída de leitos de rios e brita, oriunda da fragmentação de rochas. Impactos ambientais gerados no uso de concreto estão associados à extração de recursos minerais e ao descarte indiscriminado desse material. Na tentativa de reverter esse quadro, foi proposta a utilização de concreto reciclado moído em substituição ao particulado rochoso graúdo na fabricação de novo concreto, obtendo um material com as mesmas propriedades que o anterior. \n\n\n O benefício ambiental gerado nessa proposta é a redução do(a)    ',

    resolution: 'Quando é dito que foi proposta a utilização de concreto reciclado moído em substituição ao particulado rochoso graúdo na fabricação de novo concreto, deve-se entender que este material particulado graúdo rochoso é a brita. Como há a substituição da brita o benefício ambiental seria a redução da extração de brita.',
    answers: [
      { text: 'extração da brita.', correct: true },
      { text: 'extração da areia.', correct: false },
      { text: 'consumo da água.', correct: false },
      { text: 'consumo do concreto.', correct: false },
      { text: 'fabricação de cimento.', correct: false },
    ]
  },



  {
    question: '(ENEM - 2020) Por terem camada de valência completa, alta energia de ionização e afinidade eletrônica praticamente nula, considerou-se por muito tempo que os gases nobres não formariam compostos químicos. Porém, em 1962, foi realizada com sucesso a reação entre xenônio (camada de valência 5s²5p6) e o hexafluoreto de platina e, desde então, mais compostos novos de gases nobres vêm sendo sintetizados. Tais compostos demonstram que não se pode aceitar acriticamente a regra do octeto, na qual se considera que, numa ligação química, os átomos tendem a adquirir estabilidade assumindo a configuração eletrônica de gás nobre. Dentre os compostos conhecidos, um dos mais estáveis é o difluoreto de xenônio, no qual dois átomos do halogênio flúor (camada de valência 2s²2p5) se ligam covalentemente ao átomo de gás nobre para ficarem com oito elétrons de valência.    \n\n\n Ao se escrever a fórmula de Lewis do composto de xenônio citado, quantos elétrons na camada de valência haverá no átomo do gás nobre?',

    resolution: 'Como o Xe já possui 8 elétrons na camada de valência com a adição de 1 elétron para cada F o Xe terá 10 elétrons na camada de valência.',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: false },
      { text: '10', correct: true },
      { text: '12', correct: false },
      { text: '14', correct: false },
    ]
  },



  {
    question: '(ENEM - 2020) Companhias que fabricam jeans usam cloro para o clareamento, seguido de lavagem. Algumas estão substituindo o cloro por substâncias ambientalmente mais seguras como peróxidos, que podem ser degradados por enzimas chamadas peroxidasses. Pensando nisso, pesquisadores inseriram genes codificadores de peroxidasses em leveduras cultivadas nas condições de clareamento e lavagem dos jeans e selecionaram as sobreviventes para produção dessas enzimas.\n\n\n Nesse caso, o uso dessas leveduras modificadas objetiva.',

    resolution: 'De acordo com o texto, o cloro é substituído por uma substância ambientalmente mais segura como o peróxido. Dessa forma, a produção de leveduras modificadas reduz a liberação de substâncias tóxicas nos efluentes da lavagem do jeans.',
    answers: [
      { text: 'reduzir a quantidade de resíduos tóxicos efluentes da lavagem.', correct: true },
      { text: 'eliminar a necessidade de tratamento da água consumida.', correct: false },
      { text: 'elevar a capacidade de clareamento dos jeans.', correct: false },
      { text: 'aumentar a resistência do jeans a peróxidos.', correct: false },
      { text: 'associar ação bactericida ao clareamento', correct: false },
    ]
  },




  {
    question: '(ENEM - 2020) Por meio de reações químicas que envolvem carboidratos, lipídeos e proteínas, nossas células obtêm energia e produzem gás carbônico e água. A oxidação da glicoses no organismo humano libera energia, conforme ilustra a equação química, sendo que aproximadamente 40% dela é disponibilizada para atividade muscular.\n\n C6H12O6 (s) + 6 O2 (g) → 6 CO2 (g) + 6 H2O (I)   ∆cH= -2800 kJ \n\n  Considere as massas molares (em g mol-1): H=1; C = 12; O= 16 \n\n\n Na oxidação de 1,0 grama de glicose, a energia obtida para atividade muscular, em quilojoule, é mais próxima de',

    resolution: 'Da esquequiometria da reação, temos:    \n C6H12O6 +6 O2->6CO2 +6H2O \n A massa molar da glicose vale: MM = 6.M(C) + 12.M(H) + 6.M(O) = 6.12 + 12.1 + 6.16 = 180 g/mol. \n  Assim, o número de mols de glicose vale: \n nglicose=1g/(180 g/mol)= 1/180 mol \n\n  Assim, temos que  \n 1 mol glicose ------------ 2800 kJ energia liberados \n 1/180 mol glicose ------- Eliberada \n Eliberada= 2800/180 kJ energia. \n\n\n Mas na atividade muscular, é liberada apenas 40% desse total de energia. Portanto. \n E = (2800/180).0,40 = 6,22 kJ energia liberados.',

    answers: [
      { text: '6,2.', correct: true },
      { text: '15,6.', correct: false },
      { text: '70,0', correct: false },
      { text: '622,2', correct: false },
      { text: '1120,0', correct: false },
    ]
  },



  {
    question: '(ENEM - 2020) Na mitologia grega, Nióbia era a filha de Tântalo, dois personagens conhecidos pelo sofrimento. O elemento químico de número atômico (Z) igual a 41 tem propriedades químicas e físicas tão parecidas com as do elemento de número atômico 73 que chegaram a ser confundidos. Por isso, em homenagem a esses dois personagens da mitologia grega, foi conferido a esses elementos os nomes de nióbio (Z=41) e tântalo (Z=73). Esses dois elementos químicos adquiriram grande importância econômica na metalurgia, na produção de supercondutores e em outras aplicações na indústria de ponta, exatamente pelas propriedades químicas e físicas comuns aos dois.\n\n A importância econômica e tecnológica desses elementos, pela similaridade de suas propriedades químicas e físicas, deve-se a',

    resolution: 'Pela distribuição eletrônica para os elementos Nióbio (Z = 41) e -Nióbio (Z = 41): [Kr] 5s² 4d \n -Tântalo (Z = 73): [Xe] 6s² 4f145d3  \n \n Analisando as alternativas: \n -O item A é falso, pois apenas o Tântalo possui elétrons em subníveis f: \n  -O item B é falso, pois ambos são elementos de transição externa (a distribuição eletrônica termina em subníveis d) \n -O item C é verdadeiro, os dois pertencem a família 5B (ou grupo 5) da tabela periódica; \n  -O item D é falso, os elétrons mais externos do Nióbio e do Tântalo pertencem ao 5º e 6º nível, respectivamente. \n -O item E é falso, pois são metais de transição externa, enquanto metais alcalino e alcalino-terrosos são representativos.',
    
    answers: [
      { text: 'terem elétrons no subnível f.', correct: false },
      { text: 'serem elementos de transição interna.', correct: false },
      { text: 'pertencerem ao mesmo grupo na tabela periódica.', correct: true },
      { text: 'terem seus elétrons mais externos nos níveis 4 e 5, respectivamente.', correct: false },
      { text: 'estrarem localizados na família dos alcalinos terrosos e alcalinos, respectivamente.', correct: false },
    ]
  },





  {
    question: '(ENEM - 2018) O petróleo é uma fonte de energia de baixo custo e de larga utilização como matéria-prima para uma grande variedade de produtos. É um óleo formado de várias substâncias de origem orgânica, em sua maioria hidrocarbonetos de diferentes massas molares. São utilizadas técnicas de separação para obtenção dos componentes comercializáveis do petróleo. Além disso, para aumentar a quantidade de frações comercializáveis, otimizando o produto de origem fóssil, utiliza-se o processo de craqueamento. O que ocorre nesse processo?,',

    resolution: 'O craqueamento do petróleo é a quebra de frações pesadas do petróleo bruto, transformando em frações mais leves.    ',
    
    answers: [
      { text: 'Transformação das frações do petróleo em outras moléculas menores.', correct: true },
      { text: 'Reação de óxido-redução com transferência de elétrons entre as moléculas.', correct: false },
      { text: 'Solubilização das frações do petróleo com a utilização de diferentes solventes.', correct: false },
      { text: 'Decantação das moléculas com diferentes massas molares pelo uso de centrífugas.', correct: false },
      { text: 'Separação dos diferentes componentes do petróleo em função de suas temperaturas de ebulição.', correct: false },
    ]
  },




  {
    question: '(ENEM - 2018) As abelhas utilizam a sinalização química para distinguir a abelha-rainha de uma operária, sendo capazes de reconhecer diferenças entre moléculas. A rainha produz o sinalizador químico conhecido moléculas. ácido 9-hidroxidec-2-enoico, enquanto as abelhas-operárias produzem ácido 10-hidroxidec-2-enoico. Nós podemos distinguir as abelhas-operárias e rainhas sua aparência, mas, entre si, elas usam essa sinalização química para perceber a diferença. Pode-se dizer que veem por meio da química. As moléculas dos sinalizadores químicos produzidas pelas abelhas rainha e operária possuem diferença na',

    resolution: 'Conforme apresentado a seguir, o ácido 9-hidroxi-dec-2-enoico e ácido 10-hidroxi-dec-2-enoico apresentam fórmulas estruturais diferentes, diferindo quando a posição do grupo funcional hidroxila (-OH).',
    
    answers: [
      { text: 'fórmula estrutural.', correct: true },
      { text: 'fórmula molecular.', correct: false },
      { text: 'identificação dos tipos de ligação.', correct: false },
      { text: 'contagem do número de carbonos.', correct: false },
      { text: 'identificação dos grupos funcionais.', correct: false },
    ]
  },




  {
    question: '(ENEM - 2020) O manejo adequado do solo possibilita a manutenção de sua fertilidade à medida que as trocas de nutrientes entre matéria orgânica, água, solo e o ar são mantidas para garantir a produção.  Algumas espécies iônicas de alumínio são tóxicas, não só para a planta, mas para muitos organismos como as bactérias responsáveis pelas transformações no ciclo do nitrogênio. O alumínio danifica as membranas das células das raízes e restringe a expansão de suas paredes, cm isso, a planta não cresce adequadamente. Para promover benefícios para a produção agrícola, é recomendada a remediação do solo utilizando calcário (CaCo3). \n\n Essa remediação promove no solo o(a)    ',

    resolution: 'O carbonato de cálcio é um sal que sofre hidrólise básica (vem de ácido fraco com base forte), o que aumenta a alcalinidade do solo. Isso faz com que o equilíbrio \n  Al3++3 OH- <--> Al(OH)3 \n Se desloque para a direita, favorecendo a precipitação de Al(OH)3.',
    
    answers: [
      { text: 'diminuição do PH, deixando-o fértil.', correct: false },
      { text: 'solubilização do alumínio, ocorrendo sua lixiviação pela chuva.      ', correct: false },
      { text: 'interação do íon cálcio com o íon alumínio, produzindo uma liga metálica.', correct: false },
      { text: 'reação do carbonato de cálcio com os íons alumínio, formando alumínio metálico.', correct: false },
      { text: 'aumento da  alcalinidade, tomando os íons alumínio menos disponíveis..', correct: true },
    ]
  },




  {
    question: '(ENEM - 2018) O sulfeto de mercúrio(ll) foi usado como pigmento vermelho para pinturas de quadros e murais. Esse pigmento, conhecido como vermilion, escurece com o passar dos anos, fenômeno cuja origem é alvo de pesquisas. Aventou-se a hipótese de que o vermilion seja decomposto sob a ação da luz, produzindo uma fina camada de mercúrio metálico na superfície. Essa reação seria catalisada por íon cloreto presente na umidade do ar    \n\n Segundo a hipótese proposta, o íon cloreto atua na decomposição fotoquímica do vermilion',

    resolution: 'O íon cloreto atua na decomposição fotoquímica do vermilion como catalisador, diminuindo a energia de ativação da reação, como diz a letra c    ',
    
    answers: [
      { text: 'reagindo como agente oxidante.', correct: false },
      { text: 'deslocando o equilíbrio químico.', correct: false },
      { text: 'diminuindo a energia de ativação.', correct: true },
      { text: 'precipitando cloreto de mercúrio.', correct: false },
      { text: 'absorvendo a energia da luz visível.', correct: false },
    ]
  },





















































  
]
