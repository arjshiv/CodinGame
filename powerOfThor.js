var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialTX = parseInt(inputs[2]); // Thor's starting X position
var initialTY = parseInt(inputs[3]); // Thor's starting Y position

var thorX = initialTX;
var thorY = initialTY;



// game loop
while (true) {
	var remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
	//west or east ?
	var directionX = '';
	var directionY = '';

	// Write an action using print()
	// To debug: printErr('Debug messages...');

	if (thorX !== lightX) {
		directionX = (thorX > lightX) ? 'W' : 'E';
		thorX += (directionX === 'E') ? 1 : -1;
	}
	if (thorY !== lightY) {
		//north or south
		directionY = (thorY > lightY) ? 'N' : 'S';
		thorY += (directionY === 'S') ? 1 : -1;
	}
	print(directionY + directionX); // A single line providing the move to be made: N NE E SE S SW W or NW
}