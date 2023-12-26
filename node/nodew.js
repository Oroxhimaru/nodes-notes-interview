const arr = [1,2,3,4,5];

let result = arr.filter((number) => {
    return number > 4
});

console.log(result);

// you can also import modules just that what you want
const fs = require('fs').writeFileSync;
fs('dbz.txt',"kakarooooot"); 

// core modules : the code which already install in language and provided by the language.
// two types of mmodules global  and non global 
// global is the one which is we can use directly like console.log()
// non global is the one which we need to import like fs, buffer, http.


//https://github.com/anil-sidhu/node-js/tree/master see code in this repo branches.