var winLogicSource = (function(){
  return {

    checkIfString: function stringType (entry)
    {
      return (typeof entry) == 'string';
    },

    // rowWin checks to see if a row of the user or house card has tokens in all its entries
    row: function rowWin (card)
    {
      var string = this.checkIfString;
      card.forEach(function(el)
      {
        if(el.every(string))
        {
          possibleWins.push(el);
          console.log("row win");
        }
      });
    },
    // columnWin checks to see if a column of the user or house card has tokens in all its entries
    column: function columnWin (card)
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
        }
      }
    },

    // cornerWin checks to see if all four corners of the user or house card have tokens
    corners: function cornersWin (card)
    {
      if ((typeof card[0][0]) == 'string' && (typeof card[0][3]) == 'string' && (typeof card[3][0]) == 'string' && (typeof card[3][3]) == 'string')
      {
        let corners = [];
        corners.push(card[0][0]);
        corners.push(card[0][3]);
        corners.push(card[3][0]);
        corners.push(card[3][3]);
        possibleWins.push(corners);
      }
    },

    // squareWin checks to see if there are 4 tokens in a square configuration anywhere on the user card or the house card
    square: function squareWin(card)
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
        {
          var square = []
          square.push(userInOne[el[0]]);
          square.push(userInOne[el[1]]);
          square.push(userInOne[el[2]]);
          square.push(userInOne[el[3]]);
          possibleWins.push(square);
        }
      });
    },

    // determines if user won
    userWinCheck: function winCheck ()
    {
      possibleWins = [];
      this.row(user);
      this.column(user);
      this.corners(user);
      this.square(user);
      gameOver = this.cheatingCheck();
      if (gameOver)
        alert("You won!");
      else
      {
        gameOver = true;
        alert('Nice try; you lose')
      }
    },

    // determines if house won
    houseWinCheck: function winCheckForHouse ()
    {
      possibleWins = [];
      this.row(house);
      this.column(house);
      this.corners(house);
      this.square(house);
      // let gameOver = this.cheatingCheck();
      if (possibleWins.length > 0)
      {
        gameOver = true;
      }
      return gameOver
    },

    // determines if user actually won, or if they cheated/made a mistake
    cheatingCheck: function validWinCheck ()
    {
      possibleWins.forEach(function(el){
        if (calledCards.indexOf(el[0]) >= 0 && calledCards.indexOf(el[1]) >= 0 && calledCards.indexOf(el[2]) >= 0 && calledCards.indexOf(el[3]) >= 0)
          validWins.push(el);
      });
      if (validWins.length > 0)
        return true
      else
        return false;
    },
    addClickEvent: function addCheck()
    {
        var $token = $('<div>');
        $(this).parent().append($token);
        $token.css({
                position: "absolute",
                left: '30%',
                top: "40%",
                display: "inline-block",
                width: "50px",
                height: "50px",
                backgroundPosition: "center center",
                backgroundImage: "url(images/check.jpg)"
        });
        let idValueString = $(this).attr('id');
        let idValue = parseInt(idValueString);
        user.forEach(function(el){
          let indexNumToText = el.indexOf(idValue);
          if (indexNumToText>=0)
            el[indexNumToText]=deck[idValue].name;
        });
    },

    // resets the playing cards if the user wants to play again by removing the check marks from both playing cards
    clearChecks: function removeChecks (playerArray)
    {
      playerArray.forEach(function(el)
      {
        for (let i = 0; i < 4; i++)
        {
          if (App.winLogicSource()().checkIfString(el[i]))
          {
            for (let j = 0; j < deck.length; j++)
            {
              if (deck[j].name === el[i])
              {
                el[i] = j;
                $(`#${j}`).next().remove();
                $(`#${j}`).one('click', App.winLogicSource()().addClickEvent);
                $(`#box${j} div`).remove();
              }
            }
          }
        }


      });
      return playerArray
    }
  }
});
