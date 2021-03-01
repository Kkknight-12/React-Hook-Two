import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

// you can also pass the default value
const PersonContext = React.createContext();
// create context give access to two component - Provider, Consumer
// to Access you need to write PersonContext.Provider or PersonContext.Consumer
// provider works as distributer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    // <section>
    // provider have value prop in which we can pass whatever we want
      <PersonContext.Provider value={ {removePerson, nam:'aman', people} }>
        <h3>prop drilling</h3>
        {/* <List people={people}  /> */}
        <List />
      </PersonContext.Provider>

    // </section> 
  );
};

// const List = ({ people }) => {
  // now no need to insert it as prop
const List = () => {
  // extracting it as an object
  const mainData = useContext( PersonContext );
  // console.log(mainData)
  return (
    <>
      {/* {people.map((person) => { */}
      {mainData.people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  // destructring removePerson from the object
  const { removePerson } = useContext(PersonContext);

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;

// Note: we write PersonContext.Provider  in Root Component 
// as ContextAPI trigger List  function which trigger SinglePerson.