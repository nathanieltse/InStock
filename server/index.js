const express = require("express");
const cors = require("cors");
const app = express();



require("dotenv").config();
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});