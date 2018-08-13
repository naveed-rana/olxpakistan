var express = require('express');
var router = express.Router();
var addFeedBack = require('../controllers/feedBackQuery');
/* GET users listing. */
router.post('/',addFeedBack);


module.exports = router;
