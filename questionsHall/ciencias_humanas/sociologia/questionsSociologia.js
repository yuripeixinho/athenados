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
    question: '(ENEM - 2020) Nas últimas décadas, uma acentuada feminização no mundo do trabalho vem ocorrendo. Se a participação masculina pouco cresceu no período pós-1970, a intensificação da inserção das mulheres foi o traço marcante. Entretanto, essa presença feminina se dá mais no espaço dos empregos precários, onde a exploração, em grande medida, se encontra mais acentuada. \n\n A transformação descrita no texto tem sido insuficiente para o estabelecimento de uma condição de igualdade de oportunidade em virtude da(s)',
    resolution: 'Ao constatarmos que após a década de 70 houve maior participação da mulher no mercado de trabalho, mas tal participação se dá em empregos precários e de exploração acentuada, percebe-se uma manutenção do status quo na medida em que a condição da mulher não melhorou de fato, mesmo tendo acesso ao mercado de trabalho como os homens, além dos padrões de socialização familiar, que continuam os mesmos de antes da década de 70.',
    answers: [
      { text: ' estagnação de direitos adquiridos e do anacronismo da legislação vigente.', correct: false },
      { text: ' manutenção do status quo gerencial e dos padrões de socialização familiar.', correct: true },
      { text: 'desestruturação da herança patriarcal e mudanças de perfil ocupacional.', correct: false },
      { text: 'disputas na composição sindical e da presença na esfera político-partidária', correct: false },
      { text: 'exigências de aperfeiçoamento profissional e de habilidades na competência diretiva.', correct: false },
    ]
  },


  {
    question: '(ENEM - 2020) Um dos resquícios franceses na dança são os comandos proferidos pelo marcador da quadrilha. Seu papel é anunciar os próximos passos da coreografia. O abrasileiramento de termos franceses deu origem, por exemplo, ao saruê (soirèe - reunião social noturna, ordem para todos se juntarem no centro do salão), anarriê (en arrière - para trás) e anavã (en avant - para frente). \n\n A característica apresentada dessa manifestação popular resulta do seguinte processo socio-histórico,',
    resolution: 'Foram incorporados elementos linguísticos de outras línguas à nossa, porém, abrasileiradas.',
    answers: [
      { text: 'Massificação da arte erudita.', correct: false },
      { text: ' Rejeição de hábitos elitistas.', correct: false },
      { text: 'Laicização dos rituais religiosos.', correct: false },
      { text: 'Restauração dos costumes antigos.', correct: false },
      { text: 'Apropriação de práticas estrangeiras.', correct: true },
    ]
  },


  {
    question: '(ENEM - 2020) A sociedade como um sistema justo de cooperação social consiste em uma das ideias familiares fundamentais, que dá estrutura e organização à justiça como equidade. A cooperação social guia-se por regras e procedimentos publicamente reconhecidos e aceitos por aqueles que cooperam como sendo apropriados para regular a sua conduta. Diz-se que a cooperação é justa porque seus termos são tais que todos os participantes podem razoavelmente aceitar, desde que todos os demais também o aceitem. \n\n No contexto do pensamento político, a ideia apresentada mostra-se consoante o(a),',
    resolution: 'O texto nos dá um panorama sobre como o conceito de cooperação social dialoga com a sociedade através de diversos mecanismos. Para tanto, ele aborda sobre condições de estabelecimento da justiça, equidade, sobre a formulação de regras e o reconhecimento coletivo das mesmas, além da regulação da conduta do indivíduo, sendo todos esses conceitos elementos principais de discussão do contratualismo moderno.',
    answers: [
      { text: 'ideal republicano de governo.', correct: false },
      { text: ' corrente tripartite dos poderes.', correct: false },
      { text: 'posicionamento crítico do socialismo.', correct: false },
      { text: 'legitimidade do absolutismo monárquico.', correct: false },
      { text: 'entendimento do contratualismo moderno.', correct: true },
    ]
  },


  {
    question: '(ENEM - 2020) Declaração de Salamanca - 1994 \n\n  Acreditamos e proclamamos que: toda criança tem direito fundamental à educação e deve ser dada a oportunidade de atingir e manter o nível adequado de aprendizagem: toda criança possui características, interesses, habilidades e necessidades de aprendizagem que são únicas; sistemas educacionais deveriam ser designados e programas educacionais deveriam ser implementados no sentido de se levar em conta a vasta diversidade de tais características e necessidades. \n\n Como signatário da Declaração citada, o Brasil comprometeu-se com a elaboração de políticas públicas educacionais que contemplam a',
    resolution: 'Visto que a Declaração de Salamanca propõe-se a acreditar que todas as crianças são diferentes e possuem necessidades pedagógicas diferentes, a contemplação da pluralidade de sujeitos vem para garantir que todas as crianças tenham acesso à seu direito por educação.',
    answers: [
      { text: 'criação de privilégios.', correct: false },
      { text: ' contenção dos gastos.', correct: false },
      { text: 'pluralidade dos sujeitos.', correct: true },
      { text: 'padronização do currículo.', correct: false },
      { text: 'valorização da meritocracia.', correct: false },
    ]
  },



  {
    question: '(ENEM - 2020) Do fenômeno histórico conhecido como "tráfico de coolies" esteve associado diretamente ao período que vai do final da década de 1840 até o ano de 1874, quando milhares de chineses foram encaminhados principalmente para Cuba e Peru e muitos abusos no recrutamento de mão de obra foram identificados. O tráfico de coolies ou, em outros termos, o transporte por meios coativos de mão de obra de um lugar para outro, foi comparado ao tráfico africano de escravos por muitos periodistas e analistas do século XIX.    \n\n A comparação mencionada no texto foi possível em razão da seguinte característica:',
    resolution: ' O controle opressivo das vidas dos indivíduos esteve presente não só no tráfico de coolies, mas também no tráfico de africanos, portanto, é fator de comparação.',
    answers: [
      { text: 'Oferta de contrato formal', correct: false },
      { text: ' Origem étnica dos grupos de trabalhadores.', correct: false },
      { text: 'Conhecimento das tarefas desenvolvidas.', correct: false },
      { text: 'Controle opressivo das vida dos indivíduos.', correct: true },
      { text: 'Investimento requerido dos empregadores.', correct: false },
    ]
  },



  {
    question: '(ENEM - 2020) o mesmo tempo que as novas tecnologias inseridas no universo do trabalho estão provocando profundas transformações nos modos de produção, tornam cada vez mais plausível a possibilidade de liberação do homem do trabalho mecânico e repetitivo.    \n\n O paradoxo da relação entre as novas tecnologias e o mundo do trabalho, demonstrado no texto, pode ser exemplificado pelo(a)',
    resolution: 'A tecnologia continua a criar uma grande riqueza e, de modo geral, nos deixa melhor. Nos últimos 10 / 15 anos, à medida que a produtividade continuou a crescer, a criação de empregos estagnou, especialmente para trabalhadores de baixa e média qualificação.    ',
    answers: [
      { text: 'utilização das redes sociais como ferramenta de recrutamento e seleção.', correct: false },
      { text: ' transferência de fábricas para locais onde estas desfrutem de benefícios fiscais.', correct: false },
      { text: 'necessidade de trabalhadores flexíveis para se adequarem ao mercado de trabalho.', correct: false },
      { text: 'fenômeno do desemprego que aflige milhões de pessoas no mundo contemporâneo.', correct: true },
      { text: 'conflito entre trabalhadores e empresários por conta da exigência de qualificação profissional.', correct: false },
    ]
  },


  {
    question: '(ENEM - 2020) A comunidade de Mumbuca, em Minas Gerais, tem uma organização coletiva de tal forma expressiva que coopera para o abastecimento de mantimentos da cidade do Jequitinhonha, o que pode ser atestado pela feira aos sábados. Em Campinho da Independência, no Rio de Janeiro, o artesanato local encanta os frequentadores do litoral sul do estado, além do restaurante quilombola que atende aos turistas.     \n\n No texto, as estratégias territoriais dos grupos de remanescentes de quilombo visam garantir:    ',
    resolution: 'A questão comenta sobre a inserção econômica regional, principalmente ao ilustrar sobre o comércio de produtos artesanais. Esta inserção contribui para uma diminuição da dependência econômica com o Estado, principalmente de regiões distantes de centros urbanos.   ',
    answers: [
      { text: 'Perdão de dívidas fiscais.', correct: false },
      { text: ' Reserva de mercado local.', correct: false },
      { text: 'Inserção econômica regional', correct: true },
      { text: 'Protecionismo comercial tarifário', correct: false },
      { text: 'Benefícios assistenciais públicos', correct: false },
    ]
  },


  {
    question: '(ENEM - 2020) A criação do Sistema Único de Saúde (SUS) como uma política para todos constitui-se uma das mais importantes conquistas da sociedade brasileira no século XX. O SUS deve ser valorizado e defendido como um marco para a cidadania e o avanço civilizatório. A democracia envolve um modelo de Estado no qual políticas protegem os cidadãos e reduzem as desigualdades. O SUS é uma diretriz que fortalece a cidadania e contribui para assegurar o exercício de direitos, o pluralismo político e o bem-estar como valores de uma sociedade fraterna, pluralista e sem preconceitos, conforme prevê a Constituição Federal de 1988.    \n\n Segundo o texto, duas características da concepção da política pública analisada são:    ',
    resolution: 'O SUS é um direito universal para garantia da diminuição da desigualdade social. É uma das obrigações e garantias do Estado previstas na constituição de 1988.',
    answers: [
      { text: 'Paternalismo e filantropia', correct: false },
      { text: ' Liberalismo e meritocracia', correct: false },
      { text: 'Universalismo e igualitarismo', correct: true },
      { text: 'Nacionalismo e individualismo', correct: false },
      { text: 'Revolucionarismo e coparticipação', correct: false },
    ]
  },


  {
    question: '(ENEM - 2020) O Ministério do Trabalho e Emprego (MTE) realizou 248 ações fiscais e resgatou um total de 1590 trabalhadores da situação análoga à de escravo, em 2014, em todo país. A análise de enfrentamento do trabalho em condições análogas às de escravo materializa a efetivação de parcerias inéditas no trato da questão, podendo ser referenciadas ações fiscais realizadas com Ministério da Defesa, Exército Brasileiro, Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis (Ibama) e Instituto Chico Mendes de conservação da Biodiversidade (ICMBio).\n\n Na estratégia defendida no texto para reduzir o problema social apontado consiste em:',
    resolution: 'A articulação de órgãos públicos é a forma mais eficaz de combater o trabalho em condições análogas às de escravo. Como afirma o texto, o enfrentamento do problema tem sido efetuado a partir de "ações fiscais realizadas com Ministério da Defesa, Exército Brasileiro, Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis (Ibama) e Instituto Chico Mendes de conservação da Biodiversidade (ICMBio).',
    answers: [
      { text: 'Articular os órgãos públicos', correct: true },
      { text: ' Pressionar o poder legislativo', correct: false },
      { text: 'Ampliar a emissão das multas', correct: false },
      { text: 'Limitar a autonomia das empresas', correct: false },
      { text: 'Financiar as pesquisas acadêmicas', correct: false },
    ]
  },


  {
    question: '(ENEM - 2019) A maior parte agressões em manifestações discriminatórias contra as religiões de matrizes africanas ocorrem em locais públicos(57%). É na rua, na via pública, que tiveram lugar mais de 2/3 das agressões, geralmente em locais próximos ás casas de culto dessas religiões. O transporte público também é apontado como um local em que os adeptos das religiões de matrizes africanas são discriminados, geralmente quando se encontram paramentados por conta dos preceitos religiosos.    \n\n As práticas descritas no texto são incompatíveis com a dinâmica de sociedade laica e democrática porque:    ',
    resolution: 'O texto fala sobre a intolerância religiosa no Brasil: afirma que a maior parte das agressões ocorrem em locais públicos, quando os adeptos de religiões de matrizes africanas se encontram rodeados pelas normas religiosas cuja prática é indicada, considerada "melhor" (como, por exemplo, a religião católica). As práticas descritas, que constituem discriminação religiosa, ferem a liberdade de credo dos indivíduos e são incompatíveis com uma sociedade laica e democrática, que não deveria impôr uma religião ou um modo de vida aos seus membros.',
    answers: [
      { text: 'Asseguram as expressões multiculturais.', correct: false },
      { text: ' Promovem a diversidade de etnias.', correct: false },
      { text: 'Falseiam os dogmas teológicos.', correct: false },
      { text: 'Estimulam os rituais sincréticos.', correct: false },
      { text: 'Restringem a liberdade de credo.', correct: true },
    ]
  },



  {
    question: '(ENEM - 2019) No sistema capitalista, as muitas manifestações de crise criam condições que forçam a algum tipo de racionalização. Em geral, essas crises periódicas têm o efeito de expandir a capacidade produtiva e de renovar as condições de acumulação. Podemos conceber cada crise como uma mudança do processo de acumulação para um nível novo e superior.  \n\n A condição para a inclusão dos trabalhadores no novo processo produtivo descrito no texto é a    ',
    resolution: 'David Harvey é um crítico do modelo capitalista, ele comenta sobre as crises do capitalismo, e como elas exigem que o trabalhador sempre esteja a procura de qualificação. Ocorreu recentemente a crise de 2008, após a crise foram criadas diversas profissões, como nas crises anteriores.    ',
    answers: [
      { text: 'associação sindical.', correct: false },
      { text: ' participação eleitoral.', correct: false },
      { text: 'migração internacional.', correct: false },
      { text: 'qualificação profissional.', correct: true },
      { text: 'regulamentação funcional.', correct: false },
    ]
  },



  {
    question: '(ENEM - 2019) Em nenhuma outra época o corpo magro adquiriu um sentido de corpo ideal e esteve tão em evidência como nos dias atuais: esse corpo, nu ou vestido, exposto em diversas revistas femininas e masculinas, está na moda: é capa de revistas, matérias de jornais, manchetes publicitárias, e se transformou em sonho de consumo para milhares de pessoas. Partindo dessa concepção, o gordo passa a ter um corpo visivelmente sem comedimento, sem saúde, um corpo estigmatizado pelo desvio, o desvio pelo excesso. Entretanto, como afirma a escritora Marylin Wann, é perfeitamente possível ser gordo e saudável. Frequentemente os gordos adoecem não por causa da gordura, mas sim pelo estresse, pela opressão a que são submetidos.    \n\n No texto, o tratamento predominante na mídia sobre a relação entre saúde e corpo recebe a seguinte crítica:',
    resolution: 'O enunciado da questão foi mal elaborado, de forma que o aluno pode ser levado a entender que a questão pede a falha no tratamento dado à relação entre corpo e saúde, e não a crítica feita à esse tratamento. Por afirmar que o "tratamento [...] recebe a seguinte crítica", entende-se que vão ser apresentados o problema e, em seguida, a crítica.',
    answers: [
      { text: 'Difusão das estéticas antigas.', correct: false },
      { text: ' Exaltação das crendices populares.', correct: false },
      { text: 'Propagação das conclusões científicas.', correct: false },
      { text: 'Reiteração dos discursos hegemônicos.', correct: false },
      { text: 'Contestação dos estereótipos consolidados.', correct: true },
    ]
  },



  {
    question: '(ENEM - 2019) A maior parte das agressões e manifestações discriminatórias contra as religiões de matrizes africanas ocorrem em locais públicos (57%). É na rua, na via pública, que tiveram lugar mais de 2/3 das agressões, geralmente em locais próximos às casas de culto dessas religiões. O transporte público também é apontado como um local em que os adeptos das religiões de matrizes africanas são discriminados, geralmente quando se encontram para- mentados por conta dos preceitos religiosos.    \n\n As práticas descritas no texto são incompatíveis com a dinâmica de uma sociedade laica e democrática porque    ',
    resolution: ' Um Estado de direito laico e democrático é baseado em princípios de igualdade de liberdade. Isso inclui a dimensão religiosa da vida e uma sociedade baseada nesses preceitos deve assegurar a livre prática de credo. Nesses termos, o Estado não deve defender uma religião em si, mas garantir essa liberdade no interior da sociedade e combater a intolerância religiosa.    ',
    answers: [
      { text: 'asseguram as expressões multiculturais.', correct: false },
      { text: 'promovem a diversidade de etnias.', correct: false },
      { text: 'falseiam os dogmas teológicos.', correct: false },
      { text: 'estimulam os rituais sincréticos.', correct: false },
      { text: 'restringem a liberdade de credo.', correct: true },
    ]
  },


  {
    question: '(ENEM - 2019) Em algumas línguas de Moçambique não existe a palavra “pobre”. O indivíduo é pobre quando não tem parentes. A pobreza é a solidão, a ruptura das relações familiares que, na sociedade rural, servem de apoio à sobrevivência. Os consultores internacionais, especialistas em elaborar relatórios sobre a miséria, talvez não tenham em conta o impacto dramático da destruição dos laços familiares e das relações de entreajuda. Nações inteiras estão tornando-se “órfãs”, e a mendicidade parece ser a única via de uma agonizante sobrevivência.    \n\n Em uma leitura que extrapola a esfera econômica, o autor associa o acirramento da pobreza à',
    resolution: ' A ideia desta questão vai tanto para o significado de termos dentro de culturas diferentes, como podemos ver com o que significa ser pobre em comunidades tradicionais e em comunidades globalizadas, de onde derivam os índices de pobreza. As noções de pobreza são mais amplas e mais delicadas para comunidades não inseridas amplamente no contexto de globalização devido à proximidade das esferas sociais. Ou seja, a família não se constitui apenas por afeto, mas também por necessidades econômicas de trocas e plantios. Assim, a questão demanda o que isso tem de consequência de acordo com o texto e podemos ver que a alternativa mais correta é a que denota a fragilização das redes de sociabilidade.',
    answers: [
      { text: 'Afirmação das origens ancestrais.', correct: false },
      { text: 'Fragilização das redes de sociabilidade.', correct: true },
      { text: 'Padronização das políticas educacionais.', correct: false },
      { text: 'Fragmentação das propriedades agrícolas.', correct: false },
      { text: 'Globalização das tecnologias de comunicação.', correct: false },
    ]
  },



  {
    question: '(ENEM - 2019) A tribo não possui um rei, mas um chefe que não é chefe de Estado. O que significa isso? Simplesmente que o chefe não dispõe de nenhuma autoridade, de nenhum poder de coerção, de nenhum meio de dar uma ordem. O chefe não é um comandante, as pessoas da tribo não têm nenhum dever de obediência. O espaço da chefia não é o lugar do poder. Essencialmente encarregado de eliminar conflitos que podem surgir entre indivíduos, famílias e linhagens, o chefe só dispõe, para restabelecer a ordem e a concórdia, do prestígio que lhe reconhece a sociedade. Mas evidentemente prestígio não significa poder, e os meios que o chefe detém para realizar sua tarefa de pacificador limitam-se ao uso exclusivo da palavra.    \n\n O modelo político das sociedades discutidas no texto contrasta com o do Estado liberal burguês porque se baseia em:    ',
    resolution: ' O texto de Clastres trata sobre a organização de sociedades tribais, cujo modelo político contrasta com o Estado liberal burguês na medida em que se baseia na intervenção consensual e na autonomia comunitária. O trecho que mais enfatiza esse contraste é o seguinte: "[...] o chefe não dispõe de nenhuma autoridade, de nenhum poder de coerção, de nenhum meio de dar uma ordem. O chefe não é um comandante, as pessoas da tribo não têm nenhum dever de obediência. O espaço da chefia não é o lugar do poder.',
    answers: [
      { text: 'Imposição ideológica e normas hierárquicas.', correct: false },
      { text: 'Determinação divina e soberania monárquica.', correct: false },
      { text: 'Intervenção consensual e autonomia comunitária.', correct: true },
      { text: 'Mediação jurídica e regras contratualistas.', correct: false },
      { text: 'Gestão coletiva e obrigações tributárias.', correct: false },
    ]
  },



  {
    question: '(ENEM - 2019)  Um dos teóricos da democracia moderna, Hans Kelsen, considera elemento essencial da democracia real (não da democracia ideal, que não existe em lugar nenhum) o método da seleção dos líderes, ou seja, a eleição. Exemplar, neste sentido, é a afirmação de um juiz da Corte Suprema dos Estados Unidos, por ocasião de uma eleição de 1902: "A cabine eleitoral é o templo das instituições americanas, onde cada um de nós é um sacerdote, ao qual é confiada a guarda da arca da aliança e cada um oficia do seu próprio altar".    \n\n As metáforas utilizadas no texto referem-se a uma concepção de democracia fundamentada no(a)    ',
    resolution: ' O texto fala sobre a importância que o pensador Kelsen atribui ao processo eleitoral, método de seleção dos líderes na democracia, no que diz respeito à legitimação do regime democrático. A democracia, o governo de todos, se faz valer através da participação periódica direta de cada cidadão, concretizada nas eleições e no voto individual, secreto, universal. A frase proferida por um juiz da Corte Suprema dos Estados Unidos em 1902 ilustra essa ideia, ao comparar as urnas eleitorais aos templos, os eleitores aos sacerdotes, o voto à arca da aliança. Ou seja, o juiz atribui importância "divina" à forma de se escolher os representantes na democracia, equiparando o processo eleitoral à guarda de um objeto sagrado (a democracia, a liberdade, os direitos), exercida por cada um dos membros do grupo.    ',
    answers: [
      { text: 'justificação teísta do direito.', correct: false },
      { text: 'rigidez da hierarquia de classe.', correct: false },
      { text: 'ênfase formalista na administração.', correct: false },
      { text: 'protagonismo do Executivo no poder.', correct: false },
      { text: 'centralidade do individuo na sociedade.', correct: true },
    ]
  },




  {
    question: '(ENEM - 2019)   No protestantismo ascético, temos não apenas a clara noção da primazia da ética sobre o mundo, mas também a mitigação dos efeitos da dupla moral judaica (uma moral interna para os irmãos de crença e outra externa para os infiéis). O desafio aqui é o da ética, que quer deixar de ser um ideal eventual e ocasional (que exige dos virtuosos religiosos quase sempre uma “fuga do mundo”, como na prática monástica cristã medieval) para tornar-se efetivamente uma lei prática e cotidiana “dentro do mundo”.    \n\n Retomando o pensamento de Max Weber, o texto apresenta a tensão entre positividade ético religiosa e esferas mundanas de ação.  Nessa perspectiva, a ética protestante é compreendida como    ',
    resolution: ' A ética protestante se configura diante de uma obra que foi promovido por Weber sendo ele um dos principais fundadores e essencial para o pensamento sociológico. É o livro mais conhecido de toda a sua obra. O pensador faz um processo de investigação na relação entre a conduta em natureza econômico e certas raízes religiosas. A investigação se estrutura diante de uma natureza do pensamento ideal.   ',
    answers: [
      { text: 'vinculada ao abandono da felicidade terrena.', correct: false },
      { text: 'contrária aos princípios econômicos liberais.', correct: false },
      { text: 'promovedora da dimensão política da vida cotidiana.', correct: false },
      { text: 'estimuladora da igualdade social como direito divino.', correct: false },
      { text: 'adequada ao desenvolvimento do capitalismo moderno.', correct: true },
    ]
  },



























































































]
