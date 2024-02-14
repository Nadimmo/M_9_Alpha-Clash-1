function hiddenElementId(id){
    let element = document.getElementById(id);
    element.classList.add('hidden')
}

function showElementId(id){
    let element = document.getElementById(id);
    element.classList.remove('hidden')
}

function setElementText(id){
    let element = document.getElementById(id)
    element.classList.add('bg-amber-500')
}
function alphabetString(){
    let alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let letter = alphabets.split('');

    let randomAlphabet = Math.round(Math.random() * 25);
    let index = letter[randomAlphabet];

    return index;
}