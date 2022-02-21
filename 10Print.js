
  let w = process.stdout.columns

  let mode = 0

function draw () {
  setTimeout(draw,1000)
  let output = ''
  for (let j = 0; j < w/8; j++) {
    //output += '_/-\\6'
    //output += '____6'
    if (mode == 0){
      let ran = Math.floor(Math.random() * 6)
      output += ' _/'
      for (let i = 0; i < ran; i++) {
        output += '-'
      }
      output += '\\_6'
      mode = 1
    } else {
      let ran = Math.floor(Math.random() * 11)
      output += ' __'
      for (let i = 0; i < ran; i++){
        output += '_'
      }
      output += '__6'
      mode = 0
    }
  }
  let length = output.length
  let sub = (length - w)
  if (length > w){
    for (let i = 0; i < sub; i++) {
     output = output.slice(0,-1)
    }
  }

  if (mode == 0)  {
    mode = 1
  } else {
    mode = 0
  }
  console.log(sub)
  console.log(output)
}

draw()
