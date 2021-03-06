var app = angular.module('app', ['ui.bootstrap']);
app.controller('AppController', function($scope) {

    $scope.tempo = 120;

    var conductor = new BandJS();

    conductor.setTempo($scope.tempo);

    var melody = conductor.createInstrument('square'),
        harmony = conductor.createInstrument('square'),
        bassline = conductor.createInstrument('sawtooth');

    var newNoteTable = ["C0","C#0","Db0","D0","D#0","Eb0","E0","F0","F#0","Gb0","G0","G#0","Ab0","A0","A#0","Bb0","B0","C1","C#1","Db1","D1","D#1","Eb1","E1","F1","F#1","Gb1","G1","G#1","Ab1","A1","A#1","Bb1","B1","C2","C#2","Db2","D2","D#2","Eb2","E2","F2","F#2","Gb2","G2","G#2","Ab2","A2","A#2","Bb2","B2","C3","C#3","Db3","D3","D#3","Eb3","E3","F3","F#3","Gb3","G3","G#3","Ab3","A3","A#3","Bb3","B3","C4","C#4","Db4","D4","D#4","Eb4","E4","F4","F#4","Gb4","G4","G#4","Ab4","A4","A#4","Bb4","B4","C5","C#5","Db5","D5","D#5","Eb5","E5","F5","F#5","Gb5","G5","G#5","Ab5","A5","A#5","Bb5","B5","C6","C#6","Db6","D6","D#6","Eb6","E6","F6","F#6","Gb6","G6","G#6","Ab6","A6","A#6","Bb6","B6","C7","C#7","Db7","D7","D#7","Eb7","E7","F7","F#7","Gb7","G7","G#7","Ab7","A7","A#7","Bb7","B7","C8"]
    var shortNoteTable = ["C4","C#4","Db4","D4","D#4","Eb4","E4","F4","F#4","Gb4","G4","G#4","Ab4","A4","A#4","Bb4","B4","C5","C#5","Db5","D5","D#5","Eb5","E5","F5","F#5","Gb5","G5","G#5","Ab5","A5","A#5","Bb5","B5","C6","C#6","Db6","D6","D#6","Eb6"]
    var string = 'katsuraku';

    var midiNotesArray = string.toLowerCase().split('').map(function (x) {
      if(isNaN(x)) {
        return x = x.charCodeAt(0) - 97
      } else {
        return parseInt(x) + 26
      }
    });

    var notes = midiNotesArray.map(function (x) {
      return x = shortNoteTable[x];
    });

    notes.forEach(function (note) {
      harmony.note('half', note)
    })
    // Bar 1
    // melody.note('half', 'Bb4')
    //     .rest('dottedEighth')
    //     .note('sixteenth', 'Bb4')
    //     .note('tripletEighth', 'Bb4')
    //     .note('tripletEighth', 'Bb4')
    //     .note('tripletEighth', 'Bb4');
    // harmony.note('half', 'C7')
    //     .note('half', 'D7')
    //     .note('half', 'E7')
    //     .note('half', 'F7')
    //     .note('half', 'G7')
    //     .note('half', 'A7')
    //     .note('half', 'B7')
    //     .note('half', 'C7');
    // bassline.note('quarter', 'Bb2')
    //     .note('tripletEighth', 'Bb2')
    //     .note('tripletEighth', 'Bb2')
    //     .note('tripletEighth', 'Bb2')
    //     .note('quarter', 'Bb2')
    //     .note('tripletEighth', 'Bb2')
    //     .note('tripletEighth', 'Bb2')
    //     .note('tripletEighth', 'Bb2');
    //
    // // Bar 2
    // melody.note('dottedEighth', 'Bb4')
    //     .note('sixteenth', 'Ab4')
    //     .note('quarter', 'Bb4')
    //     .rest('dottedEighth')
    //     .note('sixteenth', 'Bb4')
    //     .note('tripletEighth', 'Bb4')
    //     .note('tripletEighth', 'Bb4')
    //     .note('tripletEighth', 'Bb4');
    // harmony.note('dottedEighth', 'C4')
    //     .note('sixteenth', 'C4')
    //     .note('quarter', 'C4')
    //     .rest('dottedEighth')
    //     .note('sixteenth', 'C4')
    //     .note('tripletEighth', 'C4')
    //     .note('tripletEighth', 'C4')
    //     .note('tripletEighth', 'C4');
    // bassline.note('quarter', 'Ab2')
    //     .note('tripletEighth', 'Ab2')
    //     .note('tripletEighth', 'Ab2')
    //     .note('tripletEighth', 'Ab2')
    //     .note('quarter', 'Ab2')
    //     .note('tripletEighth', 'Ab2')
    //     .note('tripletEighth', 'Ab2')
    //     .note('tripletEighth', 'Ab2');
    //
    // // Bar 3
    // melody.note('dottedEighth', 'Bb4')
    //     .note('sixteenth', 'Ab4')
    //     .note('quarter', 'Bb4', true)
    //     .note('dottedEighth', 'Bb4', true)
    //     .note('sixteenth', 'Bb4')
    //     .note('tripletEighth', 'Bb4')
    //     .note('tripletEighth', 'Bb4')
    //     .note('tripletEighth', 'Bb4');
    // harmony.note('dottedEighth', 'Db4')
    //     .note('sixteenth', 'Db4')
    //     .note('quarter', 'Db4', true)
    //     .note('dottedEighth', 'Db4', true)
    //     .note('sixteenth', 'Db4')
    //     .note('tripletEighth', 'Db4')
    //     .note('tripletEighth', 'Db4')
    //     .note('tripletEighth', 'Db4');
    // bassline.note('quarter', 'Gb2')
    //     .note('tripletEighth', 'Gb2')
    //     .note('tripletEighth', 'Gb2')
    //     .note('tripletEighth', 'Gb2')
    //     .note('quarter', 'Gb2')
    //     .note('tripletEighth', 'Gb2')
    //     .note('tripletEighth', 'Gb2')
    //     .note('tripletEighth', 'Gb2');
    //
    // // Bar 4
    // melody.note('eighth', 'Bb4')
    //     .note('sixteenth', 'F4')
    //     .note('sixteenth', 'F4')
    //     .note('eighth', 'F4')
    //     .note('sixteenth', 'F4')
    //     .note('sixteenth', 'F4')
    //     .note('eighth', 'F4')
    //     .note('sixteenth', 'F4')
    //     .note('sixteenth', 'F4')
    //     .note('eighth', 'F4')
    //     .note('eighth', 'F4');
    // harmony.note('eighth', 'Db4')
    //     .note('sixteenth', 'A3')
    //     .note('sixteenth', 'A3')
    //     .note('eighth', 'A3')
    //     .note('sixteenth', 'A3')
    //     .note('sixteenth', 'A3')
    //     .note('eighth', 'A3')
    //     .note('sixteenth', 'A3')
    //     .note('sixteenth', 'A3')
    //     .note('eighth', 'A3')
    //     .note('eighth', 'A3');
    // bassline.note('quarter', 'Gb2')
    //     .note('quarter', 'F2')
    //     .note('quarter', 'F2')
    //     .note('eighth', 'G2')
    //     .note('eighth', 'A2');
    //
    // // Bar 5
    // melody.note('quarter', 'Bb4')
    //     .note('quarter', 'F4', true)
    //     .note('dottedEighth', 'F4', true)
    //     .note('sixteenth', 'Bb4')
    //     .note('sixteenth', 'Bb4')
    //     .note('sixteenth', 'C5')
    //     .note('sixteenth', 'D5')
    //     .note('sixteenth', 'Eb5');
    // harmony.note('quarter', 'D4')
    //     .note('tripletEighth', 'D4')
    //     .note('tripletEighth', 'D4')
    //     .note('tripletEighth', 'C4')
    //     .note('dottedEighth', 'D4')
    //     .note('sixteenth', 'D4')
    //     .note('sixteenth', 'D4')
    //     .note('sixteenth', 'Eb4')
    //     .note('sixteenth', 'F4')
    //     .note('sixteenth', 'G4');
    // bassline.note('quarter', 'Bb2')
    //     .note('tripletEighth', 'Bb2')
    //     .note('tripletEighth', 'Bb2')
    //     .note('tripletEighth', 'Ab2')
    //     .note('quarter', 'Bb2')
    //     .note('quarter', 'Bb2');
    //
    // // Bar 6
    // melody.note('half', 'F5')
    //     .rest('eighth')
    //     .note('eighth', 'F5')
    //     .note('tripletEighth', 'F5')
    //     .note('tripletEighth', 'Gb5')
    //     .note('tripletEighth', 'Ab5');
    // harmony.note('dottedEighth', 'Ab4')
    //     .note('sixteenth', 'Bb4')
    //     .note('sixteenth', 'Bb4')
    //     .note('sixteenth', 'C5')
    //     .note('sixteenth', 'D5')
    //     .note('sixteenth', 'Eb5')
    //     .note('eighth', 'F5')
    //     .note('eighth', 'F5')
    //     .note('tripletEighth', 'Ab4')
    //     .note('tripletEighth', 'Bb4')
    //     .note('tripletEighth', 'C5');
    // bassline.note('quarter', 'Ab2')
    //     .note('tripletEighth', 'Ab2')
    //     .note('tripletEighth', 'Ab2')
    //     .note('tripletEighth', 'Gb2')
    //     .note('quarter', 'Ab2')
    //     .note('quarter', 'Ab2');
    //
    // // Bar 7
    // melody.note('half', 'Bb5')
    //     .rest('tripletEighth')
    //     .note('tripletEighth', 'Bb5')
    //     .note('tripletEighth', 'Bb5')
    //     .note('tripletEighth', 'Bb5')
    //     .note('tripletEighth', 'Ab5')
    //     .note('tripletEighth', 'Gb5');
    // harmony.note('dottedEighth', 'Db5')
    //     .note('sixteenth', 'Gb4')
    //     .note('sixteenth', 'Gb4')
    //     .note('sixteenth', 'Ab4')
    //     .note('sixteenth', 'Bb4')
    //     .note('sixteenth', 'C5')
    //     .note('eighth', 'Db5')
    //     .note('eighth', 'Db5')
    //     .note('tripletEighth', 'Db5')
    //     .note('tripletEighth', 'C5')
    //     .note('tripletEighth', 'Bb4');
    // bassline.note('quarter', 'Gb2')
    //     .note('tripletEighth', 'Gb2')
    //     .note('tripletEighth', 'Gb2')
    //     .note('tripletEighth', 'E2')
    //     .note('quarter', 'Gb2')
    //     .note('quarter', 'Gb2');
    //
    // // Bar 8
    // melody.note('dottedEighth', 'Ab5')
    //     .note('sixteenth', 'Gb5')
    //     .note('half', 'F5')
    //     .note('quarter', 'F5');
    // harmony.note('dottedEighth', 'Db5')
    //     .note('sixteenth', 'Ab4')
    //     .note('tripletEighth', 'Ab4')
    //     .note('tripletEighth', 'Ab4')
    //     .note('tripletEighth', 'Gb4')
    //     .note('dottedEighth', 'Ab4')
    //     .note('sixteenth', 'Ab4')
    //     .note('tripletEighth', 'Ab4')
    //     .note('tripletEighth', 'Gb4')
    //     .note('tripletEighth', 'Ab4');
    // bassline.note('quarter', 'Db3')
    //     .note('tripletEighth', 'Db3')
    //     .note('tripletEighth', 'Db3')
    //     .note('tripletEighth', 'B2')
    //     .note('quarter', 'Db3')
    //     .note('quarter', 'Db3');
    //
    // // Bar 9
    // melody.note('eighth', 'Eb5')
    //     .note('sixteenth', 'Eb5')
    //     .note('sixteenth', 'F5')
    //     .note('half', 'Gb5')
    //     .note('eighth', 'F5')
    //     .note('eighth', 'Eb5');
    // harmony.note('eighth', 'Gb4')
    //     .rest('tripletSixteenth')
    //     .note('tripletSixteenth', 'Gb4')
    //     .note('tripletSixteenth', 'F4')
    //     .note('eighth', 'Gb4')
    //     .rest('tripletSixteenth')
    //     .note('tripletSixteenth', 'Gb4')
    //     .note('tripletSixteenth', 'F4')
    //     .note('quarter', 'Bb4')
    //     .note('eighth', 'Ab4')
    //     .note('eighth', 'Gb4');
    // bassline.note('quarter', 'B2')
    //     .note('tripletEighth', 'B2')
    //     .note('tripletEighth', 'B2')
    //     .note('tripletEighth', 'Bb2')
    //     .note('quarter', 'B2')
    //     .note('tripletEighth', 'B2')
    //     .note('tripletEighth', 'B2')
    //     .note('tripletEighth', 'B2');
    //
    // // Bar 10
    // melody.note('eighth', 'Db5')
    //     .note('sixteenth', 'Db5')
    //     .note('sixteenth', 'Eb5')
    //     .note('half', 'F5')
    //     .note('eighth', 'Eb5')
    //     .note('eighth', 'Db5');
    // harmony.note('eighth', 'F4')
    //     .rest('tripletSixteenth')
    //     .note('tripletSixteenth', 'F4')
    //     .note('tripletSixteenth', 'Eb4')
    //     .note('eighth', 'F4')
    //     .rest('tripletSixteenth')
    //     .note('tripletSixteenth', 'F4')
    //     .note('tripletSixteenth', 'Gb4')
    //     .note('quarter', 'Ab4')
    //     .note('eighth', 'Gb4')
    //     .note('eighth', 'F4');
    // bassline.note('quarter', 'Bb2')
    //     .note('tripletEighth', 'Bb2')
    //     .note('tripletEighth', 'Bb2')
    //     .note('tripletEighth', 'Ab2')
    //     .note('quarter', 'Bb2')
    //     .note('tripletEighth', 'Bb2')
    //     .note('tripletEighth', 'Bb2')
    //     .note('tripletEighth', 'Bb2');
    //
    // // Bar 11
    // melody.note('eighth', 'C5')
    //     .note('sixteenth', 'C5')
    //     .note('sixteenth', 'D5')
    //     .note('half', 'E5')
    //     .note('quarter', 'G5');
    // harmony.note('quarter', 'E4')
    //     .note('dottedEighth', 'E4')
    //     .note('sixteenth', 'F4')
    //     .note('eighth', 'G4')
    //     .rest('tripletSixteenth')
    //     .note('tripletSixteenth', 'G4')
    //     .note('tripletSixteenth', 'Ab4')
    //     .note('eighth', 'Bb4')
    //     .note('eighth', 'C5');
    // bassline.note('quarter', 'C3')
    //     .note('tripletEighth', 'C3')
    //     .note('tripletEighth', 'C3')
    //     .note('tripletEighth', 'Bb2')
    //     .note('quarter', 'C3')
    //     .note('tripletEighth', 'C3')
    //     .note('tripletEighth', 'C3')
    //     .note('tripletEighth', 'C3');
    //
    // // Bar 12
    // melody.note('eighth', 'F5')
    //     .note('sixteenth', 'F4')
    //     .note('sixteenth', 'F4')
    //     .note('eighth', 'F4')
    //     .note('sixteenth', 'F4')
    //     .note('sixteenth', 'F4')
    //     .note('eighth', 'F4')
    //     .note('sixteenth', 'F4')
    //     .note('sixteenth', 'F4')
    //     .note('eighth', 'F4')
    //     .note('eighth', 'F4');
    // harmony.note('eighth', 'A4')
    //     .note('sixteenth', 'A3')
    //     .note('sixteenth', 'A3')
    //     .note('eighth', 'A3')
    //     .note('sixteenth', 'A3')
    //     .note('sixteenth', 'A3')
    //     .note('eighth', 'A3')
    //     .note('sixteenth', 'A3')
    //     .note('sixteenth', 'A3')
    //     .note('eighth', 'A3')
    //     .note('eighth', 'A3');
    // bassline.note('quarter', 'F2')
    //     .note('quarter', 'F2')
    //     .note('quarter', 'F2')
    //     .note('eighth', 'G2')
    //     .note('eighth', 'A2');
    //
    // // Bar 13
    // melody.note('quarter', 'Bb4')
    //     .note('quarter', 'F4', true)
    //     .note('dottedEighth', 'F4', true)
    //     .note('sixteenth', 'Bb4')
    //     .note('sixteenth', 'Bb4')
    //     .note('sixteenth', 'C5')
    //     .note('sixteenth', 'D5')
    //     .note('sixteenth', 'Eb5');
    // harmony.note('quarter', 'D4')
    //     .note('tripletEighth', 'D4')
    //     .note('tripletEighth', 'D4')
    //     .note('tripletEighth', 'C4')
    //     .note('dottedEighth', 'D4')
    //     .note('sixteenth', 'D4')
    //     .note('sixteenth', 'D4')
    //     .note('sixteenth', 'Eb4')
    //     .note('sixteenth', 'F4')
    //     .note('sixteenth', 'G4');
    // bassline.note('quarter', 'Bb2')
    //     .note('tripletEighth', 'Bb2')
    //     .note('tripletEighth', 'Bb2')
    //     .note('tripletEighth', 'Ab2')
    //     .note('quarter', 'Bb2')
    //     .note('quarter', 'Bb2');
    //
    // // Bar 14
    // melody.note('half', 'F5')
    //     .rest('eighth')
    //     .note('eighth', 'F5')
    //     .note('tripletEighth', 'F5')
    //     .note('tripletEighth', 'Gb5')
    //     .note('tripletEighth', 'Ab5');
    // harmony.note('dottedEighth', 'Ab4')
    //     .note('sixteenth', 'Bb4')
    //     .note('sixteenth', 'Bb4')
    //     .note('sixteenth', 'C5')
    //     .note('sixteenth', 'D5')
    //     .note('sixteenth', 'Eb5')
    //     .note('eighth', 'F5')
    //     .note('eighth', 'F5')
    //     .note('tripletEighth', 'Ab4')
    //     .note('tripletEighth', 'Bb4')
    //     .note('tripletEighth', 'C5');
    // bassline.note('quarter', 'Ab2')
    //     .note('tripletEighth', 'Ab2')
    //     .note('tripletEighth', 'Ab2')
    //     .note('tripletEighth', 'Gb2')
    //     .note('quarter', 'Ab2')
    //     .note('quarter', 'Ab2');
    //
    // // Bar 15
    // melody.note('dottedHalf', 'Bb5')
    //     .note('quarter', 'Db6');
    // harmony.note('dottedHalf', 'Db5')
    //     .note('quarter', 'E5');
    // bassline.note('quarter', 'Gb2')
    //     .note('tripletEighth', 'Gb2')
    //     .note('tripletEighth', 'Gb2')
    //     .note('tripletEighth', 'E2')
    //     .note('quarter', 'Gb2')
    //     .note('quarter', 'Gb2');
    //
    // // Bar 16
    // melody.note('quarter', 'C6')
    //     .note('half', 'A5')
    //     .note('quarter', 'F5');
    // harmony.note('quarter', 'Eb5')
    //     .note('half', 'C5')
    //     .note('quarter', 'A4');
    // bassline.note('quarter', 'F2')
    //     .note('tripletEighth', 'F2')
    //     .note('tripletEighth', 'F2')
    //     .note('tripletEighth', 'Eb2')
    //     .note('quarter', 'F2')
    //     .note('quarter', 'F2');
    //
    // // Bar 17
    // melody.note('half', 'Gb5')
    //     .rest('quarter')
    //     .note('quarter', 'Bb5');
    // harmony.note('half', 'B4')
    //     .rest('quarter')
    //     .note('quarter', 'Db5');
    // bassline.note('tripletEighth', 'E2')
    //     .note('tripletEighth', 'Bb2')
    //     .note('tripletEighth', 'Db3')
    //     .note('tripletEighth', 'E3')
    //     .note('tripletEighth', 'Bb3')
    //     .note('tripletEighth', 'Db4')
    //     .note('quarter', 'E4')
    //     .rest('quarter');
    //
    // // Bar 18
    // melody.note('quarter', 'A5')
    //     .note('half', 'F5')
    //     .note('quarter', 'F5');
    // harmony.note('quarter', 'C5')
    //     .note('half', 'A4')
    //     .note('quarter', 'A4');
    // bassline.note('quarter', 'F4')
    //     .note('tripletEighth', 'F2')
    //     .note('tripletEighth', 'F2')
    //     .note('tripletEighth', 'F2')
    //     .note('quarter', 'F2')
    //     .rest('quarter');
    //
    // // Bar 19
    // melody.note('half', 'Gb5')
    //     .rest('quarter')
    //     .note('quarter', 'Bb5');
    // harmony.note('half', 'B4')
    //     .rest('quarter')
    //     .note('quarter', 'Db5');
    // bassline.note('tripletEighth', 'E2')
    //     .note('tripletEighth', 'Bb2')
    //     .note('tripletEighth', 'Db3')
    //     .note('tripletEighth', 'E3')
    //     .note('tripletEighth', 'Bb3')
    //     .note('tripletEighth', 'Db4')
    //     .note('quarter', 'E4')
    //     .rest('quarter');
    //
    // // Bar 20
    // melody.note('quarter', 'A5')
    //     .note('half', 'F5')
    //     .note('quarter', 'D5');
    // harmony.note('quarter', 'C5')
    //     .note('half', 'A4')
    //     .note('quarter', 'A4');
    // bassline.note('quarter', 'F4')
    //     .note('tripletEighth', 'F2')
    //     .note('tripletEighth', 'F2')
    //     .note('tripletEighth', 'F2')
    //     .note('quarter', 'F2')
    //     .rest('quarter');
    //
    // // Bar 21
    // melody.note('half', 'Eb5')
    //     .rest('quarter')
    //     .note('quarter', 'Gb5');
    // harmony.note('half', 'Gb4')
    //     .rest('quarter')
    //     .note('quarter', 'B4');
    // bassline.note('quarter', 'B2')
    //     .note('tripletEighth', 'B2')
    //     .note('tripletEighth', 'B2')
    //     .note('tripletEighth', 'Bb2')
    //     .note('quarter', 'B2')
    //     .note('tripletEighth', 'B2')
    //     .note('tripletEighth', 'B2')
    //     .note('tripletEighth', 'B2');
    //
    // // Bar 22
    // melody.note('quarter', 'F5')
    //     .note('half', 'Db5')
    //     .note('quarter', 'Bb4');
    // harmony.note('quarter', 'Bb4')
    //     .note('half', 'F4')
    //     .note('quarter', 'Db4');
    // bassline.note('quarter', 'Bb2')
    //     .note('tripletEighth', 'Bb2')
    //     .note('tripletEighth', 'Bb2')
    //     .note('tripletEighth', 'Ab2')
    //     .note('quarter', 'Bb2')
    //     .note('tripletEighth', 'Bb2')
    //     .note('tripletEighth', 'Bb2')
    //     .note('tripletEighth', 'Bb2');
    //
    // // Bar 23
    // melody.note('eighth', 'C5')
    //     .note('sixteenth', 'C5')
    //     .note('sixteenth', 'D5')
    //     .note('half', 'E5')
    //     .note('quarter', 'G5');
    // harmony.note('quarter', 'E4')
    //     .note('dottedEighth', 'E4')
    //     .note('sixteenth', 'F4')
    //     .note('eighth', 'G4')
    //     .rest('tripletSixteenth')
    //     .note('tripletSixteenth', 'G4')
    //     .note('tripletSixteenth', 'Ab4')
    //     .note('eighth', 'Bb4')
    //     .note('eighth', 'C5');
    // bassline.note('quarter', 'C3')
    //     .note('tripletEighth', 'C3')
    //     .note('tripletEighth', 'C3')
    //     .note('tripletEighth', 'Bb2')
    //     .note('quarter', 'C3')
    //     .note('tripletEighth', 'C3')
    //     .note('tripletEighth', 'C3')
    //     .note('tripletEighth', 'C3');
    //
    // // Bar 24
    // melody.note('eighth', 'F5')
    //     .note('sixteenth', 'F4')
    //     .note('sixteenth', 'F4')
    //     .note('eighth', 'F4')
    //     .note('sixteenth', 'F4')
    //     .note('sixteenth', 'F4')
    //     .note('eighth', 'F4')
    //     .note('sixteenth', 'F4')
    //     .note('sixteenth', 'F4')
    //     .note('eighth', 'F4')
    //     .note('eighth', 'F4');
    // harmony.note('eighth', 'A4')
    //     .note('sixteenth', 'A3')
    //     .note('sixteenth', 'A3')
    //     .note('eighth', 'A3')
    //     .note('sixteenth', 'A3')
    //     .note('sixteenth', 'A3')
    //     .note('eighth', 'A3')
    //     .note('sixteenth', 'A3')
    //     .note('sixteenth', 'A3')
    //     .note('eighth', 'A3')
    //     .note('eighth', 'A3');
    // bassline.note('quarter', 'F2')
    //     .note('quarter', 'F2')
    //     .note('quarter', 'F2')
    //     .note('eighth', 'G2')
    //     .note('eighth', 'A2');

        var player = conductor.finish();

    $scope.playing = $scope.paused = $scope.muted = false;
    $scope.volume = 50;
    $scope.currentSeconds = 0;
    $scope.timeSlider = 0;
    $scope.totalSeconds = conductor.getTotalSeconds();

    var pauseTicker = false;

    conductor.setTickerCallback(function(seconds) {
        $scope.$apply(function() {
            if (! pauseTicker) {
                $scope.currentSeconds = seconds;
            }
        });
    });

    conductor.setOnFinishedCallback(function() {
        $scope.$apply(function() {
            $scope.playing = $scope.paused = false;
        });
    });

    conductor.setOnDurationChangeCallback(function() {
        $scope.totalSeconds = conductor.getTotalSeconds();
    });

    $scope.play = function() {
        $scope.playing = true;
        $scope.paused = false;
        player.play();
    };

    $scope.stop = function() {
        $scope.playing = $scope.paused = false;
        player.stop();
    };

    $scope.pause = function() {
        $scope.paused = true;
        player.pause();
    };

    $scope.updateTime = function() {
        pauseTicker = false;
        player.setTime($scope.currentSeconds);
    };

    $scope.updateTempo = function() {
        pauseTicker = false;
        conductor.setTempo($scope.tempo);
    };

    $scope.movingTime = function() {
        pauseTicker = true;
    };

    $scope.$watch('loop', function() {
        player.loop($scope.loop);
    });

    $scope.$watch('mute', function(newVal, oldVal) {
        if (newVal === oldVal) {
            return;
        }

        if ($scope.mute) {
            player.mute();
        } else {
            player.unmute();
        }
        $scope.muted = $scope.mute;
    });

    $scope.$watch('volume', function() {
        conductor.setMasterVolume($scope.volume / 100);
    });
});

app.filter('musicTime', function() {
    function pad ( num, size ) {
        return ( Math.pow( 10, size ) + ~~num ).toString().substring( 1 );
    }

    return function(seconds, showRemaining) {
        var duration = moment.duration(parseInt(seconds), 'seconds'),
            secs = duration.seconds(),
            mins = duration.minutes(),
            hrs = duration.hours();

        if (hrs > 0) {
            mins += (hrs * 60);
        }

        return mins + ':' + pad(secs, 2);
    }
});
