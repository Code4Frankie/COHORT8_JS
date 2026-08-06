//declare
// without parameters
function greetings(){
console.log("HELLO WORLD")
}
greetings()

//declare
// with parameters
function welcome(name){
    console.log(`welcome to class Mr/Mrs/Miss ${name}`)
}
welcome("ThomShelby")

//add fucntion
function add (){
    let x =4;
    let y =6;
    return x + y
}
console.log(add())

function addition (x, y){
    return x + y
}
console.log(addition(9, 10))


function ageCheck(age){
    if(age <= 18 ){
        return "you are underaged"
    }
} 

let frankieAge = ageCheck(15)
console.log(frankieAge)

//functions with multiple parameters

function lotteryWin(winner){
 if(winner ===4){
    return "Congratulations"
 }else{
    return "Trya again"
 }
}
let luckyWinner = lotteryWin(4)
console.log(luckyWinner)

//scoping
//global scope
let score;


/*write a fucntion that grades a students 
score, if the score  is
1: 70-100 display "A"
2: 50-69 display "B"
3: 0-49 display "F"*/

function gradeStudent(score){
    if(score >= 70 && score <= 100){
        return "A";
    } else if(score >= 50 && score < 70){
        return "B";
    } else if(score >= 0 && score < 50){
        return "F";
    } else {
        return "Invalid score";
    }
}console.log(gradeStudent(85)); // Output: A
console.log(gradeStudent(65)); // Output: B
console.log(gradeStudent(35)); // Output: F         

//arrow function
const minus = (num) =>{
    return num - 5
}
let result = minus(10)
console.log(result)
