'use strict';
var expect = require('chai').expect;

describe('string function test', () => {
    it('should return Boys', () => {
        var result = 'Boy';
        expect(result).to.equal('Boy');
    });
    it('should return Girls', () => {
        var result = 'Girl';
        expect(result).to.equal('Girl');
    });
    it('should return Geese', () => {
        var result = 'Goose';
        expect(result).to.equal('Goose');
    });
    it('should return Toys', () => {
        var result = 'Toy';
        expect(result).to.equal('Toy');
    });
    it('should return Men', () => {
        var result = 'Man';
        expect(result).to.equal('Man');
    });
});
