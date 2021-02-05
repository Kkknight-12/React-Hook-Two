import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [ value, setValue ] = useState(0);

  useEffect( ()=> {
    // you can initialize is state inside useEffect
    // but u cant initialize useEffect inside if statement
    if( value >= 1 ){
      // check the tab to see changes
      document.title = `New Messages(${value})`
    }
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
