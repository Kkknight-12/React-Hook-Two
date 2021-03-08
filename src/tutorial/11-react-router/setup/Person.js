import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';

const Person = () => {
  const [ name, setName ] = useState('default name')
   const { id } = useParams(); // id will be string

  // code is for name, can ignore
  useEffect( () => {
    const newPerson = data.find( (person) =>
      person.id === parseInt(id)
    )
    // console.log(newPerson)
    setName(newPerson.name)
  },[])

   return (
    <div>
      <h1>{name}</h1>
      <h3>{id}</h3>
      <Link to='/people' className='btn'>Back To People</Link>
    </div>
  );
};

export default Person;
