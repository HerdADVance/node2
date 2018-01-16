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

var knightMove = require('../src/greet');
var bishopMove = require('../src/greet');

describe('knight', function() {
	it('should allow legal move', function() {
		expect(knightMove(2,3)).toEqual(true);
	});
	it('should allow legal move', function() {
		expect(knightMove(3,2)).toEqual(true);
	});
	it('should not allow an illegal move', function() {
		expect(knightMove(2,2)).toEqual(false);
	});
	it('should not allow an illegal move', function() {
		expect(knightMove(2,4)).toEqual(false);
	});
	it('should not allow an illegal move', function() {
		expect(knightMove(4,1)).toEqual(false);
	});
});

describe('bishop', function() {
	it('should allow top and left diagonal', function() {
		expect(bishopMove(2,5)).toEqual(true);
	});
	it('should allow top and right diagonal', function() {
		expect(bishopMove(7,8)).toEqual(true);
	});
	it('should allow down and left diagonal', function() {
		expect(bishopMove(1,6)).toEqual(true);
	});
	it('should allow down and right diagonal', function() {
		expect(bishopMove(6,1)).toEqual(true);
	});
	it('should not allow horizontal', function() {
		expect(bishopMove(3,7)).toEqual(false);
	});
	it('should not allow vertical', function() {
		expect(bishopMove(6,4)).toEqual(false);
	});
	it('should not allow random', function() {
		expect(bishopMove(5,8)).toEqual(false);
	});
	it('should not allow same space', function() {
		expect(bishopMove(3,4)).toEqual(false);
	});
});