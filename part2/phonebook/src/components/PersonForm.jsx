import personService from "../services/persons";

const PersonForm = ({
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  persons,
  setPersons,
  setNotification,
  setType
}) => {
  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    if (persons.some((person) => person.name === newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const currentPerson = persons.find((person) => person.name === newName);
        const changedContact = { ...currentPerson, number: newNumber };

        personService
          .update(currentPerson.id, changedContact)
          .then((returnedPerson) => {
            setPersons(persons.map((person) => (person.id !== currentPerson.id) ? person : returnedPerson))
            setNotification(`Updated ${returnedPerson.name}'s number`);
            setTimeout(() => {
              setNotification(null, null);
            }, 5000)
          })
          .catch((error) => {
            setNotification(
              `Information of ${currentPerson.name} has already been removed from server`);
            setType(error)
            setTimeout(() => {
              setNotification(null, null);
            }, 5000);
            setPersons(persons.filter((person) => person.id !== currentPerson.id));
          });
      }
      
      setNewName("");
      setNewNumber("");
      return;
    }

    personService.create(personObject).then((returnedPersons) => {
      setPersons(persons.concat(returnedPersons));
      setNotification(`Added ${returnedPersons.name}`, success)
      setTimeout(() => {
        setNotification(null, null);
      }, 5000)
      setNewName("");
      setNewNumber("");
    });
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
