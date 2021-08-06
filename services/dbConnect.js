var config = require('../config/config');
const mongoose = require('mongoose');
module.exports = {
        mongo: function() {
                await mongoose.connect('mongodb://localhost/'+config.STUDENT_DB_SCHEMA, {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                        useFindAndModify: false,
                        useCreateIndex: true
                });
        }
}