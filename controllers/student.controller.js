let data_service = require('../services/data.service');
const mongoose = require('mongoose');
var studentModel = require('../models/student.model');
let dbConnection = require('../services/dbConnect.service');
module.exports = {
	addStudent: function(req, res, next) {
		const student = new studentModel({
			name: req.body.name,
                        marks: req.body.marks
		});
		student.save().then((stu) => {
			data_service.res_ok(res, "Student record added in the records");
		}).catch((err) => {
                        console.log(err);
                        data_service.res_err(res, err);
                })
	}
}