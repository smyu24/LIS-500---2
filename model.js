// Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/3-teachable-audio
// https://editor.p5js.org/codingtrain/sketches/e3nrNMG7A


// Storing the label
let label = "waiting...";

// Classifier and model url
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/MjeC-iVT9/';

// STEP 1: Load the model!
function preload() {
  classifier = ml5.soundClassifier(modelURL + 'model.json');
}

function setup() {
  createCanvas(640, 520);

  // STEP 2: Start classifying (will listen to mic by default)
  classifyAudio();
}

// STEP 2 classify!
function classifyAudio() {
  classifier.classify(gotResults);
}

function draw() {
  background(0);

  // STEP 4: Draw the label
  // textSize(32);
  textAlign(CENTER, CENTER);
  // fill(255);
  // text(label, width/2, height - 16);

  // Background noise is headphones
  let emoji = "🎧";
  // Pick an emoji based on label
  if (label == "English Male") {
    emoji = "🇬🇧🚹";
  } else if (label == "English Female") {
    emoji = "🇬🇧🚺";
  } else if (label == "Cantonese Male") {
    emoji = "🇨🇳🚹";
  } else if (label == "Cantonese Female") {
    emoji = "🇨🇳🚺";
  } else if (label == "Indian Male") {
    emoji = "🇮🇳🚹";
  } else if (label == "Indian Female") {
    emoji = "🇮🇳🚺";
  } else if (label == "French Male") {
    emoji = "🇫🇷🚹";
  } else if (label == "French Female") {
    emoji = "🇫🇷🚺";
  }

  // Draw the emoji
  textSize(200);
  text(emoji, width / 2, height / 2);
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
   console.log(label); // Output: Hello, world!

  // Store the label
  label = results[0].label;
}
