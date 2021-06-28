const express = require('express');
const router = express.Router();
const warehouses = require('../data/warehouses.json')

router.get('/warehouses', ((req, res) => {
    res.status(200).json(warehouses)
}))

module.exports = router;