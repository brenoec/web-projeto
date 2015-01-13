var express = require('express');
var router = express.Router();

/* GET start page. */
router.get('/', function(req, res) {
  res.render('start', { title: 'Domorrow', active: req.session.active });
});

module.exports = router;
