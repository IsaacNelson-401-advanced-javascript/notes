const minimist = require('minimist');


function Input() {
    const args = minimist(process.argv.slice(2));
    console.log(args);
    this.a = args.a;
    this.add = args.add;
}

// Input.prototype.getAdd = function (add = "") {
//     let validAdd = /a|add/i;
//     return validAdd.test(add) ? add : 'Invalid Input';

// }



module.exports = Input;