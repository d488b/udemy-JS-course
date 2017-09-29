// Passing functions as arguments

var years = [1990,1965,1937,2005,1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for(i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2017 - el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if(el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    } else {
        return "N/A";
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);


// Functions returning functions

function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ", can you please explain what UX design is?");
        }
    }else if(job === 'teacher'){
        return function(name){
            console.log("What subject do you teach, " + name + "?");
        }
    } else {
        return function(name){
            console.log("Hello " + name + ", what do you do?");
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion("John");
designerQuestion("John");

interviewQuestion("teacher")("Dan");

// IIFE - Immediately invoked functions
/*
function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();
*/

(function(goodLuck){
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

// Closures

function retirement(retirementAge){
    var a = " years left until retirement";
    return function(yearOfBirth){
        var age = 2017 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);
//retirement(66)(1990);



function interviewQuestion(job){
    return function(name){
        if(job === "designer"){
            console.log(name + ", can you please explain what UX design is?");
        }else if(job === "teacher"){
            console.log("What subject do you teach, " + name + "?");
        }else{
            console.log("Hello " + name + ", what do you do?");
        }
    }
}

interviewQuestion("teacher")("Jason");