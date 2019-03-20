# Ecmascript 8 - 2019!
Most Important Features of Ecmascript 8 to Learn for real Time programming

<h1>Expressions</h1>
const anExpression = `43 * 1902 = ${43*1902}`; // * <br/>
console.log(anExpression); // 43 * 1902 = 81786<br/>

let isMember = true;<br/>
const aTernary = `Your price is ${isMember ? "$2.00" : "$4.00"}`;<br/>
console.log(aTernary); // Your price is $2.00 if isMember = false ; *Your price is $4.00*
<br/>
<h1>Tagged Literals</h1>
https://github.com/jarauzes/ecmascript8/tree/master/templateLiterals
<br/>
<h1>Class & Static Functions</h1>
Classes with Symbols Example: https://github.com/jarauzes/ecmascript8/blob/master/classes.withsymbols.js
Classes and Static Example: https://github.com/jarauzes/ecmascript8/blob/master/classes.static.js
<br/>
<h1>Primitive & Object - Data Types</h1>
<b>Primitive</b> data types cannot be de-constructed into simpler types, so they're pretty easy to identify
<code>String, number, boolean, null, undefined, symbol</code>

examples:
let str = `Popeye`;
let numb = 3;
let bool = true;
let n = null;
let undef = undefined;
let s = Symbol(`mySymbol`) 

An <b>object</b> is a collection of properties. These properties are stored in key/value pairs. Properties can reference any type of data, including objects and/or primitive values.

example:
var obj = {
  key1: 'value',
  key2: 'value',
  key3: true,
  key4: 32,
  key5: {}
}
