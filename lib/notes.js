const notes = {};

//fetch takes the sees if there is input text and if there is logs it to the console.
notes.fetch = function (text) {
    if(text.a) {
        console.log(text.a)
    } else if (text.add){
        console.log(text.add)
    } else { console.log(' Please enter -a or -add and then a note.')}
}

module.exports = notes;