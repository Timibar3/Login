var express = require('express');
var router = express.Router();
const indexController = require ('../controllers/indexController')

/* GET home page. */
router.get('/home', indexController.home);

router.get('/administrator', indexController.admin);



module.exports = router;
