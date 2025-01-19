
const employees = [ 
    { id: 1, name: "John", age: 28, department: "HR" }, 
    { id: 2, name: "Jane", age: 34, department: "Finance" }, 
    { id: 3, name: "Mike", age: 25, department: "IT" }, 
    { id: 4, name: "Emma", age: 30, department: "Marketing" }, 
    { id: 5, name: "Chris", age: 40, department: "Operations" }, 
    { id: 6, name: "Sophia", age: 29, department: "HR" },
    { id: 7, name: "Daniel", age: 32, department: "Finance" }, 
    { id: 8, name: "Olivia", age: 27, department: "IT" }, 
    { id: 9, name: "Liam", age: 35, department: "Sales" }, 
    { id: 10, name: "Noah", age: 26, department: "Logistics" }, 
    ];

const table1 = document.getElementById('data');
for(const a of employees)
{
    table1.innerHTML += `<tr>
        <td>${a.id}</td>
        <td>${a.name}</td>
        <td>${a.age}</td>
        <td>${a.department}</td>
    </tr>`;
}

const data = [ 
    { id: 1, name: "John", tasks: [ { taskId: 101, description: "Complete report", status: "Pending" }, { taskId: 102, description: "Review code", status: "Completed" }, ], }, 
    { id: 2, name: "Jane", tasks: [ { taskId: 103, description: "Prepare slides", status: "In Progress" }, { taskId: 104, description: "Team meeting", status: "Pending" }, ], }, 
];

const table2 = document.getElementById('data1');
for(const b of data)
{
    for(const c of b.tasks)
    {
        table2.innerHTML += `<tr>
            <td>${b.name}</td>
            <td>${c.description}</td>
            <td>${c.status}</td>
        </tr>`
    }
}
    