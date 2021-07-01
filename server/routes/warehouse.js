const express = require('express');
const router = express.Router();
const warehouses = require('../data/warehouses.json')
const inventories = require('../data/inventories.json')
const { v4: uuidv4 } = require('uuid');

const fs= require("fs");
const { json } = require('express');

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

router.put('/warehouses/:warehouseId',((req,res)=>{
    let { warehouseId } = req.params;
    const selectedWarehouse = warehouses.find(warehouse => warehouse.id === warehouseId)
    const newWarehouseInfo = {
        "id":warehouseId,
        "name": req.body.name,
        "address": req.body.address,
        "city": req.body.city,
        "country": req.body.country,
        "contact": {
            "name": req.body.contact.name,
            "position": req.body.contact.position,
            "phone": req.body.contact.phone,
            "email": req.body.contact.email
        }
    }
    const newWarehouseDataSet = warehouses.map(warehouse => {
        if (warehouse.id === warehouseId){
            return warehouse = newWarehouseInfo
        } else {
            return warehouse = warehouse
        }
    })
    
    fs.writeFile(__dirname + '/../data/warehouses.json', JSON.stringify(newWarehouseDataSet, null, 2), (err)=> {
        if(err){
            console.log(err)
        } else {
            res.status(200).json("warehouse info updated")
        }
    })
}))

router.get('/inventories', ((_req, res) => {
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

//post endpoint for adding a new warehouse
router.post('/warehouses/add', ((req, res) => {
    const newWarehouseInfo = {
        "id": uuidv4(),
        "name": req.body.name,
        "address": req.body.address,
        "city": req.body.city,
        "country": req.body.country,
        "contact": {
            "name": req.body.contact.name,
            "position": req.body.contact.position,
            "phone": req.body.contact.phone,
            "email": req.body.contact.email
        }
    }
    const newWarehouseDataSet = warehouses
    newWarehouseDataSet.push(newWarehouseInfo)

    fs.writeFile(__dirname + '/../data/warehouses.json', JSON.stringify(newWarehouseDataSet, null, 2), (err) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json("warehouse Added")
        }
    })
}))



module.exports = router;