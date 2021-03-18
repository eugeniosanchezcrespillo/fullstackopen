const express = require('express');
const app = express();
app.use(express.json());

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

const generateId = () => {
  /* const maxId = persons.length > 0 ? Math.max(...persons.map((p) => p.id)) : 0;
  return maxId + 1; */
  const min = Math.ceil(7);
  const max = Math.floor(10000000000);
  //The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min) + min);
};

app.post('/api/persons', (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({ error: 'Name or Number missing' });
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number,
  };

  persons = persons.concat(person);
  response.json(person);
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
