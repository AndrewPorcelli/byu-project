// need to put the basic functionality of the axios requests

//Elements
const addTickets = document.querySelector('.add-tickets');
const scheduleContainer = document.getElementById('schedule-container');
const b = document.querySelector('.added-tickets');
const ticketsContainer = document.getElementById('added-tickets-container');

//baseURL
const baseURL = `http://localhost:4000/api/schedule`;

//axios calls

const getTicketsCB = ({ data: schedule }) => displaySchedule(schedule);
const ticketsCB = ({ data: tickets }) => displayTickets(tickets);

const getSchedule = () => axios.get(baseURL).then(getTicketsCB);
const getTickets = () => axios.get(baseURL).then(ticketsCB);

const createTicket = (body) => axios.post(baseURL, body).then(ticketsCB);

//Functions

function createTicketSchedule(schedule) {
  const ticketScheduleCard = document.createElement('div');

  ticketScheduleCard.innerHTML = `
    <img id="byu-vs" src="${schedule.imageURL}"/>
    <h3 id="schedule-game">${schedule.game}</h3>
    <p id="schedule-time">${schedule.time}</p>
    <button onclick="getTicketAmount(${schedule.id}, 'minus')">-</button>
    <input type="number" class="input-number" />
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

function addTicketsToProfile(e, schedule) {
  // e.preventDefault()

  let input = document.querySelector('.input-number');
  //   let gameSelected = document.getElementById('schedule-game');
  //   let timeOfGame = document.getElementById('schedule-time');
  //   let gameIMG = document.getElementById('byu-vs')
  let addedTicketsBtn = document.getElementById(`add-tickets-${schedule.id}`);

  let bodyObj = {
    input: input.value,
    //   gameSelected,
    //   timeOfGame,
    //   gameIMG,
  };

  let addedTicketCard = document.createElement('div');

  addedTicketCard.innerHTML = `You have added ${input} tickets
  
  `;

  ticketsContainer.appendChild(addedTicketCard);

  addedTicketsBtn.addEventListener('click', createTicket(bodyObj));
}

// function aTPCB(schedule) {
//   let addedTicketCard = document.createElement('div');

//   addedTicketCard.innerHTML = `You have added

//     `;
// }

function displayTickets(arr) {
  ticketsContainer.innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    addTicketsToProfile(arr[i]);
  }
}

//Event listeners

getSchedule();
getTickets();
