// need to put the basic functionality of the axios requests

//Elements
const addTickets = document.querySelector('.add-tickets');
const scheduleContainer = document.getElementById('schedule-container');
const b = document.querySelector('.added-tickets');

//baseURL
const baseURL = `http://localhost:4000/api/schedule`;

//axios calls

const getTicketsCB = ({ data: schedule }) => displaySchedule(schedule);

const getSchedule = () => axios.get(baseURL).then(getTicketsCB);

//Functions

function createTicketSchedule(schedule) {
  const ticketScheduleCard = document.createElement('div');

  ticketScheduleCard.innerHTML = `
    <img id="byu-vs" src="${schedule.imageURL}"/>
    <h3 id="schedule-game">${schedule.game}</h3>
    <p id="schedule-time">${schedule.time}</p>
    <button onclick="getTicketAmount(${schedule.id}, 'minus')">-</button>
    <input type="number" />
    <button onclick="getTicketAmount(${schedule.id}, 'plus')">+</button>
    <br/>
    <button id="add-tickets-${schedule.id}">Add Tickets Now</button>`;

  scheduleContainer.appendChild(ticketScheduleCard);
  let addedTicketsBtn = document.getElementById(`add-tickets-${schedule.id}`);

  addedTicketsBtn.addEventListener('click', function () {
    b.classList.remove('hidden');
  });
}

function displaySchedule(arr) {
  scheduleContainer.innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    createTicketSchedule(arr[i]);
  }
}

//Event listeners

getSchedule();
