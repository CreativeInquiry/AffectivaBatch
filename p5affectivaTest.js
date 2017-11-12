// p5.js test program to load/display Affectiva API JSON data

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
