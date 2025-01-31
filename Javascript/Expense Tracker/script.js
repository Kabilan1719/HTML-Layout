const expensearr = [{No:1, Date:'2024-12-31', Amount:1000, Category:'Travel', Type:'Expence' ,Reference:"IRCTC" },
    {No:2, Date:'2024-12-31', Amount:300, Category:'Food', Type:'Expence' ,Reference:"Swiggy" },
];

document.getElementById('addnew').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.add-expense').style.display = 'block';
    document.querySelector('.display-events').style.display = 'none';
});

function addEventListener()
{
    document.querySelectorAll('.delete-btn').forEach(c => {
        c.addEventListener('click', deletexpence);
    });

    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', editexpense);
    });
}

document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();
    let no = expensearr.length+1;
    let date = document.getElementById('date').value;
    let amount = document.getElementById('amount').value;
    let category = document.getElementById('category').value;
    let type = document.getElementById('type').value;
    let reference = document.getElementById('reference').value;
    // expensearr.push({No: no + 1, Date: date, Amount:amount, Category:category, Type:type, Reference:reference});
    const mode = document.getElementById('submit-btn').dataset.mode;
    
    if (mode === 'edit') {
        const index = document.getElementById('submit-btn').dataset.index;
        expensearr[index] = {No: parseInt(index) + 1, Date: date, Amount: amount, Category: category, Type: type, Reference: reference};
    } else {
        expensearr.push({No: no, Date: date, Amount: amount, Category: category, Type: type, Reference: reference});
    }
    document.querySelector('.add-expense').style.display = 'none';
    document.querySelector('.display-events').style.display = 'block';
    document.querySelector('.form').reset();
    addexpense();

});

function addexpense()
{
    const tableappend = document.getElementById('t-body');
    tableappend.innerHTML = '';
    let totalamnt = 0;
    expensearr.forEach(a => {
        tableappend.innerHTML += `<tr class='tab ${a.Type} ${a.Category} ${a.Amount}'>
        <td class="">${a.No}</td>
        <td class="">${a.Date}</td>
        <td class="">${a.Amount}</td>
        <td class="">${a.Category}</td>
        <td class="">${a.Type}</td>
        <td class="">${a.Reference}</td>
        <td class="icon"><a href="" id="edit-btn" onclick="editexpense(event)"><i class="fa-regular fa-pen-to-square" style="color: #1b7e14;"></i></a><a href="" id="delete-btn" onclick="deletexpence(event)"><i class="fa-solid fa-trash" style="color: #1b7e14;"></i></a></td>
        </tr>`;
        totalamnt += parseInt(a.Amount);
        document.getElementById('totalamt').innerHTML = 'Rs: ' + totalamnt;
    });
    addEventListener();
}
addexpense();

// function editexpense(e) {
//     e.preventDefault();
//     const row = e.target.closest('tr');
//     const index = parseInt(row.dataset.index);
//     let expense = expensearr[index];
    
//     document.getElementById('date').value = expense.Date;
//     document.getElementById('amount').value = expense.Amount;
//     document.getElementById('category').value = expense.Category;
//     document.getElementById('type').value = expense.Type;
//     document.getElementById('reference').value = expense.Reference;
    
//     document.getElementById('submit-btn').dataset.mode = 'edit';
//     document.getElementById('submit-btn').dataset.index = index;
    
//     document.querySelector('.add-expense').style.display = 'block';
//     document.querySelector('.display-events').style.display = 'none';
// }

function editExpense(e) {
    e.preventDefault();
    const index = e.target.closest('a').dataset.index;
    const expense = expensearr[index];

    document.getElementById('date').value = expense.Date;
    document.getElementById('amount').value = expense.Amount;
    document.getElementById('category').value = expense.Category;
    document.getElementById('type').value = expense.Type;
    document.getElementById('reference').value = expense.Reference;

    document.getElementById('submit-btn').dataset.mode = 'edit';
    document.getElementById('submit-btn').dataset.index = index;

    document.querySelector('.add-expense').style.display = 'block';
    document.querySelector('.display-events').style.display = 'none';
}

// function deletexpence(b)
// {
//     b.preventDefault();
//     let deleterow = document.querySelector('.tab');
//     const row = b.target.closest('tr');
//     const index = parseInt(row.children[0].textContent);
//     console.log(index);
//     if(index >= 0 && index < expensearr.length)
//     {
//         expensearr.splice(index,1);
//         console.log(index)
//     }
//     addexpense();
// }

function deleteExpense(e) {
    e.preventDefault();
    const index = e.target.closest('a').dataset.index;
    expensearr.splice(index, 1);
    addExpense();
}


