require('../db/db');
const Account = require('../db/account');

const createNewAccountRecord = async(record) => {
    const account = new Account(record);
    return await account.save();
}

const retrieveAccounts = async() => {
    const accounts = await Account.find({});
    return accounts
};

const updateAccountRecord = async(id, record) => {
    return await Account.findOneAndUpdate({_id: id}, record, {new: true});
}

const deleteAccountRecord = async(id) => {
    return await Account.deleteOne({_id: id});
}

module.exports = {
    createNewAccountRecord,
    retrieveAccounts,
    updateAccountRecord,
    deleteAccountRecord
}

