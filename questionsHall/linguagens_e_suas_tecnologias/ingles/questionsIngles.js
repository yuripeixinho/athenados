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
    question: '(ENEM - 2020) \n\n Finally, Aisha finished with her customer and asked what colour Ifemelu wanted for her hair attachments. \n  "Colour four. \n "Not good colour," Aisha said promptly. \n "Thats what I use."  \n "It look dirty. You dont want colour one?"  \n "Colour one is too black, it looks fake," Ifemelu said, loosening her heardwrap. "Sometimes I use colour two, but colour four is closest to my natural colour."  \n [...]  \n She touched Ifemelus hair. "Why you dont have relaxer?" \n "I like my hair the way God made it." \n  "But how you comb it? Hard to comb," Aisha said. \n Ifemelu had brought her own comb. She gently combed her hair, dense, soft and tightly coiled, until it framed her head like a halo. "Its not hard to comb if you moisturize it properly," she said, slipping into the coaxing tone of the proselytizer that she used whenever she was trying to convince other black women about the merits of wearing their hair natural. Aisha snorted; she clearly could not understand why anybody would choose to suffer through combing natural hair, instead of simply relaxing it. She sectioned out Ifemelus hair, plucked a little attachment from the pile on the table and began deftly to twist. \n\n\n A passagem do romance da escritora nigeriana traz um diálogo entre duas mulheres negras: a cabelereira, Aisha, e a cliente, Ifemelu. O posicionamento da cliente é sustentado por argumentos que',

    resolution: 'já que Ifemelu demonstra uma atitude de resistência aos padrões impostos às mulheres negras ao usar seu cabelo da forma natural e preferir cores que combinam com a cor natural, ao invés de recorrer a métodos que apagam e padronizam os cabelos negros, como o relaxamento ou a utilização de apliques totalmente pretos, como se o cabelo crespo não variasse de tonalidade.',
    answers: [
      { text: 'reforçam um padrão de beleza.', correct: false },
      { text: 'retratam um conflito de gerações.', correct: false },
      { text: 'revelam uma atitude de resistência.', correct: true },
      { text: 'demonstram uma postura de imaturidade.', correct: false },
      { text: 'evidenciam uma mudança de comportamento.', correct: false },
    ]
  },



  {
    question: '(ENEM - 2019) A pet is certainly a great friend. After a difficult day, pet owners quite literally feel the love. \n     In fact, for nearly 25 years, research has shown that living with pets provides certain health benefits. Pets help lower blood pressure and lessen anxiety. They boost our immunity. They can even help you get dates. \n     Allergy Fighters: A growing number of studies have suggested that kids growing up in a home with “furred animals” will have less risk of allergies and asthma. \n     Date Magnets: Dogs are great for making love connections. Forget internet matchmaking - a dog is a natural conversation starter. \n     Dogs for the Aged: Walking a dog or just caring for a pet - for elderly people who are able - can provide exercise and companionship. \n     Good for Mind and Soul: Like any enjoyable activity, playing with a dog can elevate levels of serotonin and dopamine - nerve transmitters that are known to have pleasurable and calming properties. \n     Good for the Heart: Heart attack patients who have pets survive longer than those without, according to several studies.',

    resolution: 'O uso de expressões como "research, a growing number of research e several studies" (pesquisa, um número crescente de pesquisas e diversos estudos) é uma estratégia argumentativa da autora para convencer seu leitor dos benefícios (cientificamente comprovados) da convivência com os pets. Logo, a afirmativa B "convencer sobre os benefícios da adoção de animais de estimação para a saúde." está correta, invalidando as demais.',
    answers: [
      { text: 'reforçam um padrão de beleza.', correct: false },
      { text: 'retratam um conflito de gerações.', correct: true },
      { text: 'revelam uma atitude de resistência.', correct: false },
      { text: 'demonstram uma postura de imaturidade.', correct: false },
      { text: 'evidenciam uma mudança de comportamento.', correct: false },
    ]
  },


  {
    question: '(ENEM - 2019) In his recent piece “Is obesity a disease?” (Web, June 19), Dr. Peter Lind refers to high-fructose corn syrup and other “manufactured sugars” as “poison” that will “guarantee storage of fat in the body.”  \n  Current scientific research strongly indicates that obesity results from excessive calorie intake combined with a sedentary lifestyle. The fact is, Americans are consuming more total calories now than ever before. According to the U.S. Department of Agriculture, our total per-capita daily caloric intake increased by 22 percent from 2,076 calories per day in 1970 to 2,534 calories per day in 2010 — an additional 458 calories, only 34 of which come from increased added sugar intake. A vast majority of these calories come from increased fats and flour/cereals. \n  Surprisingly, the amount of caloric sweeteners (i.e. sugar, high-fructose corn syrup, honey, etc.) Americans consume has actually decreased over the past decade.  \n   We need to continue to study the obesity epidemic to see what more can be done, but demonizing one specific ingredient accomplishes nothing and raises unnecessary fears that get in the way of real solutions. \n\n\n Ao abordar o assunto “obesidade”, em uma seção de jornal, o autor    ',

    resolution: 'Na frase "We need to continue to study the obesity epidemic to see what more can be done," ("precisamos continuar estudando a epidemia da obesidade para descobrir o que mais pode ser feito")  revela o posicionamento do autor de que é necessário seguir pesquisando sobre o tema tratado no artigo.',
    answers: [
      { text: 'defende o consumo liberado de açúcar.', correct: false },
      { text: 'aponta a gordura como o grande vilão da saúde.', correct: false },
      { text: 'demonstra acreditar que a obesidade não é preocupante.', correct: false },
      { text: 'indica a necessidade de mais pesquisas sobre o assunto.', correct: true },
      { text: 'enfatiza a redução de ingestão de calorias pelos americanos.', correct: false },
    ]
  },





  {
    question: '(ENEM - 2019) Lava Mae: Creating Showers on Wheels for the Homeless \n  San Francisco, according to recent city numbers, has 4,300 people living on the streets. Among the many problems the homeless face is little or no access to showers. San Francisco only has about 16 to 20 shower stalls to accommodate them. \n But Doniece Sandoval has made it her mission to change that. The 51-year-old former marketing executive started Lava Mae, a sort of showers on wheels, a new project that aims to turn decommissioned city buses into shower stations for the homeless. Each bus will have two shower stations and Sandoval expects that theyll be able to provide 2,000 showers a week. \n\n\n A relação dos vocábulos shower, bus e homeless, no texto, refere-se a',

    resolution: 'showers = chuveiros / buses = ônibus / homeless = desabrigados \n\n *wheels = rodas \n\n  *to aim = visar \n\n  No texto, a relação dos vocábulos shower, bus e homeless se refere à criação de acesso a banhos gratuitos para moradores em situação de rua.',
    answers: [
      { text: 'empregar moradores de rua em lava a jatos para ônibus.', correct: false },
      { text: 'criar acesso a banhos gratuitos para moradores de rua', correct: true },
      { text: 'comissionar sem-teto para dirigir os ônibus da cidade.', correct: false },
      { text: 'exigir das autoridades que os ônibus municipais tenham banheiros.', correct: false },
      { text: 'abrigar dois mil moradores de rua em ônibus que foram adaptados.', correct: false },
    ]
  },


  {
    question: '(ENEM - 2018) \n\n TEXTO I \n\n\n  A Free World-class Education for Anyone Anywhere \n\n  The Khan Academy is an organization on a mission. Were a not-for-profit with the goal of changing education for the better by providing a free education to anyone anywhere. All of the sites resources are available to anyone. The Khan Academys materials and resources are available to you completely free of charge.  \n\n  TEXTO II \n\n\n I didnt have a problem with Khan Academy Site until very recently. For me, the problem is the way Academy is being promoted. The way the media sees it as revolutionizing education". The way people with power and money view education as simply "sit-and-get". If your philosophy of education is "sit-and-get", i.e., teaching is telling and learning is listening, then Khan Academy is way more efficient than classroom lecturing. Khan Academy does it better. But TRUE progressive educators, TRUE education visionaries and revolutionaries dont want to do these things better. We want to DO BETTER THINGS. \n\n\n Com o impacto das tecnologias e a ampliação das redes sociais, consumidores encontram na internet possibilidades de opinar sobre serviços oferecidos. Nesse sentido, o segundo texto, que é um comentário sobre o site divulgado no primeiro, apresenta a intenção do autor de',

    resolution: 'O segundo texto revela a intenção do autor de criticar o conceito de educação em que se baseia o instituto, expressa no seguinte trecho: "If your philosophy of education is “sit-and-get”, i.e., teaching is telling and learning is listening, then Khan Academy is way more efficient than classroom lecturing. Khan Academy does it better. But TRUE progressive educators, TRUE education visionaries and revolutionaries don‘t want to do these things better. We want to DO BETTER THINGS.”.',
    answers: [
      { text: 'elogiar o trabalho proposto para a educação nessa era tecnológica.', correct: false },
      { text: 'reforçar como a mídia pode contribuir para revolucionar a educação.', correct: false },
      { text: 'chamar a atenção das pessoas influentes para o significado da educação.', correct: false },
      { text: 'destacar que o site tem melhores resultados do que a educação tradicional.', correct: false },
      { text: 'criticar a concepção de educação em que se baseia a organização.', correct: true },
    ]
  },


  {
    question: '(ENEM - 2018) Israel Travel Guide \n\n\n Israel has always been a standout destination. From the days of prophets to the modern day nomad this tiny slice of land on the eastern Mediteranean has long attracted visitors. While some arrive in the ‘Holy Land’ on a spiritual quest, many others are on cultural tours, beach holidays and eco-tourism trips. Weeding through Israel’s convoluted history is both exhilarating and exhausting. There are crumbling temples, ruined cities, abandoned forts and hundreds of places associated with the Bible. And while a sense of adventure is required, most sites are safe and easily accessible. Most of all, Israel is about its incredible diverse population. Jews come from all over the world to live here, while about 20% of the population is Muslim. Politics are hard to get away from in Israel as everyone has an opinion on how to move the country forward – with a ready ear you’re sure to hear opinions from every side of the political spectrum. \n\n\n Antes de viajar, turistas geralmente buscam informações sobre o local para onde pretendem ir. O trecho do guia de viagens de Israel.',

    resolution: 'O trecho do guia de viagens cita aspectos gerais da cultura israelense para continuar a atrair turistas estrangeiros. Alguns aspectos mencionados foram a geografia do local, a busca por locais e monumentos religiosos, o ecoturismo e a diversidade da população.',
    answers: [
      { text: 'descreve a história desse local para que turistas valorizem seus costumes milenares.', correct: false },
      { text: 'informa hábitos religiosos para auxiliar turistas a entenderem as diferenças culturais.', correct: false },
      { text: 'divulga os principais pontos turísticos para ajudar turistas a planejarem sua viagem.', correct: false },
      { text: 'recomenda medidas de segurança para alertar turistas sobre possíveis riscos locais.', correct: false },
      { text: 'apresenta aspectos gerais da cultura do país para continuar a atrair turistas estrangeiros.', correct: true },
    ]
  },


  {
    question: '(ENEM - 2017) \n\n Letters \n\n\n  I find it abhorrent that the people of Burkesville, Ky., are not willing to learn a lesson from the tragic shooting of a 2-year-old girl by her 5-year-old brother. I am not judging their lifestyle of introducing guns to children at a young age, but I do feel that it’s irresponsible not to practice basic safety with anything potentially lethal – guns, knives, fire and so on. How can anyone justify leaving guns lying around, unlocked and possibly loaded, in a home with two young children? I wish the family of the victim comfort during this difficult time, but to dismiss this as a simple accident leaves open the potential for many more such “accidents” to occur. I hope this doesn’t have to happen several more times for legislators to realize that something needs to be changed. \n\n\n No que diz respeito à tragédia ocorrida em Burkesville, a autora da carta enviada ao The New York Times busca',

    resolution: 'Ao tratar da tragédia ocorrida em Burkesville, a autora da carta procura expor sua indignação com relação à negligência de portadores de armas. Observe o trecho: "[...] but I do feel that it’s irresponsible not to practice basic safety with anything potentially lethal – guns, knives, fire and so on. How can anyone justify leaving guns lying around, unlocked and possibly loaded, in a home with two young children?"',
    answers: [
      { text: 'reconhecer o acidente noticiado como um fato isolado', correct: false },
      { text: 'responsabilizar o irmão da vítima pelo incidente ocorrido', correct: false },
      { text: 'apresentar versão diferente da notícia publicada pelo jornal', correct: false },
      { text: 'expor sua indignação com a negligência de portadores de armas      ', correct: true },
      { text: 'reforçar a necessidade de proibição do uso de armas por crianças', correct: false },
    ]
  },


  {
    question: '(ENEM - 2017) \n\n One of the things that made an incredible impression on me in the film was Frida’s comfort in and celebration of her own unique beauty. She didn’t try to fit into conventional ideas or images about womanhood or what makes someone or something beautiful. Instead, she fully inhabited her own unique gifts, not particularly caring what other people thought. She was magnetic and beautiful in her own right. She painted for years, not to be a commercial success or to be discovered, but to express her own inner pain, joy, family, love and culture. She absolutely and resolutely was who she was. The trueness of her own unique vision and her ability to stand firmly in her own truth was what made her successful in the end. \n\n\n A autora desse comentário sobre o filme Frida mostra-se impressionada com o fato de a pintora',

    resolution: 'A autora do comentário se mostra impressionada com o fato de Frida Kahlo assumir sua beleza singular. Veja o seguinte trecho: "One of the things ‘that made an incredible impression on me in the film was Frida’s comfort in and celebration of her own unique beauty."',
    answers: [
      { text: 'ter uma aparência exótica.', correct: false },
      { text: 'vender bem a sua imagem.', correct: false },
      { text: 'ter grande poder de sedução.', correct: false },
      { text: 'assumir sua beleza singular.', correct: true },
      { text: 'recriar-se por meio da pintura.', correct: false },
    ]
  },
















  
]
