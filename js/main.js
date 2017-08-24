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

  var order = App.board()().calledNumbers(54);
  var count = 0;
  var calledCards = [];

  function callTiles(speed)
  {
   setTimeout(function()
   {
      calledCards.push(deck[order[count]].name);
      // $flippedCard.attr('src', deck[order[count]].url);
      $flippedCard.attr('src', deck[order[count]].url);
      updatedHouse(count);
      let gameOver = winCheckForHouse();
      if (gameOver)
      {
        setTimeout(function(){alert('House wins');}, 500);
      }

      if (count < 53 && validWins.length === 0 && !gameOver)
      {
        count++;
        callTiles(speed);
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
        // console.log(index);
        // console.log(el);
        // console.log(house);
      }
    });

  }


  // Test code for winning functions
  var $testButton = $('<button>').text('Did I win?');
  $('.flippedCard').append($testButton);


    $testButton.on('click', function(){
      let gameOver = winCheck();

      $(this).prop('disabled', true);
    });



  var possibleWins = [];
  // end of Test code; delete when done
  function stringType (entry)
  {
    return (typeof entry) == 'string';
  }

  // rowWin checks to see if a row of the user or house card has tokens in all its entries
  function rowWin (card)
  {
    card.forEach(function(el)
    {
      if(el.every(stringType))
      {
        possibleWins.push(el);
        console.log("row win");
      }
    });
  }

  function columnWin (card)
  {
    for (let i = 0; i < 4; i++)
    {
      if ((typeof card[0][i]) == 'string' && (typeof card[1][i]) == 'string' && (typeof card[2][i]) == 'string' && (typeof card[3][i]) == 'string')
      {
        column = [];
        column.push(card[0][i]);
        column.push(card[1][i]);
        column.push(card[2][i]);
        column.push(card[3][i]);
        possibleWins.push(column);
        // console.log("column win");
      }
    }
  }

  function cornersWin (card)
  {
    if ((typeof card[0][0]) == 'string' && (typeof card[0][3]) == 'string' && (typeof card[3][0]) == 'string' && (typeof card[3][3]) == 'string')
    {
      let corners = [];
      corners.push(card[0][0]);
      corners.push(card[0][3]);
      corners.push(card[3][0]);
      corners.push(card[3][3]);
      possibleWins.push(corners);
      // console.log('corners win');
    }
  }

  function squareWin(card)
  {
    var userInOne = [];
    card.forEach(function(element){
      element.forEach(function(index){
        userInOne.push(index);
      })
    });
    var winningCombos = [[0, 1, 4, 5], [1, 2, 5, 6], [2, 3, 6, 7], [4, 5, 8, 9], [5, 6, 9, 10], [6, 7, 10, 11], [8, 9, 12, 13], [9, 10, 13, 14], [10, 11, 14, 15]];
    winningCombos.forEach(function(el){
      if ((typeof userInOne[el[0]]) == 'string' && (typeof userInOne[el[1]]) == 'string' && (typeof userInOne[el[2]]) == 'string' && (typeof userInOne[el[3]]) == 'string')
      //  && (typeof userInOne[el[3])] == 'string'
      {
        var square = []
        square.push(userInOne[el[0]]);
        square.push(userInOne[el[1]]);
        square.push(userInOne[el[2]]);
        square.push(userInOne[el[3]]);
        possibleWins.push(square);
        // console.log("square win");
      }
    });
  }

  function winCheck ()
  {
    possibleWins = [];
    rowWin(user);
    columnWin(user);
    cornersWin(user);
    squareWin(user);
    let gameOver = validWinCheck();
    if (gameOver)
      alert("You won!");
    else
      alert('Nice try; you lose')
    // console.log(possibleWins);
  }
  function winCheckForHouse ()
  {
    possibleWins = [];
    rowWin(house);
    columnWin(house);
    cornersWin(house);
    squareWin(house);
    let gameOver = validWinCheck();
    return gameOver;
  }
  var validWins = [];
  function validWinCheck ()
  {
    possibleWins.forEach(function(el){
      if (calledCards.indexOf(el[0]) >= 0 && calledCards.indexOf(el[1]) >= 0 && calledCards.indexOf(el[2]) >= 0 && calledCards.indexOf(el[3]) >= 0)
        validWins.push(el);
    });
    if (validWins.length > 0)
      return true;
    else
      return false;
  }


  // Self-invoking callTiles functions that works
  // (function callTiles (i)
  // {
  //  setTimeout(function (){
  //    $flippedCard.attr('src', deck[order[count]].url);
  //    if (--i)
  //     count++;
  //     callTiles(i);
  //  }, 3000)
  // })(54);
});
