'use strict';

var greet = require('../src/greet');

describe('greet', function() {
	it('should greet the given name', function() {
		expect(greet('Alex')).toEqual('Hello Alex!');
	});
	it('should greet no-one special if no name is given', function() {
		expect(greet()).toEqual('Hello world!');
	});
});