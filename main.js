$(function()
{
  console.log("JS connected");
  var deck = [
    {
      url: "images/deck/alacran.jpg",
      name: "alacran"
    },
    {
      url: "images/deck/apache.jpg",
      name: "apache"
    },
    {
      url: "images/deck/arana.jpg",
      name: "arana"
    },
    {
      url: "images/deck/arbol.jpg",
      name: "arbol"
    },
    {
      url: "images/deck/arpa.jpg",
      name: "arpa"
    },
    {
      url: "images/deck/bandera.jpg",
      name: "bandera"
    },
    {
      url: "images/deck/bandolon.jpg",
      name: "bandolon"
    },
    {
      url: "images/deck/barril.jpg",
      name: "barril"
    },
    {
      url: "images/deck/borracho.jpg",
      name: "borracho"
    },
    {
      url: "images/deck/bota.jpg",
      name: "bota"
    },
    {
      url: "images/deck/botella.jpg",
      name: "botella"
    },
    {
      url: "images/deck/calavera.jpg",
      name: "calavera"
    },
    {
      url: "images/deck/camaron.jpg",
      name: "camaron"
    },
    {
      url: "images/deck/campana.jpg",
      name: "campana"
    },
    {
      url: "images/deck/cantarito.jpg",
      name: "cantarito"
    },
    {
      url: "images/deck/catrin.jpg",
      name: "catrin"
    },
    {
      url: "images/deck/cazo.jpg",
      name: "cazo"
    },
    {
      url: "images/deck/chalupa.jpg",
      name: "chalupa"
    },
    {
      url: "images/deck/corazon.jpg",
      name: "corazon"
    },
    {
      url: "images/deck/corona.jpg",
      name: "corona"
    },
    {
      url: "images/deck/cotorro.jpg",
      name: "cotorro"
    },
    {
      url: "images/deck/dama.jpg",
      name: "dama"
    },
    {
      url: "images/deck/diablito.jpg",
      name: "diablito"
    },
    {
      url: "images/deck/escalera.jpg",
      name: "escalera"
    },
    {
      url: "images/deck/estrella.jpg",
      name: "estrella"
    },
    {
      url: "images/deck/gallito.jpg",
      name: "gallito"
    },
    {
      url: "images/deck/garza.jpg",
      name: "garza"
    },
    {
      url: "images/deck/gorrito.jpg",
      name: "gorrito"
    },
    {
      url: "images/deck/jaras.jpg",
      name: "jaras"
    },
    {
      url: "images/deck/luna.jpg",
      name: "luna"
    },
    {
      url: "images/deck/maceta.jpg",
      name: "maceta"
    },
    {
      url: "images/deck/mano.jpg",
      name: "mano"
    },
    {
      url: "images/deck/melon.jpg",
      name: "melon"
    },
    {
      url: "images/deck/muerte.jpg",
      name: "muerte"
    },
    {
      url: "images/deck/mundo.jpg",
      name: "mundo"
    },
    {
      url: "images/deck/musico.jpg",
      name: "musico"
    },
    {
      url: "images/deck/negrito.jpg",
      name: "negrito"
    },
    {
      url: "images/deck/nopal.jpg",
      name: "nopal"
    },
    {
      url: "images/deck/pajaro.jpg",
      name: "pajaro"
    },
    {
      url: "images/deck/palma.jpg",
      name: "palma"
    },
    {
      url: "images/deck/paraguas.jpg",
      name: "paraguas"
    },
    {
      url: "images/deck/pera.jpg",
      name: "pera"
    },
    {
      url: "images/deck/pescado.jpg",
      name: "pescado"
    },
    {
      url: "images/deck/pino.jpg",
      name: "pino"
    },
    {
      url: "images/deck/rana.jpg",
      name: "rana"
    },
    {
      url: "images/deck/rosa.jpg",
      name: "rosa"
    },
    {
      url: "images/deck/sandia.jpg",
      name: "sandia"
    },
    {
      url: "images/deck/sirena.jpg",
      name: "sirena"
    },
    {
      url: "images/deck/sol.jpg",
      name: "sol"
    },
    {
      url: "images/deck/soldado.jpg",
      name: "soldado"
    },
    {
      url: "images/deck/tambor.jpg",
      name: "tambor"
    },
    {
      url: "images/deck/valiente.jpg",
      name: "valiente"
    },
    {
      url: "images/deck/venado.jpg",
      name: "venado"
    },
    {
      url: "images/deck/violoncello.jpg",
      name: "violoncello"
    }
  ];

  // randomNumberArrayCreator returns an array of the numbers 0-max in a random order
  function randomNumberArrayCreator(max)
  {
    var calledNumbers = [];
    for(let i = 0; i < max ; i++)
    {
      var call = Math.floor(Math.random() * max);
      if(calledNumbers.indexOf(call) == -1)
        calledNumbers.push(call);
      else
        i--;
    }
    return calledNumbers;
  }

  // createRandomCard generates a card with 16 randomly chosen tiles; if the card is for the user ('user' is the argument),
  // then it also adds event listeners to the 16 tiles in the card
  function createRandomCard(player)
  {
    var deckIndexArray = randomNumberArrayCreator(16);
    console.log(deckIndexArray);
    var  nameArray = [];
    for (let i = 0; i < 16; i++)
    {
      var $box = $('<div>').addClass("col-sm-3 tile");
      var $image = $('<img>').attr("src", deck[deckIndexArray[i]].url).css('width', '120px').css('height', '175px').css('position', 'relative');
      if (player==="user")
      {
        $image.attr('id', deckIndexArray[i]);

        // event listener: add token to tile on click
        // uses the id of each image to locate it in the user playing card;
        // it then changes that element from a numeric value (the id) to a string (the name of the tile)
        $image.on('click', function(){
          $(this).css('width', '80');
          let idValueString = $(this).attr('id');
          let idValue = parseInt(idValueString);
          user.forEach(function(el){
            let indexNumToText = el.indexOf(idValue);
            if (indexNumToText>=0)
              el[indexNumToText]=deck[idValue].name;
          });
          // console.log(user);
        });

        // event listerner: remove token on double click
        // change the value of the array element from the tile name to the tile image id
        $image.on('dblclick', function(){
          $(this).css('width', '120');
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
    // console.log(results);
    return results;
  } // end of createRandomCard function

  // user and house are arrays; each one contains 4 arrays with 4 entries, which represent the rows and tiles of the userCard and houseCard
  var user = [];
  var house = [];

  function createPlayerArrays (player)
  {
    var toBeSpliced = createRandomCard(player)[0];
    // console.log('to be spliced', toBeSpliced);

    var row1 = toBeSpliced.splice(0, 4);
    var row2 = toBeSpliced.splice(0, 4);
    var row3 = toBeSpliced.splice(0, 4);
    var row4 = toBeSpliced.splice(0, 4);
    if (player === 'user')
    {
      user.push(row1);
      user.push(row2);
      user.push(row3);
      user.push(row4);
      // console.log('r1', row1, toBeSpliced);
      // console.log('r2', row2, toBeSpliced);
      // console.log('r3', row3, toBeSpliced);
      // console.log('r4', row4, toBeSpliced);
    }
    else
    {
      house.push(row1);
      house.push(row2);
      house.push(row3);
      house.push(row4);
      // console.log('r1', row1, toBeSpliced);
      // console.log('r2', row2, toBeSpliced);
      // console.log('r3', row3, toBeSpliced);
      // console.log('r4', row4, toBeSpliced);
    }
  };

  createPlayerArrays('user');
  // createPlayerArrays('house');

  var $deck = $('<img>').attr('src', 'images/back.jpg').css('width', '160px').css('height', '233px');
  var $flippedCard= $('<img>').attr('src', '').css('width', '160px').css('height', '233px');
  $('.deck').append($deck);
  $('.flippedCard').append($flippedCard);

  var order = randomNumberArrayCreator(54);
  var count = 0;
  var calledCards = [];

  // callTiles needs to be invoked
  function callTiles(speed){
   setTimeout(function(){
      $flippedCard.attr('src', deck[order[count]].url);
      calledCards.push(deck[order[count]].name);
      count++;
      if (count < 54)
      {
         callTiles(speed);
      }
   }, speed)
  }
  callTiles(1000);


  // Test code for winning functions
  var $testButton = $('<button>').text('Did I win?');
  $('.flippedCard').append($testButton);
  $testButton.on('click', function(){
    possibleWins = [];
    rowWin(user);
    columnWin(user);
    console.log(possibleWins);
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
      }
    }
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
