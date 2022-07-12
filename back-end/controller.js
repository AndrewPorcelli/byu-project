// set up the functions and buttons
// for ticket page, use a hidden class in the html that i will create on the index.html and then once clicked, just unhide.
const schedule = require('./db.json');
const tickets = require('./tickets.json');
const eats = require('./eatsdb.json');

let eatsID = 4;
let globalID = 1;

//Functions

// exporting functions
module.exports = {
  getSchedule: (req, res) => {
    res.status(200).send(schedule);
  },
  getEats: (req, res) => {
    res.status(200).send(eats);
  },
  createEats: (req, res) => {
    const { name, location, imageURL, linkURL } = req.body;
    let newEats = {
      name,
      location,
      imageURL,
      linkURL,
      id: eatsID,
    };
    eats.push(newEats);
    eatsID++;
    res.status(200).send(eats);
  },

  createTicket: (req, res) => {
    console.log(req.body);
    const { id } = req.params;
    const { value } = req.body;
    let createdTicket = {
      id,

      value: +value,
    };
    tickets.push(createdTicket);
    res.status(200).send(tickets);
    globalID++;
  },
  getTickets: (req, res) => {
    console.log();
    res.status(200).send(tickets);
  },
};
