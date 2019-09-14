var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/calculate', function (req, res) {
  var patt = new RegExp("[0-9]+(\.[0-9]+)?[-/+/*//]{1}[0-9]+(\.[0-9]+)?");
  var exp = req.body.exp;
  if (exp.match(patt)) {
    var value = eval(exp);
    res.json({ result: value });
  }
  else {
    console.log('Bad Input');
    res.status(400);
    res.json({ result: "Bad Input" });
  }
});
module.exports = router;
