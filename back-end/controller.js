// set up the functions and buttons
// for ticket page, use a hidden class in the html that i will create on the index.html and then once clicked, just unhide.
const schedule = require('./db.json');
const tickets = require('./tickets.json');

let globalID = 1;

//Functions

// exporting functions
module.exports = {
  getSchedule: (req, res) => {
    res.status(200).send(schedule);
  },

  createTicket: (req, res) => {
    const { value } = req.body;
    let createdTicket = {
      id: globalID,

      value: +value,
    };
    tickets.push(createdTicket);
    res.status(200).send(tickets);
    globalID++;
  },
  getTickets: (req, res) => {
    res.status(200).send(tickets);
  },
};
