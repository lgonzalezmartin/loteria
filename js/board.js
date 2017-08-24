var board = (function(){
  return {
    // // randomNumberArrayCreator returns an array of the numbers 0-max in a random order
    calledNumbers: function randomNumberArrayCreator(max, deckOfCards)
    {
      var calledNumbers = [];
      var deck = [];
      var deck = deckOfCards;
      var limit = 54;
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

    // createRandomCard generates a card with 16 randomly chosen tiles; if the card is for the user ('user' is the argument),
    // then it also adds event listeners to the 16 tiles in the card
    results: function createRandomCard(player, deckOfCards)
    {
      var deck = deckOfCards;
      var deckIndexArray = App.board()().calledNumbers(16, deckOfCards);

      var  nameArray = [];

      for (let i = 0; i < 16; i++)
      {
        var $box = $('<div>').addClass("col-sm-3 tile").css('position', 'relative');
        var $image = $('<img>').attr("src", deck[deckIndexArray[i]].url).css('width', '120px').css('height', '175px').css('position', 'relative');
        if (player === 'house')
        {
          $box.attr('id', `box${deckIndexArray[i]}`);
        }
        if (player==="user")
        {
          // players calls results and below it calls players
          // var user = App.players()().playerRows('user');
          $image.attr('id', deckIndexArray[i]);

          // event listener: add token to tile on click
          // uses the id of each image to locate it in the user playing card;
          // it then changes that element from a numeric value (the id) to a string (the name of the tile)
          // $image.one('click', addCheck());
          var addCheck = function(){
            var $token = $('<div>');
            $(this).parent().append($token);
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
            let idValueString = $(this).attr('id');
            let idValue = parseInt(idValueString);
            user.forEach(function(el){
              let indexNumToText = el.indexOf(idValue);
              if (indexNumToText>=0)
                el[indexNumToText]=deck[idValue].name;
            });
            // console.log(user);
          };
          $image.one('click', addCheck);

          // event listerner: remove token on double click
          // change the value of the array element from the tile name to the tile image id
          $image.on('dblclick', function(){
            console.log('double click', $(this));

            // $(this).css('width', '120');
            $(this).next().remove();
            $(this).one('click', addCheck);
            let idValueString = $(this).attr('id');
            let idValue = parseInt(idValueString);
            let tileName = deck[idValue].name;
            // console.log(tileName);
            user.forEach(function(el){
              let indexTextToNum = el.indexOf(tileName);
              if (indexTextToNum >=0 )
                el[indexTextToNum] = idValue;
            });
            // console.log(user);
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
    } // end of createRandomCard function


  }
});
