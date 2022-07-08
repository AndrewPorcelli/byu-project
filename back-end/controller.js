// set up the functions and buttons
// for ticket page, use a hidden class in the html that i will create on the index.html and then once clicked, just unhide.
const schedule = require('./db.json');
const tickets = require('./tickets.json');

//Functions

// exporting functions
module.exports = {
  getSchedule: (req, res) => {
    res.status(200).send(schedule);
  },
  addTickets: (req, res) => {
    const { id, game, time, imageURL } = req.body;
    let addedTicket = {
      id,
      game,
      time,
      imageURL,
    };
    tickets.push(addedTicket);
    res.status(200).send(tickets);
  },
  
};
