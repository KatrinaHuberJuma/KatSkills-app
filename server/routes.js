var controller = require('./controllers');

// router tells node express what the endpoints are, and what controllers code should be called

var router = require('express').Router(); // framework for node servers

//Connect controller methods to their corresponding routes
router.get('/foods',   controller.foods.get); // server controllers/index.js foods.get
router.get('/ratings', controller.ratings.get);

//          endpoint,    name of the code to call when get on endpoint
router.post('/foods', controller.foods.post);  // TODO - move this up, the world stops spinning... WHY??


module.exports = router;

