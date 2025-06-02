const express = require('express');
const {create, getAll, edit, deleter, getOrder, stopActivity} = require('../controllers/order.js');
const { isAuthenticated, isAdmin } = require('../controllers/auth.js');
const router = express.Router();

router.post('/create', isAuthenticated, create);
router.get('/getAll', getAll);
router.get('/getOrder', getOrder);
router.post('/edit/:id', isAdmin, edit);
router.post('/stopActivity/:id', stopActivity);
router.post('/delete', isAdmin, deleter);

module.exports = router;