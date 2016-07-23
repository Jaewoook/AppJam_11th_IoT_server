'use strict';
const express = require('express');
const router = express.Router();

router.get('/check', (req, res) => {
    res.send('Server status OK.');
});

module.exports = router;
