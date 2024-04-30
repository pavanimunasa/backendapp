const express = require('express');
const admincontroller = require('../controllers/AdminController');
const adminrouter = express.Router();

adminrouter.get("/viewUsers", admincontroller.viewUsers);
adminrouter.delete("/deleteUser/:email", admincontroller.deleteUser);
adminrouter.post("/checkAdminLogin", admincontroller.checkAdminLogin);
adminrouter.get("/viewContacts",admincontroller.viewContacts);

module.exports = adminrouter;
