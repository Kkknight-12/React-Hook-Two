const Reducer = ( state, action ) => {
    if( action.type === 'ADD_ITEM' ){
        console.log(action.payload)
        // console.log(state, action)
        // state -> {people: Array(0), isModalOpen: false, modalContent: ""} 
        // action -> {type: "ADD_ITEM", payload: {…}}
        // payload: {id: "1613365463466", name: "two"}
        const newPeople = [ ...state.people, action.payload ];
        return {
        ...state, 
        people: newPeople,
        isModalOpen: true,
        modalContent: 'item added',
        };
    }
    if( action.type === 'NO_VALUE' ){
        return { 
        ...state , 
        isModalOpen: true, 
        modalContent: 'please enter value'
        }
    }
    if( action.type === 'CLOSE_MODAL' ) {
        return {
            ...state, 
            isModalOpen: false, 
        }
        }
    if( action.type === 'REMOVE_ITEM' ) {
        const newPeople = state.people.filter(
            (person) => person.id !== action.payload
        )
        return {
        ...state, 
        people: newPeople
        }
    } 
    throw new Error( 'no matching action type' );
}

export default Reducer;