$(function()
{
  console.log("JS connected");

  // create deck
  deck = App.deckSource()().cards;

  // create user and hosue cards
  user = App.players()().playerRows('user');
  house = App.players()().playerRows('house');

  var $deck = $('<img>').attr('src', 'images/back.jpg').css('width', '160px').css('height', '233px');
  var $flippedCard= $('<img>').attr('src', '').css('width', '160px').css('height', '233px');
  var placeholder = $('<img>').attr('src', 'images/back.jpg').css('width', '160px').css('height', '233px');
  $('.deck').append($deck);
  $('.deck').append($flippedCard);
  $('.flippedCard').append(placeholder);

  function newRound()
  {

  }
  var order = App.board()().calledNumbers(54);
  var count = 0;
  calledCards = [];
  gameOver = false;

  function callTiles(speed)
  {
   setTimeout(function()
   {
     if (!gameOver)
     {
       calledCards.push(deck[order[count]].name);
       // $flippedCard.attr('src', deck[order[count]].url);
       $flippedCard.attr('src', deck[order[count]].url);
       updatedHouse(count);
       gameOver = App.winLogicSource()().houseWinCheck();
       if (gameOver)
       {
         setTimeout(function(){alert('House wins');}, 500);
       }

       if (count < 53 && validWins.length === 0 && !gameOver)
       {
         count++;
         callTiles(speed);
       }
     }

   }, speed)
  }
  callTiles(2000);

  function updatedHouse ()
  {
    house.forEach(function(el){
      let index = el.indexOf(order[count]);
      if (index>=0)
      {
        el[index] = deck[order[count]].name;
        let test = '#box' + order[count];
        // $(`${test} img`).first().css('width', '80px');
        var $token = $('<div>');
        $(`${test}`).append($token);
        $token.css({
                position: "absolute",
                left: '30%',
                top: "40%",
                display: "inline-block",
                width: "45px",
                height: "45px",
                backgroundPosition: "center center",
                backgroundImage: "url(images/check.jpg)"
        });
      }
    });

  }

  // Test code for winning functions
  var $testButton = $('<button>').text('Did I win?');
  $('.flippedCard').append($testButton);
  $testButton.on('click', function(){
    let gameOver = App.winLogicSource()().userWinCheck();
    $(this).prop('disabled', true);
  });
possibleWins = [];
validWins = [];

});
