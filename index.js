let counter = 0;

function countUp(x){
    console.log(x);
    x++
    countUp(x);
}

try{
   // countUp(counter);
} catch(Error){
   // console.log("Stackoverflow achieved!", counter, Error)
} //WORKS IN CONSOLE INSIDE BROSWER, DOESN'T INSIDE VSCODE



function store(func){
    let result=func();
    while(typeof result=="function"){
        result=result();
    }
    return result;
}


counter = 0;
function trampoline(x){
    console.log(x);
    x++;
    return function(){
        return trampoline(x);
    }
    

}
store(trampoline(counter))



