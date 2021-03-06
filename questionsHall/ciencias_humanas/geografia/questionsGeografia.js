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
    question: '(ENEM - 2020) Embora ineg??veis os benef??cios que ambas as economias t??m auferido do interc??mbio comercial, o Brasil ter reiterado seu objetivo de desenvolver com a China uma rela????o comercial menos assim??trica. Os n??meros revelam com clareza a assimetria. As exporta????es brasileiras de produtos b??sicos, especialmente soja, min??rio de ferro e petr??leo, comp??em, dependendo do ano, algo entre 75% e 80% da pauta, ao passo que as importa????es brasileiras consistem, aproximadamente, em 95% de produtos industrializados chineses, que v??o desde os mais variados bens de consumo at?? m??quinas e equipamentos de alto valor. \n\n\n Uma a????o estatal de longo prazo capaz de reduzir a assimetria na balan??a comercial brasileira, conforme exposto no texto, ?? o(a)',
    resolution: 'Com o fortalecimento da pesquisa cient??fica permitiria a produ????o, no Brasil, de produtos com maior valor agregado, assim como os produtos vendidos a n??s pela China, diminuindo a disparidade, citada pela quest??o, da balan??a comercial.',
    answers: [
      { text: 'expans??o do setor extrativista.', correct: false },
      { text: 'incremento da atividade agr??cola.', correct: false },
      { text: 'diversifica????o da matriz energ??tica.', correct: false },
      { text: 'fortalecimento da pesquisa cient??fica.', correct: true },
      { text: 'monitoramento do fluxo alfandeg??rio.', correct: false },
    ]
  },
  {
    question: '(ENEM - 2020) As estat??sticas mais recentes do Brasil rural revelam um paradoxo que interessa a toda sociedade: o emprego de natureza agr??cola definha em praticamente todo o pa??s, mas a popula????o residente no campo voltou a crescer, ou pelo menos parou de cair. Esses sinais trocados sugerem que a din??mica agr??cola, embora fundamental, j?? n??o determina sozinha os rumos da demografia no campo. Esse novo cen??rio ?? explicado em parte pelo incremento do emprego n??o agr??cola no campo. Ao mesmo tempo, aumentou a massa de desempregados, inativos e aposentados que mant??m resid??ncia rural. \n\n\n Sobre o espa??o brasileiro, o texto apresenta argumentos que refletem a:',
    resolution: 'O texto fala, justamente, sobre a diferen??a entre modos de vida rurais que fazem com que a demografia agr??ria se estabilize, mesmo com um n??mero menor de empregos de natureza agr??cola.',
    answers: [
      { text: 'heterogeneidade do modo de vida agr??rio.', correct: true },
      { text: 'redu????o do fluxo populacional nas cidades.', correct: false },
      { text: 'correla????o entre for??a de trabalho e migra????o sazonal.', correct: false },
      { text: 'indissociabilidade entre local de moradia e acesso ?? renda.', correct: false },
      { text: 'desregulamenta????o das propriedades nas zonas de fronteira.', correct: false }
    ]
  },
  {
    question: '(ENEM - 2020) A propriedade compreende, em seu conte??do e alcance, al??m do tradicional direito de uso, gozo e disposi????o por parte de seu titular , a obrigatoriedade do atendimento de sua fun????o social, cuja defini????o ?? insepar??vel do requisito obrigat??rio do uso racional da propriedade e dos recursos ambientais que lhe s??o integrantes. O propriet??rio, como membro integrante da comunidade, se sujeita a obriga????es crescentes que, ultrapassando os limites do direito de vizinhan??a, no ??mbito do direito privado, abrangem o campo dos direitos da coletividade, visando o bem-estar geral, no ??mbito do direito p??blico. \n\n\n Os movimentos em prol da reforma agr??ria, que atuam com base no conceito de direito ?? propriedade apresentado no texto, prop??em-se a:',
    
    resolution: 'A desapropria????o de espa??os improdutivos ?? a proposta dos movimentos pr?? reforma agr??ria.',
    answers: [
      { text: 'reverter o processo de privatiza????o fundi??ria.', correct: false },
      { text: 'ressaltar a inviabilidade da produ????o latifundi??ria.', correct: false },
      { text: 'defender a desapropria????o dos espa??os improdutivos.', correct: true },
      { text: 'impedir a produ????o exportadora nas terras agricult??veis.', correct: false },
      { text: 'coibir o funcionamento de empresas agroindustriais no campo.', correct: false },
    ]
  },
  {
    question: '(Enem/2020) A expans??o das cidades e a forma????o das aglomera????es urbanas no Brasil, foram marcadas pela produ????o industrial e pela consolida????o das metr??poles como locais de seu desenvolvimento. Na segunda metade do s??culo XX, as metr??poles brasileiras estenderam-se por ??reas de ocupa????o cont??nua, configurando densas regi??es urbanizadas. \n\n\n O resultado do processo geogr??fico descrito foi o(a)',
    resolution: 'A extens??o das metr??poles em ??reas de ocupa????o cont??nua, justamente, fala sobre o crescimento das ??reas perif??ricas.',
    answers: [
      { text: 'valoriza????o da escala local.', correct: false },
      { text: 'crescimento das ??reas perif??ricas.', correct: true },
      { text: 'densifica????o do transporte ferrovi??rio.', correct: false },
      { text: 'predom??nio do planejamento estadual', correct: false },
      { text: 'inibi????o de cons??rcios intermunicipais.', correct: false },
    ]
  },

  {
    question: '(Enem/2020) "Devo estar chegando perto do centro da Terra. Deixe-me ver: deve ter sido mais de seis mil quil??metros, por a??..." (como se v??, Alice tinha aprendido uma por????o de coisas desse tipo na escola, e embora essa n??o fosse uma oportunidade l?? muito boa de demonstrar conhecimentos, j?? que n??o havia ningu??m por perto para escut??-la, em todo caso era bom praticar um pouco)"...sim, deve ser mais ou menos essa a dist??ncia...mas ent??o qual seria a latitude ou longitude em que estou?" (Alice n??o tinha a menor ideia do que fosse latitude ou longitude, mas achou que eram palavras muito imponentes). \n\n\n O texto descreve uma confus??o da personagem em rela????o',
    
    resolution: 'A falta de referencial do ponto de vista da Alice, gera toda essa confus??o relatada no texto.',
    answers: [
      { text: 'ao tipo de proje????o cartogr??fica.', correct: false },
      { text: 'aos contornos dos fusos hor??rios.', correct: false },
      { text: '?? localiza????o do norte magn??tico.', correct: false },
      { text: 'aos referenciais de posi????o relativa.', correct: true },
      { text: '??s distor????es das formas continentais.', correct: false },
    ]
  },

  {
    question: '(Enem/2020) A demanda mundial para a produ????o de alimentos aumenta progressivamente a taxas muito altas. Atualmente, na maioria dos pa??ses, continentes e regi??es, a ??gua consumida na agricultura ?? de cerca de 70% da disponibilidade total.\n\n\n  Para que haja a redu????o da press??o sobre o recurso natural mencionado, a expans??o da agricultura demanda melhorias no(a)',
    
    resolution: 'Com maior efici??ncia das t??cnicas de irriga????o, ter??amos um menor consumo de ??gua, ajudando a resolver o problema exposto pelo texto.',
    answers: [
      { text: 'fertiliza????o qu??mica do solo.', correct: false },
      { text: 'escoamento h??drico do terreno.', correct: false },
      { text: 'manuten????o de po??os artesianos.', correct: false },
      { text: 'efici??ncia das t??cnicas de irriga????o.', correct: true },
      { text: 'velocidade das m??quinas colheitadeiras.', correct: false },
    ]
  },

  {
    question: '(Enem/2020) O planejamento deixou de controlar o crescimento urbano e passou a encoraj??-lo por todos os meios poss??veis e imagin??veis. Cidades, a nova mensagem soou em alto e bom som, eram m??quinas de produzir riquezas. o primeiro e principal objetivo do planejamento devia ser o de azeitar a m??quina. \n\n\n O modelo de planejamento urbano problematizado no texto ?? marcado pelo(a)    ' ,
    
    resolution: 'A participa????o empresarial nos grandes centros urbanos gerou esse intenso lucro que intensificou o processo de urbaniza????o, sem regulamenta????o incisiva do Estado, j?? que, o mesmo, goza dessa riqueza gerada nas cidades.',
    answers: [
      { text: 'primazia da gest??o popular.', correct: false },
      { text: 'uso de pr??ticas sustent??veis.', correct: false },
      { text: 'constru????o do bem-estar social.', correct: false },
      { text: 'soberania do poder governamental.', correct: false },
      { text: 'amplia????o da participa????o empresarial.', correct: true },
    ]
  },

  {
    question: '(Enem/2020) No caso do Departamento de Defesa dos Estados Unidos, a ??nfase est?? posta no tra??ado de uma estrat??gia geral de desarticula????o, n??o s?? dos inimigos reais como dos potenciais. Inserida na concep????o preventiva que sup??e que a m??nima dissid??ncia ?? um sinal de perigo e de guerra futura. Deve-se ter capacidade para responder a uma guerra convencional tanto quanto para enfrentar um inimigo difuso, atentando simultaneamente para todas as ??reas geogr??ficas do planeta. Trata-se, sem d??vida, da estrat??gia com pretens??es mais abrangentes que se desenvolveu at?? agora.  \n\n\n Tomando o texto como par??metro, qual tend??ncia contempor??nea impulsiona a formula????o de estrat??gias mais abrangentes por parte do Estado americano?' ,
    
    resolution: 'As novas redes de comunica????es permite uma nova organiza????o dos agentes causadores de conflitos, como vimos no terrorismo europeu da ??ltima d??cada, por isso, s??o necess??rias novas estrat??gias para conseguir resolver esses problemas.',
    answers: [
      { text: 'Erradica????o dos conflitos em territ??rios.', correct: false },
      { text: 'Propaga????o de organiza????es em redes.', correct: true },
      { text: 'Elimina????o das diferen??as regionais.', correct: false },
      { text: 'Amplia????o do modelo democr??tico.', correct: false },
      { text: 'Proje????o da diplomacia mundial.', correct: false },
    ]
  },

  {
    question: '(Enem/2020) Escudos antigos ou maci??os cristalinos s??o blocos imensos de rochas antigas. Estes escudos s??o constitu??dos por rochas cristalinas (magm??tico-plut??nicas), formadas em eras pr??-cambrianas, ou por rochas metam??rficas (material sedimentar) do Paleoz??ico. S??o resistentes, est??veis, por??m bastante desgastadas. Correspondem a 36% da ??rea territorial e dividem-se em duas grandes por????es: o Escudo das Guianas (norte da Plan??cie Amaz??nica) e o Escudo  Brasileiro (por????o centro-oriental brasileira). \n\n\n As estruturas geol??gicas indicadas no texto s??o importantes economicamente para o brasil por concentrarem' ,
    
    resolution: 'Os maci??os cristalinos s??o ricos, justamente, em minerais met??licos, provenientes do resfriamento do magma.',
    answers: [
      { text: 'fontes de ??guas termais.', correct: false },
      { text: 'afloramentos de sal-gema.', correct: false },
      { text: 'jazidas de minerais met??licos.', correct: true },
      { text: 'dep??sitos de calc??rio agr??cola.', correct: false },
      { text: 'reservas de combust??vel f??ssil.', correct: false },
    ]
  },

  {
    question: '(Enem/2020) Os seringueiros amaz??nicos eram invis??veis no cen??rio nacional nos anos 1970. Come??aram a se articular como um movimento agr??rio no in??cio dos anos 1980, e na d??cada seguinte conseguiram reconhecimento nacional, obtendo a implanta????o das primeiras reservas extrativas ap??s o assassinato de Chico Mendes. Assim, em vinte anos, os camponeses da floresta passaram da invisibilidade ?? posi????o de paradigma de desenvolvimento sustent??vel com participa????o popular. \n\n\n De acordo com o texto, a visibilidade dos seringueiros amaz??nicos foi estabelecida pela rela????o entre' ,
    
    resolution: 'A reivindica????o de terras preservadas para o extrativismo da seringueira e a necessidade de preservar a mata nativa para manter essa esp??cie end??mica, foram os fatores que evidenciaram os serigueiros nesse contexto.',
    answers: [
      { text: 'crescimento econ??mico e migra????o de trabalhadores.', correct: false },
      { text: 'produ????o de borracha e escassez de recursos naturais.', correct: false },
      { text: 'reivindica????o de terra e preserva????o de mata nativa.', correct: true },
      { text: 'incentivo governamental e conserva????o de territ??rios.', correct: false },
      { text: 'moderniza????o de plantio e com??rcio de l??tex.', correct: false },
    ]
  },


  {
    question: '(Enem/2020) As cidades de Puebla, no M??xico, e Legazpi, nas Filipinas, n??o tem quase nada em comum. Est??o muito longe uma da outra e s??o habitadas por povos muito diferentes. O que as une ?? um tr??gico detalhe de sua geografia. Elas foram erguidas na vizinhan??a de alguns dos vulc??es mais perigosos do mundo: o mexicano Popocatep??ti e o filipino Mayon. Seus habitantes precisam estar prontos para correr a qualquer hora. Eles fazem parte dos 550 milh??es de indiv??duos que moram em zonas de risco vulc??nico no mundo. Ao contr??rio do que seria sensato, continuam ali, indiferentes ao perigo que os espreita.   \n\n\n A caracter??stica f??sica que justifica a fixa????o do homem nos locais apresentados no texto ?? a ocorr??ncia de :' ,
    
    resolution: 'O magma despejado pelos vulc??es torna o solo f??rtil, como a Terra Rocha no Brasil.',
    answers: [
      { text: 'solo f??rtil.', correct: true },
      { text: 'encosta ??ngreme.', correct: false },
      { text: 'vegeta????o diversificada.', correct: false },
      { text: 'drenagem eficiente.', correct: false },
      { text: 'clima ameno.', correct: false },
    ]
  },


  {
    question: '(Enem/2020) A  colis??o entre uma placa continental e uma oce??nica provocar?? a subduc????o desta ??ltima sob a placa continental, que, a exemplo dos arcos e eilhas, produzir?? um arco magm??tico na borda do continente, composto por rochas vulc??nicas acompanhado de deforma????es e metamorfismo tanto de rochas preexistentes como de parte das rochas formadas no processo. \n\n\n  Qual fei????o fisiogr??fica ?? gerada pelo processo tect??nico apresentado?' ,
    
    resolution: 'Os Andes, por exemplo, formados pelo choque, geologicamente recente, da placa oce??nica de Nazca e a placa continental Sul-Americana, por isso, ?? chamado de dobramento moderno.',
    answers: [
      { text: 'Plan??cies abissais.', correct: false },
      { text: 'Planaltos cristalinos.', correct: false },
      { text: 'Depress??es absolutas.', correct: false },
      { text: 'Bacias sedimentares.', correct: false },
      { text: 'Dobramentos modernos.', correct: true },
    ]
  },

  {
    question: '(Enem/2020) \n\n TEXTO 1 \n\n O aumento de casos suspeitos de febre amarela em Minas pode estar relacionado ?? trag??dia de Mariana, em 2015, segundo a bi??loga da Fiocruz M??rcia Chame. A hip??tese tem como ponto de partida a localiza????o das cidades mineiras que identificaram at?? o momento casos de pacientes com sintomas da doen??a. Grande parte est?? na regi??o pr??xima do Rio Doce, afetado pelo rompimento da Barragem de Fund??o, em novembro de 2015. \n\n TEXTO II \n\n Por outro lado, Servio Ribeiro considera remota a possibilidade de influ??ncia da trag??dia de Mariana (MG) neste surto de febre amarela em Minas Gerais. "A febre amarela ?? uma doen??a de interior de floresta. O mosquito que a transmite p??e ovos em cavidades de ??rvores e em brom??lias. ?? um mosquito da estrutura da floresta. Ele n??o se relaciona muito com grandes corpos de ??gua e com rios. As cidades afetadas pela doen??a est??o em um regi??o onde os rejeitos n??o chegaram com for??a para derrubar a floresta, diz bi??logo. \n\n Sobre a trag??dia de Mariana, os textos apresentam diverg??ncia quanto ao(??)',
    
    resolution: 'O segundo texto discorda que o aparecimento de mais casos da doen??a est?? relacionado ?? trag??dia de Mariana',
    answers: [
      { text: 'polui????o dos rios locais.', correct: false },
      { text: 'identifica????o da ??rea afetada.', correct: false },
      { text: 'destrui????o da vegeta????o nativa.', correct: false },
      { text: 'aparecimento de enfermidade end??mica.', correct: true },
      { text: 'surgimento de comunidades desabrigadas.', correct: false },
    ]
  },


  {
    question: '(Enem/2019) A pegada ecol??gica gigante que estamos a deixar no planeta est?? a transform??-lo de tal forma que os especialistas consideram que j?? entramos numa nova ??poca geol??gica, o Antropoceno. E muitos defendem que, se n??o travarmos a crise ambiental, mais rapidamente transformaremos a Terra em V??nus do que iremos a Marte. A express??o "Antropoceno" ?? atribu??da ao qu??mico e pr??mio Nobel Paul Crutzen, que a prop??s durante uma confer??ncia em 2000, ao mesmo tempo que anunciou o fim do Holoceno ??? a ??poca geol??gica em que os seres humanos se encontram h?? cerca de 12 mil anos, segundo a Uni??o Internacional das Ci??ncias Geol??gicas (UICG), a entidade que define as unidades de tempo geol??gicas. \n\n A concep????o apresentada considera a exist??ncia de uma nova ??poca geol??gica concebida a partir da capacidade de influ??ncia humana nos processos:     ',
    
    resolution: 'Mesmo com o aquecimento global e com as mudan??as clim??ticas, n??o somos capazes de realizar mudan??as end??genas em nosso planeta (End??geno ?? um fen??meno ou processo geol??gico que se realiza no interior do planeta Terra), pelo menos por enquanto, mas sim mudan??as ex??genas.',
    answers: [
      { text: 'eruptivos.', correct: false },
      { text: 'ex??genos.', correct: true },
      { text: 'tect??nicos.', correct: false },
      { text: 'magm??ticos.', correct: false },
      { text: 'metam??rficos.', correct: false },
    ]
  },

  {
    question: '(Enem/2019) O Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renov??veis (Ibama) est?? investigando o exterm??nio de abelhas por intoxica????o por agrot??xicos em colmeias de S??o Paulo e Minas Gerais. Os estudos com inseticidas do tipo neonicotinoides devem estar conclu??dos no primeiro semestre de 2015. Trata-se de um problema de escala mundial, presente, inclusive, em pa??ses do chamado primeiro mundo, e que traz, como consequ??ncia grave amea??a aos seres vivos do planeta, inclusive ao homem. \n\n Qual solu????o para o problema apresentado garante a produtividade da agricultura moderna?    ',
    
    resolution: 'Uma solu????o para amenizar os efeitos da extin????o das abelhas ?? o controle biol??gico, e n??o qu??mica. ?? uma t??cnica que utiliza meios naturais, notadamente outros organismos vivos, criada para diminuir a popula????o de organismos considerados praga',
    answers: [
      { text: 'Preserva????o da ??rea de mata ciliar.', correct: false },
      { text: 'Ado????o da pr??tica de aduba????o qu??mica.', correct: false },
      { text: 'Utiliza????o da t??cnica de controle biol??gico.', correct: true },
      { text: 'Amplia????o do modelo de monocultura tropical.', correct: false },
      { text: 'Intensifica????o da drenagem do solo de v??rzea.', correct: false },
    ]
  },


  {
    question: '(Enem/2019) A fome n??o ?? um problema t??cnico, pois ela n??o se deve ?? falta de alimentos, isso porque a fome convive houve com as condi????es materiais para resolv??-la.\n\n O texto demonstra que o problema alimentar apresentado tem uma dimens??o pol??tica por estar associado ao(??)',
    
    resolution: 'Esta quest??o j?? caiu em outros momentos no ENEM. Ela trata sobre a m?? distribui????o de renda e de alimentos no mundo. Lembrando que n??o temos o aumento populacional como um problema, mas sim uma solu????o, j?? que um pa??s com uma grande popula????o ?? capaz de se desenvolver e possuir um mercado interno importante, como ?? o caso de pa??ses como o Brasil, Nig??ria, Paquist??o, ??ndia, China, EUA entre outros.',
    answers: [
      { text: 'escala de produtividade regional', correct: false },
      { text: 'padr??o de distribui????o de renda', correct: true },
      { text: 'dificuldade de armazenamento de gr??os', correct: false },
      { text: 'crescimento da popula????o mundial', correct: false },
      { text: 'custo de escoamento dos produtos', correct: false },
    ]
  },

  {
    question: '(Enem/2019) Os moradores de Utiqiagvik passaram dois meses quase totalmente na escurid??o \n\n  Os habitantes desta pequena cidade no Alasca - o estado dos Estados Unidos mais ao norte - j?? est??o acostumados a longas noites sem ver a luz do dia. Em 18 de novembro de 2018, seus pouco mais de 4 mil habitantes viram o ??ltimo p??r do sol do ano. A oportunidade seguinte para ver a luz do dia ocorreu no dia 23 de janeiro de 2019, ??s 13 h 04 min (hor??rio local). \n\n O fen??meno descrito est?? relacionado ao fato de a cidade citada ter uma posi????o geogr??fica condicionada pela     ',
    
    resolution: 'Quest??o bem tranquila, exige apenas que o aluno tenha conhecimento sobre coordenadas geogr??ficas, ele poderia se confundir com longitude e latitude. \n\n a) latitude: est?? intrinsecamente ligada ??s diferen??as da radia????o solar sobre a Terra. Assim, quanto mais pr??ximo ?? Linha do Equador (baixas latitudes), mais as temperaturas tendem a aumentar. Por outro lado, ?? medida que nos direcionamos rumo ??s zonas polares (altas latitudes), menores tendem a ser as temperaturas.    ',
    answers: [
      { text: 'continentalidade', correct: false },
      { text: 'maritimidade', correct: false },
      { text: 'longitude', correct: false },
      { text: 'latitude', correct: true },
      { text: 'altitude', correct: false },
    ]
  },


  {
    question: 'O b??nus demogr??fico ?? caracterizado pelo per??odo em que, por causa da redu????o do n??mero de filhos por mulher, a estrutura populacional fica favor??vel ao crescimento econ??mico. Isso acontece porque h?? proporcionalmente menos crian??as na popula????o, e o percentual de idosos ainda n??o ?? alto. \n\n A a????o estatal que contribui para o aproveitamento do b??nus demogr??fico ?? o est??mulo ??:    ',
    
    resolution: 'O b??nus demogr??fico ?? uma grande oportunidade que o pa??s tem em qualificar sua m??o de obra jovem e adicionar elas no mercado. Infelizmente o Brasil n??o soube aproveitar este momento, o que o prejudica muito na competividade internacional, principalmente na ind??stria.',
    answers: [
      { text: 'atra????o de imigrantes', correct: false },
      { text: 'eleva????o da carga tribut??ria', correct: false },
      { text: 'qualifica????o da m??o de obra', correct: true },
      { text: 'admiss??o de exilados pol??ticos', correct: false },
      { text: 'concess??o de aposentadorias', correct: false },
    ]
  },

  {
    question: 'Saudado por centenas de militantes de movimentos sociais de quarenta pa??ses, o papa Francisco encerrou no dia 09/07/2015 o 2?? Encontro Mundial dos Movimentos Populares, em Santa Cruz de La Sierra, na Bol??via. Segundo ele, a ???globaliza????o da esperan??a, que nasce dos povos e cresce entre os pobres, deve substituir esta globaliza????o da exclus??o e da indiferen??a???. \n\n No texto h?? uma cr??tica ao seguinte aspecto do mundo globalizado:    ',
    
    resolution: 'Uma cr??tica do Papa Francisco ?? a respeito das disparidades econ??micas. Observar-se que a escolha do Jorge Mario Bergoglio por S??o Francisco ?? baseado justamente no combate a desigualdade e da pobreza.',
    answers: [
      { text: 'Liberdade pol??tica.', correct: false },
      { text: 'Mobilidade humana.', correct: false },
      { text: 'Conectividade cultural.', correct: false },
      { text: 'Disparidade econ??mica.', correct: true },
      { text: 'Complementaridade comercial.', correct: false },
    ]
  },

  {
    question: 'A reestrutura????o global da ind??stria, condicionada pelas estrat??gias de gest??o global da cadeia de valor dos grandes grupos transnacionais, promoveu um forte deslocamento do processo produtivo, at?? mesmo de plantas industriais inteiras, e redirecionou os fluxos de produ????o e de investimento. Entretanto, o aumento da participa????o dos pa??ses em desenvolvimento no produto global deu-se de forma bastante assim??trica quando se compara o dinamismo dos pa??ses do leste asi??tico com o dos demais  pa??ses, sobretudo os latino-americanos, no per??odo 1980-2000. \n\n A din??mica de transforma????o da geografia das ind??strias descrita exp??e a complementaridade entre dispers??o espacial e:    ',
    
    resolution: 'Quest??o exige que o aluno tenha conhecimentos b??sicos sobre os efeitos da globaliza????o, que foi uma dispers??o econ??mica, com uma maior participa????o dos pa??ses perif??ricos na economia, como os BRICS. Ao mesmo tempo, ocorreu uma concentra????o econ??mica dos pa??ses centrais (EUA, UE e Jap??o).',
    answers: [
      { text: 'Autonomia tecnol??gica', correct: false },
      { text: 'Crises de abastecimento.', correct: false },
      { text: 'Descentraliza????o pol??tica.', correct: false },
      { text: 'Concentra????o econ??mica.', correct: true },
      { text: 'Compartilhamento de lucros.', correct: false },
    ]
  },




















  
]
