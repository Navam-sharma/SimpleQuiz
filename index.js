const quizData = [

    {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: [
          "<a>",
          "<link>",
          "<href>",
          "<url>",
        ],
        correct: 0,
      },
      
      {
        question: "What is the purpose of the 'alt' attribute in an HTML image tag?",
        options: [
          "To specify the image source",
          "To provide alternative text for the image",
          "To set the image width and height",
          "To style the image using CSS",
        ],
        correct: 1,
      }
      ,
    {
    
        question: "What does HTML stand for?",
        
        options: [
        
        "Hypertext Markup Language",
        
        "Hyper Transfer Markup Language",
        
        "Hypertext Machine Language",
        
        "Hyperlink and Text Markup Language",
        
        ],
        
        correct: 0,
        
        },
      {
  question: "What is the purpose of the JavaScript 'querySelector' method?",
  options: [
    "To select and manipulate HTML elements",
    "To query a database",
    "To create dynamic CSS styles",
    "To handle form submissions",
  ],
  correct: 0,
}
        ,
            {
                question: "Which of the following is not a valid HTML element?",
                options: [
                  "<div>",
                  "<span>",
                  "<section>",
                  "<paragraph>",
                ],
                correct: 3,
              }
              
        ];
const quiz= document.querySelector('#quiz');
const scores= document.querySelector('.scores');

const ansele= document.querySelectorAll(".answer");
const [quesele,option_1, option_2, option_3,option_4 ] = 
    document.querySelectorAll(
    "#ques, #option_1, #option_2, #option_3, #option_4");
const submitBtn = document.querySelector("#submit");
let currentquiz= 0;
let score=0;

//now  add the above array ques ans to html pg
const loadQuiz = ()=>{
    const {question,options}= quizData[currentquiz] ;
    console.log(question);
   // quesele.innerText= question;
    quesele.innerText=`${currentquiz+1} : ${question}` ; //ques number bhi dikhane ke liyo
// score bhi dikhane ke liye
 scores.innerText=`${score}/${quizData.length} `;

options.forEach(
    (currOption,index)=>(window[`option_${index+1}`].innerText=currOption)
);

};
loadQuiz();

const deselectPreviousOption =()=>{
ansele.forEach((currele)=> currele.checked = false);
};
//get selected answer on clicking submit button
const getSelectedOption = ()=>{
    let ans_index;
    ansele.forEach((currOption,index)=>{ //ansele me har option ka data hoga jisko chuna uski value=1 , bakiyo ki =0
        if(currOption.checked){
            ans_index= index;
        }
    });
    return ans_index;
    //let se return ki bajae hm sirf niche ki line b likh skte h
    //let anselement= Array.from(ansele)
    //return anselement.findIndex((currelem,index) => currelem.checked);
};

submitBtn.addEventListener('click',()=>{
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    //ab ek ques submit krene ke bad next ques show krne ke liye:
    if(selectedOptionIndex=== quizData[currentquiz].correct){
     // correct:0 variable hai jo sbse phle array me object me use kiya
    score++;
    }
    currentquiz++;
    if(currentquiz < quizData.length){
        deselectPreviousOption();
        loadQuiz();
    }
    else{
        //else jb chlega jb sare questions khatam ho jaenge

            quiz.innerHTML =`
            
            <div class="result">
            
            <h2> Your Score: ${score}/${quizData.length} Correct Answers</h2>
            
            <p>Congratulations on completing the quiz! </p>
            
            <button class="reload-button" onclick="location.reload()">Play Again</button>
            
            </div>`;
    };
});