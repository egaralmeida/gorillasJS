/**
 * Gorillas.js
 * A javaScript version of the classic BASIC game, Gorillas.bas
 * For the young ones: https://en.wikipedia.org/wiki/Gorillas_(video_game)
 * @author Egar Almeida
 */
"use strict"; // to avoid silly mistakes

class gorilla {
  constructor(x, y, color) {
    // TODO: Encapsulate
    this.x = x;
    this.y = y;
    this.color = color;

    this.create(x, y, this.color);
  }

  // Create gorilla drawing (or load image? TBD!)
  create(x, y, color) {
    alert("Gorila creado en x=" + x + ", y=" + y + " de color " + color);
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
    alert("El jugador " + this.player.color + " ha lanzado una banana.");
  }

  // Update banana position
  move() {}
}

/**
 * Function main
 * Setups the game
 */
let players = 2;
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
]; // High score table. Initially dummy content

function main() {
  // We get the rendering context from the CANVAS element in html
  let canvas = document.getElementById("canvasElement");

  // If there is no canvas because of older browser, we must HANDLE it!
  // Otherwise, gimme the context
  let surface;
  if (canvas.getContext) {
    surface = canvas.getContext("2d");
  } else {
    console.error("Error creando context de canvas");
  }

  // Startup screen
  showStartup(canvas);
}

/**
 * Function gameLoop
 * Repeats the steps necessary for user input, updating objects and rendering
 */
function gameLoop(player1, player2) {
  let exitCondition = false;
  do {
    let userInput = prompt(
      "Este es el ciclo principal, se repite constantemente. Se encarga de ingreso de datos, actualizacion de elementos en pantalla y renderizado. Para terminar, tipear la letra Q"
    );

    if (userInput.toLowerCase() === "q") {
      exitCondition = true;
    }

    player1.throwBanana(90, 100);
  } while (!exitCondition);
}

/**
 * Function showStartup
 * Shows the main screen, asking for number of players and possibly other data.
 */
function showStartup(canvas) {
  // Draw start menu
  alert(
    "Pantalla de seleccion de jugadores, vista de highscores y configuracion"
  );

  createLevel(canvas);
}

function createLevel(canvas) {
  alert("Creamos el nivel y ubicamos a los personajes");

  let player1 = new gorilla(20, canvas.height / 2, "rojo");
  let player2 = new gorilla(canvas.width - 20, canvas.height / 2, "azul");

  gameLoop(player1, player2);
}
