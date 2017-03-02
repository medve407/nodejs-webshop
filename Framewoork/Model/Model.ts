let Database = require('../../config/Database');

class Model {
	protected data:any;
	/**
	 * Find a model by an ID
	 * @param id
	 * @returns {Model}
	 */

	constructor(data){
		this.data = data;
	}

	// Find an object by id
	public find(id:number):any{
		// Give back every information about an object by an id.
		return Database.query({
			sql: 'SELECT * FROM ?? WHERE id = ?;',
			timeout: 20000, // 20s
			values: [this.constructor.name,id]
		}, function (error, results, fields) { console.log(results); });

	}
	// Save the model information to the database.
	public save():void{
		// Insert this product to the table of products
		//this.data.created_at = this.getTimestamp();
		Database.query({
			sql: 'INSERT INTO ?? (??) VALUES (?);',
			timeout: 20000, // 20s
			values: [this.constructor.name,Object.keys(this.data),Object.values(this.data)]
		}, function (error, results, fields) { console.log(this.sql); });
	}

	/***
	 *  Remove the Model's object from the database by the ID.
	 * @param id
	 * @returns {any}
	 */
	public remove(id:number):boolean{
		return Database.query({
			sql: 'DELETE FROM ? WHERE id = ?;',
			timeout: 20000, // 20s
			values: [this.constructor.name,id]
		}, function (error, results, fields) {
			console.log(error);
		});
	}

	// It shows the initialized data
	public show():string{
		return this.data;
	}

	// It return the exact time when we call it.
	// TODO: nem működik még
	private getTimestamp():any{ return new Date().toDateString(); }
}

export = Model;