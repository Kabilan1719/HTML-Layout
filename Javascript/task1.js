//task-1
console.log("Task-1");
let num = prompt("Enter the Number");
if(num%2 == 0)
{
    console.log("The Number is even");
}
else
{
    console.log("The Number is Odd");
}

//task-2
console.log("Task-2");
for(let i=1;i<=10;i++)
{
    console.log(i+" ");
}

//task-3
console.log("Task-3");
let mul = prompt("Enter the Number");
for(let i=1;i<=10;i++)
{
    console.log(mul*i);
}

//task-4
console.log("Task-4");
let prime = prompt("Enter the Number");
var flag = false;
if(prime<=1)
{
    flag = false;
}
for(let i=2;i<=Math.sqrt(prime);i++)
{
    if(prime%i == 0)
    {
        flag = false;
    }
    else
    {
        flag = true;
    }
}
if(flag)
{
    console.log("Entered Number is Prime");
}
else
{
    console.log("Entered Number is not a Prime");
}

//task-5
console.log("Task-5");
var sum = 0;
for(let i=1;i<100;i++)
{
    sum += i;
}
console.log("Sum of the Number is"+sum);

//task-6
console.log("Task-6");
let arr = [1,5,3,9,2];
var largest_num = 0;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>largest_num)
    {
        largest_num = arr[i];
    }
}
console.log(largest_num);

//task-7
console.log("Task-7");
let names = prompt("Enter the String").toLowerCase();
var vowarr = ['a','e','i','o','u'];
let count = 0;
for(let word of names)
{
    if(vowarr.includes(word))
    {
        count++;
    }
}
console.log(count);

//task-8
console.log("Task-8");
let pattern = prompt("Enter the Number");
for(let i=1;i<=pattern;i++)
{
    let row = "";
    for(let j=1;j<=i;j++)
    {
        row += "*";
    }
    console.log(row);
}

//task-9
console.log("Task-9");
for(let i=1;i<=50;i++)
{
    if(i%3 == 0 && i%5 == 0)
    {
        console.log("FizzBuzz");
    }
    else if(i%3 == 0)
    {
        console.log("Fizz");
    }
    else if(i%5 == 0)
    {
        console.log("Buzz");
    }
    else
    {
        console.log(i);
    }
}

//task-10
console.log("Task-10");
let rev = prompt("Enter the String");
let chararr = rev.split('');
let joinedstring = '';
for(let i=chararr.length-1;i>=0;i--)
{
    joinedstring += chararr[i];
}
console.log("Orginal String:"+rev+" "+"Reversed String:"+joinedstring);