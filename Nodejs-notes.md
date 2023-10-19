# NODE JS Notes / Interview's Answer:
1. node js console.log is not a part of javascript but it is a module of NodeJS which  is similar to javascript's console.log
2. filter function = run on array and use for filtering with the help of function const arr = [1,2,3,4,5];

let result = arr.filter((number) => {
    return number > 4
});
console.log(result);  //5

3. you can also import modules just that what you want, const fs = require('fs').writeFileSync;  then fs( filename, what you want to write); plus it is not necessary to name the const as modules name you can change too like const FY = require('fs');