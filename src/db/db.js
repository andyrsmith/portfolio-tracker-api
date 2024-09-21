const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.DBCONNECTION}/${process.env.DBNAME}?retryWrites=true&w=majority`);

