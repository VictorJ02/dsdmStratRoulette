let buttonsEl = document.getElementById('buttons');
let stratHeadingEl = document.getElementById('stratHeading');
let stratAnswerEl = document.getElementById('stratAnswer');
let head = document.getElementsByTagName('HEAD')[0];
let linkStyle = document.head.querySelector('#styleMain');
let linkStratDisplay = document.createElement('link');
let linkTeamSelect = document.createElement('link');
let vivalaweedEL = document.querySelector('#vlaweed');
let bodyEL = document.querySelector('body');

vivalaweedEL.addEventListener('keyup', vivalaweed);

linkTeamSelect.rel = 'stylesheet';  
linkTeamSelect.type = 'text/css'; 
linkTeamSelect.href = 'stylesheets/styleTeamSelect.css';
linkTeamSelect.id = 'linkTeamSelect'; 

linkStratDisplay.rel = 'stylesheet';  
linkStratDisplay.type = 'text/css'; 
linkStratDisplay.href = 'stylesheets/styleStratDisplay.css';
linkStratDisplay.id = 'linkStratDisplay';

let ctStrats = "";
let tStrats = "";

let playedStrats = [];

function mapChooser(map) {
    let tempCTStrats = generalCTStratArray.concat(mapCTStratArray[map]);
    let tempTStrats = generalTStratArray.concat(mapTStratArray[map]);

    ctStrats = tempCTStrats.concat(generalStratArray);
    tStrats = tempTStrats.concat(generalStratArray);

    head.removeChild(linkStyle);
    head.appendChild(linkTeamSelect);

    buttonsEl.innerHTML = '<img src="media/images/ct.png" id="ctButton" onclick="ctStrat()"></img><img src="media/images/t.png" id="tButton" onclick="tStrat()"></img>';
}

function ctStrat() {
    let randomStrat = Math.floor(ctStrats.length * Math.random());
    let elementExists = document.head.querySelector('#linkStratDisplay');
    let a = document.head.querySelector('#linkTeamSelect');
    let b = '<link rel="stylesheet" type="text/css" href="stylesheets/styleTeamSelect.css" id="linkTeamSelect">';
    let result = b.toString().localeCompare(a);
    
    if (ctStrats[randomStrat].heading == stratHeadingEl.innerHTML) {
        ctStrat();
    };

        for (let i = 0; i < playedStrats.length; i++) {
            if (playedStrats.length == ctStrats.length) {
                playedStrats = [];
                break;
            } else if (playedStrats[i] == ctStrats[randomStrat].heading) {
                randomStrat = Math.floor(ctStrats.length * Math.random());
                i = -1; continue;
            }
        }
    
    playedStrats.push(ctStrats[randomStrat].heading);

    if (elementExists == null) {
        head.appendChild(linkStratDisplay); 
    }

    if (result == 1) {
        head.removeChild(linkTeamSelect);
    }; 

    stratHeadingEl.innerHTML = ctStrats[randomStrat].heading;
    stratAnswerEl.innerHTML = ctStrats[randomStrat].strat;
}

function tStrat() {
    let randomStrat = Math.floor(tStrats.length * Math.random());
    let elementExists = document.head.querySelector('#linkStratDisplay');
    let a = document.head.querySelector('#linkTeamSelect');
    let b = '<link rel="stylesheet" type="text/css" href="stylesheets/styleTeamSelect.css" id="linkTeamSelect">';
    let result = b.toString().localeCompare(a);

    if (tStrats[randomStrat].heading == stratHeadingEl.innerHTML) {
        tStrat();
    };

    for (let i = 0; i < playedStrats.length; i++) {
        if (playedStrats.length == tStrats.length) {
            playedStrats = [];
            break;
        } else if (playedStrats[i] == tStrats[randomStrat].heading) {
            randomStrat = Math.floor(tStrats.length * Math.random());
            i = -1; continue;
        }
    }

    playedStrats.push(tStrats[randomStrat].heading);


    if (elementExists == null) {
        head.appendChild(linkStratDisplay); 
    }

    if (result == 1) {
        head.removeChild(linkTeamSelect);
    };

    stratHeadingEl.innerHTML = tStrats[randomStrat].heading;
    stratAnswer.innerHTML = tStrats[randomStrat].strat;
}

function vivalaweed(e) {
	if ((e.keyCode === 13) && (vivalaweedEL.value == 'vlw2021')) {
		bodyEL.innerHTML = '<h1>VLW2021</h1><a href = "https://www.instagram.com/vivalaweed2021"><img src = "media/images/vivalaweed.png" id = "vlw"></a>';
	}
}
