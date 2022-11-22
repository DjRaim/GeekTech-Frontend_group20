//1
function reverseWord (word) {
    return (word === '') ? '' : reverseWord(word.substring(1)) + word.charAt(0);
}
console.log(reverseWord('Privet'))

//2
function palidrome (word) {
    const dlina = word.length;
    for (let i = 0; i < dlina / 2; i++) {
        if (word[i] !== word[dlina - 1 - i]) {
            return 'false';
        }
    }
    return 'true';
}
console.log(palidrome('a dron nord a'))

//3
function average (array) {
    if (array.length === 0)
        return 0;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
let av = [1,2,3,4,5,6,7,8,9,10];
console.log(average(av))

//4
function translit (word) {
    var answer = '';
    var convert = {
        'а':'a', 'б':'b', 'в':'v', 'г':'g', 'д':'d', 'е':'e', 'ё':'e',
        'ж':'zh', 'з':'z', 'и':'i', 'й':'y', 'к':'k', 'л':'l', 'м':'m',
        'н':'n', 'о':'o', 'п':'p', 'р':'r', 'с':'s', 'т':'t', 'у':'u',
        'ф':'f', 'х':'h', 'ц':'c', 'ч':'ch', 'ш':'sh', 'щ':'sch', 'ь':'',
        'ы':'y', 'ъ':'', 'э':'e', 'ю':'yu', 'я':'ya',

        'А':'A', 'Б':'B', 'В':'V', 'Г':'G', 'Д':'D', 'Е':'E', 'Ё':'E',
        'Ж':'Zh', 'З':'Z', 'И':'I', 'Й':'Y', 'К':'K', 'Л':'L', 'М':'M',
        'Н':'N', 'О':'O', 'П':'P', 'Р':'R', 'С':'S', 'Т':'T', 'У':'U',
        'Ф':'F', 'Х':'H', 'Ц':'C', 'Ч':'Ch', 'Ш':'Sh', 'Щ':'Sch', 'Ь':'',
        'Ы':'Y', 'Ъ':'', 'Э':'E', 'Ю':'Yu', 'Я':'Ya'
    };
    for (var i = 0; i < word.length; ++i) {
        if (convert[word[i]] == undefined){
            answer += word[i];
        }else {
            answer += convert[word[i]];
        }
    }
    return answer
}

console.log(translit(prompt('Введите слово')))

// //5
// function validateInn(inn) {
//   var firstNumber = Number(inn && inn[0]);
//   return !!inn && inn.length === 14 && [0, 1, 2].includes(firstNumber);
// }
//
// console.log(validateInn(20902200100673) ? 'INN VALID' : 'INN ERROR');