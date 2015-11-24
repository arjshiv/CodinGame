// game loop
while (true) {
    var inputs = readline().split(' ');
    var spaceX = parseInt(inputs[0]);
    var spaceY = parseInt(inputs[1]);
    var fireOrHold = 'HOLD'
    var highestMountain = -1;
    var greatestHeight = -1;
    for (var i = 0; i < 8; i++) {
        var mountainH = parseInt(readline()); // represents the height of one mountain, from 9 to 0. Mountain heights are provided from left to right.
        
        if (mountainH > greatestHeight) {
            greatestHeight = mountainH;
            highestMountain = i;
        }
    }
    
    if (highestMountain === spaceX) {
        fireOrHold = 'FIRE';
    }
    

    // Write an action using print()
    // To debug: printErr('Debug messages...');

    print(fireOrHold); // either:  FIRE (ship is firing its phase cannons) or HOLD (ship is not firing).
}