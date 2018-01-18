'use strict';

var knightMove = function(x1,y1,x2,y2) {

	var xAbs = Math.abs(x2 - x1);
	var yAbs = Math.abs(y2 - y1);

	switch(xAbs){
		case 1: 
			if(yAbs == 2) return true;
				else return false;
			break;
		case 2: 
			if(yAbs == 1) return true;
				else return false;
			break;
		default:
			return false;
			break;
	}
};

var kingMove = function(x1,y1,x2,y2){

	var xAbs = Math.abs(x2 - x1);
	var yAbs = Math.abs(y2 - y1);

	if(xAbs < 2 && yAbs < 2){
		if(xAbs > 0 || yAbs > 0){
			return true;
		}
	}
	return false;
}

var whitePawnMove = function(x1,y1,x2,y2){
	
	if(x1 == x2 && y2 - y1 == 1){
		return true;
	}
	if(x1 == x2 && y2 - y1 == 2 && y1 == 2){
		return true;
	}
	return false;
}

var blackPawnMove = function(x1,y1,x2,y2){
	
	if(x1 == x2 && y2 - y1 == -1){
		return true;
	}
	if(x1 == x2 && y2 - y1 == -2 && y1 == 7){
		return true;
	}
	return false;
}

var whitePawnCapture = function(x1,y1,x2,y2){
	
	if(y2 - y1 == 1  && Math.abs(x2 - x1) == 1){
		return true;
	}
	return false;
}

var blackPawnCapture = function(x1,y1,x2,y2){
	
	if(y2 - y1 == -1  && Math.abs(x2 - x1) == 1){
		return true;
	}
	return false;
}

var diagonal = function(x1,y1,x2,y2){

	var xAbs = Math.abs(x2 - x1);
	var yAbs = Math.abs(y2 - y1);


	if(xAbs == yAbs && x1 != x2){
		return true;
	} else{
		return false;
	}
};

var horizontal = function(x1,y1,x2,y2){

	if(x1 != x2 && y1 == y2){
		return true;
	} else{
		return false;
	}
};

var vertical = function(x1,y1,x2,y2){

	if(x1 == x2 && y1 != y2){
		return true;
	} else{
		return false;
	}
};


//module.exports = knightMove, diagonal, horizontal, vertical;
module.exports = blackPawnCapture;
