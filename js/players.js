var players = (function(){
  return {

  // user and house are arrays; each one contains 4 arrays with 4 entries, which represent the rows and tiles of the userCard and houseCard
  playerRows: function createPlayerArrays (player)
      {
        var toBeSpliced = App.board()().results(player)[0];
        // console.log('toBeSpliced', toBeSpliced);
        var spliced = this.splice(toBeSpliced);
        return spliced;
        // var row1 = toBeSpliced.splice(0, 4);
        // var row2 = toBeSpliced.splice(0, 4);
        // var row3 = toBeSpliced.splice(0, 4);
        // var row4 = toBeSpliced.splice(0, 4);
        //
        // if (player === 'user')
        // {
        //   var user = [];
        //   user.push(row1);
        //   user.push(row2);
        //   user.push(row3);
        //   user.push(row4);
        //   return user
        // }
        // else
        // {
        //   var house = [];
        //   house.push(row1);
        //   house.push(row2);
        //   house.push(row3);
        //   house.push(row4);
        //   return house;
        // }
      },
    splice: function splicePlayerArray (array)
    {
      var toBeSpliced = array;
      var row1 = toBeSpliced.splice(0, 4);
      var row2 = toBeSpliced.splice(0, 4);
      var row3 = toBeSpliced.splice(0, 4);
      var row4 = toBeSpliced.splice(0, 4);

      var clearedPlayingCard = [];
      clearedPlayingCard.push(row1);
      clearedPlayingCard.push(row2);
      clearedPlayingCard.push(row3);
      clearedPlayingCard.push(row4);
      return clearedPlayingCard;
    }
  }
});
