const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const words = new Input();

if(words){
    Notes.fetch(words);
}
//add the words to the notes. -this will be done via constructor from the note.jsa