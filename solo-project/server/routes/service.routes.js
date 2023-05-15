const ServiceController = require('../controllers/service.controller');

module.exports = app => {
    app.get('/api/allServices', ServiceController.findAllServices)
    app.post('/api/newService', ServiceController.createService)
    app.get('/api/oneService/:id', ServiceController.findOneService)
    app.put('/api/updateService/:id', ServiceController.updateService)
    app.delete('/api/deleteService/:id', ServiceController.deleteService)
}