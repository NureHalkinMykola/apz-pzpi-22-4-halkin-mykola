const express = require('express');
const {create, getAll, edit, deleter} = require('../controllers/dish.js');
const { isAdmin } = require('../controllers/auth.js');
const router = express.Router();

router.post('/create', isAdmin, create);
router.get('/getAll', getAll);
router.post('/edit/:id', isAdmin, edit);
router.post('/delete', isAdmin, deleter);

module.exports = router;