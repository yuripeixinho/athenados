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
    question: '(ENEM - 2020) Dois grandes eventos históricos tomaram possível um caso como o de Menocchio: a invenção da impresa e a Reforma. A imprensa lhe permitiu confrontar os livros com a tradição oral em que havia crescido e lhe forneceu as palavras para organizar o amontoado de ideias e fantasias que nele conviviam. A Reforma lhe deu audácia para comunicar o que pensava ao padre do vilarejo, conterrâneos, inquisidores - mesmo não tendo conseguido dizer tudo diante do papa, dos cardeais e dos príncipes, como queria. \n\n\n Os acontecimentos históricos citados ajudaram esse indivíduo, no século XVI, a repensar a visão católica do mundo ao possibilitarem a',
    resolution: 'O protestantismo defendia a livre interpretação dos textos bíblicos.',
    answers: [
      { text: ' Consulta pública das bibliotecas reais.', correct: false },
      { text: ' Sofisticação barroca do ritual litúrgico.', correct: false },
      { text: 'Aceitação popular da educação secular.', correct: false },
      { text: 'Interpretação autônoma dos textos bíblicos.', correct: true },
      { text: 'correção doutrinária das heresias medievais.', correct: false },
    ]
  },
  {
    question: '(ENEM - 2020) A arté pré-histórica africana foi incontestavelmente um veículo de mensagens pedagógicas e sociais. Os San, que constituem hoje o povo mais próximo da realidade das representações rupestres, afirmam que seus antepassados lhes explicaram sua visão do mundo a partir desse gigantesco livro de imagens que são as galerias. A educação dos povos que desconhecem a escrita está baseada sobretudo na imagem e no som, no audiovisual. \n\n\n De acordo com o texto, a arte mencionada é importante para os povos que a cultivam por colaborar para o(a)',
    resolution: 'Ao final do texto se afirma: “A educação dos povos que desconhecem a escrita está baseada sobretudo na imagem e no som, no audiovisual.” ',
    answers: [
      { text: 'transmissão dos saberes acumulados.', correct: true },
      { text: 'afirmar o ideário cristão para reconquistar a grandeza perdida.', correct: false },
      { text: 'ruptura da disciplina hierárquica.', correct: false },
      { text: 'surgimento dos laços familiares.', correct: false },
      { text: 'rejeição de práticas exógenas.', correct: false }

    ]
  },
  {
    question: '(ENEM - 2020) Desde o mundo antigo e sua filosofia, que o trabalho tem sido compreendido como expressão de vida e degradação, criação e infelicidade, atividade vital e escravidão, felicidade social e servidão. Trabalho e fadiga. Na modernidade, sob o comando do mundo da mercadoria e do dinheiro, a prevalência do negócio (negar o ócio) veio sepultar o império do repouso, da folga e da preguiça, criando uma ética positiva do trabalho. \n\n\n O processo de ressignificação do trabalho nas sociedades modernas teve início a partir do surgimento de uma nova mentalidade, influenciada pela',
    
    resolution: 'Weber trabalha muito a ideia de que a nova visão protestante, especialmente a Calvista, trouxe a ideia do trabalho como positivo, há uma racionalização do trabalho secular que apresenta a ideia de que este leva o indivíduo a um caminho de rentabilidade.',
    answers: [
      { text: 'reforma higienista, que combateu o caráter excessivo e insalubre do trabalho fabril.', correct: false },
      { text: 'Reforma Protestante, que expressou a importância das atividades laboriais no mundo secularizado.', correct: true },
      { text: 'força do sindicalismo, que emergiu no esteio do anarquismo reivindicando direitos trabalhistas.', correct: false },
      { text: 'participação das mulheres em movimentos sociais, defendendo o direito ao trabalho.', correct: false },
      { text: 'visão do catolicismo, que, desde a Idade Média, defendia a dignidade do trabalho e do lucro.', correct: false },
    ]
  },
  {
    question: '(ENEM - 2020) Sexto rei sumério (governante entre os século XVIII e XVII a.C.) e nascido em Babel, "Khammu-rabi" (pronúncia em babilônio) foi fundado do I Império Babilônico (correspondente ao atual Iraque), unificando amplamente o mundo mesopotâmico, unindo os semitas e os sumérios e levando a Babilônia ao máximo esplendor. O nome de Hamurábi permanece indissociavelmente ligado ao código jurídico tido como o mais remoto já descoberto: o Código de Hamurábi. O legislador babilônico consolidou a tradição jurídica, harmonizou os costumes e estendeu o direito e a lei a todos os súditos. \n\n\n Nesse contexto de organização da vida social, as leis contidas no código citado tinham o sentido de...',
    
    resolution: 'O Código de Hamurabi é um conjunto de leis que tange majoritariamente sobre punições. É conhecido principalmente devido a lei de Talião “olho por olho, dente por dente."',
    answers: [
      { text: 'assegurar garantias individuais aos cidadãos livres.', correct: false },
      { text: 'tipificar as regras referentes aos atos dignos de punição.', correct: true },
      { text: 'conceder benefícios de indulto aos prisioneiros de guerra.', correct: false },
      { text: 'promover distribuição de terras aos desempregados urbanos.', correct: false },
      { text: 'conferir prerrogativas políticas aos descendentes de estrangeiros.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) É difícil imaginar que nos anos 1990, num país com setores da população na pobreza absoluta e sem uma rede de benefícios sociais em que se apoiar, um governo possa abandonar o papel de promotor de programas de geração de emprego, de assistência social, de desenvolvimento da infraestrutura e de promoção de regiões excluídas, na expectativa de que o mercado venha algum dia a dar uma resposta adequada a tudo isso. \n\n\n Nesse contexto, a criticada postura dos governos frente à situação social do país coincidiu com a priorização de que medidas?',
    
    resolution: 'Na década de 90 um dos grandes problemas do Brasil era sem dúvidas a inflação como uma consequência da década de 80. Os governos focaram em tentar controlar a inflação e em reformas políticas macroeconômica.',
    answers: [
      { text: 'Expansão dos investimentos nas empresas públicas e nos bancos estatais.', correct: false },
      { text: 'Democratização do crédito habitacional e da aquisição de moradias populares..', correct: false },
      { text: 'Enxugamento da carga fiscal individual e da contribuição tributária empresarial.', correct: false },
      { text: 'Reformulação do acesso ao ensino superior e do financiamento científico nacional.', correct: false },
      { text: 'Reforma das políticas macroeconômicas e dos mecanismos de controle inflacionário.', correct: true },
    ]
  },

  {
    question: '(ENEM - 2020) A Divisão Internacional do Trabalho significa que alguns países se especializam em ganhar e outros, em perder. Nossa comarca no mundo, que hoje chamamos de América Latina, foi precoce: especializou-se em perder desde os remotos tempos em que os europeus do Renascimento se aventuraram pelos mares e lhe cravaram os dentes na garganta. Passaram-se os séculos e a América Latina aprimorou suas funções. \n\n\n Escrito na década de 1970, o texto considera a participação da América Latina na Divisão Internacional do Trabalho marcada pela',
    
    resolution: 'O imperialismo, colonial, aproveitou de nossos recursos territoriais para implantar esse sistema agroexportador e extrativista na América Latina, que se desenvolveu com o passar do tempo, mas, não se alterou.',
    answers: [
      { text: 'produção inovadora de padrões de tecnologia.', correct: false },
      { text: 'superação paulatina do caráter agroexportador.', correct: false },
      { text: 'apropriação imperialista dos recursos territoriais.', correct: true },
      { text: 'valorização econômica dos saberes tradicionais', correct: false },
      { text: 'dependência externa do suprimento de alimentos.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) A reabilitação da biografia histórica integrou as aquisições da história social e cultura, oferecendo aos diferentes atores históricos uma importância diferenciada, distinta, individual. Mas não se tratava mais de fazer, simplesmente, a história dos grandes nomes, em formato hagiográfico — quase uma vida de santo —, sem problemas, nem máculas. Mas de como examinar os atores (ou o ator) célebres ou não, como testemunhas, como reflexos, como reveladores de uma época. \n\n\n De acordo com o texto, novos estudos têm valorizado a história do indivíduo por se constituir como possibilidade de',
    
    resolution: 'A historiografia ao ampliar as suas fontes e valorizar a história de múltiplos sujeitos incluindo indivíduos comuns vê por meio destes a possibilidade de acesso ao cotidiano das comunidades. “como examinar os atores (ou o ator) célebres ou não, como testemunhas, como reflexos, como reveladores de uma época.”',
    answers: [
      { text: 'adesão ao método positivista.', correct: false },
      { text: 'expressão do papel das elites.', correct: false },
      { text: 'resgate das narrativas heroicas.', correct: false },
      { text: 'acesso ao cotidiano das comunidades.', correct: true },
      { text: 'interpretação das manifestações do divino.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) Na Grécia, o conceito de povo abrange tão somente aqueles indivíduos considerados cidadãos. Assim é possível perceber que o conceito do povo era muito restritivo. Mesmo tendo isso em conta, a forma democrática vivenciada e experimentada pelos gregos atenienses nos séculos IV e V a.C. pode ser caracterizada, fundamentalmente, como direta. \n\n\n Naquele contexto, a emergência do sistema de governo mencionado no excerto promoveu o(a):',
    
    resolution: 'Com a democracia direta, os indivíduos agraciados com o status de cidadania poderiam participar diretamente das decisões políticas. ',
    answers: [
      { text: 'competição para escolha de representantes.', correct: false },
      { text: 'campanha pela revitalização das oligarquias.', correct: false },
      { text: 'estabelecimento de mandatos temporários.', correct: false },
      { text: 'declínio da sociedade civil organizada.', correct: false },
      { text: 'participação do exercício do poder.', correct: true },
    ]
  },

  {
    question: '(ENEM - 2020) Com efeito, até a destruição de Cartago, o povo e o Senado romano governavam a República em harmonia e sem paixão, e não havia entre os cidadãos luta por glória ou dominação, o medo do inimigo mantinha a cidade no cumprimento do dever. Mas, assim que o medo desapareceu dos espíritos, introduziram-se os males pelos quais a prosperidade tem predileção, isto é, a libertinagem e o orgulho. \n\n\n O acontecimento histórico mencionado no texto de Salústio, datado de I a.C., manteve correspondência com o processo de',
    
    resolution: 'A destruição de Cartago por Roma foi definitiva para o processo de expansão desta sociedade. A partir desta conquista a então República que posteriormente transformou-se em um Império passou a possuir como um característica primordial o expansionismo.',
    answers: [
      { text: 'demarcarção de terras públicas.', correct: false },
      { text: 'imposição da escravidão por dívidas..', correct: false },
      { text: 'restrição da cidadania por parentesco.', correct: false },
      { text: 'restauração das instituições ancestrais.', correct: false },
      { text: 'expansão das fronteiras extra peninsulares.', correct: true },
    ]
  },

  {
    question: '(ENEM - 2020) Com os ideais liberais oriundos do pensamento iluminista, trazidos à América especialmente pelos emigrantes que foram se estabelecer na Nova Inglaterra, pode-se observar o desenvolvimento de uma situação social de regulamentação da propriedade e de liberdade comercial, o que ilustra, especialmente, a consolidação dos valores burgueses implementados nesses ideais. \n\n\n O texto tematiza o papel desempenhado por uma norma na criação de um ambiente propício ao(à):',
    
    resolution: 'Na década de 90 um dos grandes problemas do Brasil era sem dúvidas a inflação como uma consequência da década de 80. Os governos focaram em tentar controlar a inflação e em reformas políticas macroeconômica.',
    answers: [
      { text: 'emprego do trabalho escravo.', correct: false },
      { text: 'consolidação dos valores burgueses.', correct: true },
      { text: 'banimento das dissidências religiosas.', correct: false },
      { text: 'contenção da identificação nacionalista', correct: false },
      { text: 'hierarquização dos agentes econômicos', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) O toyotismo, a partir dos anos 1970, teve grande impacto no mundo ocidental, quando se mostrou para os países avançados como uma opção possível para a superação de uma crise de acumulação. \n\n\n A característica organizacional do modelo em questão, requerida no contexto de crise, foi o(a)',
    
    resolution: 'O toyotismo veio, justamente, para efetuar uma produção que se adequava à demanda, para que não ocorresse a mesma crise do ano de 1929.',
    answers: [
      { text: 'expansão dos grandes estoques.', correct: false },
      { text: 'incremento da fabricação em massa.', correct: false },
      { text: 'adequação da produção à demanda.', correct: true },
      { text: 'aumento da mecanização do trabalho.', correct: false },
      { text: 'centralização das etapas de planejamento.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) Porque todos confessamos não se pode viver sem alguns escravos, que busquem a lenha e a água, e façam cada dia o pão que se come, e outros serviços que não são possíveis poderem-se fazer pelos Irmãos Jesuítas, máxime sendo tão poucos, que seria necessário deixar as confissões e tudo mais. Parece-me que a Companhia de Jesus deve ter e adquirir escravos, justamente, por meios que as Constituições permitem, quando puder para nossos colégios e casas de meninos. \n\n\n O texto explicita premissas da expansão ultramarina portuguesa ao buscar justificar a...',
    
    resolution: 'A partir do texto de apoio da questão, nota-se o esforço por parte da Companhia de Jesus em legitimar e promover o uso da mão de obra escravizada em suas funções desempenhadas na colônia, algo que explicita as premissas da expansão ultramarina portuguesa na medida em que busca legitimar o cativeiro em prol dos movimentos de aculturação e catequização desempenhados por eles.',
    answers: [
      { text: 'propagação do ideário cristão.', correct: false },
      { text: 'valorização do trabalho braçal.', correct: false },
      { text: 'adoção do cativeiro na Colônia.', correct: true },
      { text: 'adesão ao ascetismo contemplativo.', correct: false },
      { text: 'alfabetização dos indígenas nas Missões.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) Os representantes do povo francês, tendo em vista que a ignorância, o esquecimento ou o desprezo dos direitos do homem são as únicas causas das infelicidades públicas e da corrupção dos governos, resolveram declarar solenemente os direitos naturais, inalienáveis e sagrados do homem, a fim de que esta declaração, sempre presente em todos os membros do corpo social, lhes lembre permanentemente seus direitos e seus deveres; a fim de que as reivindicações dos cidadãos, fundadas em princípios simples e incontestáveis, se dirijam sempre à conservação da Constituição e à felicidade geral. \n\n\n Esse documento, elaborado no contexto da Revolução Francesa, reflete uma profunda mudança social ao estabelecer a...',
    
    resolution: 'A partir desse documento, considerava-se todos os homens como iguais na França, desde que dotados do status de cidadania.',
    answers: [
      { text: 'manutenção das terras comunais.', correct: false },
      { text: 'supressão do poder constituínte.', correct: false },
      { text: 'falência da sociedade burguesa.', correct: false },
      { text: 'paridade no tratamento jurídico.', correct: true },
      { text: 'abolição dos partidos políticos.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) Ao abrigo do teto, sua jornada de fé começava na sala de jantar.  Na équena célula cristã, dividia-se a refeição e durante elas os crentes conversavam, rezavam e liam cartas de correligionários residentes em locais diferentes do Império Romano (século II da Era Cristã). Esse ambiente garantia peculiar apoio emocional às experiências intensamente individuais que abrigava. \n\n\n Um motivo que explica a ambientação da prática descrita no texto encontra-se no(a)',
    
    resolution: 'Nesse contexto, somente poder-se-ia professar a fé oficial do Império.',
    answers: [
      { text: 'regra judaica, que pregava a superioridade espiritual dos cultos das sinagogas.', correct: false },
      { text: 'moralismo da legislação, que dificultava as reuniões abertas da juventude livre.', correct: false },
      { text: 'adesão ao patriciado, que subvertia o conceito original dos valores estrangeiros.', correct: false },
      { text: 'decisão política, que censurava as manifestações públicas da doutrina dissidente.', correct: true },
      { text: 'violência senhorial, que impunha a desestruturação forçada das famílias escravas.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) O movimento sedicioso ocorrido na capitania de Pernambuco, no ano 1817, foi analisado de formas diferentes por dois meios de comunicação daquela época. O Correio Braziliense apontou para o fato de ser "a comoção do Brasil motivada por um descontentamento geral, e não por maquinações de alguns indivíduos". Já a Gazeta do Rio de Janeiro considerou o movimento como um "pontual desvio de norma, apenas uma "mancha" nas páginas da "História Portuguesa", tão distinta pelos testemunhos de amor e respeito que os vassalos desta nação consagram ao seu soberano. \n\n\n Os fragmentos das matérias jornalísticas sobre o acontecimento, embora com percepções diversas, relacionam-se a um aspecto do processo de independência da colônia luso-americana expresso em dissensões entre',
    
    resolution: ' No contexto do Período Joanino, diversos grupos regionais disputavam a atenção da corte que se instaurara no Brasil em detrimento do contexto internacional. Os textos demonstram o modo como em cada jornal o interesse dos grupos regionais que controlam tais meios de comunicação sobre o regime.',
    answers: [
      { text: 'quadros dirigentes em torno da abolição da ordem escravocrata.', correct: false },
      { text: 'grupos regionais acerca da configuração político-territorial.', correct: true },
      { text: 'intelectuais laicos acerca dda revogação do domínio eclesiástico.', correct: false },
      { text: 'homens livres  em torno da extensão do direito de voto.', correct: false },
      { text: 'elites locais acerca da ordenação do monopólio fundiário.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) O cântico da terra \n\n Eu sou a terra, eu sou a vida. \n A ti, ó lavrador, tudo quanto é meu. \n Teu arado, tua foice, teu machado. \n O berço pequenino de teu filho. \n O algodão de tua veste \n e o pão de tua casa. \n E um dia bem distante \n a mim tu voltarás. \n E no canteiro materno de meu seio \n tranquilo dormirás. \n Plantemos a roça \n Lavremos a gleba. \n\n No contexto das distintas formas de apropriação da terra, o poema de Cora Coralina valoriza a relação entre',
    
    resolution: 'Observa-se no texto um eu lirico que se dirige ao lavrador e se dispõe a servi-lo, além de toda relação familiar para com a terra.',
    answers: [
      { text: 'grileiros e controle territorial.', correct: false },
      { text: 'meeiros e divisão do trabalho.', correct: false },
      { text: 'camponeses e uso da natureza.', correct: true },
      { text: 'indígenas e manejo agroecológico.', correct: false },
      { text: 'latifundiários e fertilização do solo.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) Afirmar que a cartografia da época moderna integrou o processo de invenção da América por parte dos europeus significa que os conhecimentos dos ameríndios sobre o território foram ignorados pela cartografia europeia ou que eles foram privados de sua representação territorial e da autoridade que seus conhecimentos tinham sobre o espaço. \n\n\n Na análise contida no texto, a representação cartográfica da América foi marcada por',

    images: '../../_image/discordia.png',
    
    resolution: 'Pois, essa negação faz parte do processo de dominação, onde o dominador ignora qualquer conhecimento do dominado por se considerar superior em diversos aspectos.',
    answers: [
      { text: 'asserção da cultura dos nativos.', correct: false },
      { text: 'avanço dos estudos do ambiente.', correct: false },
      { text: 'afirmação das formas de dominação.', correct: true },
      { text: 'exatidão da demarcação das regiões.', correct: false },
      { text: 'aprimoramento do conceito de fronteira.', correct: false },
    ]
  },








































  
]
