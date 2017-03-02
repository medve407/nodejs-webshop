var Model = require('../Framewoork/Model/Model');

class Product extends Model {
	protected data = {
		title			: 'string',
		shortDescription: 'string',
		longDescription : 'string',
		price			: 'int',
		imageDescription: 'image'
	};
	constructor(data){
		super(data);
		this.data = data;
	}
}

export = Product;