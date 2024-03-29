const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Lewandowski',
            'Müller',
            'Kimmich',
            'Gnabry',
            'Sane',
            'Boateng',
            'Alaba',
            'Davies',
            'Goretzka',
            'Coman'
        ],
        [
            'Hitz',
            'Akanji',
            'Hummels',
            'Guerreiro',
            'Meunier',
            'Delaney',
            'Bellingham',
            'Reus',
            'Sancho',
            'Brandt',
            'Hakimi'
        ]
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Muller',
        'Hummels'],
    date: 'Nov 9th, 2023',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.6
    }
}

//P1

//1.
const [players1, players2] = game.players
console.log(players1, players2)

//2.
const [gk, ...fieldPlayers] = players1
console.log(gk, fieldPlayers)

//3.
const allPlayers = [...players1, ...players2]
console.log(allPlayers)

//4.
const players1Final = [
    ...players1,
    'Thiago',
    'Coutinho',
    'Perisic'
]

//5.
const { odds: { team1, x: draw, team2 } } = game
console.log(team1, draw, team2)

//6.
const printGoals = function (...players) {
    console.log(players)
    console.log(`${players.length} goals were scored`)
}
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
printGoals(...game.scored)

//7.

team1 < team2 && console.log('Team 1 is more likely to win')
team1 > team2 && console.log('Team 2 is more likely to win')


//P2
//1.
for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${player}`)
}

//2.
let average = 0;
const odds = Object.values(game.odds)
for (const odd of odds) 
    average += odd;

average /= odds.length
console.log(average)

//3.
for (const [team,odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'hòa' : `thắng của ${game[team]}`
    console.log(`Tỉ lệ ${teamStr}: ${odd}`)

}


