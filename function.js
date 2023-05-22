// ✅Se valorará y validarán las posiciones a utilizar en el tablero. No podrán superponerse. Han de ocupar un espacio único y, cada vez que se reinicie el juego, dichas posiciones se generarán de nuevo y de forma diferente a la anterior partida. Deben de tener valor aleatorio.
function buscar_posiciones (Player){
	let positions_Play=[];
	for (let key of Object.keys(Player.ships)){
		const ship = Player.ships[key];     
		let position_ship = ship.nposition;
		while(position_ship>0){
			let cordenadas= Buscar_Posicion_Inicial(positions_Play); // Buscamos la posición inicial vacía
			pos_x = cordenadas[0];
			pos_y = cordenadas[1];
			let direction  = valor_aletorio(-1,2);
			let validar_posicion;
			let posicion_total = 00;
			// Revisión de espacio disponible y toma de posiciones
			if (direction == 0){
				validar_posicion = validar_espacio_horizontal(position_ship,pos_x,pos_y,positions_Play);
				if (validar_posicion[0] == "N"){
					direction = 1;
					validar_posicion = validar_espacio_vertical(position_ship,pos_x,pos_y,positions_Play);   
				};
			} else {
				validar_posicion  = validar_espacio_vertical(position_ship,pos_x,pos_y,positions_Play);
				if (validar_posicion[0] == "N"){
					direction = 0;
					validar_posicion  = validar_espacio_horizontal(position_ship,pos_x,pos_y,positions_Play);
				};
			};
			// Validamos posición y guardar en array
			if (validar_posicion[0] == "S"){
				position_ship = 0;              
				posicion_total = validar_posicion[1];
				ship.location = posicion_total;
				for(const position of posicion_total) {
					positions_Play.push(position);         
				};	
			};						
		};        				
	};
	return positions_Play;
}

function valor_aletorio(max,min){
	return Math.floor((Math.random() * (max - min + 1)) + min);
}

function validar_espacio_horizontal(position_ship,pos_x,pos_y,positions_Play){
	let position=[];
	let nposition = position_ship;
	let valido = "S";
	let posicion_total=[];
	while(nposition>0){
		if (pos_x>=5){
			pos_x_new = pos_x - nposition;
		} else {
			pos_x_new = pos_x + nposition;
		};
		const location = String(pos_x_new) + String(pos_y);
		const element = positions_Play.find(val => val == location);
		if (element != undefined){ 
			valido = "N";
		}else{
			posicion_total.push(location);
		};
		--nposition;
	}    
	let validar_posicion;
	return validar_posicion=[valido,posicion_total];
}

function validar_espacio_vertical(position_ship,pos_x,pos_y,positions_Play){
	nposition = position_ship;
	valido = "S";
	posicion_total = [];
	while(nposition>0){
		if (pos_y>=5){
			pos_y_new = pos_y - nposition;
		}else{
			pos_y_new = pos_y + nposition;
		}
		const location = String(pos_x) + String(pos_y_new);
		const element = positions_Play.find(val => val == location);
		if (element != undefined){ 
			valido = "N";
		} else {
			posicion_total.push(location);
		};
		--nposition;
	}    
	let validar_posicion;
	return validar_posicion=[valido,posicion_total];
};

function Buscar_Posicion_Inicial(positions_Play){
	valido = "N";
	let pos_x=0;
	let pos_y=0;
	while(valido=="N"){
		pos_x =   valor_aletorio(-1,10);
		pos_y =   valor_aletorio(-1,10);
		const location = String(pos_x) + String(pos_y);
		const element = positions_Play.find(val => val == location);
		if (element == undefined){
			valido  ="S";
		};
	};
	return [pos_x,pos_y];
};

module.exports = {
	"buscar_posiciones": buscar_posiciones,
	"Buscar_Posicion_Inicial":Buscar_Posicion_Inicial,
}
