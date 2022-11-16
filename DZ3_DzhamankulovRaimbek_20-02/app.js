for (var i = 1; i <= 7; i++) {
  var star;
  var currentStar = 0
  if (currentStar === i) continue;
  switch (i) {
    case 1:
      star = "*";
      break;
    case 2:
      star = "**";
      break;
    case 3:
      star = "***";
      break;
    case 4:
      star = "****";
      break;
    case 5:
      star = "*****";
      break;
    case 6:
      star = "******";
      break;
    case 7:
      star = "*******";
      break;
  }
  console.log((i === 1 ? "" : "") + star);
}

//////2

for (var i = 1; i <= 100; i++) {
  str = '';

  if (i%3 ==0){
    str += 'Fizz';

  }
  if (i%5 ==0){
    str += 'Buzz';
  }
  console.log( str ? str : i )
}
/////3

var word = prompt('введите слово');
var letter = prompt('введите букву');

var countChar = word.split(letter).length - 1;

console.log(countChar)

////4

function capitalizeWords(letter) {
  return letter.map(element => {
    return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
  });
}

console.log(capitalizeWords([prompt('введите слово')]));

