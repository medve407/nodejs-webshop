let BaseController = require('../Framewoork/Controller/BaseController');
let Product 	   = require('../models/Product');

abstract class ProductController extends BaseController {

	static sayHello(req,res):void{
		res.send("2222");
	}
}

module.exports = ProductController;