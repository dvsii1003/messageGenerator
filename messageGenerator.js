const motivationalActions = ['be ambitions', 'find inspiration around me', 'breakthrough my doubt', 'cast away my doubt', 'compliment a stranger'];
const user = 'Don';
console.out(`${user}, today you will ${motivationalActions[Math.floor(Math.random() * (motivationalActions.length - 1))]}.`);
