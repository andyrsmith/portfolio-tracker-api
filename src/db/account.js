const mongoose = require('mongoose');

const accountSchema = ({
    name: String,
    balance: Number,
    type: String,
    contribution: Number,
    date: Date
});

const Account = mongoose.model('Account', accountSchema);
module.exports = Account;

