var express = require('express');
var router = express.Router();
var localStorage = require('localStorage');
var login = require('../controller/loginController')
var newsOlic24 = require('../controller/dashboardController')
var fuDes = require('../controller/fulldescriptionController')
/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('login', {'errMsg': ''});
});
router.get('/logout', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  localStorage.removeItem('sessionAuth')
  res.render('login', {'errMsg': ''});
});
router.post('/login-validation', function (req, res, next) {
  login.handleLogin(req, res);
});
router.get('/full_description', function (req, res, next) {
  if (localStorage.getItem('sessionAuth') == 'true') {
    console.log('fulldescGet ');
    fuDes.handleDashboard(req, res);
  }
  else{
    console.log('unauthuser');
  }
});
router.all('/home', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  if (localStorage.getItem('sessionAuth') == 'true') {
    console.log('redirecting to home now in router.get./home')
  newsOlic24.handleDashboard(req, res);
  }else{
    console.log('unauthuser');
    // res.render('error',{message:'UnAuthorised User'});
    res.render('login', {'errMsg': 'Please Login to access home page'});
  }
  // res.render('newsOlic24');
});

router.all('*',function(req, res,next){
  res.render('error404');
})
module.exports = router;
