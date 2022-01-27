const numberChart = {
    A: 1,
    I: 1,
    J: 1,
    Q: 1,
    Y: 1,
    B: 2,
    K: 2,
    R: 2,
    C: 3,
    G: 3,
    L: 3,
    S: 3,
    D: 4,
    M: 4,
    T: 4,
    E: 5,
    H: 5,
    N: 5,
    X: 5,
    U: 6,
    V: 6,
    W: 6,
    O: 7,
    Z: 7,
    F: 8,
    P: 8
};

const planetChart = ['sun','moon','guru','rhagu','budhan','sukran','kethu','shani','sevvaai'];

const friendPlanets = {
    sun: [ "Moon", "Guru", "Sevvai" ],
    moon: [ "Sun", "Budhan" ],
    sevvaai: [ "Sun", "Moon", "Guru" ],
    budhan: [ "Sun" ],
    guru: [ "Sun", "Moon", "Sevvaai"],
    sukran: [ "Budhan", "Shani", "Rhagu", "Kethu" ],
    shani: [ "Budhan", "Sukran", "Rhagu", "Kethu" ],
    rhagu: [ "Shani", "Sukran" ],
    kethu: [ "Shani", "Sukran" ]
};

const enemyPlanets = {
    sun: [ "Sukran", "Shani", "Rhagu", "Kethu" ],
    moon: [ "Rhagu", "Kethu" ],
    sevvaai: [ "Budhan", "Rhagu", "Kethu" ],
    budhan: [ "Moon" ],
    guru: [ "Budhan", "Sukran"],
    sukran: [ "Sun", "Moon" ],
    shani: [ "Sun", "Moon", "Sevvaai" ],
    rhagu:  [ "Sun", "Moon", "Sevvaai" ],
    kethu:  [ "Sun", "Moon", "Sevvaai" ]
};

const equalPlanets = {
    sun: [ "Budhan" ],
    moon: [ "Sevvaai", "Guru", "Shani", "Sukran" ],
    sevvaai: [ "Sukran", "Shani" ],
    budhan: [ "Sevvaai", "Guru", "Shani", "Rhagu", "Kethu" ],
    guru: [ "Shani", "Rhagu", "Kethu"],
    sukran: [ "Sevvaai", "Guru" ],
    shani: [ "Guru" ],
    rhagu:  [ "Budhan", "Guru" ],
    kethu:  [ "Budhan", "Guru" ]
};


function matchPlanetsForRelation(planet, namePlanet, relation) {
    var planetsArray = [] ;
    if ('friend' === relation) {
        planetsArray =  friendPlanets[planet];
    } else if ('enemy' === relation) {
        planetsArray =  enemyPlanets[planet];
    } else {
        planetsArray =  equalPlanets[planet];
    }
    for(i=0; i < planetsArray.length; i++ ) {
        const planetArr = planetsArray[i].toUpperCase();
        const nameMatch = namePlanet.toUpperCase();
        if ( planetArr  === nameMatch ) {
            return true;
        }
    }
    return false;
}

function checkPlanetRelation(planet, namePlanet){
    var result = '';
    result = matchPlanetsForRelation(planet, namePlanet, 'friend') ? 'Friend'  : '';
    if( result === ''){
        result = matchPlanetsForRelation(planet, namePlanet, 'enemy') ? 'Enemy' : '';
    }
    if( result === ''){
        result = matchPlanetsForRelation(planet, namePlanet, 'equal') ? 'Equal' : '';
    }
    return result;
}

function findPlanet(num){
    const index = Number(num) - 1;
    return planetChart[index];
}

function resultantNumber(num) {
    var resNum = num.toString();
    var resArr = Array.from(resNum);
    var total=0;
    for (i = 0; i < resArr.length; i++) {
        total += Number(resArr[i]);
    }
    return total;
}

function getPlanetNumber(num){
    var total = resultantNumber(num) ;
    do {
        total = resultantNumber(total);
    } while (total >= 10);
    return total;
}

function getNameNumber(name) {
    var nameArr = [];
    var numName = name.trim();
    numName = numName.toUpperCase();
    nameArr = Array.from(numName);
    var total = 0;
    nameArr.forEach(function (item, index) {
        total += numberChart[item];
    });
    return total;
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function getBirthDayNumber(dob){
    var dayNum = dob.split("-");
    const day = Number(dayNum[2]);
    return getPlanetNumber(day);
}

function getDobNumber(dob) {
    var dobstr = dob;
    dobstr = replaceAll(dob, "-", "");
    var dobNum = Array.from(dobstr);
    var total = 0;
    dobNum.forEach(function (item, index) {
        total += Number(item);
    });
    return total;
}

module.exports = {
    getNameNumber: getNameNumber,
    getDobNumber: getDobNumber,
    getPlanetNumber: getPlanetNumber,
    getBirthDayNumber: getBirthDayNumber,
    findPlanet: findPlanet,
    checkPlanetRelation: checkPlanetRelation
};