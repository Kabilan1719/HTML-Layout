//task-1
console.log("task-1");
function arrsorting()
{
    const employees = [ 
        { name: 'John', age: 28 }, 
        { name: 'Anna', age: 22 }, 
        { name: 'Mike', age: 32 },
         ];
         let sortarr = employees.sort(agesort);
         console.log(sortarr);
}
function agesort(a,b)
{
    return a.age - b.age;
}

arrsorting();

//task-2
console.log("task-2");
function oddeven()
{
    const nums = [1, 2, 3, 4, 5, 6];
    const arr = nums.filter(odd1);
    const arr1 = nums.filter(even1);
    const arr2 = [arr,arr1];
    console.log(arr2);
}
function odd1(num)
{
    return num%2 !== 0;
}
function even1(num)
{
    return num%2 === 0;
}

oddeven();

//task-3
console.log("task-3");
function dup()
{
    const data = [ { id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 1, name: 'C' }, ];
    let a = [];
    data.filter(i=>{
        if(!a.some(aobj=>aobj.id == i.id))
            a.push(i);
    })
    console.log(a);
}
dup();

//task-4
console.log("task-4");
function freqele()
{
    const arr = [1, 2, 2, 3, 3, 3];
    let maxcount = 0;
    let maxfreq = 0;
    let count = 0;
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length;j++)
        {
            if(arr[i] == arr[j])
            {
                count++;
            }
        }
        if(count>maxcount)
        {
            maxcount = count;
            maxfreq = arr[i];
        }
    }
    console.log(maxfreq);
}

freqele();

//task-5
console.log("task-5");
const arr1 = [1, 2, 3]; 
const arr2 = [2, 3, 4];
let out = arr1.filter(d=>arr2.includes(d));
console.log(out);

//task-6
console.log("task-6");
const arr = [ { id: 1, name: 'A' }, { id: 2, name: 'B' }, ];
function keyvaluemap()
{
    const arr = [ { id: 1, name: 'A' }, { id: 2, name: 'B' }, ];
    let arr1 = {};
    arr.filter(i=>
    {
        arr1[i.id] = i.name;
    }
    )
    console.log(arr1);
}
keyvaluemap();

//task-7
console.log("task-7");
function elearr()
{
    const arr = [1, 2, 2, 3, 4, 4, 5];
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) 
    {
        let count = 0;
        for (let j = 0; j < arr.length; j++) 
        {
            if (arr[i] === arr[j] && i !== j) 
            {
                count++;
            }
        }
        if (count === 0) 
        {
            arr1.push(arr[i]);
        }
    }
    console.log(arr1);
}
elearr();

//task-8
console.log("task-8");
function keyvalpair()
{
    const obj = { a: 1, b: 2 };
    let ans = [];
    Object.entries(obj).filter(a=>
    {
        ans.push(a);
    }
    )
    console.log(ans);
}
keyvalpair();