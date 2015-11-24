use strict;
use warnings;
#use diagnostics;
use 5.20.1;

select(STDOUT); $| = 1; # DO NOT REMOVE


my $tokens;

# light_x: the X position of the light of power
# light_y: the Y position of the light of power
# initial_tx: Thor's starting X position
# initial_ty: Thor's starting Y position
chomp($tokens=<STDIN>);
my ($light_x, $light_y, $initial_tx, $initial_ty) = split(/ /,$tokens);
my $tx = $initial_tx;
my $ty = $initial_ty;

# game loop
while (1) {
    chomp(my $remaining_turns = <STDIN>); # The remaining amount of turns Thor can move. Do not remove this line.
    my $x = ($tx <= $light_x) ? (($tx == $light_x) ? '' : 'E') : 'W';
    my $y = ($ty <= $light_y) ? (($ty == $light_y) ? '' : 'S') : 'N';
    
    $tx += ($tx <= $light_x) ? (($tx == $light_x) ? 0 : 1) : -1;
    $ty += ($ty <= $light_y) ? (($ty == $light_y) ? 0 : 1) : -1;
    
    
    
    print $y.$x."\n"; # A single line providing the move to be made: N NE E SE S SW W or NW
}