import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [ value, setValue ] = useState(0);
  const [ title , setTitle ] = useState('knight')

  // dependencies
  useEffect( () => {
    console.log('wil run on initial render')
  }, [])


  useEffect( ()=> {
    console.log('will render on initial render and then when ever value')
    
  }, [value])

  useEffect( ()=> {
    console.log('will render on initial render and then when either value or title changes')

  }, [value, title])



  return (
  <>
    <h1>{title}</h1>
    <h2>{value}</h2>
    <button className="btn" 
    onClick={ ()=> { setValue( value + 1 ) }}>
      increase
    </button>
    <button className="btn" 
    onClick={ ()=> { setTitle('luffy') }}>
      change title
    </button>
  </>
  );
};

export default UseEffectBasics;
