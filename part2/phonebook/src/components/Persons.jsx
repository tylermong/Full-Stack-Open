const Persons = ({ personsToShow, deletePerson }) => {
  return (
    <>
      {personsToShow.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
          <button onClick={() => deletePerson(person.id)}>delete</button>
        </div>
      ))}
    </>
  );
};

export default Persons;
