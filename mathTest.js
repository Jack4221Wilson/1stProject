
let maxLength = 30
let loop = 10

function draw(){
  setTimeout(draw,500)
  let output = ''
  for (let i = 0; i < 10; i++) {
    let ran = Math.floor(Math.random() * 11)
    output += '['
    for (let i = 0; i < ran; i++){
      output += '-'
    }
    output += ']'
  }
  /* if (output.length >= maxLength){
    let sub = output.length - maxLength - 1
    for (let i = 0; i > sub; i++) {
      output.pop()
    }
    output += ']'
  } */

  console.log(output)
}
draw()
