var expect = require('chai').expect;
const sinon = require('sinon');


describe('Spies', () => {
  it('should demo how can use spies', () => {
    var spy = sinon.spy();

    spy('hello', 'world');

    console.log(spy.firstCall.args);
  });
});

describe('Spies', () => {
  it('should demo using spies with functions', () => {
    var user = {
      setName: function(name){
        this.name = name;
      }
    }

    var setNameSpy = sinon.spy(user, 'setName');

    user.setName('Darth Vader');
    user.setName('Darth ');

    console.log(setNameSpy.callCount);
    expect(setNameSpy.callCount).to.equal(2);
    setNameSpy.restore();
  })
});
