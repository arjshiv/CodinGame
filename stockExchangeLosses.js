var n = parseInt(readline());
var vs = readline().split(/\s+/).map(function(v) {
    return parseInt(v);
});

var maxLoss = 0;
var maxValue = vs[0] || 0; //keep a running track of the maximum value we've reached

for (var i = 1; i < n; i++) {
    //naive O(n^2) solution
    // for (var j = i + 1; j < n; j++) {
    //     var possibleLoss = vs[j] - vs[i];
    //     if (possibleLoss < maxLoss) {
    //         maxLoss = possibleLoss;
    //     }
    // }
    
    //better O(n) solution
    var currentDiff = vs[i] - maxValue;
    
    if (currentDiff < maxLoss) {
        maxLoss = currentDiff;
    }
    
    if (vs[i] > maxValue) {
        maxValue = vs[i];
    }
}

print(maxLoss);
