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
    question: '(ENEM - 2019) A pet is certainly a great friend. After a difficult day, pet owners quite literally feel the love. \n     In fact, for nearly 25 years, research has shown that living with pets provides certain health benefits. Pets help lower blood pressure and lessen anxiety. They boost our immunity. They can even help you get dates. \n     Allergy Fighters: A growing number of studies have suggested that kids growing up in a home with “furred animals” will have less risk of allergies and asthma. \n     Date Magnets: Dogs are great for making love connections. Forget internet matchmaking - a dog is a natural conversation starter. \n     Dogs for the Aged: Walking a dog or just caring for a pet - for elderly people who are able - can provide exercise and companionship. \n     Good for Mind and Soul: Like any enjoyable activity, playing with a dog can elevate levels of serotonin and dopamine - nerve transmitters that are known to have pleasurable and calming properties. \n     Good for the Heart: Heart attack patients who have pets survive longer than those without, according to several studies. \n\n\n Ao discutir sobre a influência de animais de estimação no bem-estar do ser humano, a autora, a fim de fortalecer seus argumentos, utiliza palavras e expressões como research, a growing number of research e several studies com o objetivo de',

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
    question: '(ENEM - 2019)  Sitting on a park bench \n  Thinking about a friend of mine \n He was only twenty-three  \n  Gone before he had his time  \n  It came without a warning  \n  Didn’t want his friend to see him cry  \n   he knew the day was dawning  \n  And I didn’t have a chance to say goodbye   \n\n\n A canção, muitas vezes, é uma forma de manifestar sentimentos e emoções da vida cotidiana. Por exemplo, o sofrimento retratado nessa canção foi causado:',

    resolution: 'Os versos de Madonna "Thinking about a friend of mine/ He was only twenty-three/ Gone before he had his time" (Pensando em um amigo meu/ Ele tinha apenas vinte e três/ Foi-se antes de ter seu tempo) revela que a morte precoce de um amigo do eu lirico é o motivo das emoções expressas na canção. Logo, a afirmativa A "pela morte precoce de um amigo jovem." responde à questão, invalidando as demais.',
    answers: [
      { text: 'pela morte precoce de um amigo jovem.', correct: true },
      { text: 'pelo término de um relacionamento amoroso.', correct: false },
      { text: 'pela mudança de um amigo para outro país.', correct: false },
      { text: 'pelo fim de uma amizade de mais de vinte anos.', correct: false },
      { text: 'pela traição por parte de pessoa próxima.', correct: false },
    ]
  },



  {
    question: '(ENEM - 2019) Lava Mae: Creating Showers on Wheels for the Homeless \n    ',

    resolution: 'Os versos de Madonna "Thinking about a friend of mine/ He was only twenty-three/ Gone before he had his time" (Pensando em um amigo meu/ Ele tinha apenas vinte e três/ Foi-se antes de ter seu tempo) revela que a morte precoce de um amigo do eu lirico é o motivo das emoções expressas na canção. Logo, a afirmativa A "pela morte precoce de um amigo jovem." responde à questão, invalidando as demais.',
    answers: [
      { text: 'pela morte precoce de um amigo jovem.', correct: true },
      { text: 'pelo término de um relacionamento amoroso.', correct: false },
      { text: 'pela mudança de um amigo para outro país.', correct: false },
      { text: 'pelo fim de uma amizade de mais de vinte anos.', correct: false },
      { text: 'pela traição por parte de pessoa próxima.', correct: false },
    ]
  },




























  
]
