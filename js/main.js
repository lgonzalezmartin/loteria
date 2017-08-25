$(function()
{
  console.log("JS connected");

  // Temporary buttons until I create modals

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

  var $start = $('<button>').attr('id', 'start').attr('type', 'button').text('Start').addClass('btn-warning btn-lg');
  $buttonBar.append($start);
  $start.on('click', function(){
    callTiles(4000);
    $start.attr('disabled', true);
  });

  // attemp begin

  // $buttonBar.append(
  //   `
  //   <div class="container">
  //     <!-- Trigger the modal with a button -->
  //     <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
  //
  //     <!-- Modal -->
  //     <div class="modal fade" id="myModal" role="dialog">
  //       <div class="modal-dialog">
  //
  //         <!-- Modal content-->
  //         <div class="modal-content">
  //           <div class="modal-header">
  //             <button type="button" class="close" data-dismiss="modal">&times;</button>
  //             <h4 class="modal-title">Modal Header</h4>
  //           </div>
  //           <div class="modal-body">
  //             <p>Some text in the modal.</p>
  //           </div>
  //           <div class="modal-footer">
  //             <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
  //           </div>
  //         </div>
  //
  //       </div>
  //     </div>
  //
  //   </div>
  //   `
  // );
  // attemp end



  // Try to add instructions modal
  // var $instructions = $('<button>').attr('type', 'button').addClass('btn-lg btn-warning').attr('id', 'instructions').attr('data-toggle', 'modal').attr('data-target', '#myModal').text('How to play');
  // $buttonBar.append($instructions);
  //
  // $instructions.on('click', )

  // var $writtenInstructions = $('<div>');
  // $('.space').append($writtenInstructions);
  // var $instructionsGif = $('<img>').attr('src', 'images/Loteria_how_to_win.gif');
  // $writtenInstructions.append($instructionsGif);

  // create deck
  deck = App.deckSource()().cards;

  // create user and house cards
  user = App.players()().playerRows('user');
  house = App.players()().playerRows('house');

  var $deck = $('<img>').attr('src', 'images/back.jpg').css('width', '160px').css('height', '233px').addClass('img-rounded');
  var $flippedCard= $('<img>').attr('src', '').css('width', '160px').css('height', '233px');
  $('.deck').append($deck);
  $('.deck').append($flippedCard);
  $flippedCard.hide();

  var order = App.board()().calledNumbers(54);
  var count = 0;
  calledCards = [];
  gameOver = false;

  // resets game if user wants to play again
  function newRoundSameSettings ()
  {
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
    callTiles(4000);
  }

  // callTiles starts the game
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

  // callTiles(4000);


  // every time a new tile is called, updatedHouse checks if it resulted in a house victory
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
