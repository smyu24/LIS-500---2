let classifier;
let label = "listening";

// Use the base URL, not the model.json file
let soundModelURL = 'https://teachablemachine.withgoogle.com/models/h3p9R41J/';

function preload() {
  classifier = ml5.soundClassifier(soundModelURL + 'model.json', modelReady);
}

function setup() {
  createCanvas(320, 240);
}

function modelReady() {
  classifier.classify(gotResult);
}

function draw() {
  background(0);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(label, width / 2, height / 2);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  label = results[0].label;
}
