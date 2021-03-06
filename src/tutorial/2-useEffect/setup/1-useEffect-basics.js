import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [ value, setValue ] = useState(0);

  useEffect( ()=> {
    console.log( '1 st time will run on load then on every render')
  })
  return (
  <>
    <h1>{value}</h1>
    <button className="btn" 
    onClick={ ()=> { setValue( value + 1 ) }}>
      Click
    </button>
  </>
  );
};

export default UseEffectBasics;
