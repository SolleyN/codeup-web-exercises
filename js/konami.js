// store key presses to konamiKeys variable

var konamiKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
};
 // Actual konami cheat code in an array

var konamiKode =
[ 'up',
 'up',
'down',
'down',
'left',
'right',
'left',
'right',
'down',
'down',
'b',
'a', ]

// tracks user postive in code sequence

var kodePosition = 0;

// keyup event listener

document.addEventListener('keydown', function(e){

    //get value of keycode from the keyboard inputs
var konamiKeys = konamiKode[e.on];

// get the value of the needed key from konami kode
var neededKeys = konamiKode[kodePosition];

//compare typed keys with needed keys
if (konamiKeys = neededKeys){

    // move to next konami key
    kodePosition++;

// once last key is pressed, alert 30 lives activated
if ( kodePosition === neededKeys.length) {
    kodePosition = 0;
    console.log('you have 30 more lives')
    alert('You have 30 more lives!');
    

} else
{ console.log('You have incorrectly typed the cheat code')
 alert('You have incorrectly entered the cheat code');
}

}


});