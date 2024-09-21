const express = require('express');
const router = express.Router();
const trackerController = require('../controllers/trackerController');
const { createAccountValidator, updateAccountValidator } = require('../validators/accountValidator');

router.get('/get-monthly-amounts',  trackerController.getAccounts);

router.post('/create-monthly-amount', createAccountValidator, trackerController.createNewAccount);

router.put('/update-monthly-amount', updateAccountValidator, trackerController.updateAccount);

router.delete('/delete-monthly-amount/:id', trackerController.deleteAccount);

module.exports = router;
