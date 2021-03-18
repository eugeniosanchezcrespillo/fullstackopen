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
  {
    id: 3,
    name: 'Dan Abramov',
    number: '39-44-5323523',
  },
  {
    id: 4,
    name: 'Mary Poppendick',
    number: '12-43-234345',
  },
  {
    id: 5,
    name: 'peppa pig (delete)',
    number: '123456-789',
  },
];

app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>');
});

app.get('/api/persons', (request, response) => {
  response.json(persons);
});

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((p) => p.id === id);
  if (person) response.json(person);
  else response.status(404).end();
});

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((p) => p.id !== id);
  console.log(`Deleting ${id}`);
  response.status(204).end();
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
