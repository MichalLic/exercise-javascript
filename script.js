//for loop
console.log("%c 1) Use for loop to count", "font-size: 11px; font-weight:bold");
document.write("Let's count to 10:" + "<br>");
for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
    console.log("%c" + i, "color:green");
}


//Function Math.max
console.log("%c 2) Function Math.max. Returns comment 'git' of max value", "font-size: 11px; font-weight:bold");
function returnMax() {
    var number = Math.max.apply(null, [1, 5, 80, 900]);
    if (number > 150) {
        return "good";
    } else {
        return "same trouble";
    }
}
console.log(returnMax());


//Function Math.max
console.log("%c 3) Function Math.max which returns max value", "font-size: 11px; font-weight:bold");
function returnMax2() {
    var array = [1, 5];
    var number = Math.max.apply(null, array);
    if (number < 6) {
        console.log("All right");
        return number;
    } else {
        console.error("Error");
        return ("Error");
    }
}
returnMax2();


//Function Max of three
console.log("%c 4) Max of three", "font-size: 11px; font-weight:bold");
function maxOfThree(a, b, c) {
    console.log(a, b, c);
    if (c > b && c > a) {
        return c;
    } else if (b > a && b > c) {
        return "false";
    } else {
        return "false";
    }
}
console.log(maxOfThree(10, 20, 100));
maxOfThree(10, 20, 100);


//Check the letter
console.log("%c 5) Check letter and return vowel(true) or consonant(false) ", "font-size: 11px; font-weight:bold");
function checkVowel(letter) {
    var reg = /[aeiouy]/;
    var n = letter.search(reg);
    if (letter.length == 1) {
        if (n >= 0) {
            document.write("It's a vowel!");
            document.write("<br>");
            return true;
        } else {
            document.write("Just a consonant!");
            document.write("<br>");
            return false;
        }
    } else {
        document.write("To longer string!!")
    }
}
console.log(checkVowel("a"));
checkVowel("a");


//Add letter in string
console.log("%c 6) Add 'o' and the same letter to consonant", "font-size: 11px; font-weight:bold");
function translate(sentence) {
    var item = "";
    var res = sentence.split("");
    console.log(sentence);
    var reg = /[aeiouy]/;
    for (var i = 0; i < res.length; i++) {
        item += res[i];
        if (res[i].search(reg) < 0 && res[i] != " ") {
            item += "o";
            item += res[i];
        }
    }
    console.log(item);
}
translate("To jest fikusny tekst");


//Sum and multiply
console.log("%c 7) Sum and multiply number ", "font-size: 11px; font-weight:bold");
function sum(sumArray) {
    var result = 0;
    for (var i = 0; i < sumArray.length; i++) {
        result += sumArray[i];
    }
    console.log("%cThe sum result is: ", "color: violet");
    console.log(result);
}
sum([1, 2, 3, 4]);

function multiply(sumArray) {
    var result = 1;
    for (var i = 0; i < sumArray.length; i++) {
        result *= sumArray[i];
    }
    console.log("%cThe result of the multiplication: ", "color: violet");
    console.log(result);
}
multiply([1, 2, 3, 4]);


//Reverse sentence
console.log("%c 8) Reverse sentence", "font-size: 11px; font-weight:bold");
function reverseSentence(sentence) {
    var back = "";
    for (var i = sentence.length - 1; i >= 0; i--) {
        back += sentence[i];
    }
    console.log("%c jag tester", "color: green");
    console.log(back);
}
reverseSentence("jag testar");


//Show the longest word"
console.log("%c 9) Show the longest word", "font-size: 11px; font-weight:bold");
function findLongestWord(text) {
    var sp = text.split(" ");
    console.log(sp);
    var max = sp[0];
    for (var i = 0; i < sp.length; i++) {
        if (max.length < sp[i].length) {
            max = sp[i];
        }
    }
    console.log(max);
}
findLongestWord("to jest przykładowe zdanie");


//Mirror reflection sentence
console.log("%c 10) Reverse sentence", "font-size: 11px; font-weight:bold");
function findShortestWord(text) {
    var sp = text.split(" ");
    console.log(sp);
    var min = sp[0];

    for (var i = 0; i < sp.length; i++) {
        if (min.length > sp[i].length) {
            min = sp[i];
        }
    }
    console.log(min);
}
findShortestWord("to jest przykładowe zdanie");

