// Daniel Shiffman
// Word2Vec
// Based on: https://github.com/turbomaze/word2vecjson

let wordVecs;
var netmode = 'cnn';

function setup() {
    createCanvas(100, 100);
    document.getElementById('currentsource').innerHTML += 'Selected source text: ' + netmode;
    let loadHide = select("#loadHide");
    loadHide.hide();

    let nearWordInput = select('#nearword');
    let nearButton = select('#submit');
    let nearResults = select('#results');

    let childrenbutton = select('#children');
    let cnnbutton = select('#cnn');
    let religionbutton = select('#religion');
    let lyricsbutton = select('#lyrics');



    loadJSON('data/' + netmode + '.json', (data) => {
        //loadJSON('data/midsummer_vectors.json', (data) => {
        wordVecs = data.vectors;
        //console.log('loaded');
        loadHide.show();
        noLoop();
        noCanvas();
    });

    nearButton.mousePressed(() => {
        let word = nearWordInput.value();
        nearResults.html(findNearest(word, 10));
    });

    childrenbutton.mousePressed(() => {
        var netmode = "child"
        loadJSON('data/' + netmode + '.json', (data) => {
            //loadJSON('data/midsummer_vectors.json', (data) => {
            wordVecs = data.vectors;
            //console.log('loaded');
            loadHide.show();
            noLoop();
            noCanvas();
        });
        nodes.clear();
        nodes.add({
            id: 'life',
            label: 'life'
        });
        document.getElementById('currentsource').innerHTML = 'Selected source text: ' + netmode;

    });
    cnnbutton.mousePressed(() => {
        var netmode = "cnn"
        loadJSON('data/' + netmode + '.json', (data) => {
            //loadJSON('data/midsummer_vectors.json', (data) => {
            wordVecs = data.vectors;
            //console.log('loaded');
            loadHide.show();
            noLoop();
            noCanvas();
        });
        nodes.clear();
        nodes.add({
            id: 'life',
            label: 'life'
        });
        document.getElementById('currentsource').innerHTML = 'Selected source text: ' + netmode;
    });
    religionbutton.mousePressed(() => {
        var netmode = "religion"
        loadJSON('data/' + netmode + '.json', (data) => {
            //loadJSON('data/midsummer_vectors.json', (data) => {
            wordVecs = data.vectors;
            //console.log('loaded');
            loadHide.show();
            noLoop();
            noCanvas();
        });
        nodes.clear();
        nodes.add({
            id: 'life',
            label: 'life'
        });
        document.getElementById('currentsource').innerHTML = 'Selected source text: ' + netmode;

    });
    lyricsbutton.mousePressed(() => {
        var netmode = "lyrics"
        loadJSON('data/' + netmode + '.json', (data) => {
            //loadJSON('data/midsummer_vectors.json', (data) => {
            wordVecs = data.vectors;
            //console.log('loaded');
            loadHide.show();
            noLoop();
            noCanvas();
        });
        nodes.clear();
        nodes.add({
            id: 'life',
            label: 'life'
        });
        document.getElementById('currentsource').innerHTML = 'Selected source text: ' + netmode;

    });
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(4);
    translate(width / 2, height / 2);
    rotate(frameCount * 0.5);
    line(0, 0, width / 2, 0);
}

function findNearest(word, n = 10) {
    let nearest = Word2Vec.nearest(word, 10);
    if (!nearest) {
        return 'No word vector found';
    }
    let output = '';
    for (let i = 0; i < nearest.length; i++) {
        output += nearest[i].word + '<br/>';
    }
    return output;
}