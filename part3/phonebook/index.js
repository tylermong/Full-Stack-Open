const express = require("express");
const app = express();

app.use(express.json());

// people db
let persons = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

// add new people
app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name) {
    return response.status(400).json({ error: "name missing" });
  }

  if (!body.number) {
    return response.status(400).json({ error: "number missing" });
  }

  const id = Math.floor(Math.random() * 100000 + 1);
  const newPerson = {
    id: id,
    name: body.name,
    number: body.number,
  };

  persons = persons.concat(newPerson);

  response.json(persons);
});

// get all people
app.get("/api/persons", (request, response) => {
  response.json(persons);
});

// get person from id
app.get("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  const person = persons.find((person) => person.id === id);

  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

// delete person from id
app.delete("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  persons = persons.filter((person) => person.id !== id);

  response.status(204).end();
});

// get phonebook info
app.get("/info", (request, response) => {
  const currentTime = new Date();
  response.send(
    `<p>Phonebook has info for ${persons.length} people</p>
    <p>${currentTime}</p>`
  );
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
