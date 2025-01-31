let taskarr = JSON.parse(localStorage.getItem('tasks')) || [];
let timers = {};
let completedtask = JSON.parse(localStorage.getItem('completedTasks')) || 0;
let totalPoints = JSON.parse(localStorage.getItem('points')) || 0;

document.getElementById('add').addEventListener('click', (e) => {
    e.preventDefault();
    let tasktitle = document.getElementById('title').value;
    let description = document.getElementById('des').value;
    let time = document.getElementById('time').value;
    let id = taskarr.length;
    
    taskarr.push({ id, tasktitle, description, time, status: 'pending', points: 0 });
    localStorage.setItem('tasks', JSON.stringify(taskarr));
    addtask();
});

function addtask() {
    let tasklist = document.getElementById('task-ls');
    tasklist.innerHTML = '';
    taskarr.forEach(a => {
        tasklist.innerHTML += `
        <div class="col-md-4">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${a.tasktitle}</h5>
                    <p class="card-text">${a.description}</p>
                    <h5 class="card-subtitle mb-2 text-body-secondary">${a.time}</h5>
                    <p class="timer" id='timer-${a.id}'></p>
                    <button class="btn btn-info" onclick='completed(${a.id})'>Completed</button>
                    <a href="#" class="card-link" onclick="timestart(event, ${a.id}, '${a.time}')"><i class="fa-solid fa-play"></i></a>
                    <a href="#" class="card-link" onclick="timestop(event, ${a.id})"><i class="fa-solid fa-stop"></i></a>
                    <a href="#" class="card-link" onclick="editTask(${a.id})"><i class="fa-solid fa-pen-to-square"></i></a>
                    <a href="#" class="card-link" onclick="deleteTask(${a.id})"><i class="fa-solid fa-trash"></i></a>
                    <h5 id="status-${a.id}">${a.status}</h5>
                </div>
            </div>
        </div>`;
    });
    updateStats();
}

function timestart(event, id, time) {
    event.preventDefault();
    let countdown = new Date(time).getTime();
    let taskElement = document.getElementById(`timer-${id}`);
    
    if (timers[id]) clearInterval(timers[id]);
    
    timers[id] = setInterval(() => {
        let now = Date.now();
        let difference = countdown - now;

        if (difference <= 0) {
            clearInterval(timers[id]);
            taskElement.innerHTML = "<p>Time Over</p>";
            return;
        }

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        taskElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

function timestop(event, id) {
    event.preventDefault();
    if (timers[id]) {
        clearInterval(timers[id]);
        delete timers[id];
        document.getElementById(`timer-${id}`).innerHTML = "<p>Timer Stopped</p>";
    }
}

function completed(id) {
    let task = taskarr.find(t => t.id === id);
    if (!task) return;
    task.status = 'Completed';
    let now = new Date().getTime();
    let estimatedTime = new Date(task.time).getTime();
    
    if (now <= estimatedTime) {
        task.points += 10;
    } else {
        task.points -= 5;
    }
    completedtask++;
    totalPoints += task.points;
    localStorage.setItem('tasks', JSON.stringify(taskarr));
    localStorage.setItem('completedTasks', completedtask);
    localStorage.setItem('points', totalPoints);
    addtask();
}

function editTask(id) {
    let task = taskarr.find(t => t.id === id);
    if (!task) return;
    let newTitle = prompt("Enter new title", task.tasktitle);
    let newDescription = prompt("Enter new description", task.description);
    let newTime = prompt("Enter new time", task.time);
    
    let oldTime = new Date(task.time).getTime();
    let newTimeMs = new Date(newTime).getTime();
    
    if (newTimeMs > oldTime) {
        task.points -= 5;
    } else {
        task.points += 5;
    }
    
    task.tasktitle = newTitle;
    task.description = newDescription;
    task.time = newTime;
    
    localStorage.setItem('tasks', JSON.stringify(taskarr));
    addtask();
}

function deleteTask(id) {
    taskarr = taskarr.filter(t => t.id !== id);
    totalPoints -= 5;
    localStorage.setItem('tasks', JSON.stringify(taskarr));
    localStorage.setItem('points', totalPoints);
    addtask();
}

function updateStats() {
    document.getElementById('totaltask').innerText = 'Total Task: '+ taskarr.length;
    document.getElementById('taskcom').innerText = 'Task Completed: '+ completedtask;
    document.getElementById('taskpen').innerText = 'Task Pending: ' + (taskarr.length - completedtask);
    document.getElementById('taskpoints').innerText = 'Task Points: ' + totalPoints;
}

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
});

addtask();
