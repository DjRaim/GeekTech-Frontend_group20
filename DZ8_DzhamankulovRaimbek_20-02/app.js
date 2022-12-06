/////////1
const numbers =  [
    5, 4, 1, 20, 0, -4, -8, 100, 4, -74, -5, 0, 0, 1, 2, 7
]

function Map(array, callback) {
  const newArr = [];
  for (const item of array) {
    newArr.push(callback(item));
  }
  return newArr;
}
console.log(Map(numbers, (num) => num * 5));

const Filter = numbers.filter(function(num){
    return num > 0;
});

console.log(Filter)

var minNumber = numbers.reduce(function(prev,cur) {
    return prev < cur ? prev : cur;
}, +Infinity);

var maxNumber = numbers.reduce(function(prev,cur) {
    return prev > cur ? prev : cur;
}, -Infinity);

console.log(minNumber);
console.log(maxNumber);
//////2

let randoName = ["алиса","ЖЕНЯ","артем","ПАВЕЛ","ЖАКШЫЛЫК","антон","айсулуу", "канаим"];

const capName = randoName.map(element => {
    return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase() ;
});
console.log(capName)

// function translit (word){
//     var answer = '';
//     var convert = {
//         'а':'a', 'б':'b', 'в':'v', 'г':'g', 'д':'d', 'е':'e', 'ё':'e',
//         'ж':'zh', 'з':'z', 'и':'i', 'й':'y', 'к':'k', 'л':'l', 'м':'m',
//         'н':'n', 'о':'o', 'п':'p', 'р':'r', 'с':'s', 'т':'t', 'у':'u',
//         'ф':'f', 'х':'h', 'ц':'c', 'ч':'ch', 'ш':'sh', 'щ':'sch', 'ь':'',
//         'ы':'y', 'ъ':'', 'э':'e', 'ю':'yu', 'я':'ya',
//
//         'А':'A', 'Б':'B', 'В':'V', 'Г':'G', 'Д':'D', 'Е':'E', 'Ё':'E',
//         'Ж':'Zh', 'З':'Z', 'И':'I', 'Й':'Y', 'К':'K', 'Л':'L', 'М':'M',
//         'Н':'N', 'О':'O', 'П':'P', 'Р':'R', 'С':'S', 'Т':'T', 'У':'U',
//         'Ф':'F', 'Х':'H', 'Ц':'C', 'Ч':'Ch', 'Ш':'Sh', 'Щ':'Sch', 'Ь':'',
//         'Ы':'Y', 'Ъ':'', 'Э':'E', 'Ю':'Yu', 'Я':'Ya'
//     };
//     for (var i = 0; i < word.length; ++i) {
//        answer += convert[word[i]] || word[i];
// }
//     return answer
// };

firstLetName = [];
randoName.filter(function (item,) {
    if (item.startsWith('а')) {
        firstLetName.push(item);
    }
})
console.log(firstLetName);

var longest = randoName.reduce(
    function (a, b) {
        return a.length > b.length ? a : b;
    }
);
console.log(Array(longest));

