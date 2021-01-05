let dust2Button = document.getElementById('dust2Button');
let infernoButton = document.getElementById('infernoButton');
let trainButton = document.getElementById('trainButton');
let mirageButton = document.getElementById('mirageButton');
let nukeButton = document.getElementById('nukeButton');
let overpassButton = document.getElementById('overpassButton');
let vertigoButton = document.getElementById('vertigoButton');
let cacheButton = document.getElementById('cacheButton');
let agencyButton = document.getElementById('agencyButton');
let officeButton = document.getElementById('officeButton');
let anubisButton = document.getElementById('anubisButton');

dust2Button.addEventListener("click", function() {
    mapChooser('dust2');
}, false);

infernoButton.addEventListener("click", function() {
    mapChooser('inferno');
}, false);

trainButton.addEventListener("click", function() {
    mapChooser('train');
}, false);

mirageButton.addEventListener("click", function() {
    mapChooser('mirage');
}, false);

nukeButton.addEventListener("click", function() {
    mapChooser('nuke');
}, false);

overpassButton.addEventListener("click", function() {
    mapChooser('overpass');
}, false);

vertigoButton.addEventListener("click", function() {
    mapChooser('vertigo');
}, false);

cacheButton.addEventListener("click", function() {
    mapChooser('cache');
}, false);

agencyButton.addEventListener("click", function() {
    mapChooser('agency');
}, false);

officeButton.addEventListener("click", function() {
    mapChooser('office');
}, false);

anubisButton.addEventListener("click", function() {
    mapChooser('anubis');
}, false);