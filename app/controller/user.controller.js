
let Users = [
	{
		id:1,
		name: 'nouman shah',
	},
	{
		id:2,
		name: 'kaleem',

	},
	{	id:3,
		name: 'osama',
	},
	{	id:4,
		name: 'imran',
	}
];
// Post a users
exports.create = (req, res) => {	
	let user  = {
		name : req.body.name,
		age: req.body.age
	}
	console.log(" this is user " , Users);
	Users.unshift(user);
	return res.status(201).json(Users);
};
 
// FETCH all users
exports.findAll = (req, res) => {
	
	return res.status(200).json(Users)
};

// Find a users by Id
exports.findById = (req, res) => {	

	let result = Users.filter(obj => {
		return obj.id == req.params.id
	  });
return	res.status(200).json(result);

};
 
