const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();
router.get('/register',userController.getMainPage);
router.post('/submitData', userController.addDetails)


module.exports=router;

