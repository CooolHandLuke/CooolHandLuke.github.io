$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

    createPlatform(120, 620, 220, 20);
    createPlatform(380, 560, 180, 20);
    createPlatform(640, 500, 170, 20);
    createPlatform(890, 440, 170, 20);
    createPlatform(1130, 370, 180, 20);
    createPlatform(960, 270, 120, 18);
    createPlatform(760, 320, 120, 18);
    createPlatform(500, 250, 130, 18);
    createPlatform(260, 360, 140, 18);
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("database", 190, 580, 0, 0);
    createCollectable("diamond", 430, 520, 0, 0);
    createCollectable("grace", 690, 460, 0, 0);
    createCollectable("kennedi", 940, 400, 0, 0);
    createCollectable("max", 1165, 330, 0, 0);
    createCollectable("steve", 980, 230, 0, 0);
    createCollectable("diamond", 530, 210, 0, 0);
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay)
  createCannon("left", 470, 1500);
  createCannon("right", 620, 1700);
  createCannon("top", 520, 2000);
  createCannon("bottom", 900, 2100);
  createCannon("top", 1170, 1300);

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
