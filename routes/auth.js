const express = require('express');

const router = express.Router();

// middlewares: validations
//const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const { createOrUpdateUser, currentUser } = require('../controllers/auth');

// endpoints routes
router.post('/create-or-update-user', createOrUpdateUser);
router.post('/current-user', currentUser);
router.post('/current-admin', currentUser);

module.exports = router;
