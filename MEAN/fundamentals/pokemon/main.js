var game = {
  players: [],
  addPlayer: function(player){
    game.players.push(player);
    return game;
  }
};
function playerConstructor(name){
  player = {};
  player.name = name;
  player.hand = [];
  player.addCard = function(card){
    player.hand.push(card);
    return player;
  };
  player.card = function () {
    //generate a random number in the range of the player.hand array length
    var ranNum = Math.floor(Math.random()*(player.hand.length+1))
    //return a card in a random position of that array
    return planer.hand[ranNum];
  };
  return player;
};
var player1 = playerConstructor('Ash');
var player2 = playerConstructor('Misty');
game.addPlayer(player1).addPlayer(player2);
function createCard() {
  var ranNum = Math.floor(Math.random()*151)
  var url = `http://pokeapi.co/api/v2/pokemon/${ranNum}`
  var image = `http://pokeapi.co/media/img/${ranNum}.png`;
  $.ajax({url: url, success: function (result) {
    card = {};
    card.name = result.name;
    card.image = image;
    card.attack = result.stats[4].base_stat;
    card.defense = result.stats[3].base_stat;
    card.hp = result.stats[5].base_stat;
    console.log(card);
  }
});
};
