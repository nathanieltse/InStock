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
    const { id, warehouseID, warehouseName, itemName, description, category, status, quantity } = req.body;

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
            res.status(200).json("warehouse info updated")
        }
    })
}));

module.exports = router;

