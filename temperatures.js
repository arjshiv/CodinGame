
var n = parseInt(readline()); // the number of temperatures to analyse
var temps = readline(); // the n temperatures expressed as integers ranging from -273 to 5526

// Write an action using print()
// To debug: printErr('Debug messages...');
var tempClosestToZero = 10000;
temps = temps.split(/\s+/).map(function(n) {
    return parseInt(n);
}); //split to string array

if (!n) {
    tempClosestToZero = 0;
} else {
    for (var i = n-1; i>=0; i--) {
        var thisTemp = temps[i];
        if (Math.abs(thisTemp) < Math.abs(tempClosestToZero)) {
            tempClosestToZero = thisTemp; //min diff to zero
        } else if (Math.abs(thisTemp) === Math.abs(tempClosestToZero)) {
            tempClosestToZero = (tempClosestToZero > thisTemp) ? tempClosestToZero : thisTemp; //choose the positive temp if already exists
        }
    }
}

print(tempClosestToZero);