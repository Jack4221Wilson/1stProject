
  let w = process.stdout.columns


function draw () {
  setTimeout(draw,1000)
  let output = ''
  for (let j = 0; j < w; j++) {

    if (Math.random() > 0.5){
      output += '\\'
    } else {
      output += '/'
    }
  }
  console.log(output)
}

draw()
