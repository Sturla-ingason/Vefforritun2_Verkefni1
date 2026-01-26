/* útfæra */

const correctElement = document.querySelector('.counter .correct');
const incorrectElement = document.querySelector('.counter .incorrect');

if(!correctElement || !incorrectElement){
    console.log("unable to find element");
}

function questionAnswerListener(e){
    const button = e.target;

    const isCorrect = button.classList.contains('button-correct')
    const isIncorrect = button.classList.contains('button-incorrect');

    const parentQuestion = button.closest('.question');

    console.log(parentQuestion)

    //Erorr handeling
    if(!correctElement){
        throw new Error("missing current element")
    }

    //updating the correct counter.
    if(isCorrect){
        const currentCorrectText = correctElement.textContent;

        const currentCorrect = Number.parseInt(currentCorrectText ?? '0');

        const updatedCorrect = currentCorrect + 1;

        correctElement.textContent = updatedCorrect.toString();
    }

    if(!incorrectElement){
        throw new Error("missing current element")
    }

    if(isIncorrect){
        const currentCorrectText = incorrectElement.textContent;

        const currentIncorrect = Number.parseInt(currentCorrectText ?? '0');

        const updatedIncorrect = currentIncorrect + 1;

        incorrectElement.textContent = updatedIncorrect.toString()
    }

};

const buttons = document.querySelectorAll('button');

for(const button of buttons){
    button.addEventListener('click', questionAnswerListener)
}