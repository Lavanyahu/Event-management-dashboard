
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Event Management Dashboard API');
});

// Example route to get all events
app.get('/events', (req, res) => {
  res.json([
    { id: 1, name: 'Event 1', date: '2024-12-21' },
    { id: 2, name: 'Event 2', date: '2024-12-22' },
  ]);
});

// Example route to create a new event
app.post('/events', (req, res) => {
  const newEvent = req.body;
  // Here you can handle adding the new event to a database
  res.status(201).json(newEvent);
});

// Example route to update an event
app.put('/events/:id', (req, res) => {
  const eventId = req.params.id;
  const updatedEvent = req.body;
  // Here you can handle updating the event in a database
  res.json({ id: eventId, ...updatedEvent });
});

// Example route to delete an event
app.delete('/events/:id', (req, res) => {
  const eventId = req.params.id;
  // Here you can handle deleting the event from the database
  res.status(204).send();
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
