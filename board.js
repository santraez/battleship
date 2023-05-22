// Filas del tablero
const ROWS = 10;
// Columnas del tablero
const COLS = 10;
// Figuras disponibles para las cartas
const FIGURES = ['ㅤ'];

let board = [];

// ✅Cración del tablero de juego con dimensiones 10 x 10
function viewBoars(){
	for(let numRows = 0; numRows < ROWS+1; numRows++) {
		let lineBoard = '';
		let numRowsString = String(numRows-1);
		if (numRows == 0){
			console.log("┌─────────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┐");
			lineBoard ="│ (index) |";
			for(let numCols = 0; numCols < COLS; numCols++){
				let numColsString = String(numCols);        
				lineBoard += '   '+numColsString+'  │';
			}; 
			console.log(lineBoard);
			console.log("├─────────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┤");      
		} else {              
			for(let numCols = 0; numCols < COLS+1; numCols++){
				if (numCols == 0){                                   
					lineBoard += '|    '+numRowsString+'    │';
				} else{
					lineBoard += " '"+FIGURES[0] +"' │";
				}; 
			};
			console.log(lineBoard);                 
		};      
	};
	console.log("└─────────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┘"); 
}
// ✅Cración de los tableos de cada jugador. Se han de presentar dichos tableros
function viewBoarsPlayer(Player,positions_Play){
	for(let numRows = 0; numRows < ROWS+1; numRows++) {
		let pos_x = numRows-1;
		let lineBoard = '';
		let numRowsString = String(numRows-1); 
		if (numRows == 0){
			console.log("┌─────────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┐");
			lineBoard ="│ (index) |";
			for(let numCols = 0; numCols < COLS; numCols++){
				let numColsString = String(numCols);        
				lineBoard += '   '+numColsString+'  │';
			} 
			console.log(lineBoard);
			console.log("├─────────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┤");      
		} else {              
			for(let numCols = 0; numCols < COLS+1; numCols++){
				let pos_y = numCols-1;
				if (numCols == 0){                                   
					lineBoard += '|    '+numRowsString+'    │';
				} else{
					const location = String(pos_x) + String(pos_y);
					const element = positions_Play.find(val => val == location);
					if (element == undefined){ 
						lineBoard += " '"+FIGURES[0] +"' │";
					}else{
						figureImg = searchFigures(Player,location);    
						lineBoard += " '"+figureImg+"' │";
					};
				}; 					
			};
			console.log(lineBoard);                 
		};      
	};
	console.log("└─────────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┘"); 
}
// ✅Cración de los tableos de cada jugador. Se han de presentar dichos tableros
function searchFigures(Player,location){
	let figureImg= FIGURES[0];
	for (let key of Object.keys(Player.ships)){
		const locationShip = Player.ships[key].location;
		const element = locationShip.find(val => val == location);
		if (element != undefined){ 
			figureImg = Player.ships[key].img;       
		};
	};      
	return figureImg;
}
// ✅Cada jugador tendrá dos tableros a su disposición: el del contrario y el suyo propio
function viewBoarsPlayerGame(PlayerBoard,PlayerEnemy,listshoot,positions_Play){
	for(let numRows = 0; numRows < ROWS+1; numRows++) {
		let pos_x = numRows-1;
		let lineBoard = '';
		let numRowsString = String(numRows-1); 
		if (numRows == 0){
			console.log("┌─────────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┐");
			lineBoard ="│ (index) |";
			for(let numCols = 0; numCols < COLS; numCols++){
				let numColsString = String(numCols);      
				lineBoard += '   '+numColsString+'  │';
			} 
			console.log(lineBoard);
			console.log("├─────────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┤");      
		} else {              
			for(let numCols = 0; numCols < COLS+1; numCols++){
				let pos_y = numCols-1;
				if (numCols == 0){                                   
					lineBoard += '|    '+numRowsString+'    │';
				} else{
					const location = String(pos_x) + String(pos_y);
					const element = listshoot.find(val => val == location);
					if (element == undefined){ 
						const elementPosicion = positions_Play.find(val => val == location);
						if (elementPosicion == undefined){ 
							lineBoard += " '"+FIGURES[0] +"' │";
						} else {
							figureImg = searchFigures(PlayerBoard,location);    
							lineBoard += " '"+figureImg+"' │";
						};
					} else {	
						figureImg = PlayerEnemy.shooter[location];  
						lineBoard += " '"+figureImg+"' │";
					};		
				}; 						
			};
			console.log(lineBoard);           
		};   
	};
	console.log("└─────────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┘");   
};

function viewBoarsPlayerGameEnemy(PlayerBoard,listshoot){
	for(let numRows = 0; numRows < ROWS+1; numRows++) {
		let pos_x = numRows-1;
		let lineBoard = '';
		let numRowsString = String(numRows-1);
		if (numRows == 0){
			console.log("┌─────────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┐");
			lineBoard ="│ (index) |";
			for(let numCols = 0; numCols < COLS; numCols++){
				let numColsString = String(numCols);   
				lineBoard += '   '+numColsString+'  │';
			} 
			console.log(lineBoard);
			console.log("├─────────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┤");     
		} else {              
			for(let numCols = 0; numCols < COLS+1; numCols++){
				let pos_y = numCols-1;
				if (numCols == 0){                                   
					lineBoard += '|    '+numRowsString+'    │';
				} else {
					const location = String(pos_x) + String(pos_y);
					const element = listshoot.find(val => val == location);
					if (element == undefined){ 
						lineBoard += " '"+FIGURES[0] +"' │";
					} else {	
						figureImg = PlayerBoard.shooter[location];
						lineBoard += " '"+figureImg+"' │";
					};	
				};					
			};
			console.log(lineBoard);                 
		};   
	};
	console.log("└─────────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┘")   
};

module.exports = {
	"viewBoars": viewBoars,
	"viewBoarsPlayer":viewBoarsPlayer,
	"viewBoarsPlayerGame":viewBoarsPlayerGame,
	"viewBoarsPlayerGameEnemy":viewBoarsPlayerGameEnemy,
};
