#!/usr/bin/env perl6

use v6;
use strict;

chdir 'swift-evolution/proposals';
my @files = dir;

say "[";
for @files -> $file {
    my $filename = $file.Str;
    if $filename ~~ /(\d+)'-'(.*)'.md'/ {
	my $senumber = $0;
	my $title = $1;

	say '{';
	say "\"issue_number\" : \"SE-$senumber\",";
	say "\"title\" : \"$title\"";
	say '},';
    }
}
say "]";
