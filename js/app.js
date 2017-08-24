/*
  App namespace for deckSource, board, and winLogicSource objects
*/

var App = (function(){
  return {
    deckSource: function(){
      return deckSource
    },
    board: function(){
      return board
    },
    players: function(){
      return players
    },
    winLogicSource: function()
    {
      return winLogicSource
    }
  }
})();
