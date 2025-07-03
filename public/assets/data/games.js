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
    id: 'escaperoad',
    title: 'Escape Road',
    url: 'https://azgames.io/escape-road.embed',
    image: 'https://imgs.search.brave.com/g1dxcNRtlcKjc3bNGcBseDCUD4TpK5zDRVKZz2QXuEQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lc2Nh/cGVyb2FkZ2FtZS5p/by9kYXRhL2ltYWdl/L2dhbWUvZXNjYXBl/cm9hZC5wbmc'
  },
  {
    id: 'motox3m',
    title: 'Moto X3M',
    url: 'https://azgames.io/moto-x3m.embed',
    image: 'https://imgs.search.brave.com/r7yKv2yutqpuLFeY-NxOFqy2h9CLZbyRIPZEpwWMhR8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nYW1l/Zm9yZ2UuY29tL2Rl/LURFL2xpdHRsZWdh/bWVzL2luY2x1ZGVz/L2ltYWdlcy9nYW1l/cy8yNl81ZWEwM2U5/MmM4YTgzLmpwZw'
  },
  {
    id: 'run3',
    title: 'Run 3',
    url: 'https://azgames.io/run-3.embed',
    image: 'https://imgs.search.brave.com/gizEnWZFmUg6qBI4jua6usYLFlR8uUDf7XOYnGKY4tU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ob3ds/b25ndG9iZWF0LmNv/bS9nYW1lcy84NTk5/Nl9SdW5fMy5wbmc_/d2lkdGg9NzYw'
  },
  {
    id: 'drifthunters',
    title: 'Drift Hunters',
    url: 'https://azgames.io/drift-hunters.embed',
    image: 'https://imgs.search.brave.com/oFhfYcwTNnMG3-K1kwTKtX-U7BTGqHJo1i3UCsLVBJ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odG1s/eG0uZ2l0aHViLmlv/L3RodW1iL2RyaWZ0/LWh1bnRlcnMucG5n'
  },
  {
    id: 'curverush',
    title: 'Curve Rush',
    url: 'https://game.azgame.io/curve-rush/',
    image: 'https://imgs.search.brave.com/aack-_b6Z0o93vC6naZJXbCqGUl5DShNp_DFdTD9Q6M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jdXJ2/ZXJ1c2guY29tL2Rh/dGEvaW1hZ2UvZ2Ft/ZS9jdXJ2ZXJ1c2gu/cG5n'
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
