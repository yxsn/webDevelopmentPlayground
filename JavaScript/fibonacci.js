function fibonacci(num){
    var t1=0, t2=1;
    var fibSeries = [];
    if(num===0){
        console.log(error)
    }
    else if(num===1){
        fibSeries.push(t1);
        return fibSeries;
    }
    else if(num===2){
        fibSeries.push(t1,t2);
        return fibSeries;
    }
    else{
    fibSeries.push(t1,t2);
    for (var i=1; i<=num-2; i++){
        fibSeries.push(fibSeries[i-1]+fibSeries[i]);
    }
    return fibSeries;
    }

}
var num = prompt("Enter the number")
console.log(fibonacci(num));