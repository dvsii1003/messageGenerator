const motivationalActions = ['be ambitions', 'find inspiration around you', 'breakthrough your doubt', 'cast away your doubt', 'compliment a stranger'];
const user = 'Don';
console.log(`${user}, today you will ${motivationalActions[Math.floor(Math.random() * (motivationalActions.length - 1))]}.`);
