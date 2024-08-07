const randomWords = {
    noun: ['ball', 'dog', 'fan', 'guitar', 'computer', 'book'],
    verb: ['speaks', 'writes', 'types', 'communicate', 'eats', 'sleeps'],
    adjective: ['happy', 'bright', 'dark', 'sleepy', 'thin', 'heavy']
};
function randomNoun() {
    return randomWords.noun[(Math.floor(Math.random() * randomWords.noun.length))];
}
const user = 'Don';
const noun1 = randomNoun();
const noun2 = randomNoun();
console.log(`${noun1} and ${noun2}`);

// Present joke question


// Present joke answer
