const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/test?retryWrites=true&w=majority");

//const newAccount = new Account({
//    title: 'Vanguard',
//    balance: 23000,
//    contribution: 200,
//    type: 'investment'
//});

//wait newAccount.save();
