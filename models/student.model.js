/**
 * Module dependencies.
 */
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Schema definition
 */

// recursive embedded-document schema
const Student = new Schema({
        name: {
                type: String,
                index: true,
                autoIndexId: true
        },
        id: {
                type: String,
                lowercase: true,
                trim: true
        },
        marks: {
                type: Number
        }
}, {autoCreate: true, capped: 1024});