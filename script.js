let buttonsEl = document.getElementById('buttons');
let stratHeadingEl = document.getElementById('stratHeading');
let stratAnswerEl = document.getElementById('stratAnswer');

let ctStrats = "";
let tStrats = "";

function mapChooser(map) {
    ctStrats = generalCTStratArray.concat(mapCTStratArray[map]);
    tStrats = generalTStratArray.concat(mapTStratArray[map]);
    console.log(ctStrats, tStrats);
    buttonsEl.innerHTML = '<button type="button" id="ctButton" onclick="ctStrat()">CT</button><button type="button" id="tButton" onclick="tStrat()">T</button><form method="get" action="javascript:var%20KICKASSVERSION='2.0';var%20s%20=%20document.createElement('script');s.type='text/javascript';document.body.appendChild(s);s.src='//hi.kickassapp.com/kickass.js';void(0);"><button type="submit">sex</button></form>';
}

function ctStrat() {
    let randomStrat = Math.floor(ctStrats.length * Math.random());
    
    if (ctStrats[randomStrat].heading == stratHeadingEl.innerHTML) {
        ctStrat();
    };

    stratHeadingEl.innerHTML = ctStrats[randomStrat].heading;
    stratHeadingEl.style.fontWeight = "bold";
    stratAnswer.innerHTML = ctStrats[randomStrat].strat;
}

function tStrat() {
    let randomStrat = Math.floor(tStrats.length * Math.random());

    if (tStrats[randomStrat].heading == stratHeadingEl.innerHTML) {
        tStrat();
    };

    stratHeadingEl.innerHTML = tStrats[randomStrat].heading;
    stratHeadingEl.style.fontWeight = "bold";
    stratAnswer.innerHTML = tStrats[randomStrat].strat;
}
