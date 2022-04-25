function createDictionnary(dic, array=[]) {
    dic['data'] = []
    dic.data['keys'] = []
    dic.data['values'] = []
    dic['getValue'] = (key) => {
        return dic.data.values[dic.data.keys.findIndex(element => element === key)]
    }
    dic['add'] = (key, value) => {
        dic.data.keys.push(key)
        dic.data.values.push(value)
    }
    dic['deleteLastElement'] = () => {
        dic.data.keys.splice(dic.data.keys.length - 1, 1)
        dic.data.values.splice(dic.data.values.length - 1, 1)
    }
    dic['delete'] = (key) => {
        dic.data.keys.splice(dic.data.keys.findIndex(element => element === key), 1)
        dic.data.values.splice(dic.data.keys.findIndex(element => element === key) - 1, 1)
    }
    dic['count'] = () => {
        return dic.data.keys.length
    }
    for(let i=0; i < array.length; i += 2) {
        dic.data.keys.push(array[i])
    }
    for(let i=1; i < array.length; i += 2) {
        dic.data.values.push(array[i])
    }
}

function randomValue(array, index=false) {
    let element = Math.floor(Math.random() * array.length)

    if(index === false) {
        return array[element]
    } else if(index === true) {
        return {
            value: array[element],
            index: element
        }
    }
}
function randomNumber(n1, n2) {
    return Math.floor(Math.random() * (n2 - n1 + 1) + n1)
}

function sortNumbers(array) {
    return array.sort((a, b) => a - b)
}
function invertSortNumbers(array) {
    return array.sort((a, b) => a + b)
}

function waiting(ms) {
    return new Promise((finish) => {
        setTimeout(() => {
            finish('finish !')
        }, ms);
    })
}

function isMultiple(nb, div) {
    if(Number.isInteger(nb / div)) {
        return true
    } else {
        return false
    }
}

function insert(a, n, c) {
    let newArr = []
    for(let i=0; i < n - 1; i++) {
        newArr.push(a[i])
    }
    newArr.push(c)
    for(let i=n - 1; i < a.length; i++) {
        newArr.push(a[i])
    }

    a = newArr
    return a
}

module.exports = {
    create: createDictionnary,
    randomValue: randomValue,
    randomNumber: randomNumber,
    invertSortNumbers: invertSortNumbers,
    sortNumbers: sortNumbers,
    waiting: waiting,
    isMultiple: isMultiple,
    insert: insert
}