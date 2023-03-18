// console.log(arguments)
// console.log(require('module').wrapper)

// module.exports
const C = require('./test-moudle-1')
const calc1 = new C()
console.log(calc1.add(2, 5))

// exports
const calc2 = require('./test-moudle-2')
console.log(calc2.multiply(2, 5))

// caching
require('./test-modules-3')()
require('./test-modules-3')()
require('./test-modules-3')()
