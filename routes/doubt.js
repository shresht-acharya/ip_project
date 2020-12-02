const express = require('express');

const router = express.Router();

const doubtController = require('../controller/doubt_controller');

router.get('/', doubtController.doubt);

module.exports = router; 