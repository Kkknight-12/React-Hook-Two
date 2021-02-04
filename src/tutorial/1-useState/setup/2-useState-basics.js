import React, { useState } from 'react';

const UseStateBasics = () => {
const [text, setText] = useState('knight')

const handleClick = () => {
  if( text === 'knight' ){
    setText('luffu...')
  }else{
    setText('knight')
  }
}

  return (
    <>
    <h2>{text}</h2>
    <button 
    className="btn"
    onClick={ handleClick }
    >change text</button>
    </>
  )
  ;
};

export default UseStateBasics;
