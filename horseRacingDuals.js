

var N = parseInt(readline());
var sortedStrengthsArray = [];
for (var i = 0; i < N; i++) {
    var pi = parseInt(readline());
    sortedStrengthsArray.push(parseInt(pi));
}

var minDiff = 1000000000000000;
sortedStrengthsArray = sortedStrengthsArray.sort(function(a, b) {
    return (b - a);
});

for (var i = sortedStrengthsArray.length; i > 0; i--) {
    var thisDiff = sortedStrengthsArray[i - 1] - sortedStrengthsArray[i];
    if (thisDiff < minDiff) {
        minDiff = thisDiff;
    }
}

print(minDiff);