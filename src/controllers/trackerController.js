const accountDBServer = require('../db/accountsService');
const {validationResult} = require('express-validator');

const createNewAccount = (req, res) => {
    const errors = validationResult(req);
    if(errors.isEmpty()) {
        const body = req.body;
        const values = {
            name: body.name,
            type: body.type,
            balance: body.balance,
            contribution: body.contribution,
            date: body.date
        }
        accountDBServer.createNewAccountRecord(values).then((account) => {
            res.status(201);
            console.log('in here');
            res.send(account);
        }).catch((err) => {
            // how should I send back errors
            res.status(400).json({errors: err});
        })
    } else {
        res.status(400).json({errors: errors.array()});
    }
}

const getAccounts = (req, res) => {
    accountDBServer.retrieveAccounts().then((accounts) => {
        res.status(200);
        res.send(accounts)
    });

};

const updateAccount = (req, res) => {
    const errors = validationResult(req);
    if(errors.isEmpty()) {
        const body = req.body;
        const id = body._id;
        const values = {
            name: body.name,
            type: body.type,
            balance: body.balance,
            contribution: body.contribution,
            date: body.date
        }
        accountDBServer.updateAccountRecord(id, values).then((account) => {
            res.status(201);
            res.send(account);
        }).catch((err) => {
            res.status(400).json({errors: err});
        });
    } else {
        res.status(400).json({errors: errors.array()});
    }
};

module.exports = {
    createNewAccount,
    getAccounts,
    updateAccount
};
