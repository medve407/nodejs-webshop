let BaseController = require('../Framewoork/Controller/BaseController');
let Product 	   = require('../models/Product');

class ProductController extends BaseController {

	// It return the index of the product with Products if they are exists.
	public static listProducts(req,res):any {
		res.render('product/index',{
			'products' : Product.all()
		});
	}
	// It return information about a project by an id from parameter.
	public static getInfo(req,res) {
		res.render('product/detail',{
			'product': Product.all()[0]
		});
	}
}

export = ProductController;