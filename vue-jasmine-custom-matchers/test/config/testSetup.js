var Jasmine = require('jasmine');
var jasmine = new Jasmine();

jasmine.loadConfigFile('./test/config/jasmine.json');

jasmine.onComplete(function(passed) {
  if(passed) {
    console.log('All specs have passed');
  }
  else {
    console.log('At least one spec has failed');
  }
});
