var express = require('express');
var router = express.Router();
var conversionService = require('../services/conversions');
/* GET home page. */
router.get('/', async function(req, res, next) {
    let countStatus = await conversionService.getConversions();
    return res.status(countStatus.statusCode).send(countStatus.count)
});

router.post('/', async function (req, res, next) {
    let response = await conversionService.updateConversions(req.query);
    return res.status(response.statusCode).send(response.message)
});

module.exports = router;
