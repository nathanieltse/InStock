const express = require('express');
const router = express.Router();
const warehouses = require('../data/warehouses.json')
const inventories = require('../data/inventories.json')
const fs= require("fs")

