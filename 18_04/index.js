// var h1 = document.createElement('h1')

// h1.innerHTML = 'Hello World'

// document.body.appendChild(h1)


// import arr from './app.js' // we can name the variable anything we want in case of defaut export

// console.log(arr)


// Named export

// import {user} from './app.js'
// import {age} from './app.js'
// import {city} from './app.js'

// console.log(user)
// console.log(age)
// console.log(city)



// we can also import all the named exports together

import user from './app.js' // default export
import {age, city} from './app.js' // named export

console.log(user);
console.log(age, city);
console.log (age);
console.log(city);