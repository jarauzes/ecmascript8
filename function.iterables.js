// #ITERABLES
// DEFAULT: Array, Map, WeakMap, String, TypedArray, Set, Weakset

// Example:
const cuts = ['Dave', 'Joel', 'John', 'Daws', 'Mark'];

// Typical Method
console.log('-----Typical----');
for (let i = 0; i < cuts.length; i++) {
    console.log(cuts[i]);
}

// forEach (you can break;)
console.log('-----forEach----')
cuts.forEach((cut) => {
    console.log(cut);
    // DONTS
    // Illegal break statement
    //if(cut === 'Joel') {
    //    break;    // Illegal break statement
    //    continue; // illegal continue statement
    //}
});

cuts.shop = 'Dany';

console.log('-----for...in----')
for(const index in cuts) {
    console.log(cuts[index]);
}

// getting the key of array
console.log('-----for...in----')
for(const cut in cuts) {
    console.log(cut);
}