"use strict";

var express = require('express');

var moment = require('moment');

var numberology = require('../scripts/numerology');

var router = express.Router();
/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Peyar Kanitham'
  });
});
router.post('/', function (req, res, next) {
  var nameNum = numberology.getNameNumber(req.body.name);
  var dobNum = numberology.getDobNumber(req.body.dob);
  var resNameNum = numberology.getPlanetNumber(nameNum);
  var resDobNum = numberology.getPlanetNumber(dobNum);
  var resBirthNum = numberology.getBirthDayNumber(req.body.dob);
  var dayPlanet = numberology.findPlanet(resBirthNum);
  var dobPlanet = numberology.findPlanet(resDobNum);
  var namePlanet = numberology.findPlanet(resNameNum);
  var dayRelation = numberology.checkPlanetRelation(dayPlanet, namePlanet);
  var dobRelation = numberology.checkPlanetRelation(dobPlanet, namePlanet);
  var dob = moment(req.body.dob).format("DD MM yyyy");
  res.render('index', {
    title: 'Peyar Kanitham',
    name: req.body.name,
    dob: dob,
    nameNum: nameNum,
    resNameNum: resNameNum,
    resDobNum: resDobNum,
    resBirthNum: resBirthNum,
    dayPlanet: dayPlanet,
    dobPlanet: dobPlanet,
    namePlanet: namePlanet,
    dayRelation: dayRelation,
    dobRelation: dobRelation
  });
});
module.exports = router;