const controller = require('../controller/user.controller');
const ToDo = require('../controller/todo.controller');


module.exports = (app) => {
    //route to register
    app.post('/register', controller.register);
    //route to login
    app.post('/login', controller.login)
    //route to check auth from the Protected Route in React
    app.get('/authCheck', controller.authCheck)
    //route to test
    app.get('/test', ToDo.test)
    //route to get todos
    app.get('/gettodos', ToDo.gettodos)
    //route to create todos
    app.post('/create', ToDo.create)
    //route to delete todos
    app.delete('/delete/:id', ToDo.delete)
    //route to edit todos
    app.put('/edit/:id', ToDo.edit)   
}

