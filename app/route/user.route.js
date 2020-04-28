module.exports = function(app) {
 
    const user = require('../controller/user.controller');
 
    // Create a new user
    app.post('/api/user', user.create);
 
    // Retrieve all user
    app.get('/api/users', user.findAll);
 
    // Retrieve a single user by Id
    app.get('/api/user/:id', user.findById);
 
    // Update a Customer with Id
    // app.put('/api/customers/:customerId', user.update);
 
    // Delete a Customer with Id
    // app.delete('/api/customers/:customerId', us  er.delete);
}