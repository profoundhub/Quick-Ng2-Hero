var express = require('express');
var router = express.Router();

/* GET users Listings */
router.get('/', function(req, res, next) {
  res.json({
    name: "Daniel",
    last: "Lim"
  });
});

module.exports = router;
