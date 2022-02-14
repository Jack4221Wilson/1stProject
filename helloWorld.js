/*  6 types of data
  strings
  Booleans
  Functions
  objects
  undefined

  assignment operator: =
  artihmatic operators: + - / * %
  boolean operators: > < >= <= !==
  logical operators: && || !
  unlary operator: typeof
*/

const name = 'Jack'
const b = 'bye'
const c = "good"

let x = 10
let y = 3.14

const t = true
const f = false

console.log(c,b,name)

//conditional statements

let message
let age = 20

if (age >= 100){
  message = 'drinks on me'
} else if (age >= 21) {
  message = 'welcome to the bar'
} else {
  message = 'no entry youngin'
}

console.log(message)

//loops

let i = 1

while (i <= 3) {
  console.log('hi',i)
  i ++
}

for (let j = 0; j <= 3; j++) {
  console.log('j is currently', j)
}

function square (n) {
  let f = n * n
  return f
}

const k = square(5)

console.log(k)
