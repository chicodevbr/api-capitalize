const express = require('express');

const router = express.Router();
const capitalizeController = require('../controllers/capitalizeControllers');

router.get('/', capitalizeController.index);
router.post('/word', capitalizeController.capitalizeWord);
router.post('/text', capitalizeController.capitalizeText);

module.exports = router;
