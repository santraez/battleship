const objects = require("./objects");
const board = require("./board");
const funct = require("./function");
const game = require("./game");

let Player1 = new objects.Player("Player A");
let Player2 = new objects.Player("Player B");

let playerWin= "";

const positions_P1 = funct.buscar_posiciones (Player1);
const positions_P2 = funct.buscar_posiciones (Player2);

// ✅Se anuncia el título del juego
console.log("===================================================");
console.log("========= The Battleship simulator starts =========");
console.log("===================================================");
console.log("")

// ✅Se muestra por pantalla los tableros de ambos jugadores
console.log("DESCRIPTION:");
console.log("");
console.log("🛶 -> Boat of 1 position");
console.log("🚤 -> Boat of 2 position");
console.log("⛵ -> Boat of 3 position");
console.log("🛳  -> Boat of 4 position");
console.log("🚢 -> Boat of 5 position");
console.log("🔥 -> Successful shot!");
console.log("💧 -> Shot into the water!");
console.log("💥 -> Sunken ship!");
console.log("ㅤ -> Empty position");
console.log("");

console.log("==========================");
console.log("========= Boards =========");
console.log("==========================");
console.log("");

console.log("Player A");
console.log("Own board:");
board.viewBoarsPlayer(Player1,positions_P1);
console.log("");

console.log("Player B");
console.log("Own board:");
board.viewBoarsPlayer(Player2,positions_P2);
console.log("");

// ✅Se anuncia el comienzo del juego
console.log("===================================");
console.log("========= The game starts =========");
console.log("===================================");

const listshoot = game.startGame(Player1,positions_P1,Player2,positions_P2);
const listshootA = listshoot[0];
const listshootB = listshoot[1];

console.log("");
console.log("");

if (Player1.points > Player2.points ) {
	Player1.win();
	playerWin = "Player A";
} else if (Player2.points > Player1.points ) {
		Player2.win();
		playerWin = "Player B";
} else {
	console.log(`The result is a tie`);
	playerWin = "Player A and Player B";
};

console.log("");

// ✅Se muestra el nombre del ganador
console.log("==================================");
console.log(`============ ${playerWin} ============`);
console.log("==================================");

// ✅Se muestran los tableros al final del juego (tal como han quedado al finalizar el juego)
console.log("And the final boards are");

console.log("Player A");
console.log("Own board:");
board.viewBoarsPlayerGame(Player1,Player2,listshootB,positions_P1);

console.log("");
console.log("Player B");
console.log("Own board:");
board.viewBoarsPlayerGame(Player2,Player1,listshootA,positions_P2);
