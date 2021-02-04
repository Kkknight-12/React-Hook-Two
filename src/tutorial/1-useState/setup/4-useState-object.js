import React, { useState } from 'react';

const UseStateObject = () => {

  const [person, setPerson ] = useState({
      name:'knight',
      age: 42,
      message: 'random'
    }
  )

  const changeMessage = () => {
    // object is destructured then it get
    setPerson( {...person, message: 'hello', name: 'luffy'})
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button 
      className="btn"
      onClick={changeMessage}
      >Change</button>
    </>
  );
};

export default UseStateObject;
