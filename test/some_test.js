var expect = require('chai').expect;
const sinon = require('sinon');


describe('Spies', () => {
  it('should demo how can use spies', () => {
    var spy = sinon.spy();

    spy('hello', 'world');

    console.log(spy.firstCall.args);
  });
});
