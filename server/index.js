const express = require("express");
const cors = require("cors");
const app = express();

//routes goes here
const warehouseRoutes = require('./routes/warehouse');

//env variables 
require("dotenv").config();
const port = process.env.PORT || 8000;

//middleware
app.use(express.json());
app.use(express.static("public"))
app.use(cors());


//endoints 
app.use('/api', warehouseRoutes);

//listening on port 8080
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});