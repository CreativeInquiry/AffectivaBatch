// p5.js test program to load/display Affectiva API JSON data
// This program loads and displays the landmark_points.
// Affectiva version 1.2.827, returns data including the fields: 
/*
    "lip suck": 0.0003, 
    "mean face luminance": 147.039, 
    "lip stretch": 0.0022, 
    "anger": 0.0951, 
    "brow furrow": 95.6861, 
    "pitch": -9.6267, 
    "upper lip raise": 42.272, 
    "chin raise": 0.0002, 
    "eye closure": 0.0, 
    "lid tighten": 61.3131, 
    "contempt": 0.001, 
    "landmark_points":[],
    "eye widen": 0.2019, 
    "smirk": 0.0006, 
    "yaw": 10.2923, 
    "engagement": 99.8884, 
    "cheek raise": 30.5556, 
    "disgust": 96.857, 
    "dimpler": 0.0003, 
    "smile": 94.7677, 
    "lip press": 0.0003, 
    "roll": -59.0305, 
    "joy": 53.5897, 
    "attention": 91.2259, 
    "brow raise": 0.0, 
    "nose wrinkle": 93.4104, 
    "surprise": 0.0544, 
    "fear": 0.1192, 
    "interocular distance": 42.9567, 
    "jaw drop": 99.3293, 
    "inner brow raise": 0.0006, 
    "lip corner depressor": 0.0, 
    "lip pucker": 0.0, 
    "sadness": 0.0021, 
    "valence": 0.0, 
    "mouth open": 99.4722
*/

var img;
var affectivaData;

//----------------------------------------
function preload() {
  img = loadImage("data/image03.jpg"); // for example
  affectivaData = loadJSON("data/result_image03.json");
}

//----------------------------------------
function setup() {
  createCanvas(800, 600);
}

//----------------------------------------
function draw() {
  image(img, 0, 0);

  noStroke();
  fill(255, 0, 0);
  var affectivaFrames = affectivaData.frames; 
  for (var i = 0; i < affectivaFrames.length; i++) {
    var affectivaFrame = affectivaFrames[i];
    var affectivaFrameFaces = affectivaFrame.faces;

    for (var j in affectivaFrameFaces) {
      var affectivaFace = affectivaFrameFaces[j];
      var facePoints = affectivaFace.landmark_points;

      for (var k in facePoints) {
        var x = facePoints[k][0];
        var y = facePoints[k][1];
        ellipse(x, y, 4, 4);
      }
    }
  }
}
