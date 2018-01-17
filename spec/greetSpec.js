'use strict';

// var greet = require('../src/greet');

// describe('greet', function() {
// 	it('should greet the given name', function() {
// 		expect(greet('Alex')).toEqual('Hello Alex!');
// 	});
// 	it('should greet no-one special if no name is given', function() {
// 		expect(greet()).toEqual('Hello world!');
// 	});
// });

var vertical = require('../src/greet');

// describe('knightMove', function() {
// 	var x1 = 3;
// 	var y1 = 4;

// 	it('should allow L-shaped move up and left', function() {
// 		expect(knightMove(x1,y1, 1,5)).toEqual(true);
// 	});
// 	it('should allow other L-shaped move up and left', function() {
// 		expect(knightMove(x1,y1, 2,6)).toEqual(true);
// 	});
// 	it('should allow L-shaped move up and right', function() {
// 		expect(knightMove(x1,y1, 5,5)).toEqual(true);
// 	});
// 	it('should allow other L-shaped move up and right', function() {
// 		expect(knightMove(x1,y1, 4,6)).toEqual(true);
// 	});
// 	it('should allow L-shaped move down and left', function() {
// 		expect(knightMove(x1,y1, 1,3)).toEqual(true);
// 	});
// 	it('should allow other L-shaped move down and left', function() {
// 		expect(knightMove(x1,y1, 2,2)).toEqual(true);
// 	});
// 	it('should allow L-shaped move down and right', function() {
// 		expect(knightMove(x1,y1, 5,3)).toEqual(true);
// 	});
// 	it('should allow other L-shaped move down and right', function() {
// 		expect(knightMove(x1,y1, 4,2)).toEqual(true);
// 	});
// 	it('should not allow horizontal', function() {
// 		expect(knightMove(x1,y1, 5,4)).toEqual(false);
// 	});
// 	it('should not allow vertical', function() {
// 		expect(knightMove(x1,y1, 3,2)).toEqual(false);
// 	});
// 	it('should not allow diagonal', function() {
// 		expect(knightMove(x1,y1, 7,8)).toEqual(false);
// 	});
// 	it('should not allow random', function() {
// 		expect(knightMove(x1,y1, 5,1)).toEqual(false);
// 	});
// 	it('should not allow same space', function() {
// 		expect(knightMove(x1,y1, 3,4)).toEqual(false);
// 	});
// });

// describe('kingMove', function() {
// 	var x1 = 3;
// 	var y1 = 4;

// 	it('should allow 1 square horizontal', function() {
// 		expect(kingMove(x1,y1, 4,4)).toEqual(true);
// 	});
// 	it('should allow 1 square vertical', function() {
// 		expect(kingMove(x1,y1, 3,3)).toEqual(true);
// 	});
// 	it('should allow 1 square diagonal ', function() {
// 		expect(kingMove(x1,y1, 2,5)).toEqual(true);
// 	});
// 	it('should not allow 2 squares', function() {
// 		expect(kingMove(x1,y1, 5,4)).toEqual(false);
// 	});
// 	it('should not allow random', function() {
// 		expect(kingMove(x1,y1, 7,7)).toEqual(false);
// 	});
// 	it('should not allow same space', function() {
// 		expect(kingMove(x1,y1, 3,4)).toEqual(false);
// 	});
// });

// describe('whitePawnMove', function() {
// 	var x1 = 3;
// 	var y1 = 4;

// 	it('should allow moving forward 1 square', function() {
// 		expect(vertical(x1,y1, 3,5)).toEqual(true);
// 	});
// 	it('should allow moving forward 2 squares if not moved yet', function() {
// 		expect(vertical(x1,2, 3,4)).toEqual(true);
// 	});
// 	it('should not allow moving forward 2 squares if already mvoed', function() {
// 		expect(vertical(x1,y1, 3,6)).toEqual(false);
// 	});
// 	it('should not allow diagonal moving horizontal', function() {
// 		expect(vertical(x1,y1, 4,4)).toEqual(false);
// 	});
// 	it('should not allow moving forward 3 squares', function() {
// 		expect(vertical(x1,y1, 3,7)).toEqual(false);
// 	});
// 	it('should not allow moving backwards', function() {
// 		expect(vertical(x1,y1, 3,3)).toEqual(false);
// 	});
// 	it('should not allow same square', function() {
// 		expect(vertical(x1,y1, 3,4)).toEqual(false);
// 	});
// });

