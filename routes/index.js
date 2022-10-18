var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/hello', function(req, res, next) {
  res.send('Merhaba, GET isteği attınız');

});

router.post('/hello', function(req, res, next) {
  res.send('Merhaba, POST isteği attınız');
});

router.put('/hello', function(req, res, next) {
  res.send('Merhaba, PUT isteği attınız');
});

router.delete('/hello', function(req, res, next) {
  res.send('Merhaba, DELETE isteği attınız');
});

module.exports = router;
