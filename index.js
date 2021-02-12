const input = require('readline-sync');
let singleChar = input.question('Enter a single character to be used in drawing shapes: ');
singleChar = String(singleChar);
while (singleChar.length > 1){
  singleChar= input.question('Invalid input. Please enter just one character whith which to build your shapes: ');
}


function makeLine(size) {
  let line = '';
  for (i = 0; i < size; i++){
    line += '#';
  }
  return line;
}

//console.log(makeLine(9));



function makeRectangle(width, height) {
  let rectangle = '';
  for (let i = 0; i < height; i++){
    rectangle += makeLine(width) + '\n';
  }
  return rectangle.slice(0, -1);
}

//console.log(makeRectangle(5, 3));




function makeSquare(width){
  let square = '';
  for (let i = 0; i < width; i++){
    square = makeRectangle(width, width);
  }
  return square;
}
//console.log(makeSquare(5));



function makeDownwardStairs(height){
  let stairs = '';
  for (let i = 0 ; i < height; i++){
    stairs += makeLine(i+1) + '\n';
  }
  return stairs.slice(0, -1);
}

//console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars) {
  let spaces = '';
  let hashes = '';
  for (i = 0; i < numSpaces; i++){
    spaces += ' ';
  }
  for (i = 0; i < numChars; i++){
    hashes += '#';
  }
  return spaces + hashes + spaces;
}

//console.log(makeSpaceLine(3, 5));




function makeIsoscelesTriangle(height){
  let triangle = '';
  for (let i = 0; i < height; i++){
    triangle += (makeSpaceLine(height-i-1, 2*i+1) +'\n');
  }
  return triangle.slice(0,-1);
}

//console.log(makeIsoscelesTriangle(5));



function makeDiamond(height){
  let diamond = '';
  for (let i = 0; i < height; i++){
    diamond += (makeSpaceLine(height-i-1, 2*i+1) +'\n');
  }
  return diamond.slice(0,-1) + '\n' + diamond.slice(0,-1).split('').reverse().join('');
}

//console.log(makeDiamond(5));

