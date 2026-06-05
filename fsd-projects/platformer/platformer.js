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

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid

    // TODO 2 - Create Platforms
    createPlatform(120, 620, 220, 20, "#6b7280");
    createPlatform(380, 540, 200, 20, "#4b5563");
    createPlatform(620, 460, 180, 20, "#374151");
    createPlatform(850, 380, 220, 20, "#1f2937");
    createPlatform(1120, 300, 180, 20, "#111827");
    createPlatform(940, 560, 220, 20, "#334155");
    createPlatform(700, 640, 120, 20, "#475569");

    // TODO 3 - Create Collectables
    createCollectable("diamond", 445, 495, 0, 0);
    createCollectable("database", 915, 335, 0, 0);
    createCollectable("grace", 1180, 255, 0, 0);
    createCollectable("max", 760, 590, 0.15, 0.85);

    // TODO 4 - Create Cannons
    createCannon("top", 280, 2300);
    createCannon("left", 300, 2900);
    createCannon("right", 470, 2500);
    createCannon("bottom", 1060, 3200);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
