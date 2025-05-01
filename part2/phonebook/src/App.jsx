import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [notification, setNotification] = useState(null);
  const [type, setType] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const deletePersonFromId = (id) => {
    const person = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .deletePerson(person.id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch(() => {
          alert(`${person.name} was already deleted from server`);
          setPersons(persons.filter((person) => person.id !== id));
        });
    }
  };

  const personsToShow = search
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      )
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} type={type} />
      <Filter search={search} setSearch={setSearch} />
      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
        setNotification={setNotification}
        setType={setType}
      />
      <h2>Numbers</h2>
      <Persons
        personsToShow={personsToShow}
        deletePerson={deletePersonFromId}
      />
    </div>
  );
};

export default App;
