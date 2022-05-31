const express = require('express');
const router = express.Router();

// middlewares - validations
//const { authCheck, adminCheck } = require('../middlewares/auth');

// middlewares - controller (final logic)
const { create, read } = require('../controllers/carrusel');

// routes - endpoints
router.post('/carrusel', create);
router.get('/carrusel', read);

module.exports = router;
