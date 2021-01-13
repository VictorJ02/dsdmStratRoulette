let buttonsEl = document.getElementById('buttons');
let stratHeadingEl = document.getElementById('stratHeading');
let stratAnswerEl = document.getElementById('stratAnswer');
let head = document.getElementsByTagName('HEAD')[0];
let linkStratDisplay = document.createElement('link');
let linkTeamSelect = document.createElement('link');

linkTeamSelect.rel = 'stylesheet';  
linkTeamSelect.type = 'text/css'; 
linkTeamSelect.href = 'stylesheets/styleTeamSelect.css'; 

linkStratDisplay.rel = 'stylesheet';  
linkStratDisplay.type = 'text/css'; 
linkStratDisplay.href = 'stylesheets/styleStratDisplay.css';  

let ctStrats = "";
let tStrats = "";

function mapChooser(map) {
    ctStrats = generalCTStratArray.concat(mapCTStratArray[map]);
    tStrats = generalTStratArray.concat(mapTStratArray[map]);
    buttonsEl.innerHTML = '<img src="media/images/ct.png" id="ctButton" onclick="ctStrat()"></img><img src="media/images/t.png" id="tButton" onclick="tStrat()"></img>';

    head.appendChild(linkTeamSelect);
}

function ctStrat() {
    let randomStrat = Math.floor(ctStrats.length * Math.random());
    let styleRemove = document.querySelector('link');

    if (ctStrats[randomStrat].heading == stratHeadingEl.innerHTML) {
        ctStrat();
    };

    if (styleRemove == '<link rel="stylesheet" type="text/css" href="stylesheets/styleTeamSelect.css">') {
        head.removeChild(linkTeamSelect);
    }

    stratHeadingEl.innerHTML = ctStrats[randomStrat].heading;
    stratAnswerEl.innerHTML = ctStrats[randomStrat].strat; 

    head.appendChild(linkStratDisplay); 
}

function tStrat() {
    let randomStrat = Math.floor(tStrats.length * Math.random());

    if (tStrats[randomStrat].heading == stratHeadingEl.innerHTML) {
        tStrat();
    };

    stratHeadingEl.innerHTML = tStrats[randomStrat].heading;
    stratAnswer.innerHTML = tStrats[randomStrat].strat;
}

let styleRemove = document.querySelector('link');
