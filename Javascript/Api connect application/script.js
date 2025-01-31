const names = document.getElementById("password");
const updatename = document.getElementById("updatepass");
const email = document.getElementById("email");
const updateemail = document.getElementById("updateemail");

const validatename = () => {
    updatename.innerHTML = '';
        const errors = {};
        if(names.value.trim() === '')
        {
            errors.required = true;
        }
        const patterns = /^[^\s]+$/;
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

const validatemail = () => {
    updateemail.innerHTML = '';
        const errors = {};
        if(email.value.trim() === '')
        {
            errors.required = true;
        }
        const patterns = /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!patterns.test(email.value) && email.value.trim() !== '')
        {
            errors.pattern = true;
        }
        if (errors.required) 
        {
            const requiredMessage = document.createElement('div');
            requiredMessage.innerHTML = `<p style="color: blue">Email Required</p>`;
            updateemail.appendChild(requiredMessage);
        }
        if (errors.pattern) 
        {
            const patternMessage = document.createElement('div');
            patternMessage.innerHTML = `<p style="color: blue">Invalid Email</p>`;
            updateemail.appendChild(patternMessage);
        }
}

email.addEventListener('input', validatemail);
email.addEventListener('blur', validatemail);

document.querySelector('.form').addEventListener('submit', (event) => {
    event.preventDefault();
    validatename();
    validatemail();
    const namePattern = /^[^\s]+$/;
    const emailPattern = /^[A-Za-z\s@]+@[^\s@]+\.[^\s@]+$/;
    if (names.value.trim() !== '' && email.value.trim() !== '' && namePattern.test(names.value) && emailPattern.test(email.value)) 
    {
        window.location.href = "product.html";
    }
});