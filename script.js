let buttonsEl = document.getElementById('buttons')
let stratAnswerEl = document.getElementById('stratAnswer');

/*
let ctButton = "";
let tButton = "";
let eventCT = "";
let eventT = "";
*/

let ctStrats = "";
let tStrats = "";

function mapChooser(map) {
    let ctStrats = generalCTStratArray.concat(mapCTStratArray[map]);
    let tStrats = generalTStratArray.concat(mapTStratArray[map]);
    console.log(ctStrats, tStrats);
    buttonsEl.innerHTML = '<button type="button" id="ctButton">CT</button><button type="button" id="tButton">T</button>';
    /*
    ctButtonEl = document.getElementById('ctButton');
    tButtonEl = document.getElementById('tButton');
    eventCT = ctButtonEl.addEventListener("click", ctStrat());
    eventT = tButtonEl.addEventListener("click", tStrat());
    */
}

function ctStrat() {
    stratAnswer.innerHTML = "";
    let randomStrat = Math.floor(ctStrats.length * Math.random());
    console.log(ctStrats[randomStrat].strat);   
    stratAnswer.innerHTML = ctStrats[randomStrat].strat;
}

function tStrat() {
    stratAnswer.innerHTML = "";
    let randomStrat = Math.floor(tStrats.length * Math.random());
    stratAnswer.innerHTML = tStrats[randomStrat];
}
