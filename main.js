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

  function randomNumberArrayCreator(limit)
  {
    var max = limit;
    var calledOnce = [];
    for(let i = 0; i < max ; i++)
    {
      var call = Math.floor(Math.random() * max);
      if(calledOnce.indexOf(call) == -1)
      {
          calledOnce.push(call);
          // console.log(call);
      }
      else
      i--;
    }
    console.log(calledOnce);
    return calledOnce;
  }

  function createRandomCard(player)
  {
    var tileIndex = randomNumberArrayCreator(16);
    console.log(tileIndex);
    for (let i = 0; i < 16; i++)
    {
      var $box = $('<div>').addClass("col-sm-3 tile");
      var $image = $('<img>').attr("src", deck[tileIndex[i]].url).css('width', '120px').css('height', '175px');
      $box.append($image);
      // console.log(deck[tileIndex[i]].url);
      $(`.${player}`).append($box);
    }
  }
  createRandomCard('userCard');
  createRandomCard('houseCard');


  var $deck = $('<img>').attr('src', 'images/back.jpg').css('width', '160px').css('height', '233px');
  var $flippedCard= $('<img>').attr('src', '').css('width', '160px').css('height', '233px');
  $('.deck').append($deck);
  $('.flippedCard').append($flippedCard);

  var order = randomNumberArrayCreator(54);
  var count = 0;

  function callTiles(speed){
   setTimeout(function(){
      $flippedCard.attr('src', deck[order[count]].url);
      count++;
      if (count < 54)
      {
         callTiles(speed);
      }
   }, speed)
  }
  callTiles(3000);
  // (function callTiles (i)
  // {
  //  setTimeout(function (){
  //    $flippedCard.attr('src', deck[order[count]].url);
  //    if (--i)
  //     count++;
  //     callTiles(i);
  //  }, 3000)
  // })(54);

  // console.log(deck[order[count]]);
  // console.log(deck[order[count]].url);


  // function callTiles ()
  // {
  //   let order = randomNumberArrayCreator(54);
  //   order.forEach(function(el)
  //   {
  //     $flippedCard.attr('src', deck[el].url);
  //   });
  //
  // }
  // callTiles();

// Check: all images display properly and their names match
// for (let i = 0; i < 54; i++)
// {
//   var $test = $('<img>').attr('src', deck[i].url).css('width', '150px');
//   $('.container').append($test);
//   console.log(deck[i].name);
// }

});