//Return words by defined length
console.log("%c 11) Filter words by length", "font-size: 11px; font-weight:bold");
function filterLongWords(value) {
    var myWords = ("aaa, aaaa, aaaaa, aaaaaa, aaaaaaa");
    console.log(myWords);
    var sp = myWords.split(', ');
    console.log(sp);
    for (var i = 0; i < sp.length; i++) {
        if (sp[i].length >= value) {
            console.log(sp[i]);
        }
    }
}
filterLongWords(4);


//Frequency of letters
console.log("%c 12) Frequency of letters", "font-size: 11px; font-weight:bold");
function charFreq(list) {
    var sp = list.split("");
    console.log(sp);
    var temp = [];
    for (var i = 0; i < sp.length; i++) {
        if (temp[sp[i]]) {
            temp[sp[i]]++;
        } else {
            temp[sp[i]] = 1;
        }
    }
    console.log(temp);
}
charFreq("abbcccdddddd");


//Conditional if-else
console.log("%c 12) Conditional if-else", "font-size: 11px; font-weight:bold");
function pass(score) {
    var a = "Pass!";
    var b = "Must learn more";
    if (score > 50) {
        document.write("Your result: " + a);
        console.log("Your result:" + a + "(60%)");
    } else {
        document.write("Your result: " + b);
    }
}
pass(60);


//Conditional if/if-else/els
console.log("%c 13) Conditional if/if-else/else", "font-size: 11px; font-weight:bold");
function rangeScale(score) {
    if (score >= 80) {
        console.log("Otrzymałeś ocenę bardzo dobrą");
    } else if (score >= 60) {
        console.log("Otrzymałeś ocenę dobrą");
    } else if (score >= 50) {
        console.log("Otrzymałeś ocenę dostateczną");
    } else if (score >= 30) {
        console.log("Otrzymałeś ocenę dopuszczającą");
    } else {
        console.log("Otrzymałeś ocenę niedostateczną");
    }
}
rangeScale(60);


//Conditional switch/case
console.log("%c 14) Conditional switch/case", "font-size: 11px; font-weight:bold");
function choiceColor(color) {
    /*var color = "żółty";*/
    console.log("%c" + color, "color:yellow");
    switch (color) {
        case "red":
            console.log("not bad");
            break;
        case "yellow":
            console.log("also good");
            break;
        case "white":
            console.log("perfect");
            break;
        default :
            console.log("rainbow");
    }
}
choiceColor("yellow");


//For loop
console.log("%c 15) For loop", "font-size: 11px; font-weight:bold");
function minus(number) {
    var a = 20;
    for (var i = 0; i <= number; i++) {
        a -= 1;
        console.log("%c" + a, "color:pink");
    }
}
minus(20);


// Do/while loop
console.log("%c 15) Do/while loop ", "font-size: 11px; font-weight:bold");
function addToTen() {
    var i = 0;
    console.log("Add 1 by step: ");
    do {
        i++;
        console.log(i);
    }
    while (i < 10);
}
addToTen();


//while loop
console.log("%c 16) While loop ", "font-size: 11px; font-weight:bold");
function minusToZero() {
    var starter = 50;
    while (starter > 0) {
        console.log("Road to zero: " + starter);
        starter--;
    }
    console.log("%c" + starter, "color: grey");
}
minusToZero();


//Building an array
console.log("%c 16) Array ", "font-size: 11px; font-weight:bold");
var arrayDays = new Array(7);
arrayDays[0] = "Mo";
arrayDays[1] = "Th";
arrayDays[2] = "We";
arrayDays[3] = "Thu";
arrayDays[4] = "Fr";
arrayDays[5] = "Sa";
arrayDays[6] = "Su";
console.log(arrayDays);


//String objects in console.log
console.log("%c 17) String objects in console.log", "font-size: 11px; font-weight:bold");
var name = "for example";
console.log(name);
console.log(name.indexOf("for"));
console.log(name.charAt(0));


//Math objects in console.log
console.log("%c 18) Math objects in console.log", "font-size: 11px; font-weight:bold");
var number = 100.2;
console.log(Math.abs(number) + "%c Value", "color:red");
console.log(Math.cos(number) + "%c Cosine", "color:red");
console.log(Math.round(number) + "%c Rounded of value", "color:red");


//e.g function
console.log("%c 19) Defined function", "font-size: 11px; font-weight:bold");
function kilosToGrams(kilos) {
    var grams = kilos * 1000;
    console.log(grams);
}
kilosToGrams(2);


