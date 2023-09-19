# array-to-object

Converts arrays into objects. Pass an array of keys and values.
If duplicate keys exist, the last value wins. 

<a href="https://nodei.co/npm/array-to-object/"><img src="https://nodei.co/npm/array-to-object.png?downloads=true"></a>

[![Build Status](https://travis-ci.org/joaquimserafim/array-to-object.png?branch=master)](https://travis-ci.org/joaquimserafim/array-to-object)



####API

```js    
var arrToObj = require('array-to-object');

var keys   = ['moe', 'larry', 'curly', 2014];
var values = [30, 40, 50, {month: 'May', day: 17}];

var object = arrToObj(keys, values);

// output:
{ '2014': { month: 'May', day: 17 }, moe: 30, larry: 40, curly: 50 }
```