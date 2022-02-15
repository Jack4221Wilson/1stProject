
  let w = process.stdout.columns


function draw () {
  setTimeout(draw,1000)
  let output = ''
  let mode = 0
  for (let j = 0; j < w/8; j++) {
    //output += '_/-\\6'
    //output += '____6'
/*
    if (Math.random() > 0.5){
      output += '\\'
    } else {
      output += '/'
    }
    */
    if (mode == 0) {
      output += '  _/-\\_6'
      mode = 1
    } else {
      output += '  _____6'
      mode = 0
    }
  }
  console.log(output)
}

draw()
