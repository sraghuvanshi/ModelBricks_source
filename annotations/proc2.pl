#!/usr/bin/perl
use strict;
use  warnings;
use   utf8;
use XML::Tidy;
use 5.010;
use XML::LibXML;
 
my $tidy_obj = XML::Tidy->new('filename' => 'VCML_annotations_test.vcml');
   $tidy_obj->tidy();
   $tidy_obj->write('filename' => 'better.vcml');

open(INFILE, "<", 'better.vcml');
my @vcid;
my @metaids;
my $metaid;

while(my $line = <INFILE>)
{
    if ($line=~/metaid_/ && $line =~/vcid/) {
        $line =~/metaid_(.*?)\" \//;
        my $match = $1;
        $match=~s/\" vcid=\"/ /;
        my @ids = split ' ', $match;
        push @vcid, $ids[1];
        push @metaids, $ids[0];
    }
}
seek(INFILE,0,0);
while(my $line = <INFILE>)
{
    if ($line=~/metaid_/ and $line=~/about/)
    {
        $line =~/metaid_(.*?)\"/;
        $metaid = $1;
        for my $i (0 .. $#metaids)
        {
            if ($metaid eq $metaids[$i]){
                $metaid=$vcid[$i];
            }
        }
    }
    elsif (defined($line) && $line=~/miriam/) {
        $line =~/miriam\:(.*?)\"/;
        my $web = "http://identifiers.org/".$1;
        print "$metaid $web\n";
    }
}
     close (INFILE);
