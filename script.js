function play(){
    hiddenElementId('home-screen')
    showElementId('playGround')
    continueGame()

    // let home = document.getElementById('home-screen');
    // home.classList.add('hidden')
    // console.log(home.classList.add('hidden'));

    // let playground = document.getElementById('playGround');
    // playground.classList.remove('hidden')
    // console.log(playground.classList.remove('hidden'))
}

function continueGame(){
    const alphabet = alphabetString();
    console.log('your random alphabet', alphabet)
}

