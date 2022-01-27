"use strict";

var stars = {
  ashwini: 'Ashwini',
  bharani: 'Bharani',
  karthigai: 'Karthigai',
  rohini: 'Rohini',
  mirugasirisam: 'Mirugasirisam',
  thiruvathirai: 'Thiruvathirai',
  punarpusam: 'Punarpusam',
  poosam: 'poosam',
  ayilyam: 'Ayilyam',
  magam: 'Magam',
  pooram: 'Pooram',
  uttiram: 'Uttiram',
  astham: 'Astham',
  chittirai: 'Chittirai',
  swaati: 'Swaati',
  visakam: 'Visakam',
  anusham: 'Anusham',
  kettai: 'Kettai',
  moolam: 'Moolam',
  pooradam: 'Pooradam',
  uttiradam: 'Uttiradam',
  thiruvonam: 'Tiruvonam',
  avittam: 'Avittam',
  sathayam: 'Sathayam',
  poorettaadhi: 'Poorettaadhi'
};
var rasi = {
  mesham: 'Mesham',
  rishabam: 'Rishabam',
  mithunam: 'Mithunam',
  kadagam: 'Kadagam',
  simmam: 'Simmam',
  kanni: 'Kanni',
  thulaam: 'Thulaam',
  viruchigam: 'Viruchigam',
  dhanusu: 'Dhanusu',
  magaram: 'Magaram',
  kumbam: 'Kumbam',
  meenam: 'Meenam'
};
var engMonths = {
  Jan: 'January',
  Feb: 'Febraury',
  Mar: 'March',
  Apr: 'April',
  May: 'May',
  Jun: 'June',
  Jul: 'July',
  Aug: 'August',
  Sep: 'September',
  Oct: 'October',
  Nov: 'November',
  Dec: 'December'
};
var tamilMonths = ['chithirai', 'vaikasi', 'aani', 'aadi', 'aavani', 'purattaasi', 'aippasi', 'karthigai', 'margazhi', 'thai', 'maasi', 'panguni'];
var engToTamilMnthMap = {
  APR1_MAY15: 'chithirai',
  // Mid-April to mid-May
  MAY15_JUN15: 'vaikasi',
  // Mid-May to mid-June
  JUN15_JUL15: 'aani',
  // Mid-June to mid-July
  JUL15_AUG15: 'aadi',
  // Mid-July to mid-August
  AUG15_SEP15: 'avani',
  // Mid-August to mid-September
  SEP15_OCT15: 'purattaasi',
  // Mid-September to mid-October
  OCT15_NOV15: 'aippasi',
  //Mid-October to mid-November
  NOV15_DEC15: 'karthigai',
  // Mid-November to mid-December
  DEC15_JAN15: 'margazhi',
  // Mid-December to mid-January
  JAN15_FEB15: 'thai',
  // Mid-January to mid-February	
  FEB15_MAR15: 'maasi',
  // Mid-February to mid-March
  MAR15_APR15: 'panguni' //Mid-March to mid-April

};
var rasiMonthMapping = {
  chithirai: 'mesham',
  vaikasi: 'rishabam',
  aani: 'mithunam',
  aadi: 'kadagam',
  avani: 'simmam',
  purattaasi: 'kanni',
  aippasi: 'thulaam',
  karthigai: 'viruchigam',
  margazhi: 'dhanusu',
  thai: 'magaram',
  maasi: 'kumbam',
  panguni: 'meenam'
};
var rasiPlanetMapping = {
  mesham: 'sevvai',
  rishabam: 'sukran',
  mithunam: 'budhan',
  kadagam: 'moon',
  simmam: 'sun',
  kanni: 'budhan',
  thulaam: 'sukran',
  viruchigam: 'sevvai',
  dhanusu: 'guru',
  magaram: 'shani',
  kumbam: 'shani',
  meenam: 'guru'
};
var rasiPlanetMovingChart = {
  sun: '1-month',
  moon: '2.25-days',
  sevvai: '45-days',
  budhan: '30-days',
  sukran: '30-days',
  guru: '12-months',
  shani: '30-months',
  raghu: '18-months',
  kethu: '18-months'
};