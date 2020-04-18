const express = require('express');
const router = express.Router();

const monitor = require('./monitor');

router.use('/monitor', monitor);

module.exports = router;