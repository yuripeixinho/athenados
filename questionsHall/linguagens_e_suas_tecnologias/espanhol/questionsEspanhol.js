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
    question: '(ENEM - 2020) \n\n Los propietarios de la liberdad \n\n  Las palabras cumplen ciclos; las actitudes tambi??n. Sin embargo, cuando las palabras designan actitudes, los ciclos se vuelven m??s complejos. Cuando el hoy tan denostado Sartre puso la palabra compromiso sobre el tapete y hasta Archibald Mac Leish public?? un libro sobre La responsabilidad de los intelectuales, estas dos palabras, compromiso y responsabilidad, designaban actitudes que, sin ser gemelas, eran bastantes afines. Salvo contadas excepciones, los intelectuales de entonces la hicieron suyas, y, equivocados o no, dijeron sin eufemismos a qu?? bando (as?? fuera en l??neas generales) pertenec??an, por qu?? empe??o se jugaban. \n\n Los intelectua??es latinoamericanos tamb??en comprendieron d??nde estaba esta vez el enemigo. S??lo entonces empez?? la mala prensa. Los grandes pont??fices de la propaganda norteamericana subrayaron una y otra vez la palabra libertad y denostaron el compromiso. Libertad no era librarse de Batista o Somoza, sino mantener la prensa libre. Libertad es la emocionada comprobaci??n de que la gran prensa norteamericana es capaz de descubrir que Lumumba o Allende fueron liquidados por la CIA, sin poner el acento en que eso  no sirve para resucitarlos. \n\n ??Y compromiso? Pues compromiso es la actitud que adoptan ciertos intelectuales, cuya carga ideol??gica perjudica notoriamente su arte. Desp??es de todo ??c??mo se atreve a frecuentar sue??os y cielo y cualesquiera otras provincias del esp??ritu, si es p??blico y notorio que tales ??mbitos m??s o menos m??gicos son patrimonio exclusivo de los propietarios de la libertad? \n\n\n Transformar palavras em atitudes tem sido um dos grandes dilemas dos intelectuais. Ao ponderar sobre essa tem??tica, o autor, um dos grandes cr??ticos e literatos latino-americanos da atualidade, leva o leitor a perceber que',

    resolution: 'O autor do texto traz uma reflex??o sobre a responsabilidade dos intelectuais, fazendo uma cr??tica ao uso e sentido que a palavra libertad assumiu no contexto latino-americano e versando sobre o que ?? o compromisso, baseando sua argumenta????o em torno destes dois conceitos. No que diz respeito ao compromisso, o autor diz que ?? a atitude que alguns intelectuais assumem, estes intelectuais demonstram sua ideologia atrav??s de sua arte, o que ?? considerado como um preju??zo pelo autor. Dessa forma, considerando as alternativas, temos que a correta ?? a letra [C], uma vez que as a????es dos intelectuais s??o expressas atrav??s da publica????o de livros contendo uma alta carga ideol??gica.',
    answers: [
      { text: 'o compromisso pol??tico afasta o artista da cria????o', correct: false },
      { text: 'os costumes sociais governam a linguagem e as atitudes das pessoas.', correct: false },
      { text: 'o compromisso ideol??gico de alguns intelectuais est?? refletido em suas obras.', correct: true },
      { text: 'a complexidade relacionada ao conceito de liberdade impede o compromisso.', correct: false },
      { text: 'os intelectuais latino-americanos t??m um posicionamento acr??tico perante o poder.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) Poco despu??s apareci?? en casa de Elisenda Morales, arrastrando su cansancio y las contrariedades de un largo d??a que hab??a dejado su ??nimo en reinas. A pesar de todo, supo resistirlo, y cuando ella le ofreci?? una copa de mistela, abandon?? su asiento para ir hasta la tienda en busca de algo m??s estimulante. \n\n All??, en el corredor de la casa, en taburetes separados, ecibieron los primeiros c??lidos soplos de la noche. Consu habitual entereza. Elisenda entr?? a conectar a luz de la sala, sofocando parte de su reflejo, mientras comentaba que as?? estar??an mejor. Al menos, pens?? el t??o Camarillo, no habia sacado la l??mpara como otras veces, ni le hab??a entregado alguno de sus ??lbumes, y parec??a en cambio decidida a mantener en ascuas as vecindario. Aqu??lla fue la primera vez que en mucho tiempo dejaron de lado el tema de las rentas, para entrar con pies de plomo en el espinoso terreno de las confidencias. \n\n\n No texto, no qual ?? narrada a visita ?? casa de uma personagem, a expres??o "entrar con pies de plomo" ?? utilizada para se referir ao (??)',

    resolution: 'A express??o ???entrar con pies de plomo??? significa, em espanhol, abordar com cuidado alguma coisa - no caso, ???el terreno de las confidencias???, ou seja, os ???assuntos ??ntimos???, de foro particular.',
    answers: [
      { text: 'determina????o para conduzir discuss??es pessoais.', correct: false },
      { text: 'insensibilidade para lidar com temas do passado.', correct: false },
      { text: 'discri????o para administrar quest??es financeiras.', correct: false },
      { text: 'disposi????o para resolver problemas familiares.', correct: false },
      { text: 'cuidado para tratar de assuntos ??ntimos', correct: true },
    ]
  },


  {
    question: '(ENEM - 2020) \n\n La violencia como bella arte \n\n  Pues bien, "Relatos salvajes", de Dami??n Szifr??n, es sobre todo un brillante esfuerzo por poner rostro, por fotografiar, a esa parte de la violencia que tanto cuesta ver en el cine. De repente, el director argentino coloca al espectador ante el espect??culo, digamos putrefacto, de una sociedad enferma de su propia indolencia, anestesiada por su ira, incapaz de entender el origen de la insatisfacci??n que la habita. ??C??mo se quedan? S??, estamos delante de la una pel??cula vocacionalmente violenta, obligadamente salvaje, pero, y sobre todo, deslumbrante en su claridad. \n\n M??s all?? del esplendor sabio de una producci??n perfecta, lo que m??s duele, lo que m??s divierte, lo que m??s conmueve es la sensaci??n de reconocimiento. Cada uno de los damnificados, pese a su acento marcadamente argentino, somos nosotros. O, mejor, cada insulto proferido, y no siempre entendido, es nuestro, en alg??n momento ha salido de nuestra boca. O saldr??.\n\n La violencia no es s??lo eso que tanto desagrada a los profesionales del buen gusto, a los programadores de ??pera o a los fil??sofos de la nada; la violencia, la realmente insoportable, es tambi??n una cuesti??n actitud, un simple gesto.Y esa violencia est?? por todas partes, est?? dentro. Y Szifr??n acierta a retratarla tan fielmente que no queda otra que romper a re??r. Aunque s??lo sea de simple desesperaci??n. Brillante, magistral incluso. \n\n\n Nessa resenha cr??tica acerca do filme Relatos Selvajes, o autor evidencia o',

    resolution: 'O trecho da cr??tica que confirma a abordagem do autorreconhecimento ??: ???lo que m??s comueve es la sensaci??n de reconocimiento. [...] cada insulto proferido, y no siempre entendido, es nuestro, en alg??n momento ha salido de nuestra boca. O saldr?????. Nele, o autor reflete sobre o potencial da obra cinematogr??fica em mostrar, a qualquer espectador, uma perspectiva identific??vel de viol??ncia, mediada pelos comportamentos humanos diante de tal fen??meno.',
    answers: [
      { text: 'c??mico como fuga da sociedade diante de situa????es violentas', correct: false },
      { text: 'estado de apatia da sociedade perante a viol??ncia rotineira do mundo atual.', correct: false },
      { text: 'empecilho para o espectador vivenciar a viol??ncia bruta na realizadade e na fic????o.', correct: false },
      { text: 'sotaque refor??ado dos personagens a fim de marcar o espa??o do cinema argentino.', correct: false },
      { text: 'autorreconhecimento diante dos diversos tipos de compartamento humano frente ?? viol??ncia.', correct: true },
    ]
  },

  {
    question: '(ENEM - 2019) \n\n Adelfos \n\n Yo soy como las gentes que a mi tierra vinieron \n\n - soy de la raza mora, vieja amiga del sol - \n\n que todo lo ganaron y todo lo perdieron. \n\n Tengo el alma de nardo del ??rabe espa??ol. \n\n\n Nessa estrofe, o poeta e dramaturgo espanhol Manoel Machado reflete acerca',

    resolution: 'Na estrofe do poema Adelfos, o poeta e dramaturgo espanhol Manoel Machado reflete acerca de sua forma????o identit??ria plural, caracterizada pela mescla das culturas ??rabe e espanhola: - soy de la raza mora, vieja amiga del sol - \n\n que todo lo ganaron y todo lo perdieron. \n\n Tengo el alma de nardo del ??rabe espa??ol.???',
    answers: [
      { text: 'de sua forma????o identit??ria plural.', correct: true },
      { text: 'de condi????o n??made de seus antepassados.', correct: false },
      { text: 'de perda sofrida com o processo de migra????o.', correct: false },
      { text: 'da d??vida do povo espanhol para com o povo ??rabe.', correct: false },
      { text: 'de sua identifica????o com os elementos da natureza.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) \n\n Que hay de cierto en la f??bula de la cigarra y la hormiga \n\n  Cuenta una conocida f??bula que, tras pasar todo un verano cantando y ociosa, una cigarra se encontr?? sin alimento y deci y decidi?? pedir a su vecina, la hormiga algo que llevarse a la boca. Esta le ofreci?? granos de arroz acompa??ado de una moraleja: m??s vale prevenir que lamentar. ??Merecen su fama de previsoras y afanosas las hormigas cortadoras de hojas (Atta cephalotes), por ejemplo, son consideradas las primeras agricultoras del planeta, dedicadas a cortar, acarrear e integrar hojas en el jard??n de hongos del que se alimentan. Otro dato curioso es que se ha comprobado que, pr??cticamente en todas las especies de hormigas, las m??s ancianas asumen trabajos de mayor riesgo. De acuerdo con Dawid Moron de la Universidad de Jagiellonian (Polonia), esto se debe a que es mejor para la colonia sacrificar una vida que est?? cerca de su fin que a un individuo joven.\n\n En cuanto a las cigarras, no se les puede acusar de perezosas. Lo que s?? es cierto es que los machos pasan el verano ???cantando??? ??? un sonido que producen con unas membranas llamadas timbales ??? y encaramados a un ??rbol, de cuya savia se alimentan. \n\n\n A f??bula ?? um g??nero de ampla divulga????o frequentemente revisitado com diversos objetivos. No texto, a f??bula A cigarra e a formiga ?? retomada para',

    resolution: 'No texto, a f??bula A cigarra e a formiga ?? retomada para descrever o comportamento dos insetos ??? cigarra e formiga  ??? na natureza: \n\n ???[...] las hormigas cortadoras de hojas (Atta cephalotes), por ejemplo, son consideradas las primeras agricultoras del planeta, dedicadas a cortar, acarrear e integrar hojas en el jard??n de hongos del que se alimentan. [???] \n\n  ???En cuanto a las cigarras, no se les puede acusar de perezosas. Lo que s?? es cierto es que los machos pasan el verano ???cantando??? ?????? un sonido que producen con unas membranas llamadas timbales ???  y encaramados a un ??rbol, de cuya savia se alimentan.???',
    answers: [
      { text: 'apresentar ao leitor um ensinamento moral.', correct: false },
      { text: 'refor??ar o estere??tipo associado ??s cigarras.', correct: false },
      { text: 'descrever o comportamento dos insetos na natureza', correct: true },
      { text: 'expor a superioridade das formigas em rela????o ??s cigarras.', correct: false },
      { text: 'descrever a rela????o social entre formigas e cigarras na natureza', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) \n\n El Hombre Electr??nico \n\n  ??Cu??ntas veces has cambiado de m??vil???Cu??ntos ordenadores has tenido ya???Tienes c??mara digital, IPOD, Nintendo Wii y televisi??n de pantalla de plasma? Ordenadores, tel??fonos m??viles, GPS, walkman, televisiones, lavadoras, tostadores, aspiradores y un largu??simo etc??tera. Todos usamos aparatos el??ctricos que tarde o temprano se convertir??n en residuos. El Hombre Electr??nico que aparece en la foto de m??s abajo mide 7 metros de altura y pesa 3,3 toneladas. Es una escultura hecha con la cantidad de residuos el??ctricos y electr??nicos que un ciudadano medio (en el Reino Unido) tirar?? a la basura a lo largo de su vida, si se siguen consumiendo este tipo de productos al ritmo actual. El Hombre Electr??nico ha sido dise??ado por el escultor Pa??l Bomini con objeto de aumentar la conciencia de los ciudadanos a la hora de consumir aparatos el??ctricos. Esta campa??a parte de la base de que todos compramos aparatos electr??nicos como herramientas de trabajo u ocio, pero pregunt??ndonos unas cuantas preguntas podemos inducir cambios en nuestro comportamiento que beneficiar??n al medio ambiente, otras personas y a nosotros mismos:??Tienes alg??n aparato el??ctrico o electr??nico que no necesitas???Podr??as ser m??s responsable a la hora de comprar un nuevo producto electr??nico???Podr??as reciclar o reparar estos productos una vez que se han quedado obsoletos o se han roto? ??Intentas ahorrar energ??a en tu vida diaria? \n\n Considerando a necessidade de assumir uma conduta mais respons??vel com o meio ambiente. Paul Bomini criou a escultura O homem eletr??nico para',

    resolution: 'Considerando a necessidade de assumir uma conduta mais respons??vel com o meio ambiente. Paul Bomini criou a escultura O homem eletr??nico a fim de problematizar o descarte de inconsequente de equipamentos. Essa afirma????o pode ser justificada a partir do seguinte excerto do texto: ???El Hombre Electr??nico ha sido dise??ado por el escultor Pa??l Bomini con objeto de aumentar la conciencia de los ciudadanos a la hora de consumir aparatos el??ctricos.???',
    answers: [
      { text: 'Incentivar inova????es em reciclagem para a constru????o de m??quinas.', correct: false },
      { text: 'propor a cria????o de objetos a partir de aparelhos descartados.', correct: false },
      { text: 'divulgar o lan??amento de eletr??nicos sustent??veis.', correct: false },
      { text: 'problematizar o descarte de inconsequente de equipamentos.', correct: true },
      { text: 'alertar sobre as escolhas tecnol??gicas da popula????o.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2018) \n\n ??Como gestionar la diversidad ling????stica en el aula? \n\n El aprendizaje de idiomas es una de las demandas de la sociedad en la escuela: los alumnos tienen que finalizar la escolarizaci??n con un buen conocimiento, por lo menos, de las tres lenguas curriculares: catal??n, castellano e ingl??s (o franc??s. portugu??s...). \n\n       La metodolog??a que promueve el aprendizaje integrado de idiomas en la escuela tiene en cuenta las relaciones entre las diferentes lenguas: la mejor ense??anza de una lengua incide en Ia mejora de todas las dem??s. Se trate de educar en y para la diversidad ling????stica y cultural. \n\n       Por eso, la V Jornada de Buenas Pr??cticas de Gesti??n del Multiling??ismo, que se celebrar?? en Barcelona, debatir?? sobre la gesti??n del multiling??ismo en el aula. El objetivo es difundir propuestas para el aprendizaje integrado de idiomas y presentar experiencias pr??cticas de gesti??n de Ia diversidad ling????stica presente en las aulas. \n\n\n Na regi??o da Catalunha, Espanha, convivem duas l??nguas oficiais: o catal??o e o espanhol. Al??m dessas, ensinam-se outras l??nguas nas escolas. De acordo com o texto, para administrar a variedade lingu??stica nas aulas, ?? necess??rio',

    resolution: 'Para administrar a variedade lingu??stica nas aulas, ?? necess??rio, de acordo com o texto, explorar as rela????es entre as l??nguas estudadas para promover a diversidade (alternativa D). No segundo par??grafo, afirma-se que a metodologia que promove a aprendizagem integrada de idiomas leva em conta as rela????es entre as diferentes l??nguas: ???La metodologia que promueve el aprendizaje integrado de idiomas en la escuela tiene en cuenta relaciones entre las diferentes lenguas (???) Se trata de educar en y para la diversidad ling????stica y cultural???.',
    answers: [
      { text: 'ampliar o n??mero de l??nguas ofertadas para enriquecer o conte??do.', correct: false },
      { text: 'divulgar o estudo de diferentes idiomas e culturas para atrair os estudantes.', correct: false },
      { text: 'privilegiar o estudo de l??nguas maternas para valorizar os aspectos regionais.', correct: false },
      { text: 'explorar as rela????es entre as l??nguas estudadas para promover a diversidade.', correct: true },
      { text: 'debater as pr??ticas sobre multilinguismo para formar melhor os professores de l??nguas.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2018) \n\n Revoluci??n en la arquitectura China \n\n Un rascacielos de 57 pisos no llama la atenci??n en la China del siglo XXI. Salvo que se haya construido en 19 d??as, claro. Y eso es precisamente lo que ha conseguido Broad Sustainable Building (BSB), una empresa dedicada a la fabricaci??n de purificadores de aire y de equipos de aire acondicionado para grandes infraestructuras que ahora se ha empe??ado en liderar una revoluci??n con su propio modelo de arquitectura modular prefabricada. Como subraya su presidente, Zhang Yue, es una f??rmula econ??mica, ecol??gica, segura, y limpia. Ese ??ltimo t??rmino, adem??s, lo utiliza tanto para referirse al polvo que se produce en la construcci??n como a los gruesos sobres que suelen circular por debajo de las mesas en adjudicaciones y permisos varios. ???Quiero que nuestros edificios alumbren una nueva era en la arquitectura, y que se conviertan en s??mbolo de la lucha contra la contaminaci??n y el cambio clim??tico, que es la mayor amenaza a la que se enfrenta la humanidad???, sentencia. \n\n ???Es como montar un Lego. Apenas hay subcontrataci??n, lo cual ayuda a mantener un costo bayo y un control de calidad estricto, y nos permite eliminar tambi??n la corrupci??n inherente al sector???, explica la vicepresidenta de BSB y responsable del mercado Internacional, Jiang Yan. \n\n\n No texto, alguns dos benef??cios de se utilizar estruturas pr??-moldadas na constru????o de altos edif??cios est??o expressos por meio da palavra limpia. Essa express??o indica que, al??m de produzir menos res??duos, o uso desse tipo de estrutura',

    resolution: 'A palavra limpia, no texto, indica que o uso das estruturas pr??-moldadas na constru????o dos edif??cios inibe a corrup????o na constru????o civil. O fragmento a seguir pode exemplificar essa afirma????o: ???(???) es una f??rmula econ??mica, ecol??gica, segura, y limpia. Ese ??ltimo t??rmino, adem??s, lo utiliza tanto para referirse al polvo que se produce en la construcci??n como a los gruesos sobres que suelen circular por debajo de las mesas en adjudicaciones y permisos varios. \n\n Aten????o para a palavra sobre significa ???envelope???; ???sobre gruesos???, portanto, s??o ???envelopes grossos???. Segundo o texto, circulam por debaixo das mesas envelopes grossos ??? dando a entender que ao tratar das autoriza????es (permisos), h?? dinheiro de corrup????o.???',
    answers: [
      { text: 'reduz o contingente de m??o de obra', correct: false },
      { text: 'inibe a corrup????o na constru????o civil.', correct: true },
      { text: 'facilita o controle da qualidade da obra.', correct: false },
      { text: 'apresenta um modelo arquitet??nico conciso.', correct: false },
      { text: 'otimiza os custos da constru????o de edif??cio.', correct: false },
    ]
  },






















  
]
