document.addEventListener('DOMContentLoaded', () => {
    function categorizeExistingCards() {
        const today = new Date();
        today.setHours(0, 0, 0, 0); 
        const cards = document.querySelectorAll('.event-card');
        document.querySelector('#past-events').innerHTML = '';
        document.querySelector('#present-events').innerHTML = '';
        document.querySelector('#future-events').innerHTML = '';
    
        cards.forEach((card) => {
            const dateText = card.querySelector('.event-date').textContent.replace('Date: ', '').trim();
            const [day, month, year] = dateText.split('-').map(Number);
            const eventDate = new Date(year, month - 1, day);
            let targetSection;
            if (eventDate < today) {
                targetSection = document.querySelector('#past-events');
            } else if (eventDate.getTime() === today.getTime()) {
                targetSection = document.querySelector('#present-events');
            } else {
                targetSection = document.querySelector('#future-events');
            }
            const cardWrapper = card.closest('.col-md-4');
            if (cardWrapper && targetSection) 
            {
                targetSection.appendChild(cardWrapper);
            }
        });
    }
    categorizeExistingCards();


document.querySelector('.form').addEventListener('submit' , (a) => {
    a.preventDefault();
    const eventittle = document.getElementById('eventitle').value;
    const eventdate = document.getElementById('eventdate').value;
    const eventdis = document.getElementById('eventdis').value;
    const eventven = document.getElementById('eventven').value;

    const data = document.getElementById('card');
    data.innerHTML += `
    <div class="col-md-4 d-flex justify-content-center">
        <div class="card event-card position-relative">
            <div class="dropdown card-menu">
                <button class="btn btn-light btn-sm dropdown-toggle" type="button" id="cardMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-light fa-ellipsis-vertical"></i>
                </button>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardMenuButton">
                    <li><a class="dropdown-item edit-btn" href="#">Edit</a></li>
                    <li><a class="dropdown-item delete-btn text-danger" href="#">Delete</a></li>
                </ul>
            </div>
            <div class="card-body">
                <h5 class="card-title">${eventittle}</h5>
                <p class="event-date">Date: ${eventdate}</p>
                <p class="card-text">${eventdis}</p>
                <p class="card-text"><strong>Venue:</strong> ${eventven}</p>
                <a href="#" class="btn event-action">Book Now</a>
            </div>
        </div>
    </div>`
    document.querySelector('.form').reset();
    categorizeExistingCards();
    addEventListenersToCards();
});

document.getElementById('create-event-li').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.create-event').style.display = 'block';
    document.querySelector('.display-events').style.display = 'none';
    // document.getElementById('addevent').style.display = 'block';
    // document.getElementById('updatevent').style.display = 'none';
    // document.querySelector('.form').reset();
});

document.getElementById('display-event-li').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.create-event').style.display = 'none';
    document.querySelector('.display-events').style.display = 'block';
    categorizeExistingCards();
});


document.getElementById('past-events-li').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#past-events').style.display = 'flex';
    document.querySelector('#present-events').style.display = 'none';
    document.querySelector('#future-events').style.display = 'none';
    categorizeExistingCards();
});

document.getElementById('present-events-li').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#past-events').style.display = 'none';
    document.querySelector('#present-events').style.display = 'flex';
    document.querySelector('#future-events').style.display = 'none';
    categorizeExistingCards();
});

document.getElementById('future-events-li').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#past-events').style.display = 'none';
    document.querySelector('#present-events').style.display = 'none';
    document.querySelector('#future-events').style.display = 'flex';
    categorizeExistingCards();
});

document.getElementById('events-li').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.reload();
});

let currentEditingCard = null;

function addEventListenersToCards() {
    const cards = document.querySelectorAll('.event-card');
    cards.forEach((card) => {
      const deleteButton = card.querySelector('.delete-btn');
      const editButton = card.querySelector('.edit-btn');

      deleteButton.addEventListener('click', (event) => {
        const card = event.target.closest('.col-md-4');
        card.remove();
        categorizeExistingCards();
      });

      editButton.addEventListener('click', (event) => {
        const card = event.target.closest('.col-md-4');
        currentEditingCard = card;
        const title = card.querySelector('.card-title').textContent;
        const date = card.querySelector('.event-date').textContent.replace('Date: ', '').trim();
        const description = card.querySelector('.card-text').textContent;
        const venue = card.querySelector('.card-text strong').nextSibling.textContent.trim();
        document.getElementById('eventitle').value = title;
        document.getElementById('eventdate').value = date;
        document.getElementById('eventdis').value = description;
        document.getElementById('eventven').value = venue;
        document.querySelector('.create-event').style.display = 'block';
        document.querySelector('.display-events').style.display = 'none';
        document.getElementById('addevent').style.display = 'none';
        document.getElementById('updatevent').style.display = 'block';
      });
    });
}

document.getElementById('updatevent').addEventListener('click', (event) => {
    event.preventDefault();
    if (currentEditingCard) {
        const updatedTitle = document.getElementById('eventitle').value;
        const updatedDate = document.getElementById('eventdate').value;
        const updatedDescription = document.getElementById('eventdis').value;
        const updatedVenue = document.getElementById('eventven').value;
        currentEditingCard.querySelector('.card-title').textContent = updatedTitle;
        currentEditingCard.querySelector('.event-date').textContent = `Date: ${updatedDate}`;
        currentEditingCard.querySelector('.card-text').textContent = updatedDescription;
        currentEditingCard.querySelector('.card-text strong').nextSibling.textContent = ` ${updatedVenue}`;
        document.querySelector('.form').reset();
        document.querySelector('.create-event').style.display = 'none';
        document.querySelector('.display-events').style.display = 'block';
        document.getElementById('addevent').style.display = 'block';
        document.getElementById('updatevent').style.display = 'none';
        currentEditingCard = null;
        categorizeExistingCards();
    }
});

addEventListenersToCards();
});