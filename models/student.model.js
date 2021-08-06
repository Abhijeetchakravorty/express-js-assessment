/**
 * Module dependencies.
 */
'use strict';

const mongoose = require('mongoose');
const studentSchema = mongoose.Schema;

/**
 * Schema definition
 */
// recursive embedded-document schema
var Student = new studentSchema({
        name: {
                type: String,
                required: true
        },
        marks: {
                type: Number
        }
}, {autoCreate: true});

module.exports = mongoose.model("Student", Student);
