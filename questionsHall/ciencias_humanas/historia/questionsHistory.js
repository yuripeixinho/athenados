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
    question: '(ENEM - 2020) Dois grandes eventos hist??ricos tomaram poss??vel um caso como o de Menocchio: a inven????o da impresa e a Reforma. A imprensa lhe permitiu confrontar os livros com a tradi????o oral em que havia crescido e lhe forneceu as palavras para organizar o amontoado de ideias e fantasias que nele conviviam. A Reforma lhe deu aud??cia para comunicar o que pensava ao padre do vilarejo, conterr??neos, inquisidores - mesmo n??o tendo conseguido dizer tudo diante do papa, dos cardeais e dos pr??ncipes, como queria. \n\n\n Os acontecimentos hist??ricos citados ajudaram esse indiv??duo, no s??culo XVI, a repensar a vis??o cat??lica do mundo ao possibilitarem a',
    resolution: 'O protestantismo defendia a livre interpreta????o dos textos b??blicos.',
    answers: [
      { text: 'Consulta p??blica das bibliotecas reais.', correct: false },
      { text: 'Sofistica????o barroca do ritual lit??rgico.', correct: false },
      { text: 'Aceita????o popular da educa????o secular.', correct: false },
      { text: 'Interpreta????o aut??noma dos textos b??blicos.', correct: true },
      { text: 'corre????o doutrin??ria das heresias medievais.', correct: false },
    ]
  },
  {
    question: '(ENEM - 2020) A art?? pr??-hist??rica africana foi incontestavelmente um ve??culo de mensagens pedag??gicas e sociais. Os San, que constituem hoje o povo mais pr??ximo da realidade das representa????es rupestres, afirmam que seus antepassados lhes explicaram sua vis??o do mundo a partir desse gigantesco livro de imagens que s??o as galerias. A educa????o dos povos que desconhecem a escrita est?? baseada sobretudo na imagem e no som, no audiovisual. \n\n\n De acordo com o texto, a arte mencionada ?? importante para os povos que a cultivam por colaborar para o(a)',
    resolution: 'Ao final do texto se afirma: ???A educa????o dos povos que desconhecem a escrita est?? baseada sobretudo na imagem e no som, no audiovisual.??? ',
    answers: [
      { text: 'transmiss??o dos saberes acumulados.', correct: true },
      { text: 'afirmar o ide??rio crist??o para reconquistar a grandeza perdida.', correct: false },
      { text: 'ruptura da disciplina hier??rquica.', correct: false },
      { text: 'surgimento dos la??os familiares.', correct: false },
      { text: 'rejei????o de pr??ticas ex??genas.', correct: false }

    ]
  },
  {
    question: '(ENEM - 2020) Desde o mundo antigo e sua filosofia, que o trabalho tem sido compreendido como express??o de vida e degrada????o, cria????o e infelicidade, atividade vital e escravid??o, felicidade social e servid??o. Trabalho e fadiga. Na modernidade, sob o comando do mundo da mercadoria e do dinheiro, a preval??ncia do neg??cio (negar o ??cio) veio sepultar o imp??rio do repouso, da folga e da pregui??a, criando uma ??tica positiva do trabalho. \n\n\n O processo de ressignifica????o do trabalho nas sociedades modernas teve in??cio a partir do surgimento de uma nova mentalidade, influenciada pela',
    
    resolution: 'Weber trabalha muito a ideia de que a nova vis??o protestante, especialmente a Calvista, trouxe a ideia do trabalho como positivo, h?? uma racionaliza????o do trabalho secular que apresenta a ideia de que este leva o indiv??duo a um caminho de rentabilidade.',
    answers: [
      { text: 'reforma higienista, que combateu o car??ter excessivo e insalubre do trabalho fabril.', correct: false },
      { text: 'Reforma Protestante, que expressou a import??ncia das atividades laboriais no mundo secularizado.', correct: true },
      { text: 'for??a do sindicalismo, que emergiu no esteio do anarquismo reivindicando direitos trabalhistas.', correct: false },
      { text: 'participa????o das mulheres em movimentos sociais, defendendo o direito ao trabalho.', correct: false },
      { text: 'vis??o do catolicismo, que, desde a Idade M??dia, defendia a dignidade do trabalho e do lucro.', correct: false },
    ]
  },
  {
    question: '(ENEM - 2020) Sexto rei sum??rio (governante entre os s??culo XVIII e XVII a.C.) e nascido em Babel, "Khammu-rabi" (pron??ncia em babil??nio) foi fundado do I Imp??rio Babil??nico (correspondente ao atual Iraque), unificando amplamente o mundo mesopot??mico, unindo os semitas e os sum??rios e levando a Babil??nia ao m??ximo esplendor. O nome de Hamur??bi permanece indissociavelmente ligado ao c??digo jur??dico tido como o mais remoto j?? descoberto: o C??digo de Hamur??bi. O legislador babil??nico consolidou a tradi????o jur??dica, harmonizou os costumes e estendeu o direito e a lei a todos os s??ditos. \n\n\n Nesse contexto de organiza????o da vida social, as leis contidas no c??digo citado tinham o sentido de...',
    
    resolution: 'O C??digo de Hamurabi ?? um conjunto de leis que tange majoritariamente sobre puni????es. ?? conhecido principalmente devido a lei de Tali??o ???olho por olho, dente por dente."',
    answers: [
      { text: 'assegurar garantias individuais aos cidad??os livres.', correct: false },
      { text: 'tipificar as regras referentes aos atos dignos de puni????o.', correct: true },
      { text: 'conceder benef??cios de indulto aos prisioneiros de guerra.', correct: false },
      { text: 'promover distribui????o de terras aos desempregados urbanos.', correct: false },
      { text: 'conferir prerrogativas pol??ticas aos descendentes de estrangeiros.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) ?? dif??cil imaginar que nos anos 1990, num pa??s com setores da popula????o na pobreza absoluta e sem uma rede de benef??cios sociais em que se apoiar, um governo possa abandonar o papel de promotor de programas de gera????o de emprego, de assist??ncia social, de desenvolvimento da infraestrutura e de promo????o de regi??es exclu??das, na expectativa de que o mercado venha algum dia a dar uma resposta adequada a tudo isso. \n\n\n Nesse contexto, a criticada postura dos governos frente ?? situa????o social do pa??s coincidiu com a prioriza????o de que medidas?',
    
    resolution: 'Na d??cada de 90 um dos grandes problemas do Brasil era sem d??vidas a infla????o como uma consequ??ncia da d??cada de 80. Os governos focaram em tentar controlar a infla????o e em reformas pol??ticas macroecon??mica.',
    answers: [
      { text: 'Expans??o dos investimentos nas empresas p??blicas e nos bancos estatais.', correct: false },
      { text: 'Democratiza????o do cr??dito habitacional e da aquisi????o de moradias populares..', correct: false },
      { text: 'Enxugamento da carga fiscal individual e da contribui????o tribut??ria empresarial.', correct: false },
      { text: 'Reformula????o do acesso ao ensino superior e do financiamento cient??fico nacional.', correct: false },
      { text: 'Reforma das pol??ticas macroecon??micas e dos mecanismos de controle inflacion??rio.', correct: true },
    ]
  },

  {
    question: '(ENEM - 2020) A Divis??o Internacional do Trabalho significa que alguns pa??ses se especializam em ganhar e outros, em perder. Nossa comarca no mundo, que hoje chamamos de Am??rica Latina, foi precoce: especializou-se em perder desde os remotos tempos em que os europeus do Renascimento se aventuraram pelos mares e lhe cravaram os dentes na garganta. Passaram-se os s??culos e a Am??rica Latina aprimorou suas fun????es. \n\n\n Escrito na d??cada de 1970, o texto considera a participa????o da Am??rica Latina na Divis??o Internacional do Trabalho marcada pela',
    
    resolution: 'O imperialismo, colonial, aproveitou de nossos recursos territoriais para implantar esse sistema agroexportador e extrativista na Am??rica Latina, que se desenvolveu com o passar do tempo, mas, n??o se alterou.',
    answers: [
      { text: 'produ????o inovadora de padr??es de tecnologia.', correct: false },
      { text: 'supera????o paulatina do car??ter agroexportador.', correct: false },
      { text: 'apropria????o imperialista dos recursos territoriais.', correct: true },
      { text: 'valoriza????o econ??mica dos saberes tradicionais', correct: false },
      { text: 'depend??ncia externa do suprimento de alimentos.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) A reabilita????o da biografia hist??rica integrou as aquisi????es da hist??ria social e cultura, oferecendo aos diferentes atores hist??ricos uma import??ncia diferenciada, distinta, individual. Mas n??o se tratava mais de fazer, simplesmente, a hist??ria dos grandes nomes, em formato hagiogr??fico ??? quase uma vida de santo ???, sem problemas, nem m??culas. Mas de como examinar os atores (ou o ator) c??lebres ou n??o, como testemunhas, como reflexos, como reveladores de uma ??poca. \n\n\n De acordo com o texto, novos estudos t??m valorizado a hist??ria do indiv??duo por se constituir como possibilidade de',
    
    resolution: 'A historiografia ao ampliar as suas fontes e valorizar a hist??ria de m??ltiplos sujeitos incluindo indiv??duos comuns v?? por meio destes a possibilidade de acesso ao cotidiano das comunidades. ???como examinar os atores (ou o ator) c??lebres ou n??o, como testemunhas, como reflexos, como reveladores de uma ??poca.???',
    answers: [
      { text: 'ades??o ao m??todo positivista.', correct: false },
      { text: 'express??o do papel das elites.', correct: false },
      { text: 'resgate das narrativas heroicas.', correct: false },
      { text: 'acesso ao cotidiano das comunidades.', correct: true },
      { text: 'interpreta????o das manifesta????es do divino.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) Na Gr??cia, o conceito de povo abrange t??o somente aqueles indiv??duos considerados cidad??os. Assim ?? poss??vel perceber que o conceito do povo era muito restritivo. Mesmo tendo isso em conta, a forma democr??tica vivenciada e experimentada pelos gregos atenienses nos s??culos IV e V a.C. pode ser caracterizada, fundamentalmente, como direta. \n\n\n Naquele contexto, a emerg??ncia do sistema de governo mencionado no excerto promoveu o(a):',
    
    resolution: 'Com a democracia direta, os indiv??duos agraciados com o status de cidadania poderiam participar diretamente das decis??es pol??ticas. ',
    answers: [
      { text: 'competi????o para escolha de representantes.', correct: false },
      { text: 'campanha pela revitaliza????o das oligarquias.', correct: false },
      { text: 'estabelecimento de mandatos tempor??rios.', correct: false },
      { text: 'decl??nio da sociedade civil organizada.', correct: false },
      { text: 'participa????o do exerc??cio do poder.', correct: true },
    ]
  },

  {
    question: '(ENEM - 2020) Com efeito, at?? a destrui????o de Cartago, o povo e o Senado romano governavam a Rep??blica em harmonia e sem paix??o, e n??o havia entre os cidad??os luta por gl??ria ou domina????o, o medo do inimigo mantinha a cidade no cumprimento do dever. Mas, assim que o medo desapareceu dos esp??ritos, introduziram-se os males pelos quais a prosperidade tem predile????o, isto ??, a libertinagem e o orgulho. \n\n\n O acontecimento hist??rico mencionado no texto de Sal??stio, datado de I a.C., manteve correspond??ncia com o processo de',
    
    resolution: 'A destrui????o de Cartago por Roma foi definitiva para o processo de expans??o desta sociedade. A partir desta conquista a ent??o Rep??blica que posteriormente transformou-se em um Imp??rio passou a possuir como um caracter??stica primordial o expansionismo.',
    answers: [
      { text: 'demarcar????o de terras p??blicas.', correct: false },
      { text: 'imposi????o da escravid??o por d??vidas..', correct: false },
      { text: 'restri????o da cidadania por parentesco.', correct: false },
      { text: 'restaura????o das institui????es ancestrais.', correct: false },
      { text: 'expans??o das fronteiras extra peninsulares.', correct: true },
    ]
  },

  {
    question: '(ENEM - 2020) Com os ideais liberais oriundos do pensamento iluminista, trazidos ?? Am??rica especialmente pelos emigrantes que foram se estabelecer na Nova Inglaterra, pode-se observar o desenvolvimento de uma situa????o social de regulamenta????o da propriedade e de liberdade comercial, o que ilustra, especialmente, a consolida????o dos valores burgueses implementados nesses ideais. \n\n\n O texto tematiza o papel desempenhado por uma norma na cria????o de um ambiente prop??cio ao(??):',
    
    resolution: 'Na d??cada de 90 um dos grandes problemas do Brasil era sem d??vidas a infla????o como uma consequ??ncia da d??cada de 80. Os governos focaram em tentar controlar a infla????o e em reformas pol??ticas macroecon??mica.',
    answers: [
      { text: 'emprego do trabalho escravo.', correct: false },
      { text: 'consolida????o dos valores burgueses.', correct: true },
      { text: 'banimento das dissid??ncias religiosas.', correct: false },
      { text: 'conten????o da identifica????o nacionalista', correct: false },
      { text: 'hierarquiza????o dos agentes econ??micos', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) O toyotismo, a partir dos anos 1970, teve grande impacto no mundo ocidental, quando se mostrou para os pa??ses avan??ados como uma op????o poss??vel para a supera????o de uma crise de acumula????o. \n\n\n A caracter??stica organizacional do modelo em quest??o, requerida no contexto de crise, foi o(a)',
    
    resolution: 'O toyotismo veio, justamente, para efetuar uma produ????o que se adequava ?? demanda, para que n??o ocorresse a mesma crise do ano de 1929.',
    answers: [
      { text: 'expans??o dos grandes estoques.', correct: false },
      { text: 'incremento da fabrica????o em massa.', correct: false },
      { text: 'adequa????o da produ????o ?? demanda.', correct: true },
      { text: 'aumento da mecaniza????o do trabalho.', correct: false },
      { text: 'centraliza????o das etapas de planejamento.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) Porque todos confessamos n??o se pode viver sem alguns escravos, que busquem a lenha e a ??gua, e fa??am cada dia o p??o que se come, e outros servi??os que n??o s??o poss??veis poderem-se fazer pelos Irm??os Jesu??tas, m??xime sendo t??o poucos, que seria necess??rio deixar as confiss??es e tudo mais. Parece-me que a Companhia de Jesus deve ter e adquirir escravos, justamente, por meios que as Constitui????es permitem, quando puder para nossos col??gios e casas de meninos. \n\n\n O texto explicita premissas da expans??o ultramarina portuguesa ao buscar justificar a...',
    
    resolution: 'A partir do texto de apoio da quest??o, nota-se o esfor??o por parte da Companhia de Jesus em legitimar e promover o uso da m??o de obra escravizada em suas fun????es desempenhadas na col??nia, algo que explicita as premissas da expans??o ultramarina portuguesa na medida em que busca legitimar o cativeiro em prol dos movimentos de acultura????o e catequiza????o desempenhados por eles.',
    answers: [
      { text: 'propaga????o do ide??rio crist??o.', correct: false },
      { text: 'valoriza????o do trabalho bra??al.', correct: false },
      { text: 'ado????o do cativeiro na Col??nia.', correct: true },
      { text: 'ades??o ao ascetismo contemplativo.', correct: false },
      { text: 'alfabetiza????o dos ind??genas nas Miss??es.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) Os representantes do povo franc??s, tendo em vista que a ignor??ncia, o esquecimento ou o desprezo dos direitos do homem s??o as ??nicas causas das infelicidades p??blicas e da corrup????o dos governos, resolveram declarar solenemente os direitos naturais, inalien??veis e sagrados do homem, a fim de que esta declara????o, sempre presente em todos os membros do corpo social, lhes lembre permanentemente seus direitos e seus deveres; a fim de que as reivindica????es dos cidad??os, fundadas em princ??pios simples e incontest??veis, se dirijam sempre ?? conserva????o da Constitui????o e ?? felicidade geral. \n\n\n Esse documento, elaborado no contexto da Revolu????o Francesa, reflete uma profunda mudan??a social ao estabelecer a...',
    
    resolution: 'A partir desse documento, considerava-se todos os homens como iguais na Fran??a, desde que dotados do status de cidadania.',
    answers: [
      { text: 'manuten????o das terras comunais.', correct: false },
      { text: 'supress??o do poder constitu??nte.', correct: false },
      { text: 'fal??ncia da sociedade burguesa.', correct: false },
      { text: 'paridade no tratamento jur??dico.', correct: true },
      { text: 'aboli????o dos partidos pol??ticos.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) Ao abrigo do teto, sua jornada de f?? come??ava na sala de jantar.  Na ??quena c??lula crist??, dividia-se a refei????o e durante elas os crentes conversavam, rezavam e liam cartas de correligion??rios residentes em locais diferentes do Imp??rio Romano (s??culo II da Era Crist??). Esse ambiente garantia peculiar apoio emocional ??s experi??ncias intensamente individuais que abrigava. \n\n\n Um motivo que explica a ambienta????o da pr??tica descrita no texto encontra-se no(a)',
    
    resolution: 'Nesse contexto, somente poder-se-ia professar a f?? oficial do Imp??rio.',
    answers: [
      { text: 'regra judaica, que pregava a superioridade espiritual dos cultos das sinagogas.', correct: false },
      { text: 'moralismo da legisla????o, que dificultava as reuni??es abertas da juventude livre.', correct: false },
      { text: 'ades??o ao patriciado, que subvertia o conceito original dos valores estrangeiros.', correct: false },
      { text: 'decis??o pol??tica, que censurava as manifesta????es p??blicas da doutrina dissidente.', correct: true },
      { text: 'viol??ncia senhorial, que impunha a desestrutura????o for??ada das fam??lias escravas.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) O movimento sedicioso ocorrido na capitania de Pernambuco, no ano 1817, foi analisado de formas diferentes por dois meios de comunica????o daquela ??poca. O Correio Braziliense apontou para o fato de ser "a como????o do Brasil motivada por um descontentamento geral, e n??o por maquina????es de alguns indiv??duos". J?? a Gazeta do Rio de Janeiro considerou o movimento como um "pontual desvio de norma, apenas uma "mancha" nas p??ginas da "Hist??ria Portuguesa", t??o distinta pelos testemunhos de amor e respeito que os vassalos desta na????o consagram ao seu soberano. \n\n\n Os fragmentos das mat??rias jornal??sticas sobre o acontecimento, embora com percep????es diversas, relacionam-se a um aspecto do processo de independ??ncia da col??nia luso-americana expresso em dissens??es entre',
    
    resolution: ' No contexto do Per??odo Joanino, diversos grupos regionais disputavam a aten????o da corte que se instaurara no Brasil em detrimento do contexto internacional. Os textos demonstram o modo como em cada jornal o interesse dos grupos regionais que controlam tais meios de comunica????o sobre o regime.',
    answers: [
      { text: 'quadros dirigentes em torno da aboli????o da ordem escravocrata.', correct: false },
      { text: 'grupos regionais acerca da configura????o pol??tico-territorial.', correct: true },
      { text: 'intelectuais laicos acerca dda revoga????o do dom??nio eclesi??stico.', correct: false },
      { text: 'homens livres  em torno da extens??o do direito de voto.', correct: false },
      { text: 'elites locais acerca da ordena????o do monop??lio fundi??rio.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) O c??ntico da terra \n\n Eu sou a terra, eu sou a vida. \n A ti, ?? lavrador, tudo quanto ?? meu. \n Teu arado, tua foice, teu machado. \n O ber??o pequenino de teu filho. \n O algod??o de tua veste \n e o p??o de tua casa. \n E um dia bem distante \n a mim tu voltar??s. \n E no canteiro materno de meu seio \n tranquilo dormir??s. \n Plantemos a ro??a \n Lavremos a gleba. \n\n No contexto das distintas formas de apropria????o da terra, o poema de Cora Coralina valoriza a rela????o entre',
    
    resolution: 'Observa-se no texto um eu lirico que se dirige ao lavrador e se disp??e a servi-lo, al??m de toda rela????o familiar para com a terra.',
    answers: [
      { text: 'grileiros e controle territorial.', correct: false },
      { text: 'meeiros e divis??o do trabalho.', correct: false },
      { text: 'camponeses e uso da natureza.', correct: true },
      { text: 'ind??genas e manejo agroecol??gico.', correct: false },
      { text: 'latifundi??rios e fertiliza????o do solo.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) Afirmar que a cartografia da ??poca moderna integrou o processo de inven????o da Am??rica por parte dos europeus significa que os conhecimentos dos amer??ndios sobre o territ??rio foram ignorados pela cartografia europeia ou que eles foram privados de sua representa????o territorial e da autoridade que seus conhecimentos tinham sobre o espa??o. \n\n\n Na an??lise contida no texto, a representa????o cartogr??fica da Am??rica foi marcada por',
    
    resolution: 'Pois, essa nega????o faz parte do processo de domina????o, onde o dominador ignora qualquer conhecimento do dominado por se considerar superior em diversos aspectos.',
    answers: [
      { text: 'asser????o da cultura dos nativos.', correct: false },
      { text: 'avan??o dos estudos do ambiente.', correct: false },
      { text: 'afirma????o das formas de domina????o.', correct: true },
      { text: 'exatid??o da demarca????o das regi??es.', correct: false },
      { text: 'aprimoramento do conceito de fronteira.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) Tratava-se agora de construir um ritmo novo. Para tanto, era necess??rio convocar todas as for??as vivas da Na????o, todos os homens que, com vontade de trabalhar e confian??a no futuro, pudessem erguer, num tempo novo, um novo Tempo. E, ?? grande convoca????o que conclamava o povo para a gigantesca tarefa, come??aram a chegar de todos os cantos da imensa p??tria os trabalhadores: os homens simples e quietos, com p??s de raiz, rostos de couro e m??os de pedra, e no calcanho, em carro de boi, em lobo de burro, em paus-de-arara, por todas as fomas poss??veis e imagin??veis, em sua mudez cheia de esperan??a, muitas vezes deixando para tr??s mulheres e filho a aguarda suas promessas de melhores dias; foram chegando de tantos povoados, tantas cidades cujos nomes pareciam cantar saudades ais seus ouvidos, dentro dos antigos ritmos da imensa p??tria... Terra de sol, Terra de Luz... Brasil! Brasil! Bras??lia! \n\n\n No texto, a narrativa produzida sobe a constru????o de Bras??lia articula os elementos pol??ticos e socioecon??micos indicados, respectivamente, em:',
    
    resolution: '?? poss??vel reconhecer no apelo simb??lico e na migra????o inter-regional os elementos pol??ticos e socioecon??micos articulados no texto sobre a constru????o de Bras??lia.',
    answers: [
      { text: 'apelo simb??lico e migra????o inter-regional', correct: true },
      { text: 'organiza????o sindical e expans??o do capital', correct: false },
      { text: 'seguran??a territorial e estabilidade financeira', correct: false },
      { text: 'consenso partid??rio e moderniza????o rodovi??ria', correct: false },
      { text: 'perspectiva democr??tica e efic??cia dos transportes', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) O processamento da mandioca era uma atividade j?? realizada pelos nativos que viviam no Brasil antes da chegada de portugueses e africanos. Entretanto, ao longo do processo de coloniza????o portuguesa, a produ????o de farinha foi aperfei??oada e ampliada, tornando-se lugar comum em todo o territ??rio da col??nia portuguesa na Am??rica. Com a consolida????o do com??rcio atl??ntico em suas diferentes conex??es, a farinha atravessou os mares e chegou aos mercados africanos. \n\n\n Considerando a forma????o do espa??o atl??ntico, esse produto exemplifica historicamente a',
    
    resolution: 'Ao longo do processo de coloniza????o portuguesa, o com??rcio tornou o Atl??ntico um espa??o de conex??es entre Europa, Am??rica e ??frica.  A chegada da farinha de mandioca, atrav??s do com??rcio transatl??ntico, aos mercados africanos, exemplifica que as rela????es estabelecidas permitiram a difus??o de h??bitos alimentares.',
    answers: [
      { text: 'difus??o de h??bitos alimentares', correct: true },
      { text: 'dissemina????o de rituais festivos', correct: false },
      { text: 'amplia????o dos saberes aut??ctones', correct: false },
      { text: 'apropria????o de costumes guerreiros', correct: false },
      { text: 'diversifica????o de oferendas religiosas.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) O cristianismo incorporou antigas pr??ticas relativas ao fogo para criar uma festa sincr??tica. A igreja retomou a dist??ncia de seis meses entre os nascimentos de Jesus Cristo e Jo??o Batista e instituiu a data de comemora????o a este ??ltimo de tal maneira que as festas do solst??cio de ver??o europeu com suas tradicionais fogueiras se tornaram "fogueiras de S??o Jo??o". A festa do fogo e da luz no entanto n??o foi imediatamente associada a S??o Jo??o Batista. Na Baixa Idade M??dia, algumas pr??ticas tradicionais da festa (como banhos, dan??as e cantos) foram perseguidas por monges e bispos. A partir do Conc??lio de Trento (1545-1563), a Igreja resolveu adotar celebra????es em torno do fogo e associ??-las ?? doutrina crist??. \n\n\n\ Com o objetivo de se fortalecer, a institui????o mencionada no texto adotou as pr??ticas descritas, que consistem em:',
    
    resolution: 'Apropria????o de algo que n??o ?? crist??o, algo secular que ?? incorporado ??s pr??ticas crist??s.',
    answers: [
      { text: 'promo????o de atos ecum??nicos. ', correct: false },
      { text: 'fomento de orienta????es b??blicas. ', correct: false },
      { text: 'apropria????o de cerim??nias seculares. ', correct: true },
      { text: 'retomada de ensinamentos apost??licos. ', correct: false },
      { text: 'ressignifica????o de rituais fundamentalistas.', correct: false },
    ]
  },





































  
]
