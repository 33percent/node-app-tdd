/*
list of use cases

1. conf should first return a object.
2. conf should have a object size greater than zero
2. A list of parameters should be available in it.
*/

import conf from '../../conf';
import chai from 'chai';
const expect = require('chai').expect;
chai.should()
const confList = ['NODE_ENV','PORT'];
function arraysIdentical(a, b) {
    var i = a.length;
    if (i != b.length) return false;
    while (i--) {
        if (a[i] !== b[i]) return false;
    }
    return true;
};

describe('Testing my configurations', () => {
    beforeEach(() => {
        // console.log('initiated');
    });
    afterEach(() => {
        // console.log('akjhsdlk')
    });
    it('Checking if conf returns a valid object', done => {
        expect(conf).to.be.an('object');
        done();
    });
    it('Checking if conf returns an object greater than zero', done => {
        const count = Object.keys(conf).length;
        expect(count).to.be.above(0);
        done();
    });
    it('Does it return an object which has all the conf', done => {
        expect(arraysIdentical(Object.keys(conf),confList)).to.be.true;
        done();
    });

})