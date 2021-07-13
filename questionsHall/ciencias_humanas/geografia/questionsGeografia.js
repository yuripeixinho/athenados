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
    question: '(ENEM - 2020) Embora inegáveis os benefícios que ambas as economias têm auferido do intercâmbio comercial, o Brasil ter reiterado seu objetivo de desenvolver com a China uma relação comercial menos assimétrica. Os números revelam com clareza a assimetria. As exportações brasileiras de produtos básicos, especialmente soja, minério de ferro e petróleo, compõem, dependendo do ano, algo entre 75% e 80% da pauta, ao passo que as importações brasileiras consistem, aproximadamente, em 95% de produtos industrializados chineses, que vão desde os mais variados bens de consumo até máquinas e equipamentos de alto valor. \n\n\n Uma ação estatal de longo prazo capaz de reduzir a assimetria na balança comercial brasileira, conforme exposto no texto, é o(a)',
    resolution: 'Com o fortalecimento da pesquisa científica permitiria a produção, no Brasil, de produtos com maior valor agregado, assim como os produtos vendidos a nós pela China, diminuindo a disparidade, citada pela questão, da balança comercial.',
    answers: [
      { text: 'expansão do setor extrativista.', correct: false },
      { text: 'incremento da atividade agrícola.', correct: false },
      { text: 'diversificação da matriz energética.', correct: false },
      { text: 'fortalecimento da pesquisa científica.', correct: true },
      { text: 'monitoramento do fluxo alfandegário.', correct: false },
    ]
  },
  {
    question: '(ENEM - 2020) As estatísticas mais recentes do Brasil rural revelam um paradoxo que interessa a toda sociedade: o emprego de natureza agrícola definha em praticamente todo o país, mas a população residente no campo voltou a crescer, ou pelo menos parou de cair. Esses sinais trocados sugerem que a dinâmica agrícola, embora fundamental, já não determina sozinha os rumos da demografia no campo. Esse novo cenário é explicado em parte pelo incremento do emprego não agrícola no campo. Ao mesmo tempo, aumentou a massa de desempregados, inativos e aposentados que mantém residência rural. \n\n\n Sobre o espaço brasileiro, o texto apresenta argumentos que refletem a:',
    resolution: 'O texto fala, justamente, sobre a diferença entre modos de vida rurais que fazem com que a demografia agrária se estabilize, mesmo com um número menor de empregos de natureza agrícola.',
    answers: [
      { text: 'heterogeneidade do modo de vida agrário.', correct: true },
      { text: 'redução do fluxo populacional nas cidades.', correct: false },
      { text: 'correlação entre força de trabalho e migração sazonal.', correct: false },
      { text: 'indissociabilidade entre local de moradia e acesso à renda.', correct: false },
      { text: 'desregulamentação das propriedades nas zonas de fronteira.', correct: false }
    ]
  },
  {
    question: '(ENEM - 2020) A propriedade compreende, em seu conteúdo e alcance, além do tradicional direito de uso, gozo e disposição por parte de seu titular , a obrigatoriedade do atendimento de sua função social, cuja definição é inseparável do requisito obrigatório do uso racional da propriedade e dos recursos ambientais que lhe são integrantes. O proprietário, como membro integrante da comunidade, se sujeita a obrigações crescentes que, ultrapassando os limites do direito de vizinhança, no âmbito do direito privado, abrangem o campo dos direitos da coletividade, visando o bem-estar geral, no âmbito do direito público. \n\n\n Os movimentos em prol da reforma agrária, que atuam com base no conceito de direito à propriedade apresentado no texto, propõem-se a:',
    
    resolution: 'A desapropriação de espaços improdutivos é a proposta dos movimentos pró reforma agrária.',
    answers: [
      { text: 'reverter o processo de privatização fundiária.', correct: false },
      { text: 'ressaltar a inviabilidade da produção latifundiária.', correct: false },
      { text: 'defender a desapropriação dos espaços improdutivos.', correct: true },
      { text: 'impedir a produção exportadora nas terras agricultáveis.', correct: false },
      { text: 'coibir o funcionamento de empresas agroindustriais no campo.', correct: false },
    ]
  },
  {
    question: '(Enem/2020) A expansão das cidades e a formação das aglomerações urbanas no Brasil, foram marcadas pela produção industrial e pela consolidação das metrópoles como locais de seu desenvolvimento. Na segunda metade do século XX, as metrópoles brasileiras estenderam-se por áreas de ocupação contínua, configurando densas regiões urbanizadas. \n\n\n O resultado do processo geográfico descrito foi o(a)',
    resolution: 'A extensão das metrópoles em áreas de ocupação contínua, justamente, fala sobre o crescimento das áreas periféricas.',
    answers: [
      { text: 'valorização da escala local.', correct: false },
      { text: 'crescimento das áreas periféricas.', correct: true },
      { text: 'densificação do transporte ferroviário.', correct: false },
      { text: 'predomínio do planejamento estadual', correct: false },
      { text: 'inibição de consórcios intermunicipais.', correct: false },
    ]
  },

  {
    question: '(Enem/2020) "Devo estar chegando perto do centro da Terra. Deixe-me ver: deve ter sido mais de seis mil quilômetros, por aí..." (como se vê, Alice tinha aprendido uma porção de coisas desse tipo na escola, e embora essa não fosse uma oportunidade lá muito boa de demonstrar conhecimentos, já que não havia ninguém por perto para escutá-la, em todo caso era bom praticar um pouco)"...sim, deve ser mais ou menos essa a distância...mas então qual seria a latitude ou longitude em que estou?" (Alice não tinha a menor ideia do que fosse latitude ou longitude, mas achou que eram palavras muito imponentes). \n\n\n O texto descreve uma confusão da personagem em relação',
    
    resolution: 'A falta de referencial do ponto de vista da Alice, gera toda essa confusão relatada no texto.',
    answers: [
      { text: 'ao tipo de projeção cartográfica.', correct: false },
      { text: 'aos contornos dos fusos horários.', correct: false },
      { text: 'à localização do norte magnético.', correct: false },
      { text: 'aos referenciais de posição relativa.', correct: true },
      { text: 'às distorções das formas continentais.', correct: false },
    ]
  },

  {
    question: '(Enem/2020) A demanda mundial para a produção de alimentos aumenta progressivamente a taxas muito altas. Atualmente, na maioria dos países, continentes e regiões, a água consumida na agricultura é de cerca de 70% da disponibilidade total.\n\n\n  Para que haja a redução da pressão sobre o recurso natural mencionado, a expansão da agricultura demanda melhorias no(a)',
    
    resolution: 'Com maior eficiência das técnicas de irrigação, teríamos um menor consumo de água, ajudando a resolver o problema exposto pelo texto.',
    answers: [
      { text: 'fertilização química do solo.', correct: false },
      { text: 'escoamento hídrico do terreno.', correct: false },
      { text: 'manutenção de poços artesianos.', correct: false },
      { text: 'eficiência das técnicas de irrigação.', correct: true },
      { text: 'velocidade das máquinas colheitadeiras.', correct: false },
    ]
  },

  {
    question: '(Enem/2020) O planejamento deixou de controlar o crescimento urbano e passou a encorajá-lo por todos os meios possíveis e imagináveis. Cidades, a nova mensagem soou em alto e bom som, eram máquinas de produzir riquezas. o primeiro e principal objetivo do planejamento devia ser o de azeitar a máquina. \n\n\n O modelo de planejamento urbano problematizado no texto é marcado pelo(a)    ' ,
    
    resolution: 'A participação empresarial nos grandes centros urbanos gerou esse intenso lucro que intensificou o processo de urbanização, sem regulamentação incisiva do Estado, já que, o mesmo, goza dessa riqueza gerada nas cidades.',
    answers: [
      { text: 'primazia da gestão popular.', correct: false },
      { text: 'uso de práticas sustentáveis.', correct: false },
      { text: 'construção do bem-estar social.', correct: false },
      { text: 'soberania do poder governamental.', correct: false },
      { text: 'ampliação da participação empresarial.', correct: true },
    ]
  },

  {
    question: '(Enem/2020) No caso do Departamento de Defesa dos Estados Unidos, a ênfase está posta no traçado de uma estratégia geral de desarticulação, não só dos inimigos reais como dos potenciais. Inserida na concepção preventiva que supõe que a mínima dissidência é um sinal de perigo e de guerra futura. Deve-se ter capacidade para responder a uma guerra convencional tanto quanto para enfrentar um inimigo difuso, atentando simultaneamente para todas as áreas geográficas do planeta. Trata-se, sem dúvida, da estratégia com pretensões mais abrangentes que se desenvolveu até agora.  \n\n\n Tomando o texto como parâmetro, qual tendência contemporânea impulsiona a formulação de estratégias mais abrangentes por parte do Estado americano?' ,
    
    resolution: 'As novas redes de comunicações permite uma nova organização dos agentes causadores de conflitos, como vimos no terrorismo europeu da última década, por isso, são necessárias novas estratégias para conseguir resolver esses problemas.',
    answers: [
      { text: 'Erradicação dos conflitos em territórios.', correct: false },
      { text: 'Propagação de organizações em redes.', correct: true },
      { text: 'Eliminação das diferenças regionais.', correct: false },
      { text: 'Ampliação do modelo democrático.', correct: false },
      { text: 'Projeção da diplomacia mundial.', correct: false },
    ]
  },

  {
    question: '(Enem/2020) Escudos antigos ou maciços cristalinos são blocos imensos de rochas antigas. Estes escudos são constituídos por rochas cristalinas (magmático-plutônicas), formadas em eras pré-cambrianas, ou por rochas metamórficas (material sedimentar) do Paleozóico. São resistentes, estáveis, porém bastante desgastadas. Correspondem a 36% da área territorial e dividem-se em duas grandes porções: o Escudo das Guianas (norte da Planície Amazônica) e o Escudo  Brasileiro (porção centro-oriental brasileira). \n\n\n As estruturas geológicas indicadas no texto são importantes economicamente para o brasil por concentrarem' ,
    
    resolution: 'Os maciços cristalinos são ricos, justamente, em minerais metálicos, provenientes do resfriamento do magma.',
    answers: [
      { text: 'fontes de águas termais.', correct: false },
      { text: 'afloramentos de sal-gema.', correct: false },
      { text: 'jazidas de minerais metálicos.', correct: true },
      { text: 'depósitos de calcário agrícola.', correct: false },
      { text: 'reservas de combustível fóssil.', correct: false },
    ]
  },

  {
    question: '(Enem/2020) Os seringueiros amazônicos eram invisíveis no cenário nacional nos anos 1970. Começaram a se articular como um movimento agrário no início dos anos 1980, e na década seguinte conseguiram reconhecimento nacional, obtendo a implantação das primeiras reservas extrativas após o assassinato de Chico Mendes. Assim, em vinte anos, os camponeses da floresta passaram da invisibilidade à posição de paradigma de desenvolvimento sustentável com participação popular. \n\n\n De acordo com o texto, a visibilidade dos seringueiros amazônicos foi estabelecida pela relação entre' ,
    
    resolution: 'A reivindicação de terras preservadas para o extrativismo da seringueira e a necessidade de preservar a mata nativa para manter essa espécie endêmica, foram os fatores que evidenciaram os serigueiros nesse contexto.',
    answers: [
      { text: 'crescimento econômico e migração de trabalhadores.', correct: false },
      { text: 'produção de borracha e escassez de recursos naturais.', correct: false },
      { text: 'reivindicação de terra e preservação de mata nativa.', correct: true },
      { text: 'incentivo governamental e conservação de territórios.', correct: false },
      { text: 'modernização de plantio e comércio de látex.', correct: false },
    ]
  },


  {
    question: '(Enem/2020) As cidades de Puebla, no México, e Legazpi, nas Filipinas, não tem quase nada em comum. Estão muito longe uma da outra e são habitadas por povos muito diferentes. O que as une é um trágico detalhe de sua geografia. Elas foram erguidas na vizinhança de alguns dos vulcões mais perigosos do mundo: o mexicano Popocatepéti e o filipino Mayon. Seus habitantes precisam estar prontos para correr a qualquer hora. Eles fazem parte dos 550 milhões de indivíduos que moram em zonas de risco vulcânico no mundo. Ao contrário do que seria sensato, continuam ali, indiferentes ao perigo que os espreita.   \n\n\n A característica física que justifica a fixação do homem nos locais apresentados no texto é a ocorrência de :' ,
    
    resolution: 'O magma despejado pelos vulcões torna o solo fértil, como a Terra Rocha no Brasil.',
    answers: [
      { text: 'solo fértil.', correct: true },
      { text: 'encosta íngreme.', correct: false },
      { text: 'vegetação diversificada.', correct: false },
      { text: 'drenagem eficiente.', correct: false },
      { text: 'clima ameno.', correct: false },
    ]
  },


  {
    question: '(Enem/2020) A  colisão entre uma placa continental e uma oceânica provocará a subducção desta última sob a placa continental, que, a exemplo dos arcos e eilhas, produzirá um arco magmático na borda do continente, composto por rochas vulcânicas acompanhado de deformações e metamorfismo tanto de rochas preexistentes como de parte das rochas formadas no processo. \n\n\n  Qual feição fisiográfica é gerada pelo processo tectônico apresentado?' ,
    
    resolution: 'Os Andes, por exemplo, formados pelo choque, geologicamente recente, da placa oceânica de Nazca e a placa continental Sul-Americana, por isso, é chamado de dobramento moderno.',
    answers: [
      { text: 'Planícies abissais.', correct: false },
      { text: 'Planaltos cristalinos.', correct: false },
      { text: 'Depressões absolutas.', correct: false },
      { text: 'Bacias sedimentares.', correct: false },
      { text: 'Dobramentos modernos.', correct: true },
    ]
  },

  {
    question: '(Enem/2020) \n\n TEXTO 1 \n\n O aumento de casos suspeitos de febre amarela em Minas pode estar relacionado à tragédia de Mariana, em 2015, segundo a bióloga da Fiocruz Márcia Chame. A hipótese tem como ponto de partida a localização das cidades mineiras que identificaram até o momento casos de pacientes com sintomas da doença. Grande parte está na região próxima do Rio Doce, afetado pelo rompimento da Barragem de Fundão, em novembro de 2015. \n\n TEXTO II \n\n Por outro lado, Servio Ribeiro considera remota a possibilidade de influência da tragédia de Mariana (MG) neste surto de febre amarela em Minas Gerais. "A febre amarela é uma doença de interior de floresta. O mosquito que a transmite põe ovos em cavidades de árvores e em bromélias. É um mosquito da estrutura da floresta. Ele não se relaciona muito com grandes corpos de água e com rios. As cidades afetadas pela doença estão em um região onde os rejeitos não chegaram com força para derrubar a floresta, diz biólogo. \n\n Sobre a tragédia de Mariana, os textos apresentam divergência quanto ao(à)',
    
    resolution: 'O segundo texto discorda que o aparecimento de mais casos da doença está relacionado à tragédia de Mariana',
    answers: [
      { text: 'poluição dos rios locais.      ', correct: false },
      { text: 'identificação da área afetada.      ', correct: false },
      { text: 'destruição da vegetação nativa.      ', correct: false },
      { text: 'aparecimento de enfermidade endêmica.      ', correct: true },
      { text: 'surgimento de comunidades desabrigadas.      ', correct: false },
    ]
  },
 































  
]
