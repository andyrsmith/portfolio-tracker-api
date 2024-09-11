const express = require('express');
const router = express.Router();
const trackerController = require('../controllers/trackerController');
const { createAccountValidator, updateAccountValidator } = require('../validators/accountValidator');

router.get('/get-accounts',  trackerController.getAccounts);

router.post('/monthly-amounts', createAccountValidator, trackerController.createNewAccount);

router.put('/update-monthly-amount', updateAccountValidator, trackerController.updateAccount);

module.exports = router;
