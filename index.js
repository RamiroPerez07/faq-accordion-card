const qContainer = document.getElementById("q-container")


function showOrHideAnswer(event){
    const btnShowAnswer = event.target;
    const qField = btnShowAnswer.parentElement;
    if (!qField.classList.contains("q-field")) return
    if (!(btnShowAnswer.classList.contains("question") || btnShowAnswer.classList.contains("arrow"))) return
    const answer = qField.querySelector(".answer");
    answer.classList.toggle("show");
    const arrow = qField.querySelector(".arrow");
    arrow.classList.toggle("spin")
    const question = qField.querySelector(".question");
    question.classList.toggle("selected-question")
}


function init(){
    qContainer.addEventListener("click", showOrHideAnswer)
}  

init()