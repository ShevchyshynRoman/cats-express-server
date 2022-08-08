const express = require('express');

const imageController = require('../controller/index');
const middleWare = require('../middleware/middleware');

const router = express.Router();

router.get('/randomimage',middleWare, imageController.getRandomImage);

module.exports = router;
