var num=[];
for(i=1;i<=100;i++){
    num[i]=i;
     if(num[i]%3===0 && num[i]%5===0){
     num[i]="FizzBuzz";
    }
    if(num[i]%3===0){
        num[i]="Fizz";
    }
    if(num[i]%5===0){
        num[i]="Buzz";
    }

}
console.log(num);
