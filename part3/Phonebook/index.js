const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
//:method :url :status :res[content-length] - :response-time ms
app.use(morgan('tiny'));
/* morgan.token('postinfo', (req, res) => {
  return 'POST' === req.method ? JSON.stringify(req.body) : '';
});

app.use(
  morgan(
    ':method :url :status :res[content-length] - :response-time ms :postinfo'
  )
); */

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
  morgan.token('type', function (req, res) {
    return req.headers['content-type'];
  });
  response.json(persons);
});

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((p) => p.id === id);
  if (person) response.json(person);
  else response.status(404).end();
});

const generateId = () => {
  //const maxId = persons.length > 0 ? Math.max(...persons.map((p) => p.id)) : 0;
  //return maxId + 1;
  const min = Math.ceil(7);
  const max = Math.floor(10000000000);
  //The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min) + min);
};

app.post('/api/persons', (request, response) => {
  const body = request.body;

  if (!body.name || !body.number)
    return response.status(400).json({ error: 'Name or Number missing' });

  const duplicate = persons.filter((p) => p.name === body.name);
  if (duplicate.length > 0)
    return response
      .status(409)
      .json({ error: `${body.name} is already in the Phonebook` });

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

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

app.use(unknownEndpoint);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
