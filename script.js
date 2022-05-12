(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "What education level is suitable for a person who uses social media？",
      answers: {
        a: "Undergraduate",
        b: "Graduate",
        c: "PhD",
        d: "as long as they can read"
      },
      correctAnswer: "d"
    },
    {
      question: "How many children should a person who is capable of using social media have?",
      answers: {
        a: "None",
        b: " 1. Stick to the one-child policy ",
        c: "2. If the first one is a girl",
        d: "Respond to the national call, 3 kids"
        
      },
      correctAnswer: "d"
    },
    {
      question: "How do you behave when you see topics on social media about 'Feminism' and its related topics?",
      answers: {
        a: "Repost and write something about them",
        b: "Click like and save",
        c: "Remain silence",
        d: "Report 'Feminism' as hostile foreign forces"
      },
      correctAnswer: "d"
    },
    {
    question: "What is the best way to solve the problem of non-marriage and infertility among people of marriageable age from social media?",
    answers: {
      a: "Give money",
      b: "More publicity about happy family with kids",
      c: "Reduced news coverage of independent women. Young women should spend less time on social media talking about 'Feminism' and 'reproductive rights'",
      d: "Educate the parents "
    },
    correctAnswer: "c"
  },
  {
    question: "What should you do when you see someone's IP is from another country?",
    answers: {
      a: "Tell them to come back to their motherland and be a good person again",
      b: "Track the IP address and expose them",
      c: "Report hostile foreign forces",
      d: "Ask them about how to Immigrate/Study Abroad"
    },
    correctAnswer: "c"
  },
  {
    question: "What should you post to become a user with good credit?",
    answers: {
      a: "Daily life",
      b: "Feminism and women's right",
      c: "Core Socialist Values and showing faith with your country",
      d: "Star Wars"
    },
    correctAnswer: "c"
  },
  {
    question: "Which of the words listed below is banned on social media?",
    answers: {
      a: "Kill and Die",
      b: "Sex",
      c: "Night Club",
      d: "all of them"
    },
    correctAnswer: "d"
  },
  {
    question: "What do you think of this Social Media Code of Conduct?",
    answers: {
      a: "Good",
      b: "Excellent",
      c: "Useful",
      d: "all of them"
    },
    correctAnswer: "d"
  },


  ];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();