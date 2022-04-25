# tricks.js Npm

# Usage

**in terminal:**
```
$ npm init
```
```
$ npm i tricks.js
```

**in js file:**
```js
const tricks = require('tricks.js')
```

---

# dictionnary

## create dictionnary
```js
var dictArray = ['name', 'john', 'age', 23]
var dictionnary = {}

tricks.create(dictArray, dictionnary)

// --- or --- \\

var dictionnary = {}

tricks.create(dictionnary)
```

## console dictionnary
```js
console.log(dictionnary.data)
/* > {
    keys: ['name', 'age'],
    values: ['John', 23]
} */

console.log(dictionnary.data.keys)
// > keys: ['name', 'age']

console.log(dictionnary.data.values)
// > values: ['John', 23]
```

## get value by key
```js
console.log(dictionnary.getValue('name'))
// > 'John'
```

## add element ( key + value )
```js
dictionnary.add('lastName', 'Doe')
console.log(dictionnary.getValue('lastName'))
// > Doe
```

## delete last element
```js
dictionnary.deleteLastElement()
console.log(dictionnary.data)
/* > {
    keys: ['name', 'age']
    values: ['John', 23]
} */
```

## delete element by key
```js
dictionnary.delete('age')
console.log(dictionnary.data)
/* > {
    keys: ['name']
    values: ['John']
} */
```

## count elements
```js
console.log(dictionnary.count)
// > 1
```

# other functions

## random number
```js
console.log(tricks.randomNumber(10, 35))
// exemple: > 23 or 12 or 35
```

## random value in array
```js
var array = ['value 1', 'value 2', 3, true]
console.log(tricks.randomValue(array))
// exemple: > 'value 2' or 3

// --- or --- \\

var array = ['value 1', 'value 2', 3, true]
console.log(tricks.randomValue(array, true)) // true = element + index of element
/* exemple > { value: 'value 2', index: 1 }
   or 
   { value: 'true', index: 3} */
```

## sort numbers in array
```js
var array = [10, 30, 20, 40]
console.log(tricks.sortNumbers(array))
// > [10, 20, 30, 40]
```

## invert sort numbers in array
```js
var array = [10, 30, 2O, 40]
console.log(tricks.invertSortNumbers(array))
// > [40, 30, 20, 10]
```

## basic waiting
```js
console.log('first')
await tricks.waiting(2000) // don't forget the await !
console.log('finish')
/* > first
( we wait 2s ( 2000ms ) )
finish */
```

## check if number is a multiple of other number
```js
console.log(tricks.isMultiple(10, 5))
// > true
console.log(tricks.isMultiple(10, 3))
// > false
```

## insert element in array
```js
const array = ['one', 'three']
console.log(insert(array, 2, 'two'))
// > ['one', 'two', 'three']
```

### Thanks You for reading !
#### creator: Hold_Mine