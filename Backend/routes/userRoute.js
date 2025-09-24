const userController=require('../Controllers/userController')
const express = require("express");
const router = express.Router();
router.post("/create-role", userController.createUser);
router.post('/create-poll',userController.createPoll)

module.exports = router;