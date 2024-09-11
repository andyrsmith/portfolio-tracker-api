const {body} = require('express-validator');

const createAccountValidator = [
    body('name', 'Name is Empty').not().isEmpty(),
    body('type', 'Type is Empty').not().isEmpty(),
    body('type', 'Type is not correct').custom((value) => {
        return value === 'I' || value === 'D'
    }),
    body('balance', 'Balance is Empty').not().isEmpty(),
    body('balance', 'Balance is not a Number').isInt(),
    body('contribution', 'Contribution is not a Number').isInt(),
    body('date', 'Date is Empty').not().isEmpty(),
    body('date', 'Date is not a Date field').isDate(),
]

const updateAccountValidator = [
    body('_id', 'id is Empty').not().isEmpty(),
    body('name', 'Name is Empty').not().isEmpty(),
    body('type', 'Type is Empty').not().isEmpty(),
    body('type', 'Type is not correct').custom((value) => {
        return value === 'I' || value === 'D'
    }),
    body('balance', 'Balance is Empty').not().isEmpty(),
    body('balance', 'Balance is not a Number').isInt(),
    body('contribution', 'Contribution is not a Number').isInt(),
    body('date', 'Date is Empty').not().isEmpty(),
    body('date', 'Date is not a Date field').isDate(),
];

module.exports = {
    createAccountValidator,
    updateAccountValidator
};

