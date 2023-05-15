const Service = require('../models/service.model');

module.exports.findAllServices = (req, res) => {
    Service.find()
        // .then is for successful query
        .then((allServices) => {
            res.json({ services: allServices })
        })
        // .catch is for unsuccessful query
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
    }
    
    module.exports.createService = (req, res) => {
        // the req (i.e. request) is input from the client via a form
        // the form is found in the body so we access client input as such
        Service.create(req.body)
        .then((newService) => {
            res.json({ service: newService})
        })
        .catch((err) => {
            // res.status(400) identifies that something went wrong
            // do this if console log of error is showing up as status(200)
            // status(200) is a misrepresentation of something went wrong
            res.status(400).json(err)
        });
    }
    
    module.exports.findOneService = (req,res) => {
        console.log(req.params)
        // instead of findOne, you can also use findById
        // note the association where the id in 'req.params.id' must match
        // the id in the route file '/api/oneService/:id'
        Service.findOne({ _id: req.params.id })
        .then((oneService) => {
            res.json({ service: oneService})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err})
        });
    }
    
    module.exports.updateService = (req, res) => {
        // three parameters for findOneAndUpdate
        // 1. the id of the show so we know which show to update
        // 2. the updated information passed via client input from the form (i.e. body)
        // 3. boolean new set to true that returns updated show in .then statement; otherwise
        // the previous data for the show is returned (i.e. non-updated data)
        Service.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true})
        .then((updatedService) => {
            res.json({ service: updatedService})
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    }

    module.exports.deleteService = (req, res) => {
    // parameter is the id of the pet to be deleted
    Service.deleteOne({ _id: req.params.id})
        // deleting a service will not return anything
        // we are designating 'result' to show a message upon successful delete
        .then((result) => {
            res.json({ result: result})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err})
        });
}