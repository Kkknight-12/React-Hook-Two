import React, { useState } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [ people, setPeople ] = useState(data);

  const removePerson = (id) => {
    setPeople( (people) => (
      people.filter( (person) => person.id !== id )
    ));
  }

  const SinglePerson = ( { id, name, removePerson } ) => {
    return (
      <div className="item">
        <h4>{name}</h4>
        <button onClick={ () => removePerson(id) }>Remove</button>
      </div>
    )
  }

  const List = ( { people, removePerson } ) => {
    return (
      <>
        {people.map( ( person ) => (
          <SinglePerson 
            key={person.id} 
            {...person}
            removePerson={removePerson}/>
        ))}
      </>
    )
  };

  return (
    <section>
      <h3>Prop Drilling</h3>
      <List people = {people} removePerson= {removePerson}/>
    </section>
  );
}

export default PropDrilling;