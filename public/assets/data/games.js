var games = [
  {
    id: 'customgame',
    title: 'Add custom game',
    image: 'assets/images/add.png'
  },
  {
    id: 'wackyflip',
    title: 'Wacky Flip',
    url: 'https://game.azgame.io/wacky-flip/',
    image: 'https://imgs.search.brave.com/BbDlcfCe2d3wfMpQqqRmExPyg0_qub0JIsypdQ4ZW8Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLnNw/cnVua2lnYW1lLmNv/bS9pbWcvZ2FtZS1j/b3Zlci93YWNreS1m/bGlwLnBuZw'
  },
  {
    id: 'slope',
    title: 'Slope',
    url: 'https://azgames.io/game/slope/',
    image: 'https://imgs.search.brave.com/-Pzr_zlTewHP987QqWADT38BWbz5-qpemP3YfYKgVNM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zbG9w/ZWdhbWUubG9sL2lt/Z3Mvc2xvcGUucG5n'
  }
]
games.sort(function (a, b) {
  return a.title.localeCompare(b.title);
});
var customGameId = "customgame"; // replace with the id of the game you want to pin
var customGame = games.find(function (game) {
  return game.id === customGameId;
});
games.splice(games.indexOf(customGame), 1);
games.unshift(customGame);

var customgames = getObj("customgames")
if (customgames) customgames.forEach(game => {
  games.push(game)
})

console.log("Loaded " + games.length + " games")
if (customgames) console.log("Loaded " + customgames.length + " custom games")
