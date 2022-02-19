
let maxLength = 20
let loop = 10

function draw(){
  setTimeout(draw,2000)
  let output = ''
  for (let i = 0; i < 10; i++) {
    let ran = Math.floor(Math.random() * 11)
    output += '['
    for (let i = 0; i < ran; i++){
      output += '-'
    }
    output += ']'
  }
  let length = output.length
  let sub = length - maxLength + 1
  if (length > maxLength){
    for (let i = 0; i < sub; i++) {
     output = output.slice(0,-1)
    }
    output += ']'
  }
  console.log(output)
}
draw()
