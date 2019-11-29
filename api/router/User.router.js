const express = require('express')
const router = express.Router();
const sequelize = require('sequelize')
const db = require('../../models/index')

router.post('', (req, res, next) => {
    db.user_master.findOrCreate({where: {email_id: req.body.email_id},
                                defaults: {user_type_id: req.body.user_type_id, 
                                    user_salutation: req.body.user_salutation, 
                                    first_name: req.body.first_name,
                                    last_name: req.body.last_name,
                                    password: req.body.password}})
    .then(data => {
        console.log("data", data)
        if(!data[1]) {
            res.status(500).json({
                message: 'Data with similar details already present in the DB'
            })
        }
        else {
            res.status(201).json({
                message: 'USer data inserted successfully...',
                data: data
            })
        }

    })
    .catch(err => {
        console.log("error", err)
        res.status(500).json({
            message: 'Data could not be inserted.',
            err: err
        })
    })
})

router.get('', (req, res,next) => {
    db.user_master.findAll({
        include: [
            {
                model: db.user_type_master, attributes: {include: ['user_type_id', 'user_role'], exclude: ['createdAt', 'updatedAt']}
            }
        ]
    }).then(data => {
        console.log(data)
        res.status(201).json({
            message: 'Category data...',
            data: data
        })
    })
    .catch(err => {
        console.log("error", err)
        res.status(500).json({
            message: 'Data could not be fetched.',
            err: err
        })
    })
})


router.put ('/:user_id', (req, res, next) => {
    db.user_master.update({
        password: req.body.password
    },
    {where: {user_id: req.params.user_id}})
    .then((data) => {
        console.log("data", data)
        res.status(200).json({
            message: 'Data updated successfully'
        })
    })
    .catch(error => {
        console.log("error", error)
        res.status(500).json({
            error: error,
            message: 'Data could not be updated.'
        })
    })
})

router.delete('/:user_id', (req,res, next) => {
    db.user_master.destroy({
        where: {user_id: req.params.user_id}
    })
    .then((data) => {
        console.log("data", data)
        res.status(200).json({
            message: 'Data deleted successfully'
        })
    })
    .catch(error => {
        console.log("error", error)
        res.status(500).json({
            error: error,
            message: 'Data could not be deleted.'
        })
    })
})

module.exports = router