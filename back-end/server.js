// set up the endpoints
// also need to set up a database to capture info and save tickets

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const { getSchedule, addTickets } = require('./controller');

// Endpoints

app.get('/api/schedule', getSchedule);
app.post('/api/schedule', addTickets);


// ----------------- listening
app.listen(4000, console.log('Boogying on port 4000'));
