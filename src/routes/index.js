const getCodeData = require('../contorller');

const router = require('express').Router();


router.get('/entity',getCodeData);


module.exports = router;