let ctButton = document.getElementById('ctButton');
let tButton = document.getElementById('tButton');
let stratAnswer = document.getElementById('stratAnswer');

let ctStratArray = [
    'Alle dræp Magnus',
    'Bli på spawn helt te 30 sekunder'
];

let tStratArray = [
    'Test 1',
    'Test 2',
    'Maccer!'
];

ctButton.addEventListener("click", ctStrat);
tButton.addEventListener("click", tStrat);

function ctStrat() {
    stratAnswer.innerHTML = "";
    let randomStrat = Math.floor(ctStratArray.length * Math.random());
    stratAnswer.innerHTML = ctStratArray[randomStrat];
}

function tStrat() {
    stratAnswer.innerHTML = "";
    let randomStrat = Math.floor(tStratArray.length * Math.random());
    stratAnswer.innerHTML = tStratArray[randomStrat];
}