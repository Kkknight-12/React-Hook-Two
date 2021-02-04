import React, { useState } from 'react';

const UseStateCounter = () => {
  const [ value, setValue ] = useState(0);

  const add = () => {
    let a = value + 1
    setValue(a) 
  }

  const sub = () => {
    let a = value - 1
    if( value === 0 ){
      return (setValue(0))
    }else{
      setValue(a) 
    }
  }

  const complex = () => {
    // delay the reponse by 800 milisec
    setTimeout( () => {
      // setValue have a option to set function
      // in which parameter indicates previous value
      setValue( (preState) => {
        return preState + 1
      })
    }, 800 );
  }
  return (
    <>
    {/* {console.log(value + 1 )} */}
      <h2>Counter</h2>
      <h2>{value}</h2>
      <button 
      className= "btn"
      onClick={ () => { add() } }
      >+</button> 
      <button className="btn"
      onClick={  sub }
      >-</button>
      {/* prevState counter */}
      <hr style={{marginTop:'20px'}}/>
      <h2 style={{marginTop:'10px'}}>
        prevState Counter</h2>
      <h2>{value}</h2>
      <button 
      className= "btn"
      onClick={ () => { complex() } }
      >+</button> 
    </>
  );
};

export default UseStateCounter;
