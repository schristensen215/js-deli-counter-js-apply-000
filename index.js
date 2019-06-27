let katzDeliLine = [];

function takeANumber(line, name){
  line.push(name);
  return 'Welcome, ${name}. You are number ${katzDeliLine.length} in line.'
}

function nowServing(line){
  if(line.length > 0){
    let firstPerson = katzDeliLine.pop();
    return firstPerson
  }
  else return 'There is nobody waiting to be served!';
}

function currentLine(line){
  let outputStr = 'The line is currently: ';
  if(line.length === 0) return 'The line is currently empty.';
  else{
    for(let i = 0; i < line.length; i++){
      if(i === line.length - 1){
        outputStr += (i + 1) + '. ' + line[i];
      }
      else{
        outputStr += (i + 1) + '. ' + line[i] + ', ';
      }
    }
    return outputStr;
  }
  
}