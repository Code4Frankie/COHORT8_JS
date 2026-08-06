//if/else
let age = 40;

if( age  >= 18) {
    console.log("verified to vote")
}else {
    console.log("you are underaged");
}



//else/if

let gender = ""

if(gender === "female"){
    console.log("you are a femaile , use the lady's room")
}else if(gender === "non-binary"){
    console.log("use the non-binary room")
}else if(gender === "trans"){
    console.log("use trans room")
}else {
    console.log("your are  a gbola man, use the mens room")
}


//loops

for(let i=0; i<10; i++){
    console.log(i)
}

let arrOfNames = ["james", "jane", "mike", "wess", "game"]
    console.log(arrOfNames.lenght)
for(let names = 0; names <arrOfNames.length; names++) {
    console.log("Techcrush"  +   arrOfNames [names])
}

for(let x=0; x<=12; x++){
    console.log(x * 3)
}

// while loop
let loginAttempts = 1
while(loginAttempts <3){
    console.log(`attempt number ${loginAttempts}`)
    loginAttempts++
}

let scores = [20, 12, 25, 15];
for(let newScore = 0; newScore < scores.length; newScore++){
    console.log(scores[newScore] + 20)
}