var num =[];
var count = 1;

function fizzBuzz(){
    for(var i=1; i<=100; i++){
    if(count%3===0 && count%5===0){
        num.push("FizzBuzz");
    }
    else if(count%3===0){
        num.push("Fizz");
    }
    else if(count%5===0){
        num.push("Buzz");
    }
    else{
        num.push(count);
    }
    count++;
    console.log(num);
    }

}
fizzBuzz();


