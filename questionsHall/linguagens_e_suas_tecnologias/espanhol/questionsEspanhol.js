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
    question: '(ENEM - 2020) \n\n Los propietarios de la liberdad \n\n  Las palabras cumplen ciclos; las actitudes también. Sin embargo, cuando las palabras designan actitudes, los ciclos se vuelven más complejos. Cuando el hoy tan denostado Sartre puso la palabra compromiso sobre el tapete y hasta Archibald Mac Leish publicó un libro sobre La responsabilidad de los intelectuales, estas dos palabras, compromiso y responsabilidad, designaban actitudes que, sin ser gemelas, eran bastantes afines. Salvo contadas excepciones, los intelectuales de entonces la hicieron suyas, y, equivocados o no, dijeron sin eufemismos a qué bando (así fuera en líneas generales) pertenecían, por qué empeño se jugaban. \n\n Los intelectuaçes latinoamericanos tambíen comprendieron dónde estaba esta vez el enemigo. Sólo entonces empezó la mala prensa. Los grandes pontífices de la propaganda norteamericana subrayaron una y otra vez la palabra libertad y denostaron el compromiso. Libertad no era librarse de Batista o Somoza, sino mantener la prensa libre. Libertad es la emocionada comprobación de que la gran prensa norteamericana es capaz de descubrir que Lumumba o Allende fueron liquidados por la CIA, sin poner el acento en que eso  no sirve para resucitarlos. \n\n ¿Y compromiso? Pues compromiso es la actitud que adoptan ciertos intelectuales, cuya carga ideológica perjudica notoriamente su arte. Despúes de todo ¿cómo se atreve a frecuentar sueños y cielo y cualesquiera otras provincias del espíritu, si es público y notorio que tales ámbitos más o menos mágicos son patrimonio exclusivo de los propietarios de la libertad? \n\n\n Transformar palavras em atitudes tem sido um dos grandes dilemas dos intelectuais. Ao ponderar sobre essa temática, o autor, um dos grandes críticos e literatos latino-americanos da atualidade, leva o leitor a perceber que',

    resolution: 'O autor do texto traz uma reflexão sobre a responsabilidade dos intelectuais, fazendo uma crítica ao uso e sentido que a palavra libertad assumiu no contexto latino-americano e versando sobre o que é o compromisso, baseando sua argumentação em torno destes dois conceitos. No que diz respeito ao compromisso, o autor diz que é a atitude que alguns intelectuais assumem, estes intelectuais demonstram sua ideologia através de sua arte, o que é considerado como um prejuízo pelo autor. Dessa forma, considerando as alternativas, temos que a correta é a letra [C], uma vez que as ações dos intelectuais são expressas através da publicação de livros contendo uma alta carga ideológica.',
    answers: [
      { text: 'o compromisso polótico afasta o artista da criação', correct: false },
      { text: 'os costumes sociais governam a linguagem e as atitudes das pessoas.', correct: false },
      { text: 'o compromisso ideológico de alguns intelectuais está refletido em suas obras.', correct: true },
      { text: 'a complexidade relacionada ao conceito de liberdade impede o compromisso.', correct: false },
      { text: 'os intelectuais latino-americanos têm um posicionamento acrítico perante o poder.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) Poco después apareció en casa de Elisenda Morales, arrastrando su cansancio y las contrariedades de un largo día que había dejado su ánimo en reinas. A pesar de todo, supo resistirlo, y cuando ella le ofreció una copa de mistela, abandonó su asiento para ir hasta la tienda en busca de algo más estimulante. \n\n Allí, en el corredor de la casa, en taburetes separados, ecibieron los primeiros cálidos soplos de la noche. Consu habitual entereza. Elisenda entró a conectar a luz de la sala, sofocando parte de su reflejo, mientras comentaba que así estarían mejor. Al menos, pensó el tío Camarillo, no habia sacado la lámpara como otras veces, ni le había entregado alguno de sus álbumes, y parecía en cambio decidida a mantener en ascuas as vecindario. Aquélla fue la primera vez que en mucho tiempo dejaron de lado el tema de las rentas, para entrar con pies de plomo en el espinoso terreno de las confidencias. \n\n\n No texto, no qual é narrada a visita à casa de uma personagem, a expresão "entrar con pies de plomo" é utilizada para se referir ao (à)',

    resolution: 'A expressão “entrar con pies de plomo” significa, em espanhol, abordar com cuidado alguma coisa - no caso, “el terreno de las confidencias”, ou seja, os “assuntos íntimos”, de foro particular.',
    answers: [
      { text: 'determinação para conduzir discussões pessoais.', correct: false },
      { text: 'insensibilidade para lidar com temas do passado.', correct: false },
      { text: 'discrição para administrar questões financeiras.', correct: false },
      { text: 'disposição para resolver problemas familiares.', correct: false },
      { text: 'cuidado para tratar de assuntos íntimos', correct: true },
    ]
  },


  {
    question: '(ENEM - 2020) \n\n La violencia como bella arte \n\n  Pues bien, "Relatos salvajes", de Damián Szifrón, es sobre todo un brillante esfuerzo por poner rostro, por fotografiar, a esa parte de la violencia que tanto cuesta ver en el cine. De repente, el director argentino coloca al espectador ante el espectáculo, digamos putrefacto, de una sociedad enferma de su propia indolencia, anestesiada por su ira, incapaz de entender el origen de la insatisfacción que la habita. ¿Cómo se quedan? Sí, estamos delante de la una película vocacionalmente violenta, obligadamente salvaje, pero, y sobre todo, deslumbrante en su claridad. \n\n Más allá del esplendor sabio de una producción perfecta, lo que más duele, lo que más divierte, lo que más conmueve es la sensación de reconocimiento. Cada uno de los damnificados, pese a su acento marcadamente argentino, somos nosotros. O, mejor, cada insulto proferido, y no siempre entendido, es nuestro, en algún momento ha salido de nuestra boca. O saldrá.\n\n La violencia no es sólo eso que tanto desagrada a los profesionales del buen gusto, a los programadores de ópera o a los filósofos de la nada; la violencia, la realmente insoportable, es también una cuestión actitud, un simple gesto.Y esa violencia está por todas partes, está dentro. Y Szifrón acierta a retratarla tan fielmente que no queda otra que romper a reír. Aunque sólo sea de simple desesperación. Brillante, magistral incluso. \n\n\n Nessa resenha crítica acerca do filme Relatos Selvajes, o autor evidencia o',

    resolution: 'O trecho da crítica que confirma a abordagem do autorreconhecimento é: “lo que más comueve es la sensación de reconocimiento. [...] cada insulto proferido, y no siempre entendido, es nuestro, en algún momento ha salido de nuestra boca. O saldrá”. Nele, o autor reflete sobre o potencial da obra cinematográfica em mostrar, a qualquer espectador, uma perspectiva identificável de violência, mediada pelos comportamentos humanos diante de tal fenômeno.',
    answers: [
      { text: 'cômico como fuga da sociedade diante de situações violentas', correct: false },
      { text: 'estado de apatia da sociedade perante a violência rotineira do mundo atual.', correct: false },
      { text: 'empecilho para o espectador vivenciar a violência bruta na realizadade e na ficção.', correct: false },
      { text: 'sotaque reforçado dos personagens a fim de marcar o espaço do cinema argentino.', correct: false },
      { text: 'autorreconhecimento diante dos diversos tipos de compartamento humano frente à violência.', correct: true },
    ]
  },

  {
    question: '(ENEM - 2019) \n\n Adelfos \n\n Yo soy como las gentes que a mi tierra vinieron \n\n - soy de la raza mora, vieja amiga del sol - \n\n que todo lo ganaron y todo lo perdieron. \n\n Tengo el alma de nardo del árabe español. \n\n\n Nessa estrofe, o poeta e dramaturgo espanhol Manoel Machado reflete acerca',

    resolution: 'Na estrofe do poema Adelfos, o poeta e dramaturgo espanhol Manoel Machado reflete acerca de sua formação identitária plural, caracterizada pela mescla das culturas árabe e espanhola: - soy de la raza mora, vieja amiga del sol - \n\n que todo lo ganaron y todo lo perdieron. \n\n Tengo el alma de nardo del árabe español.”',
    answers: [
      { text: 'de sua formação identitária plural.', correct: true },
      { text: 'de condição nômade de seus antepassados.', correct: false },
      { text: 'de perda sofrida com o processo de migração.', correct: false },
      { text: 'da dívida do povo espanhol para com o povo árabe.', correct: false },
      { text: 'de sua identificação com os elementos da natureza.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2020) \n\n Que hay de cierto en la fábula de la cigarra y la hormiga \n\n  Cuenta una conocida fábula que, tras pasar todo un verano cantando y ociosa, una cigarra se encontró sin alimento y deci y decidió pedir a su vecina, la hormiga algo que llevarse a la boca. Esta le ofreció granos de arroz acompañado de una moraleja: más vale prevenir que lamentar. ¿Merecen su fama de previsoras y afanosas las hormigas cortadoras de hojas (Atta cephalotes), por ejemplo, son consideradas las primeras agricultoras del planeta, dedicadas a cortar, acarrear e integrar hojas en el jardín de hongos del que se alimentan. Otro dato curioso es que se ha comprobado que, prácticamente en todas las especies de hormigas, las más ancianas asumen trabajos de mayor riesgo. De acuerdo con Dawid Moron de la Universidad de Jagiellonian (Polonia), esto se debe a que es mejor para la colonia sacrificar una vida que está cerca de su fin que a un individuo joven.\n\n En cuanto a las cigarras, no se les puede acusar de perezosas. Lo que sí es cierto es que los machos pasan el verano “cantando” – un sonido que producen con unas membranas llamadas timbales – y encaramados a un árbol, de cuya savia se alimentan. \n\n\n A fábula é um gênero de ampla divulgação frequentemente revisitado com diversos objetivos. No texto, a fábula A cigarra e a formiga é retomada para',

    resolution: 'No texto, a fábula A cigarra e a formiga é retomada para descrever o comportamento dos insetos – cigarra e formiga  – na natureza: \n\n “[...] las hormigas cortadoras de hojas (Atta cephalotes), por ejemplo, son consideradas las primeras agricultoras del planeta, dedicadas a cortar, acarrear e integrar hojas en el jardín de hongos del que se alimentan. […] \n\n  “En cuanto a las cigarras, no se les puede acusar de perezosas. Lo que sí es cierto es que los machos pasan el verano “cantando” –– un sonido que producen con unas membranas llamadas timbales –  y encaramados a un árbol, de cuya savia se alimentan.”',
    answers: [
      { text: 'apresentar ao leitor um ensinamento moral.', correct: false },
      { text: 'reforçar o estereótipo associado às cigarras.', correct: false },
      { text: 'descrever o comportamento dos insetos na natureza', correct: true },
      { text: 'expor a superioridade das formigas em relação às cigarras.', correct: false },
      { text: 'descrever a relação social entre formigas e cigarras na natureza', correct: false },
    ]
  },

  {
    question: '(ENEM - 2019) \n\n El Hombre Electrônico \n\n  ¿Cuántas veces has cambiado de móvil?¿Cuántos ordenadores has tenido ya?¿Tienes cámara digital, IPOD, Nintendo Wii y televisión de pantalla de plasma? Ordenadores, teléfonos móviles, GPS, walkman, televisiones, lavadoras, tostadores, aspiradores y un larguísimo etcétera. Todos usamos aparatos eléctricos que tarde o temprano se convertirán en residuos. El Hombre Electrónico que aparece en la foto de más abajo mide 7 metros de altura y pesa 3,3 toneladas. Es una escultura hecha con la cantidad de residuos eléctricos y electrónicos que un ciudadano medio (en el Reino Unido) tirará a la basura a lo largo de su vida, si se siguen consumiendo este tipo de productos al ritmo actual. El Hombre Electrónico ha sido diseñado por el escultor Paúl Bomini con objeto de aumentar la conciencia de los ciudadanos a la hora de consumir aparatos eléctricos. Esta campaña parte de la base de que todos compramos aparatos electrónicos como herramientas de trabajo u ocio, pero preguntándonos unas cuantas preguntas podemos inducir cambios en nuestro comportamiento que beneficiarán al medio ambiente, otras personas y a nosotros mismos:¿Tienes algún aparato eléctrico o electrónico que no necesitas?¿Podrías ser más responsable a la hora de comprar un nuevo producto electrónico?¿Podrías reciclar o reparar estos productos una vez que se han quedado obsoletos o se han roto? ¿Intentas ahorrar energía en tu vida diaria? \n\n Considerando a necessidade de assumir uma conduta mais responsável com o meio ambiente. Paul Bomini criou a escultura O homem eletrônico para',

    resolution: 'Considerando a necessidade de assumir uma conduta mais responsável com o meio ambiente. Paul Bomini criou a escultura O homem eletrônico a fim de problematizar o descarte de inconsequente de equipamentos. Essa afirmação pode ser justificada a partir do seguinte excerto do texto: “El Hombre Electrónico ha sido diseñado por el escultor Paúl Bomini con objeto de aumentar la conciencia de los ciudadanos a la hora de consumir aparatos eléctricos.”',
    answers: [
      { text: 'Incentivar inovações em reciclagem para a construção de máquinas.', correct: false },
      { text: 'propor a criação de objetos a partir de aparelhos descartados.', correct: false },
      { text: 'divulgar o lançamento de eletrônicos sustentáveis.', correct: false },
      { text: 'problematizar o descarte de inconsequente de equipamentos.', correct: true },
      { text: 'alertar sobre as escolhas tecnológicas da população.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2018) \n\n ¿Como gestionar la diversidad lingüística en el aula? \n\n El aprendizaje de idiomas es una de las demandas de la sociedad en la escuela: los alumnos tienen que finalizar la escolarización con un buen conocimiento, por lo menos, de las tres lenguas curriculares: catalán, castellano e inglés (o francés. portugués...). \n\n       La metodología que promueve el aprendizaje integrado de idiomas en la escuela tiene en cuenta las relaciones entre las diferentes lenguas: la mejor enseñanza de una lengua incide en Ia mejora de todas las demás. Se trate de educar en y para la diversidad lingüística y cultural. \n\n       Por eso, la V Jornada de Buenas Prácticas de Gestión del Multilingüismo, que se celebrará en Barcelona, debatirá sobre la gestión del multilingüismo en el aula. El objetivo es difundir propuestas para el aprendizaje integrado de idiomas y presentar experiencias prácticas de gestión de Ia diversidad lingüística presente en las aulas. \n\n\n Na região da Catalunha, Espanha, convivem duas línguas oficiais: o catalão e o espanhol. Além dessas, ensinam-se outras línguas nas escolas. De acordo com o texto, para administrar a variedade linguística nas aulas, é necessário',

    resolution: 'Para administrar a variedade linguística nas aulas, é necessário, de acordo com o texto, explorar as relações entre as línguas estudadas para promover a diversidade (alternativa D). No segundo parágrafo, afirma-se que a metodologia que promove a aprendizagem integrada de idiomas leva em conta as relações entre as diferentes línguas: “La metodologia que promueve el aprendizaje integrado de idiomas en la escuela tiene en cuenta relaciones entre las diferentes lenguas (…) Se trata de educar en y para la diversidad lingüística y cultural”.',
    answers: [
      { text: 'ampliar o número de línguas ofertadas para enriquecer o conteúdo.', correct: false },
      { text: 'divulgar o estudo de diferentes idiomas e culturas para atrair os estudantes.', correct: false },
      { text: 'privilegiar o estudo de línguas maternas para valorizar os aspectos regionais.', correct: false },
      { text: 'explorar as relações entre as línguas estudadas para promover a diversidade.', correct: true },
      { text: 'debater as práticas sobre multilinguismo para formar melhor os professores de línguas.', correct: false },
    ]
  },

  {
    question: '(ENEM - 2018) \n\n Revolución en la arquitectura China \n\n Un rascacielos de 57 pisos no llama la atención en la China del siglo XXI. Salvo que se haya construido en 19 días, claro. Y eso es precisamente lo que ha conseguido Broad Sustainable Building (BSB), una empresa dedicada a la fabricación de purificadores de aire y de equipos de aire acondicionado para grandes infraestructuras que ahora se ha empeñado en liderar una revolución con su propio modelo de arquitectura modular prefabricada. Como subraya su presidente, Zhang Yue, es una fórmula económica, ecológica, segura, y limpia. Ese último término, además, lo utiliza tanto para referirse al polvo que se produce en la construcción como a los gruesos sobres que suelen circular por debajo de las mesas en adjudicaciones y permisos varios. “Quiero que nuestros edificios alumbren una nueva era en la arquitectura, y que se conviertan en símbolo de la lucha contra la contaminación y el cambio climático, que es la mayor amenaza a la que se enfrenta la humanidad”, sentencia. \n\n “Es como montar un Lego. Apenas hay subcontratación, lo cual ayuda a mantener un costo bayo y un control de calidad estricto, y nos permite eliminar también la corrupción inherente al sector”, explica la vicepresidenta de BSB y responsable del mercado Internacional, Jiang Yan. \n\n\n No texto, alguns dos benefícios de se utilizar estruturas pré-moldadas na construção de altos edifícios estão expressos por meio da palavra limpia. Essa expressão indica que, além de produzir menos resíduos, o uso desse tipo de estrutura',

    resolution: 'A palavra limpia, no texto, indica que o uso das estruturas pré-moldadas na construção dos edifícios inibe a corrupção na construção civil. O fragmento a seguir pode exemplificar essa afirmação: “(…) es una fórmula económica, ecológica, segura, y limpia. Ese último término, además, lo utiliza tanto para referirse al polvo que se produce en la construcción como a los gruesos sobres que suelen circular por debajo de las mesas en adjudicaciones y permisos varios. \n\n Atenção para a palavra sobre significa “envelope”; “sobre gruesos”, portanto, são “envelopes grossos”. Segundo o texto, circulam por debaixo das mesas envelopes grossos – dando a entender que ao tratar das autorizações (permisos), há dinheiro de corrupção.”',
    answers: [
      { text: 'reduz o contingente de mão de obra', correct: false },
      { text: 'inibe a corrupção na construção civil.', correct: true },
      { text: 'facilita o controle da qualidade da obra.', correct: false },
      { text: 'apresenta um modelo arquitetônico conciso.', correct: false },
      { text: 'otimiza os custos da construção de edifício.', correct: false },
    ]
  },






















  
]
