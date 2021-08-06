/**
 * Module dependencies.
 */
'use strict';

const mongoose = require('mongoose');
const vehicleSchema = mongoose.Schema;

/**
 * Schema definition
 */
// recursive embedded-document schema
var Vehicle = new vehicleSchema({
        vehicle_name: {
                type: String,
                required: true
        },
        brand: {
                type: String,
                required: true
        },
        is_popular: {
                type: Boolean,
                required: true
        },
        is_latest: {
                type: Boolean,
                required: true
        },
        km_charge: {
                type: Number,
                required: true
        },
        hourly_charge: {
                type: Number,
                required: true
        },
        vehicle_image: {
                type: String,
                required: true
        }
}, {autoCreate: true});

module.exports = mongoose.model("Vehicle", Vehicle);
