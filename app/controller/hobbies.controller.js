
let userHobbies = [ 
    {
        id: 1,
        hobby : "cricket",
        userId : 1, 
    },
    {
        id: 2,
        hobby : "foothball",
        userId : 1, 
    },
    {
        id:3,
        hobby : "travlling",
        userId : 1, 
    },
    {
        id: 4,
        hobby : "cricket",
        userId : 2, 
    },
    {
        id: 5,
        hobby : "foothball",
        userId : 3, 
    },
    {
        id:6,
        hobby : "travlling",
        userId : 3, 
    },

]
// get  user hobbies 
exports.findById = (req, res) => {	
    
	let result = userHobbies.filter(obj => {
        console.log(obj)
		return obj.userId == req.params.userId
	  });
return	res.status(200).json(result);

};
// add   user hobbies 
exports.create = (req, res) => {	
	let hobby  = {
		hobby : req.body.hobby,
		userId: req.params.userId
	}
	console.log(" this is user " , hobby);
	userHobbies.unshift(hobby);
return	res.status(201).json(userHobbies);
};