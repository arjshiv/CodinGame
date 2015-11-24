use strict;
use warnings;
#use diagnostics;
use 5.20.1;

select(STDOUT); $| = 1; # DO NOT REMOVE

my $tokens;


# game loop
while (1) {
    chomp($tokens=<STDIN>);
    my ($space_x, $space_y) = split(/ /,$tokens);
    my $tallestMountainIndex = -1;
    my $tallestMountainHeight = -1;
    
    for my $i (0..7) {
        chomp(my $mountain_h = <STDIN>); # represents the height of one mountain, from 9 to 0. Mountain heights are provided from left to right.
        if ($mountain_h > $tallestMountainHeight) {
            $tallestMountainHeight = $mountain_h;
            $tallestMountainIndex = $i;
        }
    }
    
    if ($space_x == $tallestMountainIndex) {
        print "FIRE\n"; # either:  FIRE (ship is firing its phase cannons) or HOLD (ship is not firing).
    } else {
        print "HOLD\n"; # either:  FIRE (ship is firing its phase cannons) or HOLD (ship is not firing).
    }    
    
    # Write an action using print
    # To debug: print STDERR "Debug messages...\n";

    
}