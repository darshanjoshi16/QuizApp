const quizData = [  
  {  
   question: "(1). 'Defender of the Himalayas' is a known alias for which person?",  
   a: "Madam Bhikhaiji Kama",  
   b: "Shyama Prasad Mukharji",  
   c: "Sundarlal Bahuguna",  
   d: "Birsa Munda",  
   correct: "c",  
  },  
  {  
   question: "(2). Which of the following two District of Madhya Pradesh borders Gujarat state?",  
   a: "Alirajpur and Jhabua",  
   b: "Ratlam and Dhar",  
   c: "Jhabua and Barwani",  
   d: "Barwani and Alirajpur",  
   correct: "a",  
  },  
  {  
   question: "(3). What does HTML stand for?",  
   a: "Hypertext Markup Language",  
   b: "Hypertext Markdown Language",  
   c: "Hyperloop Machine Language",  
   d: "Helicopters Terminals Motorboats Lamborginis",  
   correct: "a",  
  },  
  {  
   question: "(4). India’s first Dragonfly fossil was found in which state?",  
   a: "Uttar Pradesh",  
   b: "Andaman and Nicobar",  
   c: "Jharkhand",  
   d: "none of the above",  
   correct: "c",  
  }, 
  {
    question: "(5). Which Of The Following Briefly Describes The Desert Climate?",  
   a: "Hot and Humid",  
   b: "Dry and Humid",  
   c: "Hot and Dry",  
   d: "none of the above",  
   correct: "c",
  } 
 ];  
 const quiz = document.getElementById("Quiz");  
 const answerElements = document.querySelectorAll(".answer");  
 const questionElement = document.getElementById("Question");  
 const a_text = document.getElementById("a_txt");  
 const b_text = document.getElementById("b_txt");  
 const c_text = document.getElementById("c_txt");  
 const d_text = document.getElementById("d_txt");  
 const submitButton = document.getElementById("Submit");  
 let currentQuiz = 0;  
 let score = 0;  
 const deselectAnswers = () => {  
  answerElements.forEach((answer) => (answer.checked = false));  
 };  
 const getSelected = () => {  
  let answer;  
  answerElements.forEach((answerElement) => {  
   if (answerElement.checked) answer = answerElement.id;  
  });  
  return answer;  
 };  
 const loadQuiz = () => {  
  deselectAnswers();  
  const currentQuizData = quizData[currentQuiz];  
  questionElement.innerText = currentQuizData.question;  
  a_text.innerText = currentQuizData.a;  
  b_text.innerText = currentQuizData.b;  
  c_text.innerText = currentQuizData.c;  
  d_text.innerText = currentQuizData.d;  
 };  
 loadQuiz();  
 submitButton.addEventListener("click", () => {  
  const answer = getSelected();  
  if (answer) {  
   if (answer === quizData[currentQuiz].correct) score++;  
   currentQuiz++;  
   if (currentQuiz < quizData.length) loadQuiz();  
   else {  
    quiz.innerHTML = `  
       <h2>You answered ${score}/${quizData.length} questions correctly</h2>  
       <button onclick="history.go(0)">Play Again</button>  
     ` // location.reload() won't work in CodePen for security reasons;  
   }  
  }  
 }); 
