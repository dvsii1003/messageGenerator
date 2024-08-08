const randomVocab = {
    noun: ['ball', 'dog', 'fan', 'guitar', 'computer', 'book'],
    verb: ['smile', 'write', 'cook', 'kneel', 'eat', 'sleep'],
    adj: ['happy', 'bright', 'dark', 'sleepy', 'thin', 'heavy', 'blue']
};
function randomWord(part) {
    return randomVocab[part] [(Math.floor(Math.random() * randomVocab[part].length))];
};



// Present joke question
console.log(`Why did the ${randomWord('noun')} ${randomWord('verb')}?`);

// Present joke answer
console.log(`Because it was ${randomWord('adj')}.`);