import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const FetchReturns = () => {

    const [ loading, setLoading ] = useState(false);
    const [ isError, setIsError ] = useState(false);
    const [ user, setUser ] = useState('knight');

    useEffect( () => {
        setLoading(true)

        setTimeout( () => {
            
            fetch(url) 
                .then( (resp) => {
                    if( resp.ok === true ){
                        return resp.json()
                    }
                    else{
                        setLoading(false)
                        setIsError(true)
                        throw new Error( resp.statusText )
                    }
                } )
                .then( (user) => {
                    const {login} = user;
                    setUser(login)
                    setLoading(false)
                } )
                .catch( (err) => console.log(err) )

        }, 1000);
        

    }, [] )

    if( loading ){
        return <h2>Loading.......</h2>
    }
    if( isError ){
        return <h2>Request can't be send to the server</h2>
    }

    return <h2>{ user }</h2>;
};

export default FetchReturns;
