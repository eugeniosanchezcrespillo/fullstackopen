const express = require('express');
const app = express();

let persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '039-44-5323523',
  },
];

app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>');
});

app.get('/api/persons', (request, response) => {
  response.json(persons);
});

app.get('/info', (request, response) => {
  const entries = persons.length;
  const dateinfo = new Date();
  const day = dateinfo.getUTCDate();
  response.send(`Phonebook has info for ${entries} people<br />
  ${dateinfo.toString()}`);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
