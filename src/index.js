const express = require('express');
require('./db/db');
const Account = require('./db/account');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Api is Up!\n");
});

app.post('/monthly-amounts', (req, res) => {
    const body = req.body;
    const values = {
        name: body.name,
        type: body.type,
        balance: body.balance,
        contribution: body.contribution,
        date: body.date
    }
    const accounts = new Account(values); 
    accounts.save();
    res.send("post is working\n");
});

app.listen(port, () => {
    console.log(`Listening at Port: ${port}`);
})


