'use strict';

var greet = function(name) {
	if (name === undefined) {
		name = 'world';
	}

	return 'Hello ' + name + '!';
};

var knightMove = function(x,y) {
	var currentX = 1;
	var currentY = 1;

	var xDifference = x - currentX;
	var yDifference = y - currentY;

	switch(xDifference){
		case 1: 
			if(yDifference == 2) return true;
				else return false;
			break;
		case 2: 
			if(yDifference == 1) return true;
				else return false;
			break;
		default:
			return false;
			break;
	}
}

var bishopMove = function(x,y){
	var currentX = 3;
	var currentY = 4;

	var xDifference = x - currentX;
	var yDifference = y - currentY;

	var xAbs = Math.abs(xDifference);
	var yAbs = Math.abs(yDifference);


	if(3 == 3){
		return true;
	} else{
		return false;
	}
}

module.exports = knightMove, bishopMove;

