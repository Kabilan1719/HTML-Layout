let total = 0;
function totalkeyvalue(a)
{
    total += a.keyCode;
}
function totalkey()
{
    document.getElementById("ans").innerHTML = "Total Count:"+ total;
}

document.addEventListener("keydown",function(event)
{
    if(event.key = 'S' && event.ctrlKey)
    {
        event.preventDefault();
    }
});

document.addEventListener("keydown",function(event)
{
    if(event.ctrlKey && event.shiftKey && event.key === 'Q')
    {
        alert('Do you want to close the window');
        window.close();
    }
});