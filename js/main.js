/**
 * Gorillas.js
 * A javaScript version of the classic BASIC game, Gorillas.bas
 * For the young ones: https://en.wikipedia.org/wiki/Gorillas_(video_game)
 * @author Egar Almeida
 */
"use strict"; // to avoid silly mistakes
import assets from "./assets.js";

class gorilla {
  myImage;

  constructor(surface, x, y, myImg) {
    // TODO: Encapsulate
    this.x = x;
    this.y = y;
    this.surface = surface;
    this.myImg = myImg;
  }

  // Create gorilla
  create(x, y, color) {}

  // Spawn at coordinates
  spawn() {}

  render() {
    this.surface.putImageData(this.myImg, this.x, this.y);
  }
  // Execute throw banana action
  throwBanana(angle, velocity) {
    let myBanana = new banana(this.x, this.y, angle, velocity, this);
  }

  // Take damage
  // The original has 100% damage on collision, but I'm going to
  // try implementing hitpoints
  takeDamage(amount) {}

  // Mostly for triggering winning conditions
  die() {}
}

/**
 * Class Banana
 * The exploding banana object. This just moves in the direction
 * determined by the angle and velocity.
 */
class banana {
  constructor(x, y, angle, velocity, player) {
    // TODO: Encapsulate
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.velocity = velocity;
    this.player = player;

    this.create(x, y, angle, velocity);
  }
  // Create banana
  create(x, y, angle, velocity) {
    //alert("El jugador " + this.player.color + " ha lanzado una banana.");
  }

  // Update banana position
  move() {}
}

let scoreTable = [
  { name: "williams", score: 1000 },
  { name: "koster", score: 900 },
  { name: "romero", score: 800 },
  { name: "molyneux", score: 700 },
  { name: "healey", score: 600 },
  { name: "petersen", score: 500 },
  { name: "wright", score: 400 },
  { name: "pajitnov", score: 300 },
  { name: "miyamoto", score: 200 },
  { name: "carmak", score: 100 },
]; // High score table. Initially dummy content. TODO: Put into a scoring class.

/**
 * Function main
 * Setups the game
 */
export function main() {
  // We get the rendering context from the CANVAS element in html
  let canvas = document.getElementById("canvasElement");
  let surface;

  // If there is no canvas because of older browser, we must HANDLE it!
  // Otherwise, gimme the context
  if (canvas.getContext) {
    surface = canvas.getContext("2d");
  } else {
    console.error("Error creating canvas context");
  }

  // Startup screen
  showStartup(canvas, surface);
}

/**
 * Function gameLoop
 * Repeats the steps necessary for user input, updating objects and rendering
 */
function gameLoop(player1, player2) {
  let exitCondition = false;
  /*do {
    // Clear previous frame
    // Get user input
    //if (userInput.toLowerCase() === "q") {
    //  exitCondition = true;
    //}
    // Render
  } while (!exitCondition);*/
}

/**
 * Function showStartup
 * Shows the main screen, asking for number of players and possibly other data.
 */
function showStartup(canvas, surface) {
  // Draw start menu

  // showConfig();
  // showHiscores();
  createLevel(canvas, surface);
}

function createLevel(canvas, surface) {
  
  // Create drawings
  surface.fillStyle = "rgba(0, 0, 0, 0)";
  surface.fillRect(0, 0, canvas.width, canvas.height);
    
  let gorilla1Img = assets.createGorilla(
    surface,
    "rgba(52, 23, 8, 1)",
    "rgba(162, 83, 20, 1)"
  );
  
  cls(surface, canvas);

  let gorilla2Img = assets.createGorilla(
    surface,
    "rgba(162, 83, 20, 1)",
    "rgba(52, 23, 8, 1)"
  );

  cls(surface, canvas);
  assets.createCity(surface, canvas.width, canvas.height);

  let player1 = new gorilla(surface, 80, 50, gorilla1Img);
  player1.render();

  let player2 = new gorilla(surface, canvas.width - 150, 50, gorilla2Img);
  player2.render();

  gameLoop(player1, player2);
}

function cls(surface, canvas) {
  surface.clearRect(0, 0, canvas.width, canvas.height);
}
