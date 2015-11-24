
var road = parseInt(readline()); // the length of the road before the gap.
var gap = parseInt(readline()); // the length of the gap.
var platform = parseInt(readline()); // the length of the landing platform.
var roadEndCoordinate = road - 1;
var requiredSpeed = gap + 1;
// game loop
while (true) {
    var speed = parseInt(readline()); // the motorbike's speed.
    var coordX = parseInt(readline()); // the position on the road of the motorbike.

    // Write an action using print()
    // To debug: printErr('Debug messages...');
    
    var decision = 'WAIT';
    
    if (coordX < roadEndCoordinate) {
        if (speed < requiredSpeed) {
            decision = 'SPEED'
        } else if (speed > requiredSpeed) {
            decision = 'SLOW'
        }
    } else if (coordX === roadEndCoordinate) {
        decision = 'JUMP'
    } else {
        decision = 'SLOW'
    }
    

    print(decision); // A single line containing one of 4 keywords: SPEED, SLOW, JUMP, WAIT.
}