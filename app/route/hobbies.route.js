module.exports = function(app) {

    const hobbies = require('../controller/hobbies.controller.js');

  // Retrieve a hobbies by user Id
  app.get('/api/hobbies/:userId', hobbies.findById);

  // add hobby 
  app.post('/api/hobbies/:userId', hobbies.create);


}