describe('blackPawnMove', function() {
	var x1 = 3;
	var y1 = 4;

	it('should allow moving forward 1 square', function() {
		expect(vertical(x1,y1, 3,3)).toEqual(true);
	});
	it('should allow moving forward 2 squares if not moved yet', function() {
		expect(vertical(x1,7, 3,5)).toEqual(true);
	});
	it('should not allow moving forward 2 squares if already mvoed', function() {
		expect(vertical(x1,y1, 3,2)).toEqual(false);
	});
	it('should not allow diagonal moving horizontal', function() {
		expect(vertical(x1,y1, 4,4)).toEqual(false);
	});
	it('should not allow moving forward 3 squares', function() {
		expect(vertical(x1,y1, 3,1)).toEqual(false);
	});
	it('should not allow moving backwards', function() {
		expect(vertical(x1,y1, 3,5)).toEqual(false);
	});
	it('should not allow same square', function() {
		expect(vertical(x1,y1, 3,4)).toEqual(false);
	});
});

// describe('diagonal', function() {
// 	var x1 = 3;
// 	var y1 = 4;

// 	it('should allow top and left diagonal', function() {
// 		expect(diagonal(x1,y1, 2,5)).toEqual(true);
// 	});
// 	it('should allow top and right diagonal', function() {
// 		expect(diagonal(x1,y1, 7,8)).toEqual(true);
// 	});
// 	it('should allow down and left diagonal', function() {
// 		expect(diagonal(x1,y1, 1,6)).toEqual(true);
// 	});
// 	it('should allow down and right diagonal', function() {
// 		expect(diagonal(x1,y1, 6,1)).toEqual(true);
// 	});
// 	it('should not allow horizontal', function() {
// 		expect(diagonal(x1,y1, 3,7)).toEqual(false);
// 	});
// 	it('should not allow vertical', function() {
// 		expect(diagonal(x1,y1, 6,4)).toEqual(false);
// 	});
// 	it('should not allow random', function() {
// 		expect(diagonal(x1,y1, 5,8)).toEqual(false);
// 	});
// 	it('should not allow same space', function() {
// 		expect(diagonal(x1,y1, 3,4)).toEqual(false);
// 	});
// });

// describe('horizontal', function() {
// 	var x1 = 3;
// 	var y1 = 4;

// 	it('should allow moving right', function() {
// 		expect(horizontal(x1,y1, 7,4)).toEqual(true);
// 	});
// 	it('should allow moving left', function() {
// 		expect(horizontal(x1,y1, 1,4)).toEqual(true);
// 	});
// 	it('should not allow diagonal', function() {
// 		expect(horizontal(x1,y1, 1,6)).toEqual(false);
// 	});
// 	it('should not allow random', function() {
// 		expect(horizontal(x1,y1, 5,8)).toEqual(false);
// 	});
// 	it('should not allow same space', function() {
// 		expect(horizontal(x1,y1, 3,4)).toEqual(false);
// 	});
// });

// describe('vertical', function() {
// 	var x1 = 3;
// 	var y1 = 4;

// 	it('should allow moving up', function() {
// 		expect(vertical(x1,y1, 3,8)).toEqual(true);
// 	});
// 	it('should allow moving down', function() {
// 		expect(vertical(x1,y1, 3,2)).toEqual(true);
// 	});
// 	it('should not allow diagonal', function() {
// 		expect(vertical(x1,y1, 7,8)).toEqual(false);
// 	});
// 	it('should not allow random', function() {
// 		expect(vertical(x1,y1, 6,2)).toEqual(false);
// 	});
// 	it('should not allow same space', function() {
// 		expect(vertical(x1,y1, 3,4)).toEqual(false);
// 	});
// });