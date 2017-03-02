let express            = require('express');
let router             = express.Router();

// List the products from the cart
router.get('/',function(req,res){
	res.render('cart/index');
});

export = router;