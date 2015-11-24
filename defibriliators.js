
function stringToFloat(s) {
    return parseFloat(s.replace(/\,/, '.'));
}
var PHONE = {};
PHONE.lon = stringToFloat(readline()); //convert to decimal notation
PHONE.lat = stringToFloat(readline()); //convert to decimal notation
var N = parseInt(readline());

var closestDefibName = 'none';

var EARTHRADIUS = 6371;
var minDist = Infinity;

for (var i = 0; i < N; i++) {
    var DEFIB = readline();
    var thisDefib = getDefibObjectFromAttributes(DEFIB);
    var dist = getDistance(thisDefib, PHONE);
    if (dist < minDist) {
        minDist = dist;
        closestDefibName = thisDefib.name;
    }
}

//print answer
print(closestDefibName);


function getDefibObjectFromAttributes(attributeString) {
    var attributes = attributeString.split(';');
    var thisDefib = {
        id: attributes[0] || 'undef',
        name: attributes[1] || 'undef',
        address: attributes[2] || '',
        phone: attributes[3] || '',
        lon: attributes[4] || '0',
        lat: attributes[5] || '0',
    };
    thisDefib.lon = stringToFloat(thisDefib.lon);
    thisDefib.lat = stringToFloat(thisDefib.lat);
    return thisDefib;
}

function getDistance(thisDefib, phone) {
    var x = (thisDefib.lon - phone.lon) * Math.cos((thisDefib.lat + phone.lat)/2);
    var y = (thisDefib.lat - phone.lat);
    return EARTHRADIUS * Math.sqrt((x*x) + (y*y));
}