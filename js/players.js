// playerRows reformats the 16 tiles in the arrays for the user's and computer's playing cards; instead of one array of 16 tiles, playerRows returns an array with four arrays within,
// each of which contains 4 tiles. Needed to determine winner later on. 
var players = (function(){
  return {

  playerRows: function createPlayerArrays (player)
      {
        var toBeSpliced = App.board()().results(player)[0];
        var spliced = this.splice(toBeSpliced);
        return spliced;
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
