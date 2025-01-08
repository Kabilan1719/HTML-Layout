//task-1
console.log("Task-1");
let a = parseInt(prompt("Enter the num1"));
let b = parseInt(prompt("Enter the num2"));
function add(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return a-b;
}
function mul(a,b)
{
    return a*b;
}
function div(a,b)
{
    return a/b;
}
console.log(add(a,b));
console.log(sub(a,b));
console.log(mul(a,b));
console.log(div(a,b).toFixed(2));

//task-2
console.log("Task-2");
let c = parseInt(prompt("Enter the num"));
if(c<=10 && c/2 == 0)
{
    console.log("The number is greater than 10 and divisible by 2");
}
else
{
    console.log("The number is not greater than 10 and divisible by 2");
}

//task-3
console.log("Task-3");
let d = parseInt(prompt("Enter the num"));
let e = (d<0)? "Negative" : "Positive";
console.log(e);

//task-4
console.log("Task-4");
let num = parseInt(prompt("Enter the Number"));
if(num%2 == 0)
{
    console.log("Even");
}
else
{
    console.log("Odd");
}

//task-5
console.log("Task-5");
let mark = parseInt(prompt("Enter the Mark"));
switch(true)
{
    case (mark>=90):
        console.log("The grade is A");
        break
    case (mark>=80):
        console.log("The grade is B");
        break
    case (mark>=70):
        console.log("The grade is C")
        break
    case (mark<70):
        console.log("Fail");
        break
    default:
        console.log("Enter the valid Number");
}

//task-6
console.log("Task-6");
let tab = parseInt(prompt("Enter the num"));
for(let i=1;i<=10;i++)
{
    console.log(tab + "x" + i + "=" + tab*i);
}

//task-7
console.log("Task-7");
let f = parseInt(prompt("Enter the num"));
let count = 0;
while(f>0)
{
    count++;
    f= Math.floor(f/10);
}
console.log(count);

//task-8
console.log("Task-8");
window.onload = function() 
{
    alert("Welcome to my website!");
}

//task-9
console.log("Task-9");
let confrm = confirm("Do you want to continue?");
if(confrm)
{
    alert("You choose to Continue!");
}
else
{
    alert("You Cancelled");
}

//task-10
console.log("Task-10");
let g = parseInt(prompt("Enter the num"));
if(g>=18)
{
    alert("You are eligible!");
}
else
{
    alert("You are not eligible!");
}

//task-11
console.log("Task-11");
let h = parseInt(prompt("Enter the weight"));
let i = parseInt(prompt("Enter the height"));
let bmi = h/Math.sqrt(i);
alert("BMI:"+bmi);

//task-12
console.log("Task-12");
let name1 = prompt("Enter the String");
let j = name1.split('').reverse().join('');
console.log(j);

//task-13
console.log("Task-13");
let names = prompt("Enter the String").toLowerCase();
var vowarr = ['a','e','i','o','u'];
let count1 = 0;
for(let word of names)
{
    if(vowarr.includes(word))
    {
        count1++;
    }
}
console.log(count1);

//task-14
console.log("Task-14");
let name2 = prompt("Enter the String").toLocaleLowerCase;
let k = name1.split('').reverse().join('');
if(name2 == k)
{
    console.log("The entered string is palindrome");
}
else
{
    console.log("The entered string is not a palindrome");
}

//task-15
console.log("Task-15");
let name3 = prompt("Enter the String");
let l = name3.split(" ");
for(let i=0;i<l.length;i++)
{
    console.log(l[i].charAt(0));
}

//task-16
console.log("Task-16");
let m="i love programming"
console.log(m.replace("programming","javascript"));

//task-17
console.log("Task-17");
let name4 = prompt("Enter the String");
let n = name4.split(" ");
console.log(n);

//task-18
console.log("Task-18");
let name5 = prompt("Enter the String");
let o = name5.split(" ");
let p = '';
for(let i=0;i<o.length;i++)
{
    p += o[i];
}
console.log(p);

//task-19
console.log("Task-19");
let name6 = prompt("Enter the String");
let cha = prompt("Enter the character");
let q = name6.split('');
let count3 = 0;
for(let i=0;i<q.length;i++)
{
    if(q[i] == cha)
    {
        count3++;
    }
}
console.log(count3);

