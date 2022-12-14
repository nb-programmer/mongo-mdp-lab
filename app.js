var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	console.log("Database created!");
	db.close();
});

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var dbo = db.db("mydb");
	var myobj = [{
			name: 'John',
			address: 'Highway 71'
		},
		{
			name: 'Peter',
			address: 'Lowstreet 4'
		},
		{
			name: 'Amy',
			address: 'Apple st 652'
		},
	];
	dbo.collection("customers").insertMany(myobj, function(err, res) {
		if (err) throw err;
		console.log("Number of documents inserted: " + res.insertedCount);
		db.close();
	});
});
