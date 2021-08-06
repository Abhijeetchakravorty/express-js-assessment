var express = require('express');
var router = express.Router();
let data_format = require('../services/data.service');
let controller = require('../controllers/student.controller');
const { check, oneOf, body, validationResult, buildCheckFunction } = require('express-validator');
const { sanitizeBody } = require('express-validator');
const checkQuery = buildCheckFunction(['query']);
/* GET home page. */
router.get('/', function(req, res, next) {
        res.render('index', {
                title: 'Express'
        });
});
// Add new Student
router.post('/addStudent', [
        body('name').exists(),
        body('marks').exists()
], (req, res, next) => {
        let chk = data_format.v_err(req);
        if (!chk.success) {
                data_format.cs_msg(res, chk.response)
        }

        if (chk.success) {
                controller.addStudent(req, res, next);
        }
});

// Get student details
router.get('/getStudent', [
        checkQuery('id').exists()
], (req, res, next) => {
        let chk = data_format.v_err(req);
        if (!chk.success) {
                data_format.cs_msg(res, chk.response)
        }

        if (chk.success) {
                controller.getStudent(req, res, next);
        }
});
module.exports = router;