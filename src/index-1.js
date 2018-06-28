import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

import App from './App';

let testNote = [
        {id: 1, noteContent: 'testNote 1 !'},
        {id: 2, noteContent: 'testNote 2 !'}
      ]

const store = createStore(rootReducer);

function rootReducer (state = testNote, action) {	
	if (action.type === 'ADD_NOTE') {

		console.log('action type ADD_NOTE --- ', action)
		return [...state, action.payload]

	}else if (action.type === 'ADD_CONTACT_Obj') {

		console.log('action type ADD_CONTACT_Obj --- ', action)
		return [...state, action.payload]

	}
	return state
}

store.subscribe(() => {
	console.log('Изминение стора => ', store.getState());
})

store.dispatch({type: 'ADD_NOTE', payload: 'Note #1 !!!'})
store.dispatch({type: 'ADD_NOTE', payload: 'Note #2 !!!'})

store.dispatch({type: 'ADD_CONTACT_Obj', payload: {firstName: 'Alex', secondName: 'Semak'} })

ReactDOM.render(<App />, document.getElementById('root'));

