const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.DBCONNECTION}/test?retryWrites=true&w=majority`);

