var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {
      "title": "Hello",
      "text": "Hello text fatched from server."
    },
    {
      "title": "About",
      "text": "About text fatched from server"
    }
  ]);
});

module.exports = router;
