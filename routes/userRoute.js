const express = require("express")
const handelUser = require('../controllers/handelUser')
const router = express.Router();

router.get('/user', handelUser.getAllUsers);
router.post('/user', handelUser.createUser);


module.exports = router;