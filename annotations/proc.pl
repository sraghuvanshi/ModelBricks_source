#!/usr/bin/perl
#use strict;
use  warnings;
use   utf8;
use XML::Tidy;
use 5.010;
use XML::LibXML;
 
my $tidy_obj = XML::Tidy->new('filename' => 'VCML_annotations_test.vcml');
   $tidy_obj->tidy();
   $tidy_obj->write('filename' => 'better.vcml');

open(IN,"better.vcml");

while(my $line = <IN>)
{
    if ($line=~/metaid_/ and $line=~/about/)
    {
        $line =~/metaid_(.*?)\"/;
        $metaid = $1;
    }
    elsif (defined($line) && $line=~/miriam/) {
        $line =~/urn\:(.*?)\"/;
        my $web = $1;
        print "$metaid $web\n";
    }
    elsif ($line=~/metaid_/ && $line =~/vcid/) {
        $line =~/metaid_(.*?)\" \//;
        $match = $1;
        $match=~s/\" vcid=\"/ /;
        print "$match\n";
    }
}
