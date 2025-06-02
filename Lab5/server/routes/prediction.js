const express = require('express');
const {predictDishPopularity, predictAmountOfWaiters} = require('../controllers/prediction.js');
const { isAdmin } = require('../controllers/auth.js');
const router = express.Router();

router.post('/dish', isAdmin, predictDishPopularity);
router.post('/waiter', isAdmin, predictAmountOfWaiters);

module.exports = router;