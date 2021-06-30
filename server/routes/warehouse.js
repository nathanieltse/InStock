const express = require('express');
const router = express.Router();
const warehouses = require('../data/warehouses.json')
const inventories = require('../data/inventories.json')
const fs= require("fs")

router.get('/warehouses', ((req, res) => {
    res.status(200).json(warehouses)
}))

router.get('/warehouses/:warehouseId', ((req, res) => {
    let { warehouseId } = req.params;
    const warehouseInfo = warehouses.find(warehouse => warehouse.id === warehouseId)
    if(!warehouseInfo) {
    res.status(400).send(`There is no warehouse with id of ${warehouseId}`)
    }
    res.status(200).json(warehouseInfo)
}))

router.get('/inventories', ((req, res) => {
    res.status(200).json(inventories)
}))

router.get('/inventories/:warehouseId', ((req, res) => {
    let { warehouseId } = req.params;
    const info = inventories.filter(inventory => inventory.warehouseID === warehouseId)
    if(!info) {
    res.status(400).send(`There is no inventory under the ${warehouseId}`)
    }
    res.status(200).json(info)
}))

module.exports = router;