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
            res.send({
                status: "success",
                data: account
            });
        }).catch((err) => {
            res.status(400).json({
                status: "error",
                errors: err
            });
        })
    } else {
        res.status(400).json({
            status: "error",
            errors: errors.array()
        });
    }
}

const getAccounts = (req, res) => {
    accountDBServer.retrieveAccounts().then((accounts) => {
        res.status(200);
        res.send({
            status: "status",
            data: accounts
        })
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
            res.send({
                status: "success",
                data: account
            });
        }).catch((err) => {
            res.status(400).json({
                status: "error",
                errors: err
            });
        });
    } else {
        res.status(400).json({
            status: "error",
            errors: errors.array()
        });
    }
};

const deleteAccount = (req, res) => {
    if(req.params.id) {
        const id = req.params.id;
        accountDBServer.deleteAccountRecord(id).then((response) => {
            if(response.deletedCount > 0) {
                res.status(200);
                res.send({status: "deleted"});
            } else {
                res.status(404);
                res.send({status: "Record not found"});
            }
        }).catch((err) => {
            res.status(400).json({
                status: "error",
                errors: err
            });
        });

    } else {
        res.status(400).json({
            status: "error",
            errors: "No ID found\n"
        });
    }
};

module.exports = {
    createNewAccount,
    getAccounts,
    updateAccount,
    deleteAccount
};
