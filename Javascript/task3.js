//task-1
console.log("task-1");
let a = prompt("Enter the Sentence");
function larword(a){
let b = a.split(" ");
let maxlength = b[0].length;
for(let i=1;i<b.length;i++)
{
    if(maxlength < b[i].length)
    {
        maxlength = b[i].length;
    }
}
for(let i=0;i<b.length;i++)
{
    if(b[i].length == maxlength)
    {
        return b[i];
    }
}
}
console.log(larword(a));

//task-2
console.log("task-2");
let b = prompt("Enter the sentence");
function wordchange(b) 
{
    let d = "";
    let c = b.split(" ");
    for(let i=0;i<c.length;i++)
    {
        if(d.includes(c[i]))
        {
            d += " CHANGED";
        }
        else
        {
            d = d + " " + c[i];
        }
    }
    return d;
}
console.log(wordchange(b));

//task-3
console.log("task-3");
let c = prompt("Enter the sentence");
function replaceword(c)
{
    let d = c.split(" ");
    let e = "";
    for(let i=0;i<d.length;i++)
    {
        if(d[i].length%2 == 0)
        {
            e += " " + d[i];
        }
        else
        {
            e += " Even";
        }
    }
    return e;
}
console.log(replaceword(c));

//task-4
console.log("task-4");
let d = prompt("Enter the sentence");
function remrepeatedword(d)
{
    let e = "";
    for(let i=0;i<d.length;i++)
    {
        if(d.charAt(i) == ' ')
        {
            e = e + " ";
        }
        else if(!e.includes(d.charAt(i)))
        {
            e += d.charAt(i);
        }
    }
    return e;
}
console.log(remrepeatedword(d));