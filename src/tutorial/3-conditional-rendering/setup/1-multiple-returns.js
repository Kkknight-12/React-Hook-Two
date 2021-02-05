import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {

  const [ loading, setLoading ] = useState(true);

  // will return Loading if loading is true
  // else will return Done
  if( loading ){
    return <h2>Loading.......</h2>
  }
  return <h2>Done</h2>;
};

export default MultipleReturns;
