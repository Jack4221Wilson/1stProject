
  let w = process.stdout.columns

  let mode = 0

function draw () {
  setTimeout(draw,1000)
  let output = ''
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
  if (mode == 0)  {
    mode = 1
  } else {
    mode = 0
  }
  console.log(output)
}

draw()
