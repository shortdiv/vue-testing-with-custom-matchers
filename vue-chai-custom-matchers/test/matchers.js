export default (chai, utils) => {
  //this also works
  // chai.Assertion.addMethod('toHaveContent', function() {
  //   var object = utils.flag(this, 'object');
  //   new chai.Assertion(object.innerHTML.length, `expected ${object} to have content`).to.not.be.eql(0);
  // })

  utils.addMethod(chai.Assertion.prototype, 'toHaveContent', function() {
   const obj = this._obj
   this.assert(
     obj.innerHTML.length > 0,
     `expected ${obj} to have content but was empty`,
     `expected ${obj} to not have content`
   )
  })
}
