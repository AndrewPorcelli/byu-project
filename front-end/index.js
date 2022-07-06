// need to put the basic functionality of the axios requests

//Elements
const findTicketBtn = document.querySelector('.find-tickets-btn');
const ticketModal = document.querySelector('.ticket-window');

//Functions

function getTicketsWindow() {
  ticketModal.classList.toggle('hidden');
  console.log('click');
}

//Event listeners

findTicketBtn.addEventListener('click', getTicketsWindow);
