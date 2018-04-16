var express = require('express');
var router = express.Router();

const controllerWebPush = require('../controllers/web-push');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/push', controllerWebPush.pushNotification);


module.exports = router;
