const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [21, '🟨 Yellow card'],
    [24, '🔁Substitution'],
    [36, '⚽ GOAL'],
    [57, '🟥 Red card'],
    [64, '🟨 Yellow card'],
    [70, '🔁Substitution'],
    [79, '⚽ GOAL'],
    [82, '🔁Substitution'],
    [85, '🔁Substitution'],
    [92, '⚽ GOAL'],
])

// 1.
const gameEventsSet = [...new Set(gameEvents.values())];
console.log(gameEventsSet)

// 2.
gameEvents.delete(64)
console.log(gameEvents)

// 3.
console.log(
    `1 sự kiện diễn ra, sau trung bình ${90 / gameEvents.size} phút`
)
const time = [...gameEvents.keys()].pop()
console.log(time)
console.log(
    `1 sự kiện diễn ra, sau trung bình ${time / gameEvents.size} phút`
)

// 4.
for (const [min, event] of gameEvents) {
    const haft = min <= 45 ? 'FIRST' :'SECOND';
   console.log(`[${haft} HALF] ${min}: ${event}`)

}