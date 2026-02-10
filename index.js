let counter = 0;

function countUp(x){
    console.log(x);
    x++
    countUp(x);
}

try{
    countUp(counter);
} catch(Error){
    console.log("Stackoverflow achieved!", counter, Error)
} //WORKS IN CONSOLE INSIDE BROSWER, DOESN'T INSIDE VSCODE

