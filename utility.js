function hiddenElementId(id){
    let element = document.getElementById(id);
    element.classList.add('hidden')
}

function showElementId(id){
    let element = document.getElementById(id);
    element.classList.remove('hidden')
}

// function alphabetString(){
//     let words = 'abcdefghijklmnopqrstuvwxyz';
//     let letters = words.split('');
//     // console.log(letters)

//     let randomalphabet = Math.random()*25;
//     let index = Math.round(randomalphabet);
    

//     const letter = letters[index];
//     // console.log(index, letter);
//     return letter;
// }

function alphabetString(){
    let alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let letter = alphabets.split('');

    let randomAlphabet = Math.round(Math.random() * 25);
    let index = letter[randomAlphabet];

    return index;
}