$(function()
{
  console.log("JS connected");
  console.log("Checking if the push went through");

  // Test code for winning functions

  var $buttonBar = $('<div>').attr('id', 'buttonBar').addClass('btn-toolbar');
  $('.flippedCard').append($buttonBar);

  var $testButton = $('<button>').attr('id', 'loteria').attr('type', 'button').text('Loteria').addClass('btn-success btn-lg');
  $buttonBar.append($testButton);
  $testButton.on('click', function(){
    let gameOver = App.winLogicSource()().userWinCheck();
    $(this).prop('disabled', true);
  });

  var $testButtonSameSettings = $('<button>').attr('type', 'button').addClass('btn-info btn-lg').text('Play again!');
  $buttonBar.append($testButtonSameSettings);
  $testButtonSameSettings.on('click', newRoundSameSettings);

  // `<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" id="instructions">How to play</button>`
  var $instructions = $('<button>').attr('type', 'button').addClass('btn-lg btn-warning').attr('id', 'instructions').text('How to play');
  $buttonBar.append($instructions);


  // create deck
  deck = App.deckSource()().cards;

  // create user and hosue cards
  user = App.players()().playerRows('user');
  house = App.players()().playerRows('house');

  var $deck = $('<img>').attr('src', 'images/back.jpg').css('width', '160px').css('height', '233px').addClass('img-rounded');
  var $flippedCard= $('<img>').attr('src', '').css('width', '160px').css('height', '233px');
  // var placeholder = $('<img>').attr('src', 'images/back.jpg').css('width', '160px').css('height', '233px');
  $('.deck').append($deck);
  $('.deck').append($flippedCard);
  $flippedCard.hide();
  // $('.flippedCard').append(placeholder);

  var order = App.board()().calledNumbers(54);
  var count = 0;
  calledCards = [];
  gameOver = false;

  function newRoundSameSettings ()
  {
    // $flippedCard.attr('src', 'images/back.jpg');
    $flippedCard.hide();
    user = App.winLogicSource()().clearChecks(user);
    house = App.winLogicSource()().clearChecks(house);
    possibleWins = [];
    validWins = [];
    count = 0;
    order = App.board()().calledNumbers(54);
    gameOver = false;
    calledCards = [];
    $('#loteria').prop('disabled', false);

    callTiles(2000);
  }

  function callTiles(speed)
  {
   setTimeout(function()
   {
     if (!gameOver)
     {
       $flippedCard.show();
       calledCards.push(deck[order[count]].name);
       // $flippedCard.attr('src', deck[order[count]].url);
       $flippedCard.attr('src', deck[order[count]].url).addClass('img-rounded');

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
     } else {
       console.log("i should be stopping")
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



  // bootstrap test code
  //
  // var $test = $('<div>').addClass('badge').text("testing");
  // $('.flippedCard').append($test);

possibleWins = [];
validWins = [];

});
