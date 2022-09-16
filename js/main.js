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

  constructor(surface, x, y, color) {
    // TODO: Encapsulate
    this.x = x;
    this.y = y;
    this.color = color;
    this.surface = surface;
    
    this.create(x, y, this.color);
  }

  // Create gorilla
  create(x, y, color) {
   this.myImage = assets.createGorilla(this.surface);
  }

  render() {
    this.surface.putImageData(this.myImage, this.x, this.y);
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

  let player1 = new gorilla(surface, 20, canvas.height / 2, "Chewie");
  player1.render();
  
  let player2 = new gorilla(surface, canvas.width - 20, canvas.height / 2, "Momo");

  gameLoop(player1, player2);
}
