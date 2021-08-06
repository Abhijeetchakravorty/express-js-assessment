let data_service = require('../services/data.service');
const mongoose = require('mongoose');
var vehicleModel = require('../models/vehicle.model');
let dbConnection = require('../services/dbConnect.service');
module.exports = {
	addVehicle: function(req, res, next) {
		const vehicle = new vehicleModel({
			vehicle_name: req.body.vehicle_name,
                        brand: req.body.brand,
                        is_popular: req.body.is_popular,
                        is_latest: req.body.is_latest,
                        km_charge: req.body.km_charge,
                        hourly_charge: req.body.hourly_charge
		});
		vehicle.save().then((stu) => {
			data_service.res_ok(res, "Vehicle record added in the records");
		}).catch((err) => {
                        console.log(err);
                        data_service.res_err(res, err);
                })
	},

        // getStudent: async function(req, res, next) {
        //         let studentId = req.query.id;
        //         await studentModel.findById(studentId).exec((err, stu) => {
        //                 if (err) {
        //                         data_service.res_err(res, err);
        //                 }

        //                 if(stu) {
        //                         data_service.res_ok(res, stu);
        //                 }
        //         });
        // },

        // getAllStudents: function(req, res, next) {
        //         studentModel.find({}).sort({'marks': -1}).exec((err, stu) => {
        //                 if (err) {
        //                         data_service.res_err(res, err);
        //                 }

        //                 if(stu) {
        //                         data_service.res_ok(res, stu);
        //                 }
        //         });
        // }
}