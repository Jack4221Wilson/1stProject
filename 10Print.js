
  let w = process.stdout.columns

  let mode = 0

function draw () {
  setTimeout(draw,1000)
  let output = ''
  for (let j = 0; j < w/5; j++) {
    //output += '_/-\\6'
    //output += '____6'
    let num = Math.random()
    if (num < 0.17){
      output += '[+++]'
    } else if (num > 0.16 && num < 0.32){
      output += '[---]'
    } else if (num > 0.32 && num < 0.48){
      output += '[***]'
    } else if (num > 0.48 && num < 0.64){
      output += '[///]'
    } else if (num > 0.64 && num < 0.80){
      output += '[^^^]'
    } else if (num > 0.80){
      output += '[%%%]'
    }


  }
  console.log(output)
}

draw()
