var express = require('express');
var router = express.Router();
var advertiserService = require('../services/advertiserService');
/* GET home page. */
router.get('/', async function(req, res, next) {
  let adsList = await advertiserService.getListOfAdvertisements(req.query);
  let response = {};
  if(adsList.statusCode === 200){
    response.advertiser= adsList.advertiser;
    response.listOfAdvertisements = adsList.listOfAdvertisements
  }else {
    response.message = adsList.message;
    response.advertiser= adsList.advertiser;
  }
  return res.status(adsList.statusCode).send(response)
});

module.exports = router;
