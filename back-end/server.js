// set up the endpoints
// also need to set up a database to capture info and save tickets

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const {
  getSchedule,
  createTicket,
  getTickets,
  getEats,
  createEats,
} = require('./controller');

// Endpoints

app.get('/api/schedule', getSchedule);
// app.get('/api/schedule', getTickets)
app.get('/api/eats', getEats);
app.post('/api/eats', createEats);
app.post('/api/schedule', createTicket);

const port = process.env.PORT || 4000;

// ----------------- listening
app.listen(port, () => {
  console.log(`Boogying on port ${port}`);
});
