https://pixabay.com/en/symbol-gui-internet-internet-page-2480163/
check icon

Agenda for Thursday:
1. finish separating main into files
DONE
2. stop card iteration after button click (and alert for house win)
DONE
3. Flexbox--do all the css
4. change: instead of alert: modal with 'play again' -> keep or change settings
4. add modals to get: username and speed
5. write logic for those modals
6. animate the card flip
7. add modals for setting difficult, and choosing preexisting card
8. add logic for these modals
9. add modal to select token, and its logic
10. add option to see remaining cards flippedCard
11. use an api to read the card names

var $testButtonPlayAgain = $('<button>').text('Play again!');
$('.flippedCard').append($testButtonPlayAgain);
$testButtonPlayAgain.on('click', newRound);

var $testButtonSameSettings = $('<button>').text('Same settings!');
$('.flippedCard').append($testButtonSameSettings);
// $testButtonSameSettings.on('click', newRoundSameSettings);
