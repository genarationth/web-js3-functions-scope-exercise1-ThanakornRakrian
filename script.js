function add (a,b){
    return a+b;
}

function subtract (a,b){
    return a-b;
}

function multiply (a,b){
    return a*b;
}

function divide (a,b){
    return a/b;
}

const a = 6;
const b = 2;

console.log(add(a,b));
console.log(subtract(a,b));
console.log(multiply(a,b));
console.log(divide(a,b));
console.log(b,typeof b);

function information (fname,location,hobby){
    return console.log(`Hi, my name is ${fname} I live in ${location} and enjoy ${hobby}`);
}

information('Meng','Samutprakan','basketball');