// need to put the basic functionality of the axios requests

//Elements
const findTicketBtn = document.querySelector('.find-tickets-btn');
const ticketModal = document.querySelector('.ticket-window');
const addTickets = document.querySelector('.add-tickets');
const scheduleContainer = document.getElementById('schedule-container');

//baseURL
const baseURL = `http://localhost:4000/api/schedule`;

//axios calls

const getTicketsCB = ({ data: schedule }) => displaySchedule(schedule);

const getSchedule = () => axios.get(baseURL).then(getTicketsCB);

//Functions

function getTicketsWindow() {
  ticketModal.classList.toggle('hidden');
  console.log('click');
}

function createTicketSchedule(schedule) {
  const ticketScheduleCard = document.createElement('div');

  ticketScheduleCard.innerHTML = `<h2 id="byu-schedule">BYU's upcoming schedule</h2>
    <img id="byu-vs" src="${schedule.imageURL}"/>
    <h3 id="schedule-game">${schedule.game}</h3>
    <p id="schedule-time">${schedule.time}</p>
    <button onclick="getTicketAmount(${schedule.id}, 'minus')">-</button>
    <input type="number" />
    <button onclick="getTicketAmount(${schedule.id}, 'plus')">+</button>
    <br/>
    <button id="add-tickets">Add Tickets Now</button>`;

  scheduleContainer.appendChild(ticketScheduleCard);
}

function displaySchedule(arr) {
  scheduleContainer.innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    createTicketSchedule(arr[i]);
  }
}

//Event listeners

// findTicketBtn.addEventListener('click', getTicketsWindow);

getSchedule();
