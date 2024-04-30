const Transaction = require('../models/Transaction');

const inserttrans = async (request, response) => {
    try {
        const { firstName, lastName, email, Amount } = request.body;
        const transaction = new Transaction({
            firstName,
            lastName,
            email,
            Amount
        });
        await transaction.save();
        response.send('Payment recorded successfully!');
    } catch (error) {
        console.error('Error in recording payment:', error);
        response.status(500).send('Error recording payment');
    }
};

const viewtrans = async (request, response) => {
    try {
        const transactions = await Transaction.find();
        response.json(transactions); // Always send transactions array
    } catch (e) {
        response.status(500).send(e.message);
    }
};

const viewtransbyemail = async (request, response) => {
    try {
        const email = request.params.email;
        const transactions = await Transaction.find({ email });
        response.json(transactions); // Always send transactions array
    } catch (e) {
        response.status(500).send(e.message);
    }
};

module.exports = {
    inserttrans,
    viewtrans,
    viewtransbyemail
};
