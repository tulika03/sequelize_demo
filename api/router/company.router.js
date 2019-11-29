const express = require('express')
const router = express.Router();
const Company = require('../../models/company')

router.post('/add', (req, res, next) => {
    Company.create({
        name: req.body.name
    }).then(company => {
        res.status(200).json({
            message: 'company data created',
            data: company
        })

    })
})


module.exports  = router