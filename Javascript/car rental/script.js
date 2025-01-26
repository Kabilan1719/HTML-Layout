document.querySelector('.form').addEventListener('submit' , (a) => {
    a.preventDefault();
    const carname = document.getElementById('carname').value;
    const carimage = document.getElementById('carimage').value;
    const carmilage = document.getElementById('carmilage').value;
    const carprice = document.getElementById('admin-carprice').value;

    const data = document.getElementById('card1');
    data.innerHTML += `
    <div class="col-lg-3 mb-4">
    <div class="card car-card" style="width: 18rem;">
    <img src="${carimage}" class="card-img-top car-image" alt="...">
    <div class="card-body">
    <h4 class="card-title">${carname}</h4>
    <p class="card-text">Milage: ${carmilage}</p>
    <p class="card-text">Carfare: ${carprice}</p>
    <a href="#" class="btn btn-primary book-btn">Book Now</a>
    </div></div></div>`
    alert('submitted successfully');
    document.querySelector('.form').reset();
})

document.getElementById('calculatefair').addEventListener('click', function(){
    const carname = document.getElementById('carname1').value;
    const startdate = new Date(document.getElementById('startdate').value);
    const enddate = new Date(document.getElementById('enddate').value);
    const carprice = document.getElementById('carprice').value;

    if(isNaN(startdate) || isNaN(enddate) || startdate>=enddate)
    {
        alert('Please enter valid dates with the end date after the start date');
        return;
    }
    const days = (enddate - startdate)/(1000*60*60*24);
    const totfare = days*carprice;
    document.getElementById('faredetails').innerHTML = `
    Total Fare:${totfare}`;

    const modal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    modal.show();
});
document.getElementById('confirmBooking').addEventListener('click', function () {
    alert('Booking confirmed! Thank you.');
    document.getElementById('bookingForm').reset();
    bootstrap.Modal.getInstance(document.getElementById('confirmationModal')).hide();
    window.location.reload();
});
document.getElementById('card1').addEventListener('click', function(event) {
    if(event.target.classList.contains('book-btn'))
    {
        const card = event.target.closest('.card');
        const cartittle = card.querySelector('.card-title').innerHTML;
        const carfare = card.querySelectorAll('.card-text')[1].innerHTML;
        const amount = carfare.split(': ')[1];
        document.getElementById('carname1').value = cartittle;
        document.getElementById('carprice').value = amount;
        document.querySelector('.booking').style.display = 'block';
        document.querySelector('.home').style.display = 'none';
        window.scrollTo({
            top: document.querySelector('.booking').offsetTop,
            behavior: 'smooth',
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.nav-link[href="#admin"]').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.home').style.display = 'none';
        document.querySelector('.booking').style.display = 'none';
        document.querySelector('.admin-panel').style.display = 'block';
    });
    document.querySelector('.nav-link[href="#"]').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.admin-panel').style.display = 'none';
        document.querySelector('.booking').style.display = 'none';
        document.querySelector('.home').style.display = 'block';
    });
});
