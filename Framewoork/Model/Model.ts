let Database = require('../../config/Database');

abstract class Model {
	protected data:any;

	constructor(data){ this.data = data; }

	/**
	 * Find a model by an ID
	 * @param id
	 * @returns {Model}
	 */
	public static find(id:number):any{
		// Give back every information about an object by an id.
		return Database.query({
			sql: 'SELECT * FROM ?? WHERE id = ?;',
			timeout: 20000, // 20s
			values: [this.constructor.name,id]
		}, function (error, results, fields) { console.log(error); });

	}
	// Save the model information to the database.
	public save():void{
		// Insert this product to the table of products
		//this.data.created_at = this.getTimestamp();
		Database.query({
			sql: 'INSERT INTO ?? (??) VALUES (?);',
			timeout: 20000, // 20s
			values: [this.constructor.name,Object.keys(this.data),Object.values(this.data)]
		}, function (error, results, fields) { console.log(error); });
	}

	// It return everything from the table where models live.
	public static all():any{
		let test = [];
		return test = [
			{
				id				:	0,
				title			: 'string',
				shortDescription: 'string',
				longDescription : 'string',
				price			: 'int',
				imageDescription: 'image'
			},
			{
				id				:	1,
				title			: 'string',
				shortDescription: 'string',
				longDescription : 'string',
				price			: 'int',
				imageDescription: 'image'
			},
			{
				id				:	3,
				title			: 'string',
				shortDescription: 'string',
				longDescription : 'string',
				price			: 'int',
				imageDescription: 'image'
			}
		];
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
		}, function (error, results, fields) { console.log(error); });
	}

	// It shows the initialized data
	public show():string{  return this.data; }

	// It return the exact time when we call it.
	// TODO: nem működik még
	private getTimestamp():any{ return new Date().toDateString(); }
}

export = Model;