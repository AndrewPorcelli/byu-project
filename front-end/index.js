//Elements
//gamedayEats elements

const eatsContainer = document.querySelector('.our-eats-container');
const form = document.querySelector('form');

//add tickets elements
const addTickets = document.querySelector('.add-tickets');
const scheduleContainer = document.getElementById('schedule-container');
const b = document.querySelector('.added-tickets');
const ticketsContainer = document.getElementById('added-tickets-container');

//baseURL
const baseURL = `http://localhost:4000/api`;

//axios calls
//callbacks
const getEatsCB = ({ data: eats }) => displayEats(eats);
const getTicketsCB = ({ data: schedule }) => displaySchedule(schedule);
const ticketsCB = ({ data: tickets }) => displayTickets(tickets);

//axios paths
//eats paths
const getEats = () => axios.get(`${baseURL}/eats`).then(getEatsCB);
const createEats = (body) =>
  axios.post(`${baseURL}/eats`, body).then(getEatsCB);
const deleteEats = (id) =>
  axios.delete(`${baseURL}/eats/${id}`).then(getEatsCB);
//schedule and tickets paths
const getSchedule = () => axios.get(`${baseURL}/schedule`).then(getTicketsCB);
const getTickets = () => axios.get(baseURL).then(ticketsCB);
const createTicket = (body) => axios.post(baseURL, body).then(ticketsCB);

//Functions
//Gameday eats functions

function submitHandler(e) {
  e.preventDefault();
  let name = document.getElementById('name');
  let location = document.getElementById('location');
  let imageURL = document.getElementById('img-url');
  let linkURL = document.getElementById('web-link');

  let bodyObj = {
    name: name.value,
    location: location.value,
    imageURL: imageURL.value,
    linkURL: linkURL.value,
  };

  createEats(bodyObj);

  name.value = '';
  location.value = '';
  imageURL.value = '';
  linkURL.value = '';
}

function createEatsCard(eats) {
  const eatsCard = document.createElement('div');

  eatsCard.innerHTML = `
    <img id="eats-img" src="${eats.imageURL}" alt="${eats.name} photo"/>
    <h3 id="eats-id">${eats.name}</h3>
    <h3 id="eats-location">${eats.location}</h3>
    <a href="${eats.linkURL}" target=_"blank">${eats.name} Link</a>
    <button onclick="deleteEats(${eats.id})">Delete</button>
    `;

  eatsContainer.appendChild(eatsCard);
}

function displayEats(arr) {
  eatsContainer.innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    createEatsCard(arr[i]);
  }
}

//find tickets functions
function createTicketSchedule(schedule) {
  const ticketScheduleCard = document.createElement('div');

  ticketScheduleCard.innerHTML = `
    <img id="byu-vs" src="${schedule.imageURL}"/>
    <h3 id="schedule-game">${schedule.game}</h3>
    <p id="schedule-time">${schedule.time}</p>
   
    <button id="add-tickets-${schedule.id}">Get Tickets</button>`;

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
form.addEventListener('submit', submitHandler);

// upon load of screen
getSchedule();
getTickets();
getEats();
