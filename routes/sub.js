const express = require('express');
const router = express.Router();

// middlewares - validations
//const { authCheck, adminCheck } = require('../middlewares/auth');

// middlewares - controller (final logic)
const { create, read, update, remove, list } = require('../controllers/sub');

// routes - endpoints
router.post('/sub', create);
router.get('/subs', list);
router.get('/sub/:slug', read);
router.put('/sub/:slug', update);
router.delete('/sub/:slug', remove);

module.exports = router;
