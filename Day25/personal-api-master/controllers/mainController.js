var name = require('../models/Names');
var location = require('../models/Locations');
var occupations = require('../models/Occupations');
var occupationsLatest = require('../models/OccupationsLatest');
var hobbies = require('../models/Hobbies');

module.exports = {
	getName: function (req, res, next) {
		res.status(200).json(name);
	},
	
	postName: function (req, res, next) {
		name = req.body.name;
		res.send({ name: name });
	},	
	
	
	
	getLocation: function (req, res, next) {
		res.status(200).json(location);
	},

	postLocation: function (req, res, next) {
		location = req.body.location;
		res.send({ location: location });
	},	



	getOccupations: function (req, res, next) {
		res.status(200).json(occupations);
	},

	getOccupationsOrder: function (req, res, next) {
		var occupationsOrder = req.params.order;
		if (occupationsOrder === "desc") {
			occupations.sort();
		}
		else if (occupationsOrder === "asc") {
			occupations.sort().reverse();
		}
		else {
			res.status(200).json("Error!!!");
		}
		res.status(200).json(occupations);
	},

	getLatestOccupations: function (req, res, next) {
		res.status(200).json(latestOccupations);
	},



	postOccupations: function (req, res, next) {
		occupations.push(req.body);
		res.status(200).json({ message: 'New occupation created!' });
	},	
	
	
	
	getHobbies: function (req, res, next) {
		res.status(200).json(hobbies);
	},
	
	getHobbiesType: function (req, res, next) {
		var hobbiesType = req.params.type;
		if (hobbiesType === "current") {
			res.status(200).json(hobbies[0].name);
		}
		else if (hobbiesType === "past") {
			res.status(200).json(hobbies[1].name);
		}
		else if (hobbiesType === "future") {
			res.status(200).json(hobbies[2].name);
		}
		else {
			res.status(200).json("ERROR");
		}
		res.status(200).json(hobbiesType);
	},
	
	postHobbies: function (req, res, next) {
		hobbies.push(req.body);
		res.status(200).json({ message: 'New hobby created!' });
	}
	
	
}; //end of module.exports
	
	