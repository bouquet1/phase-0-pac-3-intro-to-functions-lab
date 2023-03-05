function shout(string) {
    return string.toUpperCase();
}
// e.g "Hello!".toUpperCase(); // 'HELLO!'

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string){
    console.log("Hello".toUpperCase());
}

function logWhisper(string){
    console.log("hello".toLowerCase());
}

// Instead of writing Hello in functions, define string=hello once and then, in the function, replace hello to string. Code is more clean.

// const string = "Hello!";
// console.log(string); in terminal=> Hello!
// console.log(string.toUpperCase()); in terminal=> HELLO!
// console.log(string === string.toUpperCase()); in terminal=> false because const string is Hello not HELLO so the third console.log is false. when const string is updated to HELLO the third console log => true. See Below

// const string = "HELLO!";
// console.log(string); in terminal=> HELLO!
// console.log(string.toUpperCase()); in terminal=> HELLO!
// console.log(string === string.toUpperCase()); in terminal=> false 
//


function sayHiToHeadphonedRoommate(string) {
    if(string===string.toLowerCase()){
        return "I can't hear you!";
    }
    else if(string===string.toUpperCase()){
        return "YES INDEED!";
    }
    else if(string==="Let's have dinner together!"){
        return "I would love to!";
    }
    }
