const express = require('express');
const router = express.Router();
const trackerController = require('../controllers/trackerController');
const { createAccountValidator, updateAccountValidator } = require('../validators/accountValidator');

router.get('/get-accounts',  trackerController.getAccounts);

router.post('/monthly-amounts', createAccountValidator, trackerController.createNewAccount);

router.put('/update-monthly-amount', updateAccountValidator, trackerController.updateAccount);

router.delete('/delete-monthly-amount/:id', trackerController.deleteAccount);

module.exports = router;
