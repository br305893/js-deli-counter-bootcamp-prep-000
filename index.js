function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
 return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
 if (katzDeliLine.length > 0) {
   do {
     katzDeliLine.shift()
     x++
   }
   while (x < katzDeliLine.length);
   return `Currently serving ${katzDeliLine[0]}.`
 }
 else {
   return `There is nobody waiting to be served!`
 }
}


function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0) {
    return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`
  }
  else {
    return `The line is currently empty.`
  }
}
