const names = document.getElementById("name");
const updatename = document.getElementById("updatename");
const ages = document.getElementById("age");
const updateage = document.getElementById("updateage");
const phno = document.getElementById("phno");
const updatenum = document.getElementById("updatenum");
const genderRadios = document.querySelectorAll('input[name="radio"]');
const genderError = document.getElementById('genderError');
const cb = document.querySelectorAll('input[name="cb"]');
const cberror = document.getElementById('cberror');
const dob = document.getElementById("dob");
const updatedob = document.getElementById("updatedob");
const location1 = document.getElementById('location');
const locationerror = document.getElementById('locationerror');

const validatename = () => {
    updatename.innerHTML = '';
        const errors = {};
        if(names.value.trim() === '')
        {
            errors.required = true;
        }
        const patterns = /^[A-Za-z\s]+$/;
        if(!patterns.test(names.value) && names.value.trim() !== '')
        {
            errors.pattern = true;
        }
        if (errors.required) 
        {
            const requiredMessage = document.createElement('div');
            requiredMessage.innerHTML = `<p style="color: blue">Name Required</p>`;
            updatename.appendChild(requiredMessage);
        }
        if (errors.pattern) 
        {
            const patternMessage = document.createElement('div');
            patternMessage.innerHTML = `<p style="color: blue">Invalid Name</p>`;
            updatename.appendChild(patternMessage);
        }
}
names.addEventListener('input', validatename);
names.addEventListener('blur', validatename);

const validateage = () => {
    updateage.innerHTML = '';
        const errors = {};
        if(ages.value.trim() === '')
        {
            errors.required = true;
        }
        const patterns = /^[0-9\s]+$/;
        if(!patterns.test(ages.value) && ages.value.trim() !== '')
        {
            errors.pattern = true;
        }
        if (errors.required) 
        {
            const requiredMessage = document.createElement('div');
            requiredMessage.innerHTML = `<p style="color: blue"> Age Required</p>`;
            updateage.appendChild(requiredMessage);
        }
      
        if (errors.pattern) 
        {
            const patternMessage = document.createElement('div');
            patternMessage.innerHTML = `<p style="color: blue">Invalid age</p>`;
            updateage.appendChild(patternMessage);
        }
}
ages.addEventListener('input', validateage);
ages.addEventListener('blur', validateage);

const validatenum = () => {
    updatenum.innerHTML = '';
        const errors = {};
        if(phno.value.trim() === '')
        {
            errors.required = true;
        }
        const patterns = /^\d{10}$/;
        if(!patterns.test(phno.value) && phno.value.trim() !== '')
        {
            errors.pattern = true;
        }
        if (errors.required) 
        {
            const requiredMessage = document.createElement('div');
            requiredMessage.innerHTML = `<p style="color: blue"> Phonenum Required</p>`;
            updatenum.appendChild(requiredMessage);
        }
      
        if (errors.pattern) 
        {
            const patternMessage = document.createElement('div');
            patternMessage.innerHTML = `<p style="color: blue">Invalid phonenum</p>`;
            updatenum.appendChild(patternMessage);
        }
}
phno.addEventListener('input', validatenum);
phno.addEventListener('blur', validatenum);

const validateGender = () => {
    let Sel = false;
    genderRadios.forEach((radio) => {
        if (radio.checked) {
            Sel = true;
        }
    });
    if (Sel) {
        genderError.textContent = '';
    } else {
        genderError.textContent = 'Gender is required';
    }
};
document.querySelector('.form').addEventListener('submit', (event) => {
    validateGender();
    if (genderError.textContent !== '') {
        event.preventDefault();
    }
});

const validatecb = () => {
    let Sele = false;
    cb.forEach((cb) => {
        if (cb.checked) {
            Sele = true;
        }
    });
    if (Sele) {
        cberror.textContent = '';
    } else {
        cberror.textContent = 'Subject is required';
    }
};
document.querySelector('.form').addEventListener('submit', (event) => {
    validatecb();
    if (cberror.textContent !== '') {
        event.preventDefault();
    }
});

