var num1=prompt("Enter your number:");
var num2=prompt("Enter your 2nd number:");

num1=parseInt(num1,10);
num2=parseInt(num2,10);
var sum, sub;

sum=num1+num2;
document.getElementById("name").innerHTML=sum;
sub=num1-num2;
document.getElementById("id").innerHTML=sub;


