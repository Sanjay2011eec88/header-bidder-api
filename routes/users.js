var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({users:[{name:"abc", isActive:"true"}, {name:"xyz", isActive:false}]});
});

module.exports = router;
