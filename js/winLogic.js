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
        alert('Nice try; you lose')
    },

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

    cheatingCheck: function validWinCheck ()
    {
      possibleWins.forEach(function(el){
        if (calledCards.indexOf(el[0]) >= 0 && calledCards.indexOf(el[1]) >= 0 && calledCards.indexOf(el[2]) >= 0 && calledCards.indexOf(el[3]) >= 0)
          validWins.push(el);
      });
      if (validWins.length > 0)
        return true;
      else
        return true;
    }
  }
});
