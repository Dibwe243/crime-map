//import express
var express = require('express');

//We need to import the route module
var router = express.Router();

/*
Multer is a node.js middleware for handling multipart/form-data
it's primarily used for uploading files
*/
var multer = require('multer');


/*
We will upload the file in public/images/uploads directory. 
So our multer will contain the following configaration:
*/
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/')
	},
	filename: function(req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now() + '.jpg')
	}
});

var upload = multer({storage: storage}).single('crimeImage');

router.post('/', function (req, res) {
	upload(req, res, function(err) {
		if(err) {
			
		}
		res.json({
			success: true,
			message: 'Our image was uploaded successully!'
		});

	});
});

module.exports = router;