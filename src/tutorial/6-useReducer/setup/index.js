import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import  data  from '../../../data';
import Reducer from './Reducer';
// const reducer = ( state, action ) => { 
//   if( action.type === 'ADD_ITEM' ){
//     // console.log(state, action)
//     // state -> {people: Array(0), isModalOpen: false, modalContent: ""} 
//     // action -> {type: "ADD_ITEM", payload: {…}}
//     // payload: {id: "1613365463466", name: "two"}
//     const newPeople = [ ...state.people, action.payload ];
//     return {
//       ...state, 
//       people: newPeople,
//       isModalOpen: true,
//       modalContent: 'item added',
//     };
//   }
//   if( action.type === 'NO_VALUE' ){
//     return { 
//       ...state , 
//       isModalOpen: true, 
//       modalContent: 'please enter value'
//     }
//   }
//   if( action.type === 'CLOSE_MODAL' ) {
//     return {
//       ...state, 
//       isModalOpen: false, 
//     }
//   }
//   if( action.type === 'REMOVE_ITEM' ) {
//     const newPeople = state.people.filter(
//       (person) => person.id !== action.payload
//     )
//     return {
//       ...state, 
//       people: newPeople
//     }
//   } 
//   throw new Error( 'no matching action type' );
// };

const defaultState = {
  people: [], 
  isModalOpen: false,
  modalContent: '',
};

const Index = () => {
  const [ name, setName ] = useState('');
  // const [ people, setPeople ] = useState(data);
  // const [ showModal, setShowModal ] = useState(false);
  const [ state, dispatch ] = useReducer( Reducer, defaultState );

  const handleSubmit = (e)=> {
    e.preventDefault();
    if( name ){
      const newItem = { 
        id: new Date().getTime().toString(), name 
      };
      dispatch( { type: 'ADD_ITEM', payload: newItem } );
      // setShowModal(true);
      // setPeople( 
      //   [ ...people, 
      //   { id: new Date().getTime().toString(),
      //     name: name } ])
      // setName('');
    } else {
      dispatch( { type: 'NO_VALUE' } );
      // setShowModal(true);
    }
  };

  const closeModal = () => {
    dispatch( { type: 'CLOSE_MODAL' } );
  };

  return (
    <>
      {/* { showModal && */}
      { state.isModalOpen &&
        <Modal 
        closeModal = { closeModal } 
        modalContent={ state.modalContent } 
        /> }
      <form 
        className="form"
        onSubmit={handleSubmit}>
          <div>
            <input 
            type="text"
            value={name}
            onChange={ (e) => setName( e.target.value ) }/>
          </div>
          <button
            type='submit'>
            Add
          </button>
        </form>
        { state.people.map( ( person) => (
          <div key={person.id}
            className = 'item'>
              <h4>{person.name}</h4>
              <button
                onClick = { () => dispatch(
                  { 
                    type:'REMOVE_ITEM',
                    payload: person.id 
                  }
                )}>
                Remove
              </button>
          </div>
        )) }
    </>
  );
};

export default Index;