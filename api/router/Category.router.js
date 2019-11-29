const Category = require('../../models/category')
const express = require('express')
const router = express.Router();
const sequelize = require('sequelize')
const db = require('../../models/index')

// add category using raw sql query
    router.post('/add', (req,res) => {
        db.sequelize.query('INSERT INTO categories (category_name, category_code) VALUES (?, ?)', { replacements: [req.body.category_name, req.body.category_code],
            type: sequelize.QueryTypes.INSERT
        }).spread((results, metadata) => {
            console.log("insertion data", results)
            console.log("insertion data", metadata)
            res.status(201).json({
                message: 'Category data inserted successfully...'
                //data: data
            })
        })
        .catch((error) => {
            console.log("error", error)
            res.status(500).json({
                message: 'Data could not be inserted.',
                err: error
            })
        })
    })

// add category using sequelize

router.post('', (req, res, next) => {
    db.Category.create({
        category_code: req.body.category_code,
        category_name: req.body.category_name
    }).then(category => {
             console.log("cat", category)

        res.status(201).json({
            message: 'Category data inserted successfully...'
        })
    })
    .catch(err => {
        console.log("error", err)
        res.status(500).json({
            message: 'Data could not be inserted.',
            err: err.errors[0].message
        })
    })
})

// add with find or create

router.post('/add1', (req, res, next) => {
    db.Category.findOrCreate({where: {category_code: req.body.category_code},
                                defaults: {category_name: req.body.category_name}})
    .then(data => {
        console.log("data", data)
        if(!data[1]) {
            res.status(500).json({
                message: 'Data with similar details already present in the DB'
            })
        }
        else {
            res.status(201).json({
                message: 'Category data inserted successfully...',
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

// get all data using sequeslize
router.get('', (req, res,next) => {
    db.Category.findAll().then(categories => {
        console.log(categories)
        res.status(201).json({
            message: 'Category data...',
            data: categories
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

// get by id
router.get('/:category_id', (req, res,next) => {
    db.Category.findByPk(req.params.category_id).then(categories => {
        console.log(categories)
        res.status(201).json({
            message: 'Category data...',
            data: categories
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


// get by code

// get by id
router.get('/category_code/:category_code', (req, res,next) => {
    db.Category.findOne({where:{ category_code: req.params.category_code}}).then(categories => {
        console.log(categories)
        res.status(201).json({
            message: 'Category data...',
            data: categories
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

// count
router.get('/category_code1/:category_code', (req, res,next) => {
    db.Category.findAndCountAll({where:{ category_code: {[sequelize.Op.like]: req.params.category_code + '%'}}}).then(categories => {
        console.log(categories)
        res.status(201).json({
            message: 'Category data...',
            data: categories
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

module.exports = router