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
    question: '(ENEM - 2020) Nas ??ltimas d??cadas, uma acentuada feminiza????o no mundo do trabalho vem ocorrendo. Se a participa????o masculina pouco cresceu no per??odo p??s-1970, a intensifica????o da inser????o das mulheres foi o tra??o marcante. Entretanto, essa presen??a feminina se d?? mais no espa??o dos empregos prec??rios, onde a explora????o, em grande medida, se encontra mais acentuada. \n\n A transforma????o descrita no texto tem sido insuficiente para o estabelecimento de uma condi????o de igualdade de oportunidade em virtude da(s)',
    resolution: 'Ao constatarmos que ap??s a d??cada de 70 houve maior participa????o da mulher no mercado de trabalho, mas tal participa????o se d?? em empregos prec??rios e de explora????o acentuada, percebe-se uma manuten????o do status quo na medida em que a condi????o da mulher n??o melhorou de fato, mesmo tendo acesso ao mercado de trabalho como os homens, al??m dos padr??es de socializa????o familiar, que continuam os mesmos de antes da d??cada de 70.',
    answers: [
      { text: ' estagna????o de direitos adquiridos e do anacronismo da legisla????o vigente.', correct: false },
      { text: ' manuten????o do status quo gerencial e dos padr??es de socializa????o familiar.', correct: true },
      { text: 'desestrutura????o da heran??a patriarcal e mudan??as de perfil ocupacional.', correct: false },
      { text: 'disputas na composi????o sindical e da presen??a na esfera pol??tico-partid??ria', correct: false },
      { text: 'exig??ncias de aperfei??oamento profissional e de habilidades na compet??ncia diretiva.', correct: false },
    ]
  },


  {
    question: '(ENEM - 2020) Um dos resqu??cios franceses na dan??a s??o os comandos proferidos pelo marcador da quadrilha. Seu papel ?? anunciar os pr??ximos passos da coreografia. O abrasileiramento de termos franceses deu origem, por exemplo, ao saru?? (soir??e - reuni??o social noturna, ordem para todos se juntarem no centro do sal??o), anarri?? (en arri??re - para tr??s) e anav?? (en avant - para frente). \n\n A caracter??stica apresentada dessa manifesta????o popular resulta do seguinte processo socio-hist??rico,',
    resolution: 'Foram incorporados elementos lingu??sticos de outras l??nguas ?? nossa, por??m, abrasileiradas.',
    answers: [
      { text: 'Massifica????o da arte erudita.', correct: false },
      { text: ' Rejei????o de h??bitos elitistas.', correct: false },
      { text: 'Laiciza????o dos rituais religiosos.', correct: false },
      { text: 'Restaura????o dos costumes antigos.', correct: false },
      { text: 'Apropria????o de pr??ticas estrangeiras.', correct: true },
    ]
  },


  {
    question: '(ENEM - 2020) A sociedade como um sistema justo de coopera????o social consiste em uma das ideias familiares fundamentais, que d?? estrutura e organiza????o ?? justi??a como equidade. A coopera????o social guia-se por regras e procedimentos publicamente reconhecidos e aceitos por aqueles que cooperam como sendo apropriados para regular a sua conduta. Diz-se que a coopera????o ?? justa porque seus termos s??o tais que todos os participantes podem razoavelmente aceitar, desde que todos os demais tamb??m o aceitem. \n\n No contexto do pensamento pol??tico, a ideia apresentada mostra-se consoante o(a),',
    resolution: 'O texto nos d?? um panorama sobre como o conceito de coopera????o social dialoga com a sociedade atrav??s de diversos mecanismos. Para tanto, ele aborda sobre condi????es de estabelecimento da justi??a, equidade, sobre a formula????o de regras e o reconhecimento coletivo das mesmas, al??m da regula????o da conduta do indiv??duo, sendo todos esses conceitos elementos principais de discuss??o do contratualismo moderno.',
    answers: [
      { text: 'ideal republicano de governo.', correct: false },
      { text: ' corrente tripartite dos poderes.', correct: false },
      { text: 'posicionamento cr??tico do socialismo.', correct: false },
      { text: 'legitimidade do absolutismo mon??rquico.', correct: false },
      { text: 'entendimento do contratualismo moderno.', correct: true },
    ]
  },


  {
    question: '(ENEM - 2020) Declara????o de Salamanca - 1994 \n\n  Acreditamos e proclamamos que: toda crian??a tem direito fundamental ?? educa????o e deve ser dada a oportunidade de atingir e manter o n??vel adequado de aprendizagem: toda crian??a possui caracter??sticas, interesses, habilidades e necessidades de aprendizagem que s??o ??nicas; sistemas educacionais deveriam ser designados e programas educacionais deveriam ser implementados no sentido de se levar em conta a vasta diversidade de tais caracter??sticas e necessidades. \n\n Como signat??rio da Declara????o citada, o Brasil comprometeu-se com a elabora????o de pol??ticas p??blicas educacionais que contemplam a',
    resolution: 'Visto que a Declara????o de Salamanca prop??e-se a acreditar que todas as crian??as s??o diferentes e possuem necessidades pedag??gicas diferentes, a contempla????o da pluralidade de sujeitos vem para garantir que todas as crian??as tenham acesso ?? seu direito por educa????o.',
    answers: [
      { text: 'cria????o de privil??gios.', correct: false },
      { text: ' conten????o dos gastos.', correct: false },
      { text: 'pluralidade dos sujeitos.', correct: true },
      { text: 'padroniza????o do curr??culo.', correct: false },
      { text: 'valoriza????o da meritocracia.', correct: false },
    ]
  },



  {
    question: '(ENEM - 2020) Do fen??meno hist??rico conhecido como "tr??fico de coolies" esteve associado diretamente ao per??odo que vai do final da d??cada de 1840 at?? o ano de 1874, quando milhares de chineses foram encaminhados principalmente para Cuba e Peru e muitos abusos no recrutamento de m??o de obra foram identificados. O tr??fico de coolies ou, em outros termos, o transporte por meios coativos de m??o de obra de um lugar para outro, foi comparado ao tr??fico africano de escravos por muitos periodistas e analistas do s??culo XIX.    \n\n A compara????o mencionada no texto foi poss??vel em raz??o da seguinte caracter??stica:',
    resolution: ' O controle opressivo das vidas dos indiv??duos esteve presente n??o s?? no tr??fico de coolies, mas tamb??m no tr??fico de africanos, portanto, ?? fator de compara????o.',
    answers: [
      { text: 'Oferta de contrato formal', correct: false },
      { text: ' Origem ??tnica dos grupos de trabalhadores.', correct: false },
      { text: 'Conhecimento das tarefas desenvolvidas.', correct: false },
      { text: 'Controle opressivo das vida dos indiv??duos.', correct: true },
      { text: 'Investimento requerido dos empregadores.', correct: false },
    ]
  },



  {
    question: '(ENEM - 2020) o mesmo tempo que as novas tecnologias inseridas no universo do trabalho est??o provocando profundas transforma????es nos modos de produ????o, tornam cada vez mais plaus??vel a possibilidade de libera????o do homem do trabalho mec??nico e repetitivo.    \n\n O paradoxo da rela????o entre as novas tecnologias e o mundo do trabalho, demonstrado no texto, pode ser exemplificado pelo(a)',
    resolution: 'A tecnologia continua a criar uma grande riqueza e, de modo geral, nos deixa melhor. Nos ??ltimos 10 / 15 anos, ?? medida que a produtividade continuou a crescer, a cria????o de empregos estagnou, especialmente para trabalhadores de baixa e m??dia qualifica????o.    ',
    answers: [
      { text: 'utiliza????o das redes sociais como ferramenta de recrutamento e sele????o.', correct: false },
      { text: ' transfer??ncia de f??bricas para locais onde estas desfrutem de benef??cios fiscais.', correct: false },
      { text: 'necessidade de trabalhadores flex??veis para se adequarem ao mercado de trabalho.', correct: false },
      { text: 'fen??meno do desemprego que aflige milh??es de pessoas no mundo contempor??neo.', correct: true },
      { text: 'conflito entre trabalhadores e empres??rios por conta da exig??ncia de qualifica????o profissional.', correct: false },
    ]
  },


  {
    question: '(ENEM - 2020) A comunidade de Mumbuca, em Minas Gerais, tem uma organiza????o coletiva de tal forma expressiva que coopera para o abastecimento de mantimentos da cidade do Jequitinhonha, o que pode ser atestado pela feira aos s??bados. Em Campinho da Independ??ncia, no Rio de Janeiro, o artesanato local encanta os frequentadores do litoral sul do estado, al??m do restaurante quilombola que atende aos turistas.     \n\n No texto, as estrat??gias territoriais dos grupos de remanescentes de quilombo visam garantir:    ',
    resolution: 'A quest??o comenta sobre a inser????o econ??mica regional, principalmente ao ilustrar sobre o com??rcio de produtos artesanais. Esta inser????o contribui para uma diminui????o da depend??ncia econ??mica com o Estado, principalmente de regi??es distantes de centros urbanos.   ',
    answers: [
      { text: 'Perd??o de d??vidas fiscais.', correct: false },
      { text: ' Reserva de mercado local.', correct: false },
      { text: 'Inser????o econ??mica regional', correct: true },
      { text: 'Protecionismo comercial tarif??rio', correct: false },
      { text: 'Benef??cios assistenciais p??blicos', correct: false },
    ]
  },


  {
    question: '(ENEM - 2020) A cria????o do Sistema ??nico de Sa??de (SUS) como uma pol??tica para todos constitui-se uma das mais importantes conquistas da sociedade brasileira no s??culo XX. O SUS deve ser valorizado e defendido como um marco para a cidadania e o avan??o civilizat??rio. A democracia envolve um modelo de Estado no qual pol??ticas protegem os cidad??os e reduzem as desigualdades. O SUS ?? uma diretriz que fortalece a cidadania e contribui para assegurar o exerc??cio de direitos, o pluralismo pol??tico e o bem-estar como valores de uma sociedade fraterna, pluralista e sem preconceitos, conforme prev?? a Constitui????o Federal de 1988.    \n\n Segundo o texto, duas caracter??sticas da concep????o da pol??tica p??blica analisada s??o:    ',
    resolution: 'O SUS ?? um direito universal para garantia da diminui????o da desigualdade social. ?? uma das obriga????es e garantias do Estado previstas na constitui????o de 1988.',
    answers: [
      { text: 'Paternalismo e filantropia', correct: false },
      { text: ' Liberalismo e meritocracia', correct: false },
      { text: 'Universalismo e igualitarismo', correct: true },
      { text: 'Nacionalismo e individualismo', correct: false },
      { text: 'Revolucionarismo e coparticipa????o', correct: false },
    ]
  },


  {
    question: '(ENEM - 2020) O Minist??rio do Trabalho e Emprego (MTE) realizou 248 a????es fiscais e resgatou um total de 1590 trabalhadores da situa????o an??loga ?? de escravo, em 2014, em todo pa??s. A an??lise de enfrentamento do trabalho em condi????es an??logas ??s de escravo materializa a efetiva????o de parcerias in??ditas no trato da quest??o, podendo ser referenciadas a????es fiscais realizadas com Minist??rio da Defesa, Ex??rcito Brasileiro, Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renov??veis (Ibama) e Instituto Chico Mendes de conserva????o da Biodiversidade (ICMBio).\n\n Na estrat??gia defendida no texto para reduzir o problema social apontado consiste em:',
    resolution: 'A articula????o de ??rg??os p??blicos ?? a forma mais eficaz de combater o trabalho em condi????es an??logas ??s de escravo. Como afirma o texto, o enfrentamento do problema tem sido efetuado a partir de "a????es fiscais realizadas com Minist??rio da Defesa, Ex??rcito Brasileiro, Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renov??veis (Ibama) e Instituto Chico Mendes de conserva????o da Biodiversidade (ICMBio).',
    answers: [
      { text: 'Articular os ??rg??os p??blicos', correct: true },
      { text: ' Pressionar o poder legislativo', correct: false },
      { text: 'Ampliar a emiss??o das multas', correct: false },
      { text: 'Limitar a autonomia das empresas', correct: false },
      { text: 'Financiar as pesquisas acad??micas', correct: false },
    ]
  },


  {
    question: '(ENEM - 2019) A maior parte agress??es em manifesta????es discriminat??rias contra as religi??es de matrizes africanas ocorrem em locais p??blicos(57%). ?? na rua, na via p??blica, que tiveram lugar mais de 2/3 das agress??es, geralmente em locais pr??ximos ??s casas de culto dessas religi??es. O transporte p??blico tamb??m ?? apontado como um local em que os adeptos das religi??es de matrizes africanas s??o discriminados, geralmente quando se encontram paramentados por conta dos preceitos religiosos.    \n\n As pr??ticas descritas no texto s??o incompat??veis com a din??mica de sociedade laica e democr??tica porque:    ',
    resolution: 'O texto fala sobre a intoler??ncia religiosa no Brasil: afirma que a maior parte das agress??es ocorrem em locais p??blicos, quando os adeptos de religi??es de matrizes africanas se encontram rodeados pelas normas religiosas cuja pr??tica ?? indicada, considerada "melhor" (como, por exemplo, a religi??o cat??lica). As pr??ticas descritas, que constituem discrimina????o religiosa, ferem a liberdade de credo dos indiv??duos e s??o incompat??veis com uma sociedade laica e democr??tica, que n??o deveria imp??r uma religi??o ou um modo de vida aos seus membros.',
    answers: [
      { text: 'Asseguram as express??es multiculturais.', correct: false },
      { text: ' Promovem a diversidade de etnias.', correct: false },
      { text: 'Falseiam os dogmas teol??gicos.', correct: false },
      { text: 'Estimulam os rituais sincr??ticos.', correct: false },
      { text: 'Restringem a liberdade de credo.', correct: true },
    ]
  },



  {
    question: '(ENEM - 2019) No sistema capitalista, as muitas manifesta????es de crise criam condi????es que for??am a algum tipo de racionaliza????o. Em geral, essas crises peri??dicas t??m o efeito de expandir a capacidade produtiva e de renovar as condi????es de acumula????o. Podemos conceber cada crise como uma mudan??a do processo de acumula????o para um n??vel novo e superior.  \n\n A condi????o para a inclus??o dos trabalhadores no novo processo produtivo descrito no texto ?? a    ',
    resolution: 'David Harvey ?? um cr??tico do modelo capitalista, ele comenta sobre as crises do capitalismo, e como elas exigem que o trabalhador sempre esteja a procura de qualifica????o. Ocorreu recentemente a crise de 2008, ap??s a crise foram criadas diversas profiss??es, como nas crises anteriores.    ',
    answers: [
      { text: 'associa????o sindical.', correct: false },
      { text: ' participa????o eleitoral.', correct: false },
      { text: 'migra????o internacional.', correct: false },
      { text: 'qualifica????o profissional.', correct: true },
      { text: 'regulamenta????o funcional.', correct: false },
    ]
  },



  {
    question: '(ENEM - 2019) Em nenhuma outra ??poca o corpo magro adquiriu um sentido de corpo ideal e esteve t??o em evid??ncia como nos dias atuais: esse corpo, nu ou vestido, exposto em diversas revistas femininas e masculinas, est?? na moda: ?? capa de revistas, mat??rias de jornais, manchetes publicit??rias, e se transformou em sonho de consumo para milhares de pessoas. Partindo dessa concep????o, o gordo passa a ter um corpo visivelmente sem comedimento, sem sa??de, um corpo estigmatizado pelo desvio, o desvio pelo excesso. Entretanto, como afirma a escritora Marylin Wann, ?? perfeitamente poss??vel ser gordo e saud??vel. Frequentemente os gordos adoecem n??o por causa da gordura, mas sim pelo estresse, pela opress??o a que s??o submetidos.    \n\n No texto, o tratamento predominante na m??dia sobre a rela????o entre sa??de e corpo recebe a seguinte cr??tica:',
    resolution: 'O enunciado da quest??o foi mal elaborado, de forma que o aluno pode ser levado a entender que a quest??o pede a falha no tratamento dado ?? rela????o entre corpo e sa??de, e n??o a cr??tica feita ?? esse tratamento. Por afirmar que o "tratamento [...] recebe a seguinte cr??tica", entende-se que v??o ser apresentados o problema e, em seguida, a cr??tica.',
    answers: [
      { text: 'Difus??o das est??ticas antigas.', correct: false },
      { text: ' Exalta????o das crendices populares.', correct: false },
      { text: 'Propaga????o das conclus??es cient??ficas.', correct: false },
      { text: 'Reitera????o dos discursos hegem??nicos.', correct: false },
      { text: 'Contesta????o dos estere??tipos consolidados.', correct: true },
    ]
  },



  {
    question: '(ENEM - 2019) A maior parte das agress??es e manifesta????es discriminat??rias contra as religi??es de matrizes africanas ocorrem em locais p??blicos (57%). ?? na rua, na via p??blica, que tiveram lugar mais de 2/3 das agress??es, geralmente em locais pr??ximos ??s casas de culto dessas religi??es. O transporte p??blico tamb??m ?? apontado como um local em que os adeptos das religi??es de matrizes africanas s??o discriminados, geralmente quando se encontram para- mentados por conta dos preceitos religiosos.    \n\n As pr??ticas descritas no texto s??o incompat??veis com a din??mica de uma sociedade laica e democr??tica porque    ',
    resolution: ' Um Estado de direito laico e democr??tico ?? baseado em princ??pios de igualdade de liberdade. Isso inclui a dimens??o religiosa da vida e uma sociedade baseada nesses preceitos deve assegurar a livre pr??tica de credo. Nesses termos, o Estado n??o deve defender uma religi??o em si, mas garantir essa liberdade no interior da sociedade e combater a intoler??ncia religiosa.    ',
    answers: [
      { text: 'asseguram as express??es multiculturais.', correct: false },
      { text: 'promovem a diversidade de etnias.', correct: false },
      { text: 'falseiam os dogmas teol??gicos.', correct: false },
      { text: 'estimulam os rituais sincr??ticos.', correct: false },
      { text: 'restringem a liberdade de credo.', correct: true },
    ]
  },


  {
    question: '(ENEM - 2019) Em algumas l??nguas de Mo??ambique n??o existe a palavra ???pobre???. O indiv??duo ?? pobre quando n??o tem parentes. A pobreza ?? a solid??o, a ruptura das rela????es familiares que, na sociedade rural, servem de apoio ?? sobreviv??ncia. Os consultores internacionais, especialistas em elaborar relat??rios sobre a mis??ria, talvez n??o tenham em conta o impacto dram??tico da destrui????o dos la??os familiares e das rela????es de entreajuda. Na????es inteiras est??o tornando-se ?????rf??s???, e a mendicidade parece ser a ??nica via de uma agonizante sobreviv??ncia.    \n\n Em uma leitura que extrapola a esfera econ??mica, o autor associa o acirramento da pobreza ??',
    resolution: ' A ideia desta quest??o vai tanto para o significado de termos dentro de culturas diferentes, como podemos ver com o que significa ser pobre em comunidades tradicionais e em comunidades globalizadas, de onde derivam os ??ndices de pobreza. As no????es de pobreza s??o mais amplas e mais delicadas para comunidades n??o inseridas amplamente no contexto de globaliza????o devido ?? proximidade das esferas sociais. Ou seja, a fam??lia n??o se constitui apenas por afeto, mas tamb??m por necessidades econ??micas de trocas e plantios. Assim, a quest??o demanda o que isso tem de consequ??ncia de acordo com o texto e podemos ver que a alternativa mais correta ?? a que denota a fragiliza????o das redes de sociabilidade.',
    answers: [
      { text: 'Afirma????o das origens ancestrais.', correct: false },
      { text: 'Fragiliza????o das redes de sociabilidade.', correct: true },
      { text: 'Padroniza????o das pol??ticas educacionais.', correct: false },
      { text: 'Fragmenta????o das propriedades agr??colas.', correct: false },
      { text: 'Globaliza????o das tecnologias de comunica????o.', correct: false },
    ]
  },



  {
    question: '(ENEM - 2019) A tribo n??o possui um rei, mas um chefe que n??o ?? chefe de Estado. O que significa isso? Simplesmente que o chefe n??o disp??e de nenhuma autoridade, de nenhum poder de coer????o, de nenhum meio de dar uma ordem. O chefe n??o ?? um comandante, as pessoas da tribo n??o t??m nenhum dever de obedi??ncia. O espa??o da chefia n??o ?? o lugar do poder. Essencialmente encarregado de eliminar conflitos que podem surgir entre indiv??duos, fam??lias e linhagens, o chefe s?? disp??e, para restabelecer a ordem e a conc??rdia, do prest??gio que lhe reconhece a sociedade. Mas evidentemente prest??gio n??o significa poder, e os meios que o chefe det??m para realizar sua tarefa de pacificador limitam-se ao uso exclusivo da palavra.    \n\n O modelo pol??tico das sociedades discutidas no texto contrasta com o do Estado liberal burgu??s porque se baseia em:    ',
    resolution: ' O texto de Clastres trata sobre a organiza????o de sociedades tribais, cujo modelo pol??tico contrasta com o Estado liberal burgu??s na medida em que se baseia na interven????o consensual e na autonomia comunit??ria. O trecho que mais enfatiza esse contraste ?? o seguinte: "[...] o chefe n??o disp??e de nenhuma autoridade, de nenhum poder de coer????o, de nenhum meio de dar uma ordem. O chefe n??o ?? um comandante, as pessoas da tribo n??o t??m nenhum dever de obedi??ncia. O espa??o da chefia n??o ?? o lugar do poder.',
    answers: [
      { text: 'Imposi????o ideol??gica e normas hier??rquicas.', correct: false },
      { text: 'Determina????o divina e soberania mon??rquica.', correct: false },
      { text: 'Interven????o consensual e autonomia comunit??ria.', correct: true },
      { text: 'Media????o jur??dica e regras contratualistas.', correct: false },
      { text: 'Gest??o coletiva e obriga????es tribut??rias.', correct: false },
    ]
  },



  {
    question: '(ENEM - 2019)  Um dos te??ricos da democracia moderna, Hans Kelsen, considera elemento essencial da democracia real (n??o da democracia ideal, que n??o existe em lugar nenhum) o m??todo da sele????o dos l??deres, ou seja, a elei????o. Exemplar, neste sentido, ?? a afirma????o de um juiz da Corte Suprema dos Estados Unidos, por ocasi??o de uma elei????o de 1902: "A cabine eleitoral ?? o templo das institui????es americanas, onde cada um de n??s ?? um sacerdote, ao qual ?? confiada a guarda da arca da alian??a e cada um oficia do seu pr??prio altar".    \n\n As met??foras utilizadas no texto referem-se a uma concep????o de democracia fundamentada no(a)    ',
    resolution: ' O texto fala sobre a import??ncia que o pensador Kelsen atribui ao processo eleitoral, m??todo de sele????o dos l??deres na democracia, no que diz respeito ?? legitima????o do regime democr??tico. A democracia, o governo de todos, se faz valer atrav??s da participa????o peri??dica direta de cada cidad??o, concretizada nas elei????es e no voto individual, secreto, universal. A frase proferida por um juiz da Corte Suprema dos Estados Unidos em 1902 ilustra essa ideia, ao comparar as urnas eleitorais aos templos, os eleitores aos sacerdotes, o voto ?? arca da alian??a. Ou seja, o juiz atribui import??ncia "divina" ?? forma de se escolher os representantes na democracia, equiparando o processo eleitoral ?? guarda de um objeto sagrado (a democracia, a liberdade, os direitos), exercida por cada um dos membros do grupo.    ',
    answers: [
      { text: 'justifica????o te??sta do direito.', correct: false },
      { text: 'rigidez da hierarquia de classe.', correct: false },
      { text: '??nfase formalista na administra????o.', correct: false },
      { text: 'protagonismo do Executivo no poder.', correct: false },
      { text: 'centralidade do individuo na sociedade.', correct: true },
    ]
  },




  {
    question: '(ENEM - 2019)   No protestantismo asc??tico, temos n??o apenas a clara no????o da primazia da ??tica sobre o mundo, mas tamb??m a mitiga????o dos efeitos da dupla moral judaica (uma moral interna para os irm??os de cren??a e outra externa para os infi??is). O desafio aqui ?? o da ??tica, que quer deixar de ser um ideal eventual e ocasional (que exige dos virtuosos religiosos quase sempre uma ???fuga do mundo???, como na pr??tica mon??stica crist?? medieval) para tornar-se efetivamente uma lei pr??tica e cotidiana ???dentro do mundo???.    \n\n Retomando o pensamento de Max Weber, o texto apresenta a tens??o entre positividade ??tico religiosa e esferas mundanas de a????o.  Nessa perspectiva, a ??tica protestante ?? compreendida como    ',
    resolution: ' A ??tica protestante se configura diante de uma obra que foi promovido por Weber sendo ele um dos principais fundadores e essencial para o pensamento sociol??gico. ?? o livro mais conhecido de toda a sua obra. O pensador faz um processo de investiga????o na rela????o entre a conduta em natureza econ??mico e certas ra??zes religiosas. A investiga????o se estrutura diante de uma natureza do pensamento ideal.   ',
    answers: [
      { text: 'vinculada ao abandono da felicidade terrena.', correct: false },
      { text: 'contr??ria aos princ??pios econ??micos liberais.', correct: false },
      { text: 'promovedora da dimens??o pol??tica da vida cotidiana.', correct: false },
      { text: 'estimuladora da igualdade social como direito divino.', correct: false },
      { text: 'adequada ao desenvolvimento do capitalismo moderno.', correct: true },
    ]
  },

  {
    question: '(ENEM - 2017)   O com??rcio soube extrair um bom proveito da interatividade pr??pria do meio tecnol??gico. A possibilidade de se obter um alto desenho do perfil de interesses do usu??rio, que dever?? levar ??s ??ltimas consequ??ncias o princ??pio da oferta como isca para o desejo consumista, foi o principal deles.    \n\n Do ponto de vista comercial, o avan??o das novas tecnologias indicado no texto est?? associado ??',
    resolution: 'O texto nos apresenta a ideia de que o com??rcio tirou bom proveito das interatividades do meio tecnol??gico: conseguem adquirir o perfil de interesse do usu??rio, permitindo assim ???levar ??s ??ltimas consequ??ncias o princ??pio da oferta como isca para o desejo consumista???  A defini????o de perfil de interesse do usu??rio permite uma individualiza????o das mensagens publicit??rias, como diz o texto, acaba por ???levar ??s ??ltimas consequ??ncias o princ??pio da oferta como isca para o desejo consumista???',
    answers: [
      { text: 'atua????o dos consumidores como fiscalizadores da produ????o.', correct: false },
      { text: 'exig??ncia de consumidores conscientes de seus direitos.', correct: false },
      { text: 'rela????o direta entre fabricantes e consumidores.', correct: false },
      { text: 'individualiza????o das mensagens publicit??rias.', correct: true },
      { text: 'manuten????o das prefer??ncias de consumo.', correct: false },
    ]
  },


  {
    question: '(ENEM - 2017)  Uma sociedade ?? uma associa????o mais ou menos autossuficiente de pessoas que em suas rela????es m??tuas reconhecem certas regras de conduta como obrigat??rias e que, na maioria das vezes, agem de acordo com elas. Uma sociedade ?? bom ordenada n??o apenas quando est?? planejada para promover o bem de seus membros, mas quando ?? tamb??m efetivamente regulada por uma concep????o p??blica de justi??a. Isto ??, trata-se de uma sociedade na qual todos aceitam, e sabem que os outros aceitam, o mesmo princ??pio de justi??a    \n\n A vis??o expressa nesse texto do s??culo XX remete a qual aspecto do pensamento moderno?    ',
    resolution: 'O fil??sofo John Rawls era um defensor do liberalismo pol??tico, em que ir?? formular sua teoria da justi??a e esta como um valor de equidade. A liberdade seria o valor maior que ir?? conduzir o indiv??duo, ou seja, nas esferas p??blicas existam mecanismos que consigam garantir as liberdades individuais.',
    answers: [
      { text: 'A rela????o entre liberdade e autonomia do Liberalismo.', correct: true },
      { text: 'A independ??ncia entre poder e moral do Racionalismo.', correct: false },
      { text: 'A conven????o entre cidad??os e soberano do Absolutismo.', correct: false },
      { text: 'A dial??tica entre indiv??duo e governo autocrata do Idealismo.      ', correct: false },
      { text: 'A contraposi????o entre bondade e condi????es selvagem do Naturalismo.', correct: false },
    ]
  },


  {
    question: '(ENEM - 2017)  A grande maioria dos pa??ses ocidentais democr??ticos adotou o Tribunal Constitucional como mecanismo de controle dos demais poderes. A inclus??o dos Tribunais no cen??rio pol??tico implicou altera????es no c??lculo para a implementa????o de pol??ticas p??blicas. O governo, al??m de negociar seu plano pol??tico com o Parlamento, teve que se preocupar em n??o infringir a Constitui????o. Essa nova arquitetura institucional propiciou o desenvolvimento de um ambiente pol??tico que viabilizou a participa????o do Judici??rio nos processos decis??rios. \n\n O texto faz refer??ncia a uma importante mudan??a na din??mica de funcionamento dos Estados contempor??neos que, no caso brasileiro, teve como consequ??ncia a',
    resolution: 'Cada vez mais o judici??rio precisa fazer parte das decis??es pol??ticas, ou seja, a judicializa????o das quest??es inerentes ao legislativo ?? grande nos Estados contempor??neos. Desse modo, os 3 poderes ficam cada vez mais dependentes um do outro, um fator que dificulta uma ditadura, por exemplo, mas deixa o processo de legislativo mais engessado.',
    answers: [
      { text: 'ado????o de elei????es para a alta magistratura.', correct: false },
      { text: 'diminui????o das tens??es entre os entes federativos.', correct: false },
      { text: 'suspens??o do princ??pio geral dos freios e contrapesos.', correct: false },
      { text: 'judicializa????o de quest??es pr??prias da esfera legislativa.', correct: true },
      { text: 'profissionaliza????o do quadro de funcion??rios da Justi??a.', correct: false },
    ]
  },



















































































]
