let score = JSON.parse(localStorage.getItem('score')) || {
    panalo: 0,
    talo: 0,
    tabla: 0
  };
  updateScore();
   /*
  if (!score) {
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    };
  }
  */
function playGame(playerMove){
    const computerMove = pickComputerMove();
    let result = '';
    if (playerMove === 'bato' && computerMove === 'papel') {
        result = 'Talo ka';
    } else if(playerMove === 'papel' && computerMove ==='bato'){
        result = 'Panalo ka';
    }
    else if(playerMove === 'bato' && computerMove ==='bato'){
        result = 'Tabla';
    }

    else if (playerMove === 'papel' && computerMove === 'gunting') {
        result = 'Talo ka';
    } else if(playerMove === 'gunting' && computerMove ==='papel'){
        result = 'Panalo ka';
    }
    else if(playerMove === 'papel' && computerMove ==='papel'){
        result = 'Tabla';
    }

    else if (playerMove === 'gunting' && computerMove === 'bato') {
        result = 'Talo ka';
    } else if(playerMove === 'bato' && computerMove ==='gunting'){
        result = 'Panalo ka';
    }
    else if(playerMove === 'gunting' && computerMove ==='gunting'){
        result = 'Tabla';
    }
    
    if(result === 'Panalo ka'){
        score.panalo += 1;
    }else if(result === 'Talo ka'){
        score.talo += 1;
    }else if(result === 'Tabla'){
        score.tabla += 1;
    }
    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    document.querySelector('.js-moves').innerHTML = `Pinili mo <img src = "/images/${playerMove}.png" class "move-icon"> <img src = "/images/${computerMove}.png" class = "move-icon">Pinili ng Kompyuter `;
    document.querySelector('.js-result').innerHTML = `Resulta: ${result}`;
}
function updateScore(){
    document.querySelector('.js-standings').innerHTML = `Panalo: ${score.panalo}, Talo: ${score.talo}, Tabla: ${score.tabla}`;
}
function pickComputerMove(){
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = "bato"
    } else if(randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'papel'
    }
    else if(randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'gunting'
    }
    return computerMove;
}