function food()
{
    const food = document.querySelectorAll('.tab');
    let foodtotal = 0;
    food.forEach(a => {
        if(a.classList.contains('Food'))
        {
            a.style.display = 'table-row';
            a.className.split(" ").forEach(b => {
                b = Number(b);
                if(b > 0)
                {
                    foodtotal += b;
                }
            });
        }
        else
        {
            a.style.display = 'none';
        }
    });
    document.getElementById('category-type').innerText = 'Food Total'
    document.getElementById('category-type-amt').innerText = 'Rs: ' + foodtotal;
}

function salary()
{
    const salary = document.querySelectorAll('.tab');
    let salarytotal = 0;
    salary.forEach(a => {
        if(a.classList.contains('Salary'))
        {
            a.style.display = 'table-row';
            a.className.split(" ").forEach(b => {
                b = Number(b);
                if(b > 0)
                {
                    salarytotal += b;
                }
            });
        }
        else
        {
            a.style.display = 'none';
        }
    });
    document.getElementById('category-type').innerText = 'Salary Total'
    document.getElementById('category-type-amt').innerText = 'Rs: ' + salarytotal;
}

function travel()
{
    const travel = document.querySelectorAll('.tab');
    let traveltotal = 0;
    travel.forEach(a => {
        if(a.classList.contains('Travel'))
        {
            a.style.display = 'table-row';
            a.className.split(" ").forEach(b => {
                b = Number(b);
                if(b > 0)
                {
                    traveltotal += b;
                }
            });
        }
        else
        {
            a.style.display = 'none';
        }
    });
    document.getElementById('category-type').innerText = 'Travel Total'
    document.getElementById('category-type-amt').innerText = 'Rs: ' + traveltotal;
}

function medicine()
{
    const medicine = document.querySelectorAll('.tab');
    let medicinetotal = 0;
    medicine.forEach(a => {
        if(a.classList.contains('Medicine'))
        {
            a.style.display = 'table-row';
            a.className.split(" ").forEach(b => {
                b = Number(b);
                if(b > 0)
                {
                    medicinetotal += b;
                }
            });
        }
        else
        {
            a.style.display = 'none';
        }
    });
    document.getElementById('category-type').innerText = 'Medicine Total'
    document.getElementById('category-type-amt').innerText = 'Rs: ' + medicinetotal;
}

function showall() 
{
    let all = document.querySelectorAll('.tab')
    all.forEach(a => {
        a.style.display = 'table-row';
    });
}

function search() {
    let search=(document.getElementById('sch').value)
    let sch = document.querySelectorAll('.tab')
    sch.forEach(a => {
        if (a.classList.contains(search)) {
            a.style.display = 'table-row'
        }
        else {
            a.style.display = 'none'
        }
    })  
}

function dayfilter(filterdate)
{
    // let filterdate = a;
    let dates = [];
    let today = new Date();
    if(filterdate == 'Last Week')
    {
        for (let i = 0; i < 7; i++) 
        {
            let date = new Date();
            date.setDate(today.getDate() - i);
            dates.push(date.toISOString().split('T')[0]);
        }
    }
    else if(filterdate == 'Last One Month')
    {
        for (let i = 0; i < 30; i++) 
        {
            let date = new Date();
            date.setDate(today.getDate() - i);
            dates.push(date.toISOString().split('T')[0]);
        }
    }
    else if(filterdate == 'Last six Months')
    {
        for (let i = 0; i < 180; i++) {
            let date = new Date();
            date.setDate(today.getDate() - i);
            dates.push(date.toISOString().split('T')[0]);
        }
    }
    else if(filterdate == 'Last Year')
    {
        for (let i = 0; i < 360; i++) {
            let date = new Date();
            date.setDate(today.getDate() - i);
            dates.push(date.toISOString().split('T')[0]);
        }
    }
    let category = document.querySelectorAll('.tab');
    let total = 0;
    category.forEach(a => {
        let date = a.children[1].textContent;
        let row = dates.includes(date);
        if (row) {
            a.style.display = 'table-row';
            total += parseInt(a.children[2].textContent);
            console.log(total);
        } else {
            a.style.display = 'none';
        }
    });
    if(filterdate == 'Last Week')
    {
        document.getElementById('periods').innerText = 'Last Week: ';
    }
    if(filterdate == 'Last six Months')
    {
        document.getElementById('periods').innerText = 'Last six Months: ';
    }
    if(filterdate == 'Last One Month')
    {
        document.getElementById('periods').innerText = 'Last One Month: ';
    }
    if(filterdate == 'Last Year')
    {
        document.getElementById('periods').innerText = 'Last Year: ';
    }
    document.getElementById('periodamt').innerText = 'Rs: ' + total;
}

  
  