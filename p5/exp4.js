let black;
let img;
let ditherType = 'floydsteinberg';

// image randomization



//      $(document).ready(function() {
//       $("#background-image").css("background-image", "url('" + images[randomImage] + "')");
        
// });


// function preload() {
//   img = loadImage(images[randomImage]);
// }

function setup() {
  var images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
          ];
  
  var randomImage = Math.floor(Math.random() * 4)

  img = loadImage(images[randomImage]);
  imageMode(CENTER);
  img.resize(600,0)

  pixelDensity(1);
  createCanvas(500, 500);
  

  black = new Riso('black');
  yellow = new Riso('SUNFLOWER');
  pixelDensity(1)
}

function draw() {
  background(255);

  let threshold = map(mouseX, 0, width, 0, 255);

  clearRiso();

  let dithered = ditherImage(img, ditherType, threshold);
  // black.image(dithered, 0, 0);
  yellow.image(dithered, 0, 0);

  drawRiso();
}

function mouseClicked() {
  setup();
}

function keyReleased() {
  if (key == 1) ditherType = 'atkinson';
  else if (key == 2) ditherType = 'floydsteinberg';
  else if (key == 3) ditherType = 'bayer';
  else if (key == 4) ditherType = 'none';
}