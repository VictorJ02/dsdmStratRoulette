let buttonsEl = document.getElementById('buttons');
let stratHeadingEl = document.getElementById('stratHeading');
let stratAnswerEl = document.getElementById('stratAnswer');

let ctStrats = "";
let tStrats = "";

function mapChooser(map) {
    ctStrats = generalCTStratArray.concat(mapCTStratArray[map]);
    tStrats = generalTStratArray.concat(mapTStratArray[map]);
    buttonsEl.innerHTML = '<img src="media/images/ct.png" id="ctButton" onclick="ctStrat()"></img><img src="media/images/t.png" id="tButton" onclick="tStrat()"></img>';
}

function ctStrat() {
    let randomStrat = Math.floor(ctStrats.length * Math.random());
    
    if (ctStrats[randomStrat].heading == stratHeadingEl.innerHTML) {
        ctStrat();
    };

    stratHeadingEl.innerHTML = ctStrats[randomStrat].heading;
    stratAnswerEl.innerHTML = ctStrats[randomStrat].strat;
}

function tStrat() {
    let randomStrat = Math.floor(tStrats.length * Math.random());

    if (tStrats[randomStrat].heading == stratHeadingEl.innerHTML) {
        tStrat();
    };

    stratHeadingEl.innerHTML = tStrats[randomStrat].heading;
    stratAnswer.innerHTML = tStrats[randomStrat].strat;
}
