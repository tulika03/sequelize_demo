const express = require('express')
const router = express.Router();
const db = require('../db.config')
const Customer = db.customers;

router.post('/add', (req, res, next) => {
    Customer.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
    }).then(customer => {
        res.status(200).json({
            message: 'Customer data created',
            data: customer
        })

    })
})


module.exports  = router