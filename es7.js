// ES7 - Exponentiation, Includes and rest Parameter destructuring

// Exponentiation
const x = 2 * 2 * 2 * 2 * 2;
console.log('2 * 2 * 2 * 2 * 2:', x);
// ES7
const x2 = 2 ** 5;
console.log('2 ** 5:', x2);

const a = 3 ** 2.5
const b = 100 ** -1

console.log(a, b);

const c = NaN * 3
console.log(c);

const d = 2 ** 3 ** 2;
console.log('d = 2 ** 3 ** 2:', d);

const e =  2 ** (3 ** 2);
const f = (2 ** 3) ** 2;

console.log('e =  2 ** (3 ** 2):', e);
console.log('f = (2 ** 3) ** 2:', f);

const g = -(2 ** 2);
console.log(g);

// Includes
// is Essentially the same think as indexOf
const arr = [1, 2, 3, 4, 5];
if(arr.indexOf(2) > -1) {
    console.log("Number found!")
} else {
    console.log("Number not found!");
}

const inArray = arr.includes(28);
console.log(inArray);

// Normal JS
console.log(arr.indexOf(NaN));

// ES7
console.log(arr.includes(NaN));

// DESTRUCTURING rest parameters
const someJSON = {
    name: "Wayne Rooney",
    position: "Forward",
    club: "Manchester United"
}

const { name, position, club } = someJSON
console.log(position);
console.log(name);
console.log(club);

            //...numbers - typical | [a, b] - destructuring
function sum(...[a,b]) {
    //console.log(numbers);
    return a + b
}

console.log(sum(2,3));