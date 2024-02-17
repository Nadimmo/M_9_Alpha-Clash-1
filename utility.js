
function  hiddenElementId(elementID){
    const element = document.getElementById(elementID);
    element.classList.add('hidden');
}

function showElementId(elementID){
    const element = document.getElementById(elementID);
    element.classList.remove('hidden');
}

function setElementTextColor(elementID){
    const element = document.getElementById(elementID);
    element.classList.add('bg-orange-500');
}
function removeElementTextColor(elementID){
    const element = document.getElementById(elementID);
    element.classList.remove('bg-orange-500')
}
function setElementByID(elementID){
    const element = document.getElementById(elementID);
   let text = element.innerText.toLowerCase();
   return text
}
function setTextElementValueByID(elementID, value){
    const element = document.getElementById(elementID);
    element.innerText = value;
}


// function getValuebyID(elementID){
//     const currentScore = document.getElementById(elementID);
//     const currentScoreValue = parseInt(currentScore.innerText);
//     let newScore = currentScoreValue + 1;
//     currentScore.innerText = newScore;
// }
// function getValuebyID2(elementID){
//     const currentScore = document.getElementById(elementID);
//     const currentScoreValue = parseInt(currentScore.innerText);
//     let newScore = currentScoreValue - 1;
//     currentScore.innerText = newScore;
// }

// create randomly array for alphabet
function alphabetString(){
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const letter = alphabets.split('');
    
    // randomly index for letter
    const randomAlphabetIndex = Math.round(Math.random() * 25);
    const result = letter[randomAlphabetIndex];
    return result;
}
