const col = require('colors')
const ps = require('prompt-sync')
const pss = ps()
const tricks = require('tricks.js')

var username = ''

console.clear()
console.log(col.red('Welcome to Bingo.js'))
console.log('')
setTimeout(() => {
    username = pss(col.yellow('Please enter your username --> '))
    console.log('')
    console.log(col.yellow('Ok ' + username + ', do you want to start ?'))
    setTimeout(() => {
        let start = pss(col.blue('yes') + ' or ' + col.blue('quit') + ' --> ')
        if(start === 'yes') {
            starting()
        } else if(start === 'quit') {
            console.log('Okay, i quit')
        } else {
            console.log(col.red('It\'s not a correct word, sorry'))
        }
    }, 100)
}, 100)

function starting() {
    console.log('')
    let min = pss('Okay, enter the mininmum amount --> ')
    console.log('')
    let max = pss('Okay, enter the maximum amount --> ')
    console.log('')
    let amount = tricks.randomNumber(min, max)
    
    console.log('Okay, test now!')
    let testing = pss('number --> ')
    testNumber(testing, amount)
}

function testNumber(n1, n2) {
    if(n1 == n2) {
        console.log('')
        console.log(col.green('You win!'))
        console.log('')
        setTimeout(() => {
            console.log(col.yellow('Okay, ' + username + ',do you want to restart ?'))
            let start = pss(col.blue('yes') + ' or ' + col.blue('quit') + ' --> ')
            if(start === 'yes') {
                starting()
            } else if(start === 'quit') {
                console.log('Okay, i quit')
            } else {
                console.log(col.red('It\'s not a correct word, sorry'))
            }
        }, 1000)
    } else {
        let testing = pss('number --> ')
        testNumber(testing, n2)
    }
}