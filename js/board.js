// The code here is responsible for creating the user and house playing cards that
// the user sees on the screen
var board = (function(){
  return {
    // calledNumbers returns an array of the numbers 0-max in a random order
    calledNumbers: function randomNumberArrayCreator(max)
    {
      var calledNumbers = [];
      var limit = deck.length;
      for(let i = 0; i < max ; i++)
      {
        var call = Math.floor(Math.random() * limit);
        if(calledNumbers.indexOf(call) == -1)
          calledNumbers.push(call);
        else
          i--;
      }
      return calledNumbers;
    },

    // createRandomCard generates a card with 16 randomly chosen tiles;
    // if the card is for the user ('user' is the argument),
    // then it also adds event listeners to the 16 tiles in the card
    // results returns an object with 2 arrays: one containing the
    // card numbers the other containing the card names
    results: function createRandomCard(player)
    {
      var deckIndexArray = App.board()().calledNumbers(16); // get 16 random numbers
      var  nameArray = [];
      for (let i = 0; i < 16; i++)
      {
        var $box = $('<div>').addClass("col-sm-3 tile").css('position', 'relative');
        var $image = $('<img>').attr("src", deck[deckIndexArray[i]].url).css('width', '120px').css('height', '175px').css('position', 'relative').addClass('img-rounded');
        if (player === 'house')
        {
          $box.attr('id', `box${deckIndexArray[i]}`);
        }
        if (player==="user")
        {
          $image.attr('id', deckIndexArray[i]);

          // event listener: add token to tile on click
          // uses the id of each image to locate it in the user playing card (global variable 'user');
          // it then changes that element from a numeric value (the id) to a string (the name of the tile)
          var addCheck = function()
          {
            var $token = $('<div>').addClass('token');
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
          };
          $image.one('click', addCheck);

          // event listerner: remove token on double click
          // change the value of the array element from the tile name to the tile image id
          // necessary in case user accidentally clicks on a tile and wants to remove the token
          $image.on('dblclick', function(){
            console.log('double click', $(this));
            $(this).next().remove();
            // reapply click event listener so token can be added again
            $(this).one('click', addCheck);
            let idValueString = $(this).attr('id');
            let idValue = parseInt(idValueString);
            let tileName = deck[idValue].name;
            user.forEach(function(el){
              let indexTextToNum = el.indexOf(tileName);
              if (indexTextToNum >=0 )
                el[indexTextToNum] = idValue;
            });
          });
        }
        $box.append($image);
        $(`.${player}Card`).append($box);
        nameArray.push(deck[deckIndexArray[i]].name);
      }
      let results = [];
      results.push(deckIndexArray);
      results.push(nameArray);
      return results;
    }
  }
});
