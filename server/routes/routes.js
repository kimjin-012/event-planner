const controller = require('../controllers/controller');

module.exports = app => {
    //C
    app.post('/api/event/create', controller.createEvent);
    //R
    app.get('/api/event', controller.getAllEvent);
    app.get('/api/event/:id', controller.getOneEvent);
    //U
    app.put('/api/event/:id', controller.updateEvent);
    //D
    app.delete('/api/event/:id', controller.deleteEvent);
}