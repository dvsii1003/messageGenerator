const randomWords = {
    noun: ['ball', 'dog', 'fan', 'guitar', 'computer', 'book'],
    verb: ['smile', 'write', 'cook', 'kneel', 'eat', 'sleep'],
    adj: ['happy', 'bright', 'dark', 'sleepy', 'thin', 'heavy', 'blue']
};
function randomNoun() {
    return randomWords.noun[(Math.floor(Math.random() * randomWords.noun.length))];
};
function randomVerb() {
    return randomWords.verb[(Math.floor(Math.random() *randomWords.verb.length))];
};
function randomAdj() {
    return randomWords.adj[(Math.floor(Math.random() * randomWords.adj.length))];
};


// Present joke question
console.log(`Why did the ${randomNoun()} ${randomVerb()}?`);

// Present joke answer
console.log(`Because it was ${randomAdj()}.`);