const validatedob = () => {
    updatedob.innerHTML = '';
        const errors = {};
        if(dob.value.trim() === '')
        {
            errors.required = true;
        }
        const patterns = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
        if(!patterns.test(dob.value) && dob.value.trim() !== '')
        {
            errors.pattern = true;
        }
        if (errors.required) 
        {
            const requiredMessage = document.createElement('div');
            requiredMessage.innerHTML = `<p style="color: blue">DOB Required</p>`;
            updatedob.appendChild(requiredMessage);
        }
        if (errors.pattern) 
        {
            const patternMessage = document.createElement('div');
            patternMessage.innerHTML = `<p style="color: blue">Invalid DOB</p>`;
            updatedob.appendChild(patternMessage);
        }
}
dob.addEventListener('input', validatedob);
dob.addEventListener('blur', validatedob);

const validatelocation = () => {
    if (location1.value === "") {
        locationerror.textContent = 'Location is required';
    } else {
        locationerror.textContent = '';
    }
};

document.querySelector('.form').addEventListener('submit', (event) => {
    validatelocation();
    if (locationerror.textContent !== '') {
        event.preventDefault();
    }
});

document.querySelector('.form').addEventListener('submit',(e) => {
    e.preventDefault();

    const inputname = document.getElementById('name').value;
    const inputage = document.getElementById('age').value;
    const inputnum = document.getElementById('phno').value;
    const inputgender = document.querySelector('input[name="radio"]:checked').value;
    const inputsub = Array.from(document.querySelectorAll('input[name="cb"]:checked')).map(cb => cb.value).join(" ,");
    const inputdob = document.getElementById('dob').value;
    const inputloc = document.getElementById('location').value;

    const datas = document.getElementById('data');
    const newdata = document.createElement('tr');
    newdata.innerHTML += `
    <td>${inputname}</td>
    <td>${inputage}</td>
    <td>${inputnum}</td>
    <td>${inputgender}</td>
    <td>${inputsub}</td>
    <td>${inputdob}</td>
    <td>${inputloc}</td>
    <td style=" display: flex; justify-content: space-between;"><a href="" onclick="updated(event)"><i class="fa-regular fa-pen-to-square"></i></a><a href="" onclick="deleted(event)"><i class="fa-solid fa-trash"></i></a></td>
    `;
    datas.appendChild(newdata);

    document.querySelector('.form').reset();
});

function deleted(event)
{
    if (confirm("Are you sure to delete the item?")) 
    {
        const delrow = event.target.closest('tr');
        event.preventDefault();
        if(delrow)
        {
            delrow.remove();
        }
    }  
}

function updated(event)
{
    event.preventDefault();
    const subut = document.getElementById('submit');
    const updatebut = document.getElementById('updates');
    subut.style.display = 'none';
    updatebut.style.display = 'block';
    const updaterow = event.target.closest('tr');
    const name = updaterow.children[0].textContent;
    const age = updaterow.children[1].textContent;
    const phno = updaterow.children[2].textContent;
    const gender = updaterow.children[3].textContent;
    const sub = updaterow.children[4].textContent;
    const dob = updaterow.children[5].textContent;
    const location = updaterow.children[6].textContent;

    document.getElementById('name').value = name;
    document.getElementById('age').value = age;
    document.getElementById('phno').value = phno;
    document.querySelector(`input[name="radio"][value="${gender}"]`).checked = true;
    document.querySelectorAll('input[name="cb"]').forEach((checkbox) => {checkbox.checked = sub.includes(checkbox.value);});
    document.getElementById('dob').value = dob;
    document.getElementById('location').value = location;

    updatebut.onclick = function () {
        updaterow.children[0].textContent = document.getElementById('name').value;
        updaterow.children[1].textContent = document.getElementById('age').value;
        updaterow.children[2].textContent = document.getElementById('phno').value;
        updaterow.children[3].textContent = document.querySelector('input[name="radio"]:checked').value;
        updaterow.children[4].textContent = Array.from(document.querySelectorAll('input[name="cb"]:checked')).map(cb => cb.value).join(", ");
        updaterow.children[5].textContent = document.getElementById('dob').value;
        updaterow.children[6].textContent = document.getElementById('location').value;
        subut.style.display = 'block';
        updatebut.style.display = 'none';
        document.querySelector('.form').reset();

    };
}

function clearitem()
{
    document.querySelector('.form').reset();
}