const express = require('express');
const router = express.Router();
const warehouses = require('../data/warehouses.json')
const inventories = require('../data/inventories.json')
const fs= require("fs")
const { v4: uuidv4 } = require('uuid');


router.get('/inventories', ((_req, res) => {
    res.status(200).json(inventories)
}))

router.post('/inventories', ((req, res) => {
    const { warehouseID, warehouseName, itemName, description, category, status, quantity } = req.body;

    if (warehouseID &&  warehouseName && itemName && description && category && status && quantity)
    {
     inventories.push({

      id: uuidv4(),
      warehouseID,
      warehouseName,
      itemName,
      description,
      category,
      status,
      quantity
     
     })
    }

    else{
        res.status(400).send('Incomplete Application');
    }
    
    fs.writeFile("../data/inventories.json", JSON.stringify(inventories, null, 2), (err)=> {
        if(err){
            console.log(err)
        } else {
            res.status(200).json("Inventory info updated")
        }
    })
}));


// router to update inventory item
router.put('/inventory/:inventoryId', ((req, res) => {
    let inventoryId = req.params.inventoryId;
    
    //remember to send warehouseId from front-end
    const {warehouseId,  warehouseName, itemName, description, category, status, quantity } = req.body;

     if (warehouseId, warehouseName && itemName && description && category && status && quantity) {
        const newInventoryInfo = {
            id: inventoryId,
            warehouseId,
            warehouseName,
            itemName,
            description,
            category,
            status,
            quantity
        }
         const newInventoryData = inventories.map(inventory => {
             if (inventory.id === inventoryId) {
                 return inventory = newInventoryInfo
             } else {
                 return inventory = inventory
             }
         })
        
         fs.writeFile(__dirname + '/../data/inventories.json', JSON.stringify(newInventoryData, null, 2), (err) => {
             if (err) {
                 console.log(err)
             } else {
                 res.status(200).json("Inventory info updated")
             }
         })
         res.status(200).json(newInventoryData)
    }
}))


module.exports = router;

