
<!-- Technologies used: -->

I used Bootstrap, jQuery, and Google Fonts.

<!-- Approach/process: -->

I analyzed how the game is played in person, and separated that process into smaller, simpler actions. For example: shuffling the deck, choosing a playing card, displaying one card from the deck at a time, etc. Then I started programming these smaller actions in the order in which they would happen in real life. First I created my deck of cards, then I shuffled it. Next I created the playing cards for the user and the computer. Then I created a way for the user to interact with the card, and so on.

After creating the playing board and the other visual aspects of the game, I focused on the game logic. Lastly, I styled my game to make it more user-friendly.


Future features:
1. An instructions button that opens up a modal with step-by-step directions on how to play.
2. Use modals to alert the user if he/she won or lost (instead of alerts)
3. Allow the user to set the speed at which the cards are revealed (faster = harder).
4. Add an audio component; instead of just displaying the cards, have audio announcing what card was called. This will allow me to create difficulty levels (the easiest level will be audio and images, the intermediate will be audio only, the hardest will be images only).
5. Animate the card flips.
6. Allow the user to pick the token that appears on their card each time they click.
7. If the user loses, add the option for the remaining cards in the deck to keep flipping so the user can see how many cards away he/she was from victory.
8. Allow multiple people to play together from different locations.

Bugs:

The current version of the game as a timing bug. If the user deliberately loses several times in a row, the cards from the deck don't flip at regular intervals. The process becomes a bit choppy. This issue only happens if the user loses deliberately several times in a row and continues clicking the 'Play again!' button. I have a possible solutions (changing my timeout function to an interval function), but did not have time to implement it.

Biggest wins and challenges:

The biggest challenge by far was anticipating all the ways in which I might need to use a function, and writing it with all those purposes in mind. I made my functions perform too many tasks, so when I needed to repeat only some of the tasks within a function, the function was useless (since calling the function itself would perform MORE than I needed it to). Hence, there is a lot of repetition in my code. I did refactor a lot of it, but given the time constraints, I wasn't able to make it completely DRY.

The biggest win is that the game works! Given how important timing is in this game, and the fact that there are 18 different ways of winning, the fact that the game logic code works is definitely the highlight of the week.

Chosen game:

Loteria! It's basically bingo but with pictures instead of numbers/letters. It is an incredibly popular board game in Mexico, and I grew up playing it. Read more about it here:
https://en.wikipedia.org/wiki/Loter%C3%ADa

Rules of the game:

Loteria is a game of change. There is a deck with 54 tiles. Each tile is a picture. The user and house each get a different playing card that has 16 random tiles arranged in 4 rows of 4. The tiles in the deck are flipped one at a time. If your playing card has the tile that was just flipped, you add a check to that tile on your card. Whoever gets four checked tiles in a row, a column, a square, or in the four corners wins.

Process for turning game into a web app (wireframes, blockers/issues that popped up):

Since the playing cards and tiles in Loteria are so colorful, I knew I wanted the rest of my web app to be very clean and simple: I wanted most of the color to come from the tiles. The current version of my website resembles my wireframes pretty closely. As far as the colors go, I knew I wanted a white background for most of the game, and the title of the page has a white font on a light tomato color. From there it was just a matter of finding complimentary colors for my buttons and the background of my playing cards. The font I choose is from Google fonts. I chose a style that resembles handwriting because I wanted to continue the minimalistic look.



Game website: https://github.kdc.capitalone.com/pages/TID414/unit-1-project/
Trello board (which includes user stories): https://trello.com/b/gVfgetfB/mexican-bingo
