const express = require('express');
const transcontroller = require('../controllers/TransController');
const transrouter = express.Router();

transrouter.post("/inserttrans", transcontroller.inserttrans);
transrouter.get("/viewtrans", transcontroller.viewtrans);
transrouter.get("/viewtransbyemail/:email", transcontroller.viewtransbyemail);

module.exports = transrouter;
