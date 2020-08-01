var express = require('express');
var router = express.Router();
var conversionService = require('../services/conversions');
/* GET home page. */
router.get('/', async function(req, res, next) {
    return res.status(200).send(await conversionService.getConversions(req.query))
});

router.post('/', function (req, res, next) {
    console.log(req.query);
    return res.status(201).send(conversionService.updateConversions(req.query))
})

module.exports = router;
