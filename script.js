const quiz=[
    {
        Question:"Whats HTML Stand For?",
        anwser1text:"Hyper text Markup Language",
        anwser2text:"Cascading Style Sheet",
        anwser3text:"PHP My Admin",
        anwser4text:"High Text Machine language",
        correctanwser:"Hyper text Markup Language"
    },
    {
        Question:"Choose Programming language?",
        anwser1text:"HTML",
        anwser2text:"CSS",
        anwser3text:"Bootstrap",
        anwser4text:"Javascript",
        correctanwser:"Javascript"
    },
    {
        Question:"Which tag is Used For Break?",
        anwser1text:"break",
        anwser2text:"hr",
        anwser3text:"br",
        anwser4text:"b",
        correctanwser:"br"
    },
    {
        Question:"Which Language is server side scripting langugae?",
        anwser1text:"HTML",
        anwser2text:"CSS",
        anwser3text:"Bootstrap",
        anwser4text:"PHP",
        correctanwser:"PHP"
    },
];




let quizQuestion=document.getElementById("quizQuestion");
let Questionanswer1=document.getElementById("answerA");
let Questionanswer2=document.getElementById("answerB");
let Questionanswer3=document.getElementById("answerC");
let Questionanswer4=document.getElementById("answerD");
let answerElement=document.querySelectorAll(".answer");
let currentQuestion=0;
let score=0;
quizQuestion.innerHTML=quiz[currentQuestion].Question;
Questionanswer1.innerHTML=quiz[currentQuestion].anwser1text;
Questionanswer2.innerHTML=quiz[currentQuestion].anwser2text;
Questionanswer3.innerHTML=quiz[currentQuestion].anwser3text;
Questionanswer4.innerHTML=quiz[currentQuestion].anwser4text;
let submitButton=document.getElementById("quizSubmitButton");
submitButton.addEventListener("click",function(){
    const checkedAnswer=document.querySelector('input[type="radio"]:checked');
    
    console.log(checkedAnswer);

    if(checkedAnswer==null){
        alert("Kindly Choose The Option");
    }
    else{

        if(checkedAnswer.nextElementSibling.innerHTML===quiz[currentQuestion].correctanwser){
            score++;

        }
        
            checkedAnswer.checked=false;
            currentQuestion++;
        if(currentQuestion<quiz.length){
            quizQuestion.innerHTML=quiz[currentQuestion].Question;
Questionanswer1.innerHTML=quiz[currentQuestion].anwser1text;
Questionanswer2.innerHTML=quiz[currentQuestion].anwser2text;
Questionanswer3.innerHTML=quiz[currentQuestion].anwser3text;
Questionanswer4.innerHTML=quiz[currentQuestion].anwser4text;

        }
        else{
            alert(`Your Score ${score} out of ${quiz.length}`);
            location.reload();
        }
    }
});