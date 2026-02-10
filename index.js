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
//store(trampoline(counter)) <- This causes an infinite loop
//Work on this still

let pElement = document.querySelector("p")
let number = Number(pElement.textContent);
console.log(number+4);

function primeNumber(n){
    let count =0;
    let primeCount = [];
    //pElement.innerHTML+= "<li>This is a test</li>"
    let isPrime = false;

    
    for(let i = 1; i<n+1; i++){ 
        if(n%i===0){
            primeCount.push(true);
            //primeNumber(i);
           // console.log(i, "is divisible.")

        } else{
            primeCount.push(false);
            //primeNumber(i);
            //console.log(i, "not divisble.")
        }
    }
    if(n===1){
        return {num: n, prime: false} ;   
    }
    primeCount.forEach(function(item){
        if(item===true){
            count=count+1
        }
    })
    if(count===2){
        console.log("It's a prime!")

        return {num: n, prime: true};
    } else if(count>2)
    {console.log("Not a prime."); return {num: n, prime: false};}
   // if(primeCount.forEach.true === 2){
      //  console.log("test");
   // }

}

function printPrime(n){

    for (let y=n; y>1; y--){
        setTimeout(100);
       // primeResult = primeNumber(y)
        if(primeNumber(y).prime===true){

            pElement.innerHTML+=`<li> ${primeNumber(y).num} </li>`;
            
        }

    }
}
printPrime(97);
alert("Initial Phase finished! Now starting 10,000!");
printPrime(10000);