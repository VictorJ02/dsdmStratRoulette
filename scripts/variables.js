let dust2ButtonEl = document.getElementById('dust2Button');
let infernoButtonEl = document.getElementById('infernoButton');
let trainButtonEl = document.getElementById('trainButton');
let mirageButtonEl = document.getElementById('mirageButton');
let nukeButtonEl = document.getElementById('nukeButton');
let overpassButtonEl = document.getElementById('overpassButton');
let vertigoButtonEl = document.getElementById('vertigoButton');
let cacheButtonEl = document.getElementById('cacheButton');
let agencyButtonEl = document.getElementById('agencyButton');
let officeButtonEl = document.getElementById('officeButton');
let anubisButtonEl = document.getElementById('anubisButton');

dust2ButtonEl.addEventListener("click", function() {
    mapChooser('dust2');
}, false);

infernoButtonEl.addEventListener("click", function() {
    mapChooser('inferno');
}, false);

trainButtonEl.addEventListener("click", function() {
    mapChooser('train');
}, false);

mirageButtonEl.addEventListener("click", function() {
    mapChooser('mirage');
}, false);

nukeButtonEl.addEventListener("click", function() {
    mapChooser('nuke');
}, false);

overpassButtonEl.addEventListener("click", function() {
    mapChooser('overpass');
}, false);

vertigoButtonEl.addEventListener("click", function() {
    mapChooser('vertigo');
}, false);

cacheButtonEl.addEventListener("click", function() {
    mapChooser('cache');
}, false);

agencyButtonEl.addEventListener("click", function() {
    mapChooser('agency');
}, false);

officeButtonEl.addEventListener("click", function() {
    mapChooser('office');
}, false);

anubisButtonEl.addEventListener("click", function() {
    mapChooser('anubis');
}, false);