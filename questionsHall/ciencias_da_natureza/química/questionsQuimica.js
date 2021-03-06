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
    question: '(ENEM - 2020) A enorme quantidade de res??duos gerados pelo consumo crescente da sociedade traz para a humanidade uma preocupa????o socioambiental, em especial pela quantidade de lixo produzido. Al??m da reciclagem e do re??so, pode-se melhorar ainda mais a qualidade de vida, substituindo pol??meros convencionais por pol??mero biodegrad??veis. \n\n\n Esses pol??meros t??m  grandes vantagens socioambientais em rela????o aos convencionais porque',

    resolution: 'Pol??meros biodegrad??veis sofrem degrada????o em um tempo menor que os convencionais.',
    answers: [
      { text: 'n??o s??o t??xicos.', correct: false },
      { text: 'n??o precisam ser reciclados.', correct: false },
      { text: 'n??o causam polui????o ambiental quando descartados.', correct: false },
      { text: 's??o degradados em um tempo bastante menor que os convencionais.      ', correct: true },
      { text: 'apresentam propriedades mec??nicas semelhantes aos convencionais.', correct: false },
    ]
  },


  {
    question: '(ENEM - 2020) A sacarase (ou invertase) ?? uma enzima que atua no intestino humano hidrolisando o dissacar??deo sacarose nos monossacar??deos glicose e frutose. Em um estudo cin??tico da rea????o de hidr??lise da sacarose (C12H22O11), foram dissolvidos 171 g de sacarose em 500 mL de ??gua. Observou-se que, a cada 100 minutos de rea????o, a concentra????o de sacarose foi reduzida ?? metade, qualquer que fosse o momento escolhido como tempo inicial. As massas molares dos elementos H, C e O s??o iguais a 1, 12 e 16g.mol-1, respectivamente.     \n\n\n Qual ?? a concentra????o de sacarose depois de 400 minutos do in??cio da rea????o de hidr??lise?',

    resolution: 'Pol??meros biodegrad??veis sofrem degrada????o em um tempo menor que os convencionais.',
    answers: [
      { text: '2,50x10-3 mol L-1', correct: false },
      { text: '6,25x10-2 mol L-1', correct: true },
      { text: '1,25x10-1 mol L-1', correct: false },
      { text: '2,50x10-1 mol L-1', correct: true },
      { text: '4,27x10-1 mol L-1', correct: false },
    ]
  },

  
  {
    question: '(ENEM - 2020) Mega espet??culos com queima de grande quantidade de fogos de artif??cio em festas de final de ano s??o muito comuns no Brasil. Ap??s a queima, grande quantidade de material particulado permanece suspensa no ar. Entre os res??duos, encontram-se compostos de s??dio, pot??ssio, b??rio, c??lcio, chumbo, antim??nio, cromo, al??m de percloratos e gases, como os dioxiodos de nitrog??nio e enxofre.     \n\n\n Esses espet??culos promovem riscos ambientais, porque',

    resolution: 'O chumbo e antim??nio s??o metais pesados. E o di??xido de nitrog??nio ?? um g??s t??xico.',
    answers: [
      { text: 'as subst??ncias resultantes da queima de fogos de artif??cio s??o inflam??veis.', correct: false },
      { text: 'os res??duos resultantes da queima de fogos de artif??cio ainda s??o explosivos.', correct: false },
      { text: 'o s??dio e o pot??ssio s??o os principais respons??veis pela toxicidade do produto da queima.', correct: false },
      { text: 'os produtos da queima cont??m metais pesados e gases t??xicos que resultam em polui????o atmosf??rica.', correct: true },
      { text: 'o material particulado gerado se deposita na superf??cie das folhas das plantas impedindo os processos de respira????o celular.', correct: false },
    ]
  },



  {
    question: '(ENEM - 2020) Grandes reservat??rios de ??leo leve de melhor qualidade e que produz petr??leo mais fino foram descobertos no litoral brasileiro numa camada denominada pr??-sal, formada h?? 150 milh??es de anos.    \n\n\n A utiliza????o desse recurso energ??tico acarreta para o ambiente um desequil??brio no ciclo do',

    resolution: 'O petr??leo ?? formado principalmente por grandes cadeias de hidrocarbonetos. O uso desse recurso ent??o acarreta desequil??brio do ciclo do carbono devido a libera????o dessas cadeias de hidrocarbonetos que se encontram abaixo da cadeia sedimentar (camada pr??-sal).',
    answers: [
      { text: 'nitrog??nio, devido ?? nitrifica????o ambiental transformando am??nia em nitrito.', correct: false },
      { text: 'nitrog??nio, devido ao aumento dos compostos nitrogenados no ambiente terrestre.', correct: false },
      { text: 'carbono, devido ao aumento dos carbonatos dissolvidos no ambiente marinho.', correct: false },
      { text: 'carbono, devido ao aumento das cadeias carb??nicas aprisionadas abaixo dos sedimentos.', correct: true },
      { text: 'f??sforo, devido ?? libera????o dos fosfatos acumulados no ambiente marinho.', correct: false },
    ]
  },




  {
    question: '(ENEM - 2020) A nanotecnologia pode ser caracterizada quando os compostos est??o na ordem de milion??simos de mil??metros, como na utiliza????o de nanomateriais catal??ticos nos processos industriais. O uso desses materiais aumenta a efici??ncia da produ????o, consome menos energia e gera menores quantidades de res??duos. O sucesso dessa aplica????o tecnol??gica muitas vezes est?? relacionado ao aumento da velocidade da rea????o qu??mica envolvida.    \n\n\n O ??xito da aplica????o essa tecnologia ?? por causa da realiza????o de rea????es qu??micas que ocorrem em condi????es de',

    resolution: 'Segundo o texto, o sucesso da nanotecnologia pode ser relacionada o aumento da velocidade das rea????es. Al??m disso, o uso desses materiais aumenta a efici??ncia, produz menos energia e gera menos res??duos. O aumento da superf??cie de contato aumenta a efici??ncia da rea????o.',
    answers: [
      { text: 'alta press??o.', correct: false },
      { text: 'alta temperatura.', correct: false },
      { text: 'excesso de reagentes.', correct: false },
      { text: 'maior superf??cie de contato.', correct: true },
      { text: 'elevada energia de ativa????o.', correct: false },
    ]
  },



  {
    question: '(ENEM - 2020) A Qu??mica Verde ?? um ramo da qu??mica que prega o desenvolvimento de processos eficientes, que transformem a maior parte do reagente em produto, de forma mais r??pida e seletiva, que utilizem poucos reagentes, que produzam somente o produto desejado, evitando a forma????o de coprodutos, e que utilizem solventes n??o agressivos ao meio ambiente. Assim, as ind??strias contornariam problemas relacionados ?? polui????o ambiental e ao desperd??cio de ??gua e energia. \n\n\n O perfil de um processo que segue todos os princ??pios desse ramo da qu??mica pode ser representado por:',

    resolution: 'Poucos reagentes, forma????o apenas do produto de interesse e uso de um catalisador nao t??xico.',
    answers: [
      { text: 'A+B+C???D (a rea????o ocorre a altas press??es).', correct: false },
      { text: 'A+B+???C+D (a rea????o ?? fortemente endot??rmica).', correct: false },
      { text: 'A+3B???C  (a rea????o ocorre com uso de solvente org??nico).', correct: false },
      { text: '3A+2B???2C???3D+2E (a rea????o ocorre sob press??o atmosf??rica).', correct: false },
      { text: 'A+12B???C  (a rea????o ocorre com o uso de um catalisador contendo um metal n??o t??xico).', correct: true },
    ]
  },



  {
    question: '(ENEM - 2020) Um teste de laborat??rio permite identificar alguns c??tions met??licos ao introduzir uma pequena quantidade do material de interesse em uma chama de bico de Bunsen para, em seguida, observar a cor da luz emitida.\n\n\n A cor observada ?? proveniente da emiss??o de radia????o eletromagn??tica ao ocorrer a',

    resolution: 'O aquecimento no bico de Bunsen promove a excita????o de el??trons dos c??tions para n??veis mais energ??ticos que ao retornar ir??o emitir esta energia na forma de luz. Esta propriedade ?? previsto pelo modelo at??mico de Bohr.',
    answers: [
      { text: 'mudan??a da fase s??lida para a fase l??quida do elemento met??lico.', correct: false },
      { text: 'combust??o dos c??tions met??licos provocada pelas mol??culas de oxig??nio da atmosfera.', correct: false },
      { text: 'diminui????o da energia cin??tica dos el??trons em uma mesma ??rbita na eletrosfera at??mica.', correct: false },
      { text: 'transi????o eletr??nica de um n??vel mais externo para outro mais interno na eletrosfera at??mica.', correct: true },
      { text: 'promo????o dos el??trons que se encontram no estado fundamental de energia para n??veis mais energ??ticos.', correct: false },
    ]
  },



  {
    question: '(ENEM - 2020) O concreto utilizado na constru????o civil ?? um material formado por cimento misturado a areia, a brita e a ??gua. A areia ?? normalmente extra??da de leitos de rios e brita, oriunda da fragmenta????o de rochas. Impactos ambientais gerados no uso de concreto est??o associados ?? extra????o de recursos minerais e ao descarte indiscriminado desse material. Na tentativa de reverter esse quadro, foi proposta a utiliza????o de concreto reciclado mo??do em substitui????o ao particulado rochoso gra??do na fabrica????o de novo concreto, obtendo um material com as mesmas propriedades que o anterior. \n\n\n O benef??cio ambiental gerado nessa proposta ?? a redu????o do(a)    ',

    resolution: 'Quando ?? dito que foi proposta a utiliza????o de concreto reciclado mo??do em substitui????o ao particulado rochoso gra??do na fabrica????o de novo concreto, deve-se entender que este material particulado gra??do rochoso ?? a brita. Como h?? a substitui????o da brita o benef??cio ambiental seria a redu????o da extra????o de brita.',
    answers: [
      { text: 'extra????o da brita.', correct: true },
      { text: 'extra????o da areia.', correct: false },
      { text: 'consumo da ??gua.', correct: false },
      { text: 'consumo do concreto.', correct: false },
      { text: 'fabrica????o de cimento.', correct: false },
    ]
  },



  {
    question: '(ENEM - 2020) Por terem camada de val??ncia completa, alta energia de ioniza????o e afinidade eletr??nica praticamente nula, considerou-se por muito tempo que os gases nobres n??o formariam compostos qu??micos. Por??m, em 1962, foi realizada com sucesso a rea????o entre xen??nio (camada de val??ncia 5s??5p6) e o hexafluoreto de platina e, desde ent??o, mais compostos novos de gases nobres v??m sendo sintetizados. Tais compostos demonstram que n??o se pode aceitar acriticamente a regra do octeto, na qual se considera que, numa liga????o qu??mica, os ??tomos tendem a adquirir estabilidade assumindo a configura????o eletr??nica de g??s nobre. Dentre os compostos conhecidos, um dos mais est??veis ?? o difluoreto de xen??nio, no qual dois ??tomos do halog??nio fl??or (camada de val??ncia 2s??2p5) se ligam covalentemente ao ??tomo de g??s nobre para ficarem com oito el??trons de val??ncia.    \n\n\n Ao se escrever a f??rmula de Lewis do composto de xen??nio citado, quantos el??trons na camada de val??ncia haver?? no ??tomo do g??s nobre?',

    resolution: 'Como o Xe j?? possui 8 el??trons na camada de val??ncia com a adi????o de 1 el??tron para cada F o Xe ter?? 10 el??trons na camada de val??ncia.',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: false },
      { text: '10', correct: true },
      { text: '12', correct: false },
      { text: '14', correct: false },
    ]
  },



  {
    question: '(ENEM - 2020) Companhias que fabricam jeans usam cloro para o clareamento, seguido de lavagem. Algumas est??o substituindo o cloro por subst??ncias ambientalmente mais seguras como per??xidos, que podem ser degradados por enzimas chamadas peroxidasses. Pensando nisso, pesquisadores inseriram genes codificadores de peroxidasses em leveduras cultivadas nas condi????es de clareamento e lavagem dos jeans e selecionaram as sobreviventes para produ????o dessas enzimas.\n\n\n Nesse caso, o uso dessas leveduras modificadas objetiva.',

    resolution: 'De acordo com o texto, o cloro ?? substitu??do por uma subst??ncia ambientalmente mais segura como o per??xido. Dessa forma, a produ????o de leveduras modificadas reduz a libera????o de subst??ncias t??xicas nos efluentes da lavagem do jeans.',
    answers: [
      { text: 'reduzir a quantidade de res??duos t??xicos efluentes da lavagem.', correct: true },
      { text: 'eliminar a necessidade de tratamento da ??gua consumida.', correct: false },
      { text: 'elevar a capacidade de clareamento dos jeans.', correct: false },
      { text: 'aumentar a resist??ncia do jeans a per??xidos.', correct: false },
      { text: 'associar a????o bactericida ao clareamento', correct: false },
    ]
  },




  {
    question: '(ENEM - 2020) Por meio de rea????es qu??micas que envolvem carboidratos, lip??deos e prote??nas, nossas c??lulas obt??m energia e produzem g??s carb??nico e ??gua. A oxida????o da glicoses no organismo humano libera energia, conforme ilustra a equa????o qu??mica, sendo que aproximadamente 40% dela ?? disponibilizada para atividade muscular.\n\n C6H12O6 (s) + 6 O2 (g) ??? 6 CO2 (g) + 6 H2O (I)   ???cH= -2800 kJ \n\n  Considere as massas molares (em g mol-1): H=1; C = 12; O= 16 \n\n\n Na oxida????o de 1,0 grama de glicose, a energia obtida para atividade muscular, em quilojoule, ?? mais pr??xima de',

    resolution: 'Da esquequiometria da rea????o, temos:    \n C6H12O6 +6 O2->6CO2 +6H2O \n A massa molar da glicose vale: MM = 6.M(C) + 12.M(H) + 6.M(O) = 6.12 + 12.1 + 6.16 = 180 g/mol. \n  Assim, o n??mero de mols de glicose vale: \n nglicose=1g/(180 g/mol)= 1/180 mol \n\n  Assim, temos que  \n 1 mol glicose ------------ 2800 kJ energia liberados \n 1/180 mol glicose ------- Eliberada \n Eliberada= 2800/180 kJ energia. \n\n\n Mas na atividade muscular, ?? liberada apenas 40% desse total de energia. Portanto. \n E = (2800/180).0,40 = 6,22 kJ energia liberados.',

    answers: [
      { text: '6,2.', correct: true },
      { text: '15,6.', correct: false },
      { text: '70,0', correct: false },
      { text: '622,2', correct: false },
      { text: '1120,0', correct: false },
    ]
  },



  {
    question: '(ENEM - 2020) Na mitologia grega, Ni??bia era a filha de T??ntalo, dois personagens conhecidos pelo sofrimento. O elemento qu??mico de n??mero at??mico (Z) igual a 41 tem propriedades qu??micas e f??sicas t??o parecidas com as do elemento de n??mero at??mico 73 que chegaram a ser confundidos. Por isso, em homenagem a esses dois personagens da mitologia grega, foi conferido a esses elementos os nomes de ni??bio (Z=41) e t??ntalo (Z=73). Esses dois elementos qu??micos adquiriram grande import??ncia econ??mica na metalurgia, na produ????o de supercondutores e em outras aplica????es na ind??stria de ponta, exatamente pelas propriedades qu??micas e f??sicas comuns aos dois.\n\n A import??ncia econ??mica e tecnol??gica desses elementos, pela similaridade de suas propriedades qu??micas e f??sicas, deve-se a',

    resolution: 'Pela distribui????o eletr??nica para os elementos Ni??bio (Z = 41) e -Ni??bio (Z = 41): [Kr] 5s?? 4d \n -T??ntalo (Z = 73): [Xe] 6s?? 4f145d3  \n \n Analisando as alternativas: \n -O item A ?? falso, pois apenas o T??ntalo possui el??trons em subn??veis f: \n  -O item B ?? falso, pois ambos s??o elementos de transi????o externa (a distribui????o eletr??nica termina em subn??veis d) \n -O item C ?? verdadeiro, os dois pertencem a fam??lia 5B (ou grupo 5) da tabela peri??dica; \n  -O item D ?? falso, os el??trons mais externos do Ni??bio e do T??ntalo pertencem ao 5?? e 6?? n??vel, respectivamente. \n -O item E ?? falso, pois s??o metais de transi????o externa, enquanto metais alcalino e alcalino-terrosos s??o representativos.',
    
    answers: [
      { text: 'terem el??trons no subn??vel f.', correct: false },
      { text: 'serem elementos de transi????o interna.', correct: false },
      { text: 'pertencerem ao mesmo grupo na tabela peri??dica.', correct: true },
      { text: 'terem seus el??trons mais externos nos n??veis 4 e 5, respectivamente.', correct: false },
      { text: 'estrarem localizados na fam??lia dos alcalinos terrosos e alcalinos, respectivamente.', correct: false },
    ]
  },





  {
    question: '(ENEM - 2018) O petr??leo ?? uma fonte de energia de baixo custo e de larga utiliza????o como mat??ria-prima para uma grande variedade de produtos. ?? um ??leo formado de v??rias subst??ncias de origem org??nica, em sua maioria hidrocarbonetos de diferentes massas molares. S??o utilizadas t??cnicas de separa????o para obten????o dos componentes comercializ??veis do petr??leo. Al??m disso, para aumentar a quantidade de fra????es comercializ??veis, otimizando o produto de origem f??ssil, utiliza-se o processo de craqueamento. O que ocorre nesse processo?,',

    resolution: 'O craqueamento do petr??leo ?? a quebra de fra????es pesadas do petr??leo bruto, transformando em fra????es mais leves.    ',
    
    answers: [
      { text: 'Transforma????o das fra????es do petr??leo em outras mol??culas menores.', correct: true },
      { text: 'Rea????o de ??xido-redu????o com transfer??ncia de el??trons entre as mol??culas.', correct: false },
      { text: 'Solubiliza????o das fra????es do petr??leo com a utiliza????o de diferentes solventes.', correct: false },
      { text: 'Decanta????o das mol??culas com diferentes massas molares pelo uso de centr??fugas.', correct: false },
      { text: 'Separa????o dos diferentes componentes do petr??leo em fun????o de suas temperaturas de ebuli????o.', correct: false },
    ]
  },




  {
    question: '(ENEM - 2018) As abelhas utilizam a sinaliza????o qu??mica para distinguir a abelha-rainha de uma oper??ria, sendo capazes de reconhecer diferen??as entre mol??culas. A rainha produz o sinalizador qu??mico conhecido mol??culas. ??cido 9-hidroxidec-2-enoico, enquanto as abelhas-oper??rias produzem ??cido 10-hidroxidec-2-enoico. N??s podemos distinguir as abelhas-oper??rias e rainhas sua apar??ncia, mas, entre si, elas usam essa sinaliza????o qu??mica para perceber a diferen??a. Pode-se dizer que veem por meio da qu??mica. As mol??culas dos sinalizadores qu??micos produzidas pelas abelhas rainha e oper??ria possuem diferen??a na',

    resolution: 'Conforme apresentado a seguir, o ??cido 9-hidroxi-dec-2-enoico e ??cido 10-hidroxi-dec-2-enoico apresentam f??rmulas estruturais diferentes, diferindo quando a posi????o do grupo funcional hidroxila (-OH).',
    
    answers: [
      { text: 'f??rmula estrutural.', correct: true },
      { text: 'f??rmula molecular.', correct: false },
      { text: 'identifica????o dos tipos de liga????o.', correct: false },
      { text: 'contagem do n??mero de carbonos.', correct: false },
      { text: 'identifica????o dos grupos funcionais.', correct: false },
    ]
  },




  {
    question: '(ENEM - 2020) O manejo adequado do solo possibilita a manuten????o de sua fertilidade ?? medida que as trocas de nutrientes entre mat??ria org??nica, ??gua, solo e o ar s??o mantidas para garantir a produ????o.  Algumas esp??cies i??nicas de alum??nio s??o t??xicas, n??o s?? para a planta, mas para muitos organismos como as bact??rias respons??veis pelas transforma????es no ciclo do nitrog??nio. O alum??nio danifica as membranas das c??lulas das ra??zes e restringe a expans??o de suas paredes, cm isso, a planta n??o cresce adequadamente. Para promover benef??cios para a produ????o agr??cola, ?? recomendada a remedia????o do solo utilizando calc??rio (CaCo3). \n\n Essa remedia????o promove no solo o(a)    ',

    resolution: 'O carbonato de c??lcio ?? um sal que sofre hidr??lise b??sica (vem de ??cido fraco com base forte), o que aumenta a alcalinidade do solo. Isso faz com que o equil??brio \n  Al3++3 OH- <--> Al(OH)3 \n Se desloque para a direita, favorecendo a precipita????o de Al(OH)3.',
    
    answers: [
      { text: 'diminui????o do PH, deixando-o f??rtil.', correct: false },
      { text: 'solubiliza????o do alum??nio, ocorrendo sua lixivia????o pela chuva.      ', correct: false },
      { text: 'intera????o do ??on c??lcio com o ??on alum??nio, produzindo uma liga met??lica.', correct: false },
      { text: 'rea????o do carbonato de c??lcio com os ??ons alum??nio, formando alum??nio met??lico.', correct: false },
      { text: 'aumento da  alcalinidade, tomando os ??ons alum??nio menos dispon??veis..', correct: true },
    ]
  },




  {
    question: '(ENEM - 2018) O sulfeto de merc??rio(ll) foi usado como pigmento vermelho para pinturas de quadros e murais. Esse pigmento, conhecido como vermilion, escurece com o passar dos anos, fen??meno cuja origem ?? alvo de pesquisas. Aventou-se a hip??tese de que o vermilion seja decomposto sob a a????o da luz, produzindo uma fina camada de merc??rio met??lico na superf??cie. Essa rea????o seria catalisada por ??on cloreto presente na umidade do ar    \n\n Segundo a hip??tese proposta, o ??on cloreto atua na decomposi????o fotoqu??mica do vermilion',

    resolution: 'O ??on cloreto atua na decomposi????o fotoqu??mica do vermilion como catalisador, diminuindo a energia de ativa????o da rea????o, como diz a letra c    ',
    
    answers: [
      { text: 'reagindo como agente oxidante.', correct: false },
      { text: 'deslocando o equil??brio qu??mico.', correct: false },
      { text: 'diminuindo a energia de ativa????o.', correct: true },
      { text: 'precipitando cloreto de merc??rio.', correct: false },
      { text: 'absorvendo a energia da luz vis??vel.', correct: false },
    ]
  },





















































  
]
