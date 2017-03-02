let express            = require('express');
let router             = express.Router();

// Model of the Product
let Product            = require('../models/Product');
// Controller of the Product
let ProductController  = require('../controllers/ProductController');

// List the products
router.get('/',function(req,res){ ProductController.listProducts(req,res); });
// Get the information about a project by an id.
router.get('/:id',function(req,res){ ProductController.getInfo(req,res); });

export = router;