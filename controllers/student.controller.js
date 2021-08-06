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
	},

        getStudent: async function(req, res, next) {
                let studentId = req.query.id;
                await studentModel.findById(studentId).exec((err, stu) => {
                        if (err) {
                                data_service.res_err(res, err);
                        }

                        if(stu) {
                                data_service.res_ok(res, stu);
                        }
                });
        },

        getAllStudents: function(req, res, next) {
                studentModel.find({}).sort({'marks': -1}).exec((err, stu) => {
                        if (err) {
                                data_service.res_err(res, err);
                        }

                        if(stu) {
                                data_service.res_ok(res, stu);
                        }
                });
        }
}