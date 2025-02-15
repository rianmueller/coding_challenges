// Function -  FirstFactorial(num)
// The function will take the num parameter being passed and return the factorial of it (ie. if num =3, return(3 * 2 * 1)).  For test cases, the range will be between 1 and 18.

function factorial(num){
    var total = 1;
    for (i = 0; i < num; i++){
        total = total * (num - i);
    };
    console.log(total);
}
factorial(18);

// Function - SimpleAdding(num)
// The function will take the num parameter and add up all the numbers from 1 to num.  For test cases, the parameter num will be any number from 1 to 1000.

function simpleAdding(num){
    var total = 0;
    for (i = 0; i < num + 1; i++){
        total = total + i;
    };
    console.log(total);
}
simpleAdding(6);

// Function - LetterCapitalize(str)
// The function will take the str parameter being passed and capitalize the first letter of each word.  Words will be separated by only one space.

function letterCapitalize(str){
    return str.split(' ').map(function(words){
        return words[0].toUpperCase() + words.slice(1);
        })
        .join(' ');
}
console.log(letterCapitalize("this is not a string"))

// Function rangeRover(arr)
// The function will take an array of two numbers and return the sum of those two numbers AND all numbers between them.  The lowest number will not always come first.  For example rangeRover([1, 4]) should return 10, i.e.(1 + 2 + 3 + 4), rangeRover([4, 1]) should also return 10.

function addUp(arr){
    var sum = 0;
    for(i = arr[0]; i < arr[1] + 1; i++){
        sum = sum + i;
    }
    return sum;
}

function addDown(arr){
    var sum = 0;
    for(i = arr[1]; i < arr[0] + 1; i++){
        sum = sum + i;
    }
    return sum
}

function rangeRover(arr){
    var total = 0;
    if(arr[0] < arr[1]){
        total = addUp(arr);
    }else{
        total = addDown(arr);
    }
    console.log('rangeRover: ' + total);
}
rangeRover([1, 6]);
rangeRover([6, 1]);

// Function missingLetter(str)
// The function will find the missing letter passed in the parameter and return it.  If all letters are present in the string, the return will be undefined.  For example missingLetter("abce") should return "d", missingLetter("bcd") should return undefined.

function missingLetter(str){
    for(var i = 0; i < str.length; i++){
        var letter = str.charCodeAt(i);
        if (letter !== str.charCodeAt(0) + i){
            return String.fromCharCode(letter - 1);
        }  
    }
    return undefined;
  }
  console.log('missingLetter(\'abce\'): ' + missingLetter("abce"));
  console.log('missingLetter(\'bcd\'): ' + missingLetter("bcd"));

// Function hailCaesar(num)
// The function will take the num parameter and convert the given number into a roman numeral.  For example hailCaesar(2) should return "II", hailCaesar(5) should return "V".

// Function spinalTap(str)
// The function will convert a string to spinal case.  Spinal case is all-lowercase-words-joined-by-dashes.  For example spinalTap("I own this Taco Stand!") should return "i-own-this-taco-stand!".

// Function sumFibs(num)
// The function will return the sum of all ODD Fibonacci numbers up to and including the passed number if it's a Fibonacci number.  The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, where the next number is found by adding up the two numbers before it.  For example subFibs(4) should return 5, sumbFibs(1000) should return 1785.
