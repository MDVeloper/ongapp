const { Router } = require('express');
const { Users, Transactions } = require('../db.js');

const router = Router();

router.post('/', async (req, res, next) => {
    const { email, amount, date, estatus, paymentMethod } = req.body;

    try {
        let transaction = await Transactions.create({
            amount,
            date,
            status: "Approved",
            paymentMethod: "PayPal",
            email
        })

        return res.json(transaction)

    } catch (error) {
        next(error)
    }
})

router.get('/', async (req, res) => {

    const { email } = req.body;

    if (email) {
        let transactionsByEmail = await Transactions.findAll({
            where: {
                email: email
            },
        }
        )
        return res.json(transactionsByEmail)
    }
    else {
        let allTransactions = await Transactions.findAll();
        return res.json(allTransactions)
    }
}
)

module.exports = router;


