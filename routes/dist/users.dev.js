"use strict";

var express = require('express');

var router = express.Router();
/* GET users listing. */

router.get('/', function (req, res, next) {
  res.render('users', {
    title: 'Peyar Kanitham'
  });
});
router.post('/diff', function (req, res, next) {
  // To set two dates to two variables
  var date1 = new Date(req.body.borndate);
  var date2 = new Date(req.body.datedied); // To calculate the time difference of two dates

  var Difference_In_Time = date2.getTime() - date1.getTime(); // To calculate the no. of days between two dates

  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  res.render('users', {
    title: 'Peyar Kanitham',
    bornDate: date1,
    dateDied: date2,
    diff: Difference_In_Days
  });
});
module.exports